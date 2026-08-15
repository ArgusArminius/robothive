/* ==========================================================================
   Robot Hive — data page renderer
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
    makeFilter(mount, D.companies,
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
    document.title = c.name + ' — Robot Hive';

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
      '<section class="section wrap"><div style="display:grid;grid-template-columns:1fr 320px;gap:22px;align-items:start" class="profile-grid">' +
        '<div>' +
          '<div class="card" style="padding:26px;margin-bottom:18px">' +
            '<h2 style="font-size:18px;margin-bottom:10px">Overview</h2>' +
            '<p style="color:var(--ink-2);margin-bottom:14px">' + esc(c.summary) + '</p>' +
            (c.notable ? '<div style="background:var(--blue-tint);border-left:3px solid var(--blue);padding:12px 14px;border-radius:0 8px 8px 0;font-size:14px">' + esc(c.notable) + '</div>' : '') +
          '</div>' +
          (madeRobots.length ? '<div class="card" style="padding:26px;margin-bottom:18px">' +
            '<h2 style="font-size:18px;margin-bottom:14px">Robots &amp; products</h2>' +
            '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px">' +
            madeRobots.map(function (r) {
              return '<a class="card" href="robots.html#' + r.id + '" style="padding:14px;display:block">' +
                '<div style="font-weight:600;margin-bottom:4px;font-family:Space Grotesk">' + r.name + '</div>' +
                '<div class="mono" style="font-size:11px;color:var(--ink-3);margin-bottom:6px">' + esc(r.type) + ' · ' + esc(r.year) + '</div>' +
                '<div style="font-size:12.5px;color:var(--ink-2)">' + esc(r.price) + '</div></a>';
            }).join('') + '</div></div>' : '') +
          (madeComponents.length ? '<div class="card" style="padding:26px;margin-bottom:18px">' +
            '<h2 style="font-size:18px;margin-bottom:14px">Components supplied</h2>' +
            '<div style="display:grid;gap:10px">' +
            madeComponents.map(function (k) {
              return '<div style="padding:12px;border:1px solid var(--line);border-radius:8px">' +
                '<div style="font-weight:600">' + k.name + '</div>' +
                '<div class="mono" style="font-size:11px;color:var(--ink-3)">' + esc(k.category) + ' · ' + esc(k.spec) + '</div></div>';
            }).join('') + '</div></div>' : '') +
        '</div>' +
        '<aside class="card" style="padding:22px">' +
          kv('Country', c.flag + ' ' + c.country) +
          kv('Founded', c.founded) +
          ((c.founders && c.founders !== '—') ? kv('Founders', c.founders) : '') +
          ((c.ceo && c.ceo !== '—') ? kv('CEO', c.ceo) : '') +
          kv('Type', c.type) +
          kv('Sector', c.sector) +
          kv('Status', c.status + (c.ticker ? ' · ' + c.ticker : '')) +
          kv('Funding', c.funding) +
          kv('Valuation', c.valuation) +
          kv('Employees', c.employees) +
          (supplies.length ? kvHtml('Supplies', supplies.join(', ')) : '') +
          (suppliedBy.length ? kvHtml('Key suppliers', suppliedBy.map(function (s) { return coLink(s.id); }).join(', ')) : '') +
          (c.website ? '<a class="btn btn--blue" href="' + c.website + '" target="_blank" rel="noopener" style="width:100%;text-align:center;margin-top:8px">Visit website →</a>' : '') +
        '</aside>' +
      '</div></section>';

    function kv(k, v) { return v ? '<div class="mono" style="font-size:10.5px;color:var(--ink-3);text-transform:uppercase;margin-bottom:3px">' + k + '</div><div style="margin-bottom:14px">' + esc(v) + '</div>' : ''; }
    function kvHtml(k, v) { return '<div class="mono" style="font-size:10.5px;color:var(--ink-3);text-transform:uppercase;margin-bottom:3px">' + k + '</div><div style="margin-bottom:14px">' + v + '</div>'; }
  }

  // -------- ROBOTS ---------------------------------------------------------
  function renderRobots() {
    var mount = document.querySelector('[data-rh="robots"]');
    if (!mount) return;
    var body = mount.querySelector('[data-rows]');
    makeFilter(mount, D.robots,
      [{ key: 'type', label: 'Type' }, { key: 'country', label: 'Country' }, { key: 'status', label: 'Status' }],
      function (rows) {
        body.innerHTML = rows.map(function (r) {
          return '<tr id="' + r.id + '">' +
            '<td class="name">' + r.name + '</td>' +
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
          return '<tr>' +
            '<td class="name">' + k.name + '</td>' +
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
      var verticals = SECTOR_MAP[sector] || [sector];
      var cos = D.companies.filter(function (c) { return verticals.indexOf(c.vertical) !== -1; });
      if (!cos.length) { el.innerHTML = ''; return; }
      var chips = cos.slice(0, 6).map(function (c) {
        return '<a class="bigind__chip" href="company-profile.html?id=' + c.id + '">' + c.name.replace(/\s*\(.*\)/, '') + '</a>';
      }).join('');
      var more = cos.length > 6 ? '<a class="more" href="companies.html">+' + (cos.length - 6) + ' more tracked →</a>' : '<a class="more" href="companies.html">Browse all →</a>';
      el.innerHTML = '<h6>' + cos.length + ' companies tracked</h6>' + chips + '<div style="margin-top:4px">' + more + '</div>';
    });
  }

  function run() {
    renderCompanies(); renderProfile(); renderRobots();
    renderSuppliers(); renderComponents(); renderSupplyContext(); renderCounts();
    renderSectorStrips();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
