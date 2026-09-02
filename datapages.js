/* ==========================================================================
   behindrobotics.com — data page renderer
   Reads window.RH_DATA and renders: companies, company profiles, robots,
   suppliers, components. Every name is a link into the relevant profile.
   ========================================================================== */
(function () {
  var D = window.RH_DATA;
  if (!D) return;

  // -------- helpers --------------------------------------------------------
  function byId(list, id) { for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i]; return null; }
  function company(id) { return byId(D.companies, id); }
  function robot(id) { return byId(D.robots, id); }
  function esc(s) { return (s == null ? '' : String(s)); }
  function coLink(id, fallback) {
    var c = company(id);
    if (!c) return esc(fallback || id);
    return '<a class="link" href="company-profile.html?id=' + c.id + '">' + c.name + '</a>';
  }
  function pill(t) { return '<span class="pill">' + esc(t) + '</span>'; }
  function qs(name) { return new URLSearchParams(location.search).get(name); }

  // -------- filter state ---------------------------------------------------
  function makeFilter(container, data, fields, renderFn) {
    // builds simple select filters + search from given fields
    var state = {};
    var bar = container.querySelector('[data-filters]');
    if (bar) {
      fields.forEach(function (f) {
        var vals = [];
        data.forEach(function (r) { var v = r[f.key]; if (v && vals.indexOf(v) === -1) vals.push(v); });
        vals.sort();
        var sel = document.createElement('select');
        sel.className = 'select';
        sel.innerHTML = '<option value="">' + f.label + ': All</option>' +
          vals.map(function (v) { return '<option value="' + esc(v) + '">' + esc(v) + '</option>'; }).join('');
        sel.onchange = function () { state[f.key] = sel.value; apply(); };
        bar.appendChild(sel);
      });
      var search = document.createElement('input');
      search.className = 'searchbar';
      search.placeholder = 'Search…';
      search.oninput = function () { state.__q = search.value.toLowerCase(); apply(); };
      bar.appendChild(search);
    }
    // sortable headers: any <th data-sort="key"> becomes clickable
    var sortState = { key: null, dir: 1 };
    var ths = container.querySelectorAll('th[data-sort]');
    ths.forEach(function (th) {
      th.classList.add('th-sort');
      th.onclick = function () {
        var k = th.getAttribute('data-sort');
        if (sortState.key === k) sortState.dir *= -1; else { sortState.key = k; sortState.dir = 1; }
        ths.forEach(function (o) { o.removeAttribute('data-dir'); });
        th.setAttribute('data-dir', sortState.dir > 0 ? 'asc' : 'desc');
        apply();
      };
    });
    function apply() {
      var out = data.filter(function (r) {
        for (var k in state) {
          if (k === '__q') continue;
          if (state[k] && r[k] !== state[k]) return false;
        }
        if (state.__q) {
          var hay = JSON.stringify(r).toLowerCase();
          if (hay.indexOf(state.__q) === -1) return false;
        }
        return true;
      });
      if (sortState.key) {
        out = out.slice().sort(function (a, b) {
          var av = a[sortState.key], bv = b[sortState.key];
          // numeric-aware: pull first number if present (funding/valuation/year)
          var an = numify(av), bn = numify(bv);
          if (an != null && bn != null) return (an - bn) * sortState.dir;
          return String(av || '').localeCompare(String(bv || '')) * sortState.dir;
        });
      }
      renderFn(out);
    }
    function numify(v) {
      if (typeof v === 'number') return v;
      if (typeof v !== 'string') return null;
      var m = v.replace(/,/g, '').match(/([\d.]+)\s*([BMK]?)/i);
      if (!m) return null;
      var n = parseFloat(m[1]);
      var u = (m[2] || '').toUpperCase();
      if (u === 'B') n *= 1e9; else if (u === 'M') n *= 1e6; else if (u === 'K') n *= 1e3;
      return n;
    }
    apply();
  }

  // -------- COMPANIES LIST -------------------------------------------------
  function renderCompanies() {
    var mount = document.querySelector('[data-rh="companies"]');
    if (!mount) return;
    var body = mount.querySelector('[data-rows]');
    var vert = qs('vertical');
    var source = vert ? D.companies.filter(function (c) {
      // match the hub list (companies can belong to multiple hubs); fall back to vertical
      return (c.hubs && c.hubs.indexOf(vert) !== -1) || c.vertical === vert;
    }) : D.companies;
    if (vert) {
      var t = mount.querySelector('.phead__title');
      if (t) t.textContent = vert + ' companies';
      var s = mount.querySelector('.phead__sub');
      if (s) s.innerHTML = 'Companies tracked in the ' + vert + ' vertical. <a class="link" href="companies.html">See all companies →</a>';
    }
    makeFilter(mount, source,
      [{ key: 'country', label: 'Country' }, { key: 'type', label: 'Type' }, { key: 'sector', label: 'Sector' }],
      function (rows) {
        body.innerHTML = rows.map(function (c) {
          return '<tr>' +
            '<td class="name"><a class="link" href="company-profile.html?id=' + c.id + '">' + c.name + '</a></td>' +
            '<td class="flag">' + esc(c.flag) + ' ' + esc(c.country) + '</td>' +
            '<td>' + esc(c.founded) + '</td>' +
            '<td>' + esc(c.funding) + '</td>' +
            '<td>' + pill(c.sector) + '</td>' +
            '<td><a class="link" href="company-profile.html?id=' + c.id + '">Profile →</a></td>' +
            '</tr>';
        }).join('') || '<tr><td colspan="6" style="color:var(--ink-3)">No matches.</td></tr>';
        var n = mount.querySelector('[data-count]'); if (n) n.textContent = rows.length;
      });
  }

  // -------- COMPANY PROFILE ------------------------------------------------
  function renderProfile() {
    var mount = document.querySelector('[data-rh="company-profile"]');
    if (!mount) return;
    var c = company(qs('id') || 'figure-ai');
    if (!c) { mount.innerHTML = '<div class="wrap section">Company not found. <a class="link" href="companies.html">All companies →</a></div>'; return; }
    document.title = c.name + ' — behindrobotics.com';

    // robots made by this company
    var madeRobots = D.robots.filter(function (r) { return r.maker === c.id; });
    // components made by this company
    var madeComponents = D.components.filter(function (k) { return k.maker === c.id; });
    // who they supply to
    var supplies = (c.supplies_to || []).map(function (id) { return coLink(id); }).filter(Boolean);
    // who supplies them
    var suppliedBy = D.companies.filter(function (s) { return (s.supplies_to || []).indexOf(c.id) !== -1; });

    mount.innerHTML =
      '<header class="phead"><div class="phead__in">' +
        '<div class="phead__crumb"><a href="index.html">Main</a> / <a href="companies.html">Companies</a> / ' + c.name + '</div>' +
        '<h1 class="phead__title">' + c.flag + ' ' + c.name + '</h1>' +
        '<p class="phead__sub">' + esc(c.sector) + ' · ' + esc(c.hq) + ' · Founded ' + esc(c.founded) + '</p>' +
      '</div></header>' +
      '<section class="section wrap"><div class="rp" style="margin-bottom:22px">' +
        '<div class="rp__body">' +
          (c.status ? '<span class="rp__status">' + esc(c.status) + (c.ticker ? ' · ' + esc(c.ticker) : '') + '</span>' : '') +
          '<p class="rp__summary">' + esc(c.summary) + '</p>' +
          (c.notable ? '<div style="background:var(--blue-tint);border-left:3px solid var(--blue);padding:12px 14px;border-radius:0 8px 8px 0;font-size:14px;margin-top:14px">' + esc(c.notable) + '</div>' : '') +
        '</div>' +
        '<div class="rp__specs">' +
          [['Country', c.flag + ' ' + c.country], ['Founded', c.founded], ['Type', c.type],
           ['Funding', c.funding], ['Valuation', c.valuation], ['Employees', c.employees],
           ['Sector', c.sector], ['HQ', c.hq]]
            .filter(function (s) { return s[1] && String(s[1]).trim() !== '' && s[1] !== '—' && s[1] !== 'Undisclosed'; })
            .map(function (s) { return '<div class="rp__spec"><div class="k">' + s[0] + '</div><div class="v" style="font-size:15px">' + esc(String(s[1])) + '</div></div>'; })
            .join('') +
        '</div>' +
        // people + supply chain as readable sections (not grid — text is long)
        (((c.founders && c.founders !== '—') || (c.ceo && c.ceo !== '—')) ?
          '<div class="rp__section"><h3>Leadership</h3><div class="rp__use">' +
          ((c.founders && c.founders !== '—') ? '<b>Founders:</b> ' + esc(c.founders) + '<br>' : '') +
          ((c.ceo && c.ceo !== '—') ? '<b>CEO:</b> ' + esc(c.ceo) : '') + '</div></div>' : '') +
        ((supplies.length || suppliedBy.length) ?
          '<div class="rp__section"' + (c.website ? '' : ' style="border-bottom:0"') + '><h3>Supply chain</h3><div class="rp__use">' +
          (supplies.length ? '<b>Supplies:</b> ' + supplies.join(', ') + '<br>' : '') +
          (suppliedBy.length ? '<b>Key suppliers:</b> ' + suppliedBy.map(function (s) { return coLink(s.id); }).join(', ') : '') + '</div></div>' : '') +
        (c.website ? '<div class="rp__section" style="border-bottom:0"><a class="btn btn--blue" href="' + c.website + '" target="_blank" rel="noopener" style="text-align:center">Visit website →</a></div>' : '') +
      '</div>' +
      '<div>' +
          (madeRobots.length ? '<div class="card" style="padding:26px;margin-bottom:18px">' +
            '<h2 style="font-size:18px;margin-bottom:14px">Robots &amp; products</h2>' +
            '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px">' +
            madeRobots.map(function (r) {
              return '<a class="card" href="robot-profile.html?id=' + r.id + '" style="padding:14px;display:block">' +
                '<div style="font-weight:600;margin-bottom:4px;font-family:Space Grotesk">' + r.name + '</div>' +
                '<div class="mono" style="font-size:11px;color:var(--ink-3);margin-bottom:6px">' + esc(r.type) + ' · ' + esc(r.year) + '</div>' +
                '<div style="font-size:12.5px;color:var(--ink-2)">' + esc(r.price) + '</div></a>';
            }).join('') + '</div></div>' : '') +
          (madeComponents.length ? '<div class="card" style="padding:26px;margin-bottom:18px">' +
            '<h2 style="font-size:18px;margin-bottom:14px">Components supplied</h2>' +
            '<div style="display:grid;gap:10px">' +
            madeComponents.map(function (k) {
              return '<a class="card" href="component-profile.html?id=' + k.id + '" style="padding:12px;display:block">' +
                '<div style="font-weight:600">' + k.name + '</div>' +
                '<div class="mono" style="font-size:11px;color:var(--ink-3)">' + esc(k.category) + ' · ' + esc(k.spec) + '</div></a>';
            }).join('') + '</div></div>' : '') +
      '</div>' +
      '</section>';
    return;
  }

  // -------- ROBOTS ---------------------------------------------------------
  function renderRobots() {
    var mount = document.querySelector('[data-rh="robots"]');
    if (!mount) return;
    var body = mount.querySelector('[data-rows]');
    var vert = qs('vertical');
    var source = vert ? D.robots.filter(function (r) { return r.vertical === vert; }) : D.robots;
    if (vert) {
      var t = mount.querySelector('.phead__title');
      if (t) t.textContent = vert + ' robots';
      var s = mount.querySelector('.phead__sub');
      if (s) s.innerHTML = 'Platforms tracked in the ' + vert + ' vertical. <a class="link" href="robots.html">See all robots →</a>';
    }
    makeFilter(mount, source,
      [{ key: 'type', label: 'Type' }, { key: 'country', label: 'Country' }, { key: 'status', label: 'Status' }],
      function (rows) {
        body.innerHTML = rows.map(function (r) {
          return '<tr id="' + r.id + '">' +
            '<td class="name"><a class="link" href="robot-profile.html?id=' + r.id + '">' + r.name + '</a></td>' +
            '<td>' + coLink(r.maker) + '</td>' +
            '<td>' + pill(r.type) + '</td>' +
            '<td>' + esc(r.price) + '</td>' +
            '<td class="flag">' + esc(r.flag) + '</td>' +
            '<td>' + esc(r.status) + '</td>' +
            '</tr>';
        }).join('') || '<tr><td colspan="6" style="color:var(--ink-3)">No matches.</td></tr>';
        var n = mount.querySelector('[data-count]'); if (n) n.textContent = rows.length;
      });
  }

  // -------- SUPPLIERS ------------------------------------------------------
  function renderSuppliers() {
    var mount = document.querySelector('[data-rh="suppliers"]');
    if (!mount) return;
    var sup = D.companies.filter(function (c) { return c.type === 'supplier' || c.type === 'both'; });
    var body = mount.querySelector('[data-rows]');
    makeFilter(mount, sup,
      [{ key: 'country', label: 'Country' }, { key: 'sector', label: 'Category' }],
      function (rows) {
        body.innerHTML = rows.map(function (c) {
          var to = (c.supplies_to || []).map(function (id) { var t = company(id); return t ? t.name : id; }).join(', ');
          return '<tr>' +
            '<td class="name"><a class="link" href="company-profile.html?id=' + c.id + '">' + c.name + '</a></td>' +
            '<td>' + pill(c.sector) + '</td>' +
            '<td class="flag">' + esc(c.flag) + ' ' + esc(c.country) + '</td>' +
            '<td style="color:var(--ink-2);font-size:13px">' + esc(c.summary).slice(0, 110) + '…</td>' +
            '<td style="font-size:12.5px">' + (to || '—') + '</td>' +
            '</tr>';
        }).join('') || '<tr><td colspan="5" style="color:var(--ink-3)">No matches.</td></tr>';
        var n = mount.querySelector('[data-count]'); if (n) n.textContent = rows.length;
      });
  }

  // -------- COMPONENTS -----------------------------------------------------
  function renderComponents() {
    var mount = document.querySelector('[data-rh="components"]');
    if (!mount) return;
    var body = mount.querySelector('[data-rows]');
    makeFilter(mount, D.components,
      [{ key: 'category', label: 'Category' }, { key: 'country', label: 'Country' }],
      function (rows) {
        body.innerHTML = rows.map(function (k) {
          var usedIn = (k.used_in || []).map(function (rid) { var r = robot(rid); return r ? r.name : rid; }).join(', ');
          var thumb = k.img ? '<img src="' + esc(k.img) + '" alt="" loading="lazy" style="width:44px;height:44px;object-fit:cover;border-radius:6px;border:1px solid var(--line);vertical-align:middle;margin-right:8px" onerror="this.style.display=\'none\'">' : '';
          return '<tr>' +
            '<td class="name">' + thumb + '<a class="link" href="component-profile.html?id=' + k.id + '">' + k.name + '</a></td>' +
            '<td>' + coLink(k.maker) + '</td>' +
            '<td>' + pill(k.category) + '</td>' +
            '<td class="flag">' + esc(k.flag) + ' ' + esc(k.country) + '</td>' +
            '<td style="font-size:12.5px;color:var(--ink-2)">' + esc(k.spec) + '</td>' +
            '<td style="font-size:12.5px">' + (usedIn || '—') + '</td>' +
            '</tr>';
        }).join('') || '<tr><td colspan="6" style="color:var(--ink-3)">No matches.</td></tr>';
        var n = mount.querySelector('[data-count]'); if (n) n.textContent = rows.length;
      });
  }

  // -------- SUPPLY CHAIN CONTEXT BLOCK ------------------------------------
  function renderSupplyContext() {
    var mount = document.querySelector('[data-rh="supply-context"]');
    if (!mount || !D.supplyChain) return;
    mount.innerHTML = '<div class="card" style="padding:24px">' +
      '<h2 style="font-size:18px;margin-bottom:14px">' + D.supplyChain.headline + '</h2>' +
      D.supplyChain.points.map(function (p) {
        return '<div style="margin-bottom:14px"><div style="font-weight:600;font-size:14px;margin-bottom:4px">' + p.title + '</div>' +
          '<div style="font-size:13.5px;color:var(--ink-2);line-height:1.55">' + p.body + '</div></div>';
      }).join('') + '</div>';
  }

  // -------- homepage counters ---------------------------------------------
  function renderCounts() {
    var countries = {}; D.companies.forEach(function (c) { if (c.country) countries[c.country] = 1; });
    var map = { companies: D.companies.length, robots: D.robots.length, components: D.components.length,
                suppliers: D.companies.filter(function (c) { return c.type === 'supplier' || c.type === 'both'; }).length,
                countries: Object.keys(countries).length };
    document.querySelectorAll('[data-rh-count]').forEach(function (el) {
      var k = el.getAttribute('data-rh-count');
      if (map[k] != null) el.textContent = map[k];
    });
  }

  // -------- homepage sector strips (live databank per industry) -----------
  // Maps a homepage sector to the dataset verticals it should surface.
  var SECTOR_MAP = {
    Civil:      ['Civil'],
    Agriculture:['Agriculture'],
    Defense:    ['Defense','Drones']
  };
  function renderSectorStrips() {
    document.querySelectorAll('[data-rh-sector]').forEach(function (el) {
      var sector = el.getAttribute('data-rh-sector');
      var cos = D.companies.filter(function (c) {
        return (c.hubs && c.hubs.indexOf(sector) !== -1) || c.vertical === sector;
      });
      if (!cos.length) { el.innerHTML = ''; return; }
      var rows = cos.slice(0, 4).map(function (c, i) {
        var n = ('0' + (i + 1)).slice(-2);
        return '<a class="sector-co" href="company-profile.html?id=' + c.id + '">' +
          '<span class="n">' + n + '</span>' + c.name.replace(/\s*\(.*\)/, '') +
          '<span class="sector-co__c">' + c.flag + '</span></a>';
      }).join('');
      el.innerHTML = '<h6>Companies tracked · ' + cos.length + '</h6>' + rows +
        '<a class="more" href="companies.html?vertical=' + sector + '">Browse all →</a>';
    });
  }


  // -------- INVESTMENT ----------------------------------------------------
  function renderInvestment() {
    var mount = document.querySelector('[data-rh="investment"]');
    if (!mount) return;
    // companies with a funding or valuation figure
    var funded = D.companies.filter(function (c) {
      return (c.funding && c.funding !== 'Public' && c.funding !== 'Private' && c.funding !== '—') ||
             (c.valuation && c.valuation !== 'Undisclosed' && c.valuation !== 'Public');
    });
    var body = mount.querySelector('[data-rows]');
    makeFilter(mount, funded,
      [{ key: 'vertical', label: 'Segment' }, { key: 'country', label: 'Country' }, { key: 'status', label: 'Status' }],
      function (rows) {
        body.innerHTML = rows.map(function (c) {
          return '<tr>' +
            '<td class="name"><a class="link" href="company-profile.html?id=' + c.id + '">' + c.name + '</a></td>' +
            '<td>' + pill(c.vertical || c.sector) + '</td>' +
            '<td>' + esc(c.funding) + '</td>' +
            '<td>' + esc(c.valuation) + '</td>' +
            '<td class="flag">' + esc(c.flag) + ' ' + esc(c.country) + '</td>' +
            '<td><a class="link" href="company-profile.html?id=' + c.id + '">Profile →</a></td>' +
            '</tr>';
        }).join('') || '<tr><td colspan="6" style="color:var(--ink-3)">No matches.</td></tr>';
      });
  }

  // -------- DRONE MAKERS & ARCHIVE ----------------------------------------
  function renderDroneMakers() {
    var mount = document.querySelector('[data-rh="drone-makers"]');
    if (!mount) return;
    var makers = D.companies.filter(function (c) { return c.vertical === 'Drones'; });
    var body = mount.querySelector('[data-rows]');
    makeFilter(mount, makers,
      [{ key: 'country', label: 'Country' }, { key: 'sector', label: 'Focus' }],
      function (rows) {
        body.innerHTML = rows.map(function (c) {
          return '<tr>' +
            '<td class="name"><a class="link" href="company-profile.html?id=' + c.id + '">' + c.name + '</a></td>' +
            '<td class="flag">' + esc(c.flag) + ' ' + esc(c.country) + '</td>' +
            '<td>' + esc(c.founded) + '</td>' +
            '<td>' + pill(c.sector) + '</td>' +
            '<td><a class="link" href="company-profile.html?id=' + c.id + '">Profile →</a></td>' +
            '</tr>';
        }).join('') || '<tr><td colspan="5" style="color:var(--ink-3)">No matches.</td></tr>';
      });
  }
  function renderDroneArchive() {
    var mount = document.querySelector('[data-rh="drone-archive"]');
    if (!mount) return;
    var drones = D.robots.filter(function (r) { return r.vertical === 'Drones'; });
    var body = mount.querySelector('[data-rows]');
    makeFilter(mount, drones,
      [{ key: 'type', label: 'Type' }, { key: 'country', label: 'Origin' }, { key: 'status', label: 'Status' }],
      function (rows) {
        body.innerHTML = rows.map(function (r) {
          return '<tr>' +
            '<td class="name">' + r.name + '</td>' +
            '<td>' + coLink(r.maker) + '</td>' +
            '<td>' + pill(r.type) + '</td>' +
            '<td class="flag">' + esc(r.flag) + ' ' + esc(r.country) + '</td>' +
            '<td>' + esc(r.year) + '</td>' +
            '<td>' + esc(r.status) + '</td>' +
            '</tr>';
        }).join('') || '<tr><td colspan="6" style="color:var(--ink-3)">No matches.</td></tr>';
      });
  }

  // -------- MARKETS -------------------------------------------------------
  function renderMarkets() {
    var mount = document.querySelector('[data-rh="markets"]');
    if (!mount) return;
    // public companies with a ticker, plus the ticker-band names
    var pub = D.companies.filter(function (c) { return c.ticker && c.ticker !== '' && !/pending/i.test(c.ticker); });
    // de-dup by ticker
    var seen = {}, rows = [];
    pub.forEach(function (c) { var t = c.ticker.split(' ')[0]; if (!seen[t]) { seen[t] = 1; rows.push(c); } });
    rows.sort(function (a, b) { return a.name.localeCompare(b.name); });
    mount.innerHTML =
      '<div class="filters" data-filters></div>' +
      '<table class="tbl"><thead><tr>' +
      '<th data-sort="name">Company</th><th>Ticker</th><th data-sort="vertical">Segment</th>' +
      '<th data-sort="country">Country</th><th>Price</th><th>What they do</th></tr></thead>' +
      '<tbody>' + rows.map(function (c) {
        var t = c.ticker.split(' ')[0];
        var usListed = /^[A-Z]{1,5}$/.test(t); // crude: plain US symbol
        return '<tr>' +
          '<td class="name"><a class="link" href="company-profile.html?id=' + c.id + '">' + c.name + '</a></td>' +
          '<td class="mono">' + c.ticker + '</td>' +
          '<td>' + pill(c.vertical || c.sector) + '</td>' +
          '<td class="flag">' + esc(c.flag) + ' ' + esc(c.country) + '</td>' +
          '<td>' + (usListed ? '<span data-stock="' + t + '"></span>' : '<span class="mono" style="color:var(--ink-3)">intl</span>') + '</td>' +
          '<td style="font-size:12.5px;color:var(--ink-2)">' + esc(c.summary).slice(0, 90) + '…</td>' +
          '</tr>';
      }).join('') + '</tbody></table>';
    // trigger finnhub widgets for the newly-inserted data-stock spans
    if (window.RH_FINNHUB_REFRESH) window.RH_FINNHUB_REFRESH();
  }

  // -------- HUB PREVIEW (inline filtered records on industry hubs) --------
  function renderHubPreview() {
    document.querySelectorAll('[data-rh-hubpreview]').forEach(function (el) {
      var vert = el.getAttribute('data-rh-hubpreview');
      var cos = D.companies.filter(function (c) { return (c.hubs && c.hubs.indexOf(vert) !== -1) || c.vertical === vert; }).slice(0, 5);
      var bots = D.robots.filter(function (r) { return r.vertical === vert; }).slice(0, 5);
      if (!cos.length && !bots.length) { el.innerHTML = ''; return; }
      function colist(items, kind) {
        if (!items.length) return '';
        return '<div class="hub-preview__col"><h6>' + kind + ' · ' + items.length + ' tracked</h6>' +
          items.map(function (x) {
            var href = kind === 'Companies'
              ? 'company-profile.html?id=' + x.id
              : 'robots.html?vertical=' + vert + '#' + x.id;
            return '<a class="hub-preview__row" href="' + href + '">' + x.flag + ' ' +
              x.name.replace(/\s*\(.*\)/, '') + '</a>';
          }).join('') +
          '<a class="hub-preview__more" href="' +
            (kind === 'Companies' ? 'companies.html?vertical=' + vert : 'robots.html?vertical=' + vert) +
            '">See all ' + kind.toLowerCase() + ' →</a></div>';
      }
      el.innerHTML = '<div class="hub-preview__grid">' + colist(cos, 'Companies') + colist(bots, 'Robots') + '</div>';
    });
  }

  // -------- LATEST DATA UPDATES (live from newest records) ----------------
  function renderLatestUpdates() {
    document.querySelectorAll('[data-rh-updates]').forEach(function (el) {
      var scope = el.getAttribute('data-rh-updates'); // 'all' or a hub name
      var nCo = D.companies.length, nRo = D.robots.length;
      var items = [];
      // recency proxy: position from the END of each array, normalised 0..1 (0 = newest).
      D.companies.forEach(function (c, i) {
        if (scope !== 'all' && !(c.hubs && c.hubs.indexOf(scope) !== -1)) return;
        items.push({ recency: (nCo - 1 - i) / nCo, kind: 'company',
          tag: (c.vertical || 'Company').toUpperCase(),
          title: c.name.replace(/\s*\(.*\)/, '') + ' — profile added',
          href: 'company-profile.html?id=' + c.id });
      });
      D.robots.forEach(function (r, i) {
        if (scope !== 'all' && r.vertical !== scope) return;
        items.push({ recency: (nRo - 1 - i) / nRo, kind: 'robot', tag: 'ROBOT',
          title: r.name + ' added', href: 'robots.html' });
      });
      // smallest recency = newest
      items.sort(function (a, b) { return a.recency - b.recency; });
      var top = items.slice(0, 5);
      if (!top.length) { el.innerHTML = '<div class="railitem" style="color:var(--ink-3)">No records yet.</div>'; return; }
      el.innerHTML = top.map(function (it, i) {
        var n = ('0' + (i + 1)).slice(-2);
        return '<a class="railitem" href="' + it.href + '">' +
          '<div class="railitem__meta"><span class="mono" style="color:var(--blue)">' + n + '</span>' +
          '<span class="upd-tag">' + esc(it.tag) + '</span></div>' +
          '<div class="railitem__t">' + esc(it.title) + '</div></a>';
      }).join('');
    });
  }

  // -------- ROBOT PROFILE (adaptive spec grid) ----------------------------
  function renderRobotProfile() {
    var mount = document.querySelector('[data-rh="robot-profile"]');
    if (!mount) return;
    var r = D.robots.find(function (x) { return x.id === qs('id'); }) || D.robots[0];
    if (!r) { mount.innerHTML = '<div style="padding:60px;text-align:center">Robot not found.</div>'; return; }
    var maker = company(r.maker);
    // adaptive specs: only cells that have real data
    var specs = [
      ['Price', r.price], ['Height', r.height], ['Payload', r.payload],
      ['Degrees of freedom', r.dof], ['Battery', r.battery], ['Type', r.type],
      ['Origin', (r.flag || '') + ' ' + (r.country || '')], ['Year', r.year]
    ].filter(function (s) { return s[1] && s[1] !== '—' && s[1] !== 'Undisclosed' && String(s[1]).trim() !== ''; });
    var specCells = specs.map(function (s) {
      return '<div class="rp__spec"><div class="k">' + s[0] + '</div><div class="v">' + esc(String(s[1])) + '</div></div>';
    }).join('');

    var sections = '';
    if (r.compute) sections += '<div class="rp__section"><h3>Onboard compute</h3><div class="rp__use">' + esc(r.compute) + '</div></div>';
    if (r.useCases) {
      var chips = r.useCases.split(',').map(function (u) { return '<span class="rp__chip">' + esc(u.trim()) + '</span>'; }).join('');
      sections += '<div class="rp__section"><h3>Key use cases</h3><div class="rp__chips">' + chips + '</div></div>';
    }
    if (maker) {
      sections += '<div class="rp__section" style="border-bottom:0"><h3>Maker</h3><div class="rp__use">' +
        esc(maker.name) + (maker.summary ? ' — ' + esc(maker.summary) : '') +
        ' <a href="company-profile.html?id=' + maker.id + '" style="color:var(--blue);text-decoration:none">View company profile →</a></div></div>';
    }

    mount.innerHTML =
      '<header class="phead"><div class="phead__in">' +
        '<div class="phead__crumb"><a href="index.html">Main</a> / <a href="robots.html">Robots</a> / ' + esc(r.name) + '</div>' +
        '<h1 class="phead__title">' + esc(r.name) + '</h1>' +
        '<p class="phead__sub">' + esc(r.type || '') + (maker ? ' · ' + esc(maker.name) : '') + ' · ' + esc(r.country || '') + '</p>' +
      '</div></header>' +
      '<section class="section wrap"><div class="rp">' +
        '<div class="rp__body" style="padding:26px 28px">' +
          (r.status ? '<span class="rp__status">' + esc(r.status) + '</span>' : '') +
          '<p class="rp__summary">' + esc(r.summary || '') + '</p>' +
        '</div>' +
        '<div class="rp__specs">' + specCells + '</div>' +
        sections +
      '</div></section>';
  }

  // -------- COMPONENT PROFILE ---------------------------------------------
  function renderComponentProfile() {
    var mount = document.querySelector('[data-rh="component-profile"]');
    if (!mount) return;
    var k = D.components.find(function (x) { return x.id === qs('id'); }) || D.components[0];
    if (!k) { mount.innerHTML = '<div style="padding:60px;text-align:center">Component not found.</div>'; return; }
    var maker = company(k.maker);
    var specs = [
      ['Category', k.category], ['Origin', (k.flag || '') + ' ' + (k.country || '')], ['Spec', k.spec]
    ].filter(function (s) { return s[1] && String(s[1]).trim() !== '' && s[1] !== '—'; });
    var specCells = specs.map(function (s) {
      return '<div class="rp__spec"><div class="k">' + s[0] + '</div><div class="v" style="font-size:15px">' + esc(String(s[1])) + '</div></div>';
    }).join('');
    // robots that use this component
    var usedIn = (k.used_in || []).map(function (rid) {
      var r = D.robots.find(function (x) { return x.id === rid; });
      return r ? '<a class="rp__chip" href="robot-profile.html?id=' + r.id + '" style="text-decoration:none">' + esc(r.name) + '</a>' : '';
    }).filter(Boolean).join('');

    var sections = '';
    if (k.img) sections += '<div class="rp__section"><img src="' + esc(k.img) + '" alt="' + esc(k.name) + '" loading="lazy" style="max-width:100%;border-radius:12px;border:1px solid var(--line)" onerror="this.style.display=\'none\'"></div>';
    if (usedIn) sections += '<div class="rp__section"><h3>Used in</h3><div class="rp__chips">' + usedIn + '</div></div>';
    if (maker) sections += '<div class="rp__section" style="border-bottom:0"><h3>Maker</h3><div class="rp__use">' +
      esc(maker.name) + ' <a href="company-profile.html?id=' + maker.id + '" style="color:var(--blue);text-decoration:none">View company profile →</a></div></div>';

    mount.innerHTML =
      '<header class="phead"><div class="phead__in">' +
        '<div class="phead__crumb"><a href="index.html">Main</a> / <a href="components.html">Components</a> / ' + esc(k.name) + '</div>' +
        '<h1 class="phead__title">' + esc(k.name) + '</h1>' +
        '<p class="phead__sub">' + esc(k.category || '') + (maker ? ' · ' + esc(maker.name) : '') + '</p>' +
      '</div></header>' +
      '<section class="section wrap"><div class="rp">' +
        (k.summary ? '<div class="rp__body" style="padding:26px 28px"><p class="rp__summary">' + esc(k.summary) + '</p></div>' : '') +
        '<div class="rp__specs">' + specCells + '</div>' + sections +
      '</div></section>';
  }

  // -------- INDUSTRY LANDING: latest entries per hub card ------------------
  function renderHubLatest() {
    document.querySelectorAll('[data-rh-hublatest]').forEach(function (el) {
      var hub = el.getAttribute('data-rh-hublatest');
      var page = hub === 'Agriculture' ? 'industry-agriculture.html'
               : hub === 'Defense' ? 'industry-defense.html' : 'industry-civil.html';
      var nCo = D.companies.length, nRo = D.robots.length;
      var items = [];
      D.companies.forEach(function (c, i) {
        if (!(c.hubs && c.hubs.indexOf(hub) !== -1)) return;
        items.push({ recency: (nCo - 1 - i) / nCo, title: c.name.replace(/\s*\(.*\)/, '') });
      });
      D.robots.forEach(function (r, i) {
        if (r.vertical !== hub && !(hub === 'Civil' && r.vertical === 'Humanoid')) return;
        items.push({ recency: (nRo - 1 - i) / nRo, title: r.name });
      });
      items.sort(function (a, b) { return a.recency - b.recency; });
      var top = items.slice(0, 5);
      if (!top.length) { el.innerHTML = '<a href="' + page + '"><span class="n">01</span>See the hub →</a>'; return; }
      el.innerHTML = top.map(function (it, i) {
        var n = ('0' + (i + 1)).slice(-2);
        return '<a href="' + page + '"><span class="n">' + n + '</span>' + esc(it.title) + '</a>';
      }).join('');
    });
  }

  // -------- REGULATION table (data-driven) --------------------------------
  function renderRegulation() {
    var mount = document.querySelector('[data-rh-regulation]');
    if (!mount || !D.regulations) return;
    mount.innerHTML = D.regulations.map(function (r) {
      var pill = r.status === 'In force' ? 'In force' : r.status;
      var doc = r.source
        ? '<a class="link" href="' + r.source + '" target="_blank" rel="noopener">Source doc ↗</a>'
        : '<span class="link">🔒 Source doc</span>';
      return '<tr>' +
        '<td class="flag">' + r.flag + ' ' + esc(r.region) + '</td>' +
        '<td class="name"><strong>' + esc(r.topic) + '</strong>' +
        '<div style="font-size:12.5px;color:var(--ink-2);font-weight:400;margin-top:4px;max-width:70ch">' + esc(r.summary) + '</div></td>' +
        '<td><span class="pill">' + esc(pill) + '</span></td>' +
        '<td>' + doc + '</td>' +
      '</tr>';
    }).join('');
  }

  // -------- INVESTMENT: real aggregate funding (largest round per company) --
  function renderInvestTotal() {
    var el = document.querySelector('[data-rh-invest]');
    if (!el) return;
    var total = 0;
    D.companies.forEach(function (c) {
      var f = c.funding || '';
      var best = 0;
      var bM = f.match(/\$\s*([\d.]+)\s*B/gi) || [];
      var mM = f.match(/\$\s*([\d,]+)\s*M/gi) || [];
      bM.forEach(function (s) { var v = parseFloat(s.replace(/[^\d.]/g, '')) * 1000; if (v > best) best = v; });
      mM.forEach(function (s) { var v = parseFloat(s.replace(/[^\d.]/g, '')); if (v > best) best = v; });
      total += best;
    });
    if (total > 0) {
      var disp = total >= 1000 ? '$' + (total / 1000).toFixed(1) + 'B+' : '$' + Math.round(total) + 'M+';
      el.textContent = disp + ' tracked →';
    }
  }

  // -------- EVENTS: homepage calendar (upcoming, auto-shuffled) -----------
  function fmtRange(s, e) {
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var sd = new Date(s + 'T00:00:00'), ed = new Date((e || s) + 'T00:00:00');
    if (sd.getMonth() === ed.getMonth()) return months[sd.getMonth()].toUpperCase() + ' ' + sd.getDate() + '–' + ed.getDate();
    return months[sd.getMonth()].toUpperCase() + ' ' + sd.getDate() + '–' + months[ed.getMonth()].toUpperCase() + ' ' + ed.getDate();
  }
  function renderHomeEvents() {
    var mount = document.querySelector('[data-rh-events]');
    if (!mount || !D.events) return;
    var now = new Date();
    var upcoming = D.events.filter(function (e) { return new Date((e.end || e.start) + 'T23:59:59') >= now; })
      .sort(function (a, b) { return new Date(a.start) - new Date(b.start); });
    var show = upcoming.slice(0, 3);
    var ongoing = D.events.filter(function (e) { return new Date(e.start) <= now && new Date((e.end || e.start) + 'T23:59:59') >= now; });
    mount.innerHTML = show.map(function (e) {
      var live = ongoing.indexOf(e) !== -1;
      return '<a class="railitem" href="' + e.url + '" target="_blank" rel="noopener">' +
        '<div class="railitem__meta"><span>' + esc(e.cat) + (live ? ' · Now' : '') + '</span><span>' + fmtRange(e.start, e.end) + '</span></div>' +
        '<div class="railitem__t">' + esc(e.name) + ' · ' + esc(e.city) + '</div></a>';
    }).join('');
  }

  function run() {
    renderCompanies(); renderProfile(); renderRobots();
    renderSuppliers(); renderComponents(); renderSupplyContext(); renderCounts();
    renderHomeEvents();
    renderInvestTotal();
    renderRegulation();
    renderHubLatest();
    renderRobotProfile(); renderComponentProfile();
    renderLatestUpdates();
    renderSectorStrips(); renderMarkets(); renderDroneMakers(); renderDroneArchive(); renderInvestment();
    renderHubPreview();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
