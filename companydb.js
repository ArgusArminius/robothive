/* behindrobotics.com — Company database: 3-layer browser (grid → popup → tabbed profile) */
(function () {
  var D = window.RH_DATA || {};
  var C = D.companies || [], RX = D.robotsX || [], K = D.components || [];
  var F = { vertical: new Set(), country: new Set(), type: new Set(), status: new Set(), hub: new Set(), tier: new Set() };
  var q = '', view = 'cards';

  (function () { try { var p = new URLSearchParams(location.search);
    ['vertical','country','type','status','hub'].forEach(function (k) {
      var v = p.get(k); if (v) v.split(',').forEach(function (x) { F[k].add(x); }); });
  } catch (e) {} })();

  function esc(s) { return String(s == null ? '' : s).replace(/[<>&"]/g, function (c) { return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]; }); }
  function ok(v) { return v && v !== '—' && v !== 'Undisclosed' && v !== '0'; }
  function matches(r, skip) {
    if (q) { var t = (r.name + ' ' + (r.sector||'') + ' ' + (r.country||'') + ' ' + (r.hq||'')).toLowerCase(); var words = q.toLowerCase().split(/\s+/).filter(Boolean); if (!words.every(function (w) { return t.indexOf(w) >= 0; })) return false; }
    if (skip !== 'vertical' && F.vertical.size && !F.vertical.has(r.vertical)) return false;
    if (skip !== 'country' && F.country.size && !F.country.has(r.country)) return false;
    if (skip !== 'type' && F.type.size && !F.type.has(r.type)) return false;
    if (skip !== 'status' && F.status.size && !F.status.has(r.status)) return false;
    if (skip !== 'tier' && F.tier.size && !F.tier.has(String(r.tier))) return false;
    if (skip !== 'hub' && F.hub.size) { var h = r.hubs || []; if (!h.some(function (x) { return F.hub.has(x); })) return false; }
    return true;
  }
  function filtered() { return C.filter(function (r) { return matches(r); }); }
  function uniq(k) { var m = {}; C.forEach(function (r) { if (r[k]) m[r[k]] = (m[r[k]] || 0) + 1; }); return Object.keys(m).sort(function (a, b) { return m[b] - m[a]; }); }

  function buildSide() {
    function facet(title, key, vals, open) {
      var opts = vals.map(function (v) {
        var n = C.filter(function (r) { return matches(r, key) && (key === 'hub' ? (r.hubs || []).indexOf(v) >= 0 : r[key] === v); }).length;
        return '<label class="opt' + (n ? '' : ' zero') + '"><input type="checkbox" data-k="' + key + '" data-v="' + esc(v) + '"' + (F[key].has(v) ? ' checked' : '') + '> ' + esc(v) + ' <span class="c">' + n + '</span></label>';
      }).join('');
      return '<div class="facet' + (open ? ' open' : '') + '"><div class="ft">' + title + '<span class="ar">▾</span></div><div class="opts">' + opts + '</div></div>';
    }
    document.getElementById('side').innerHTML =
      '<div class="fh"><b>Filters</b><a id="clr">Clear all</a></div>' +
      facet('Industry hub', 'hub', ['Civil', 'Agriculture', 'Defense'], true) +
      facet('Category', 'vertical', uniq('vertical'), true) +
      facet('Role', 'type', ['builder', 'supplier', 'both'], true) +
      '<div class="facet open"><div class="ft">Profile depth<span class="ar">▾</span></div><div class="opts">' +
        [3, 2, 1, 0].map(function (t) {
          var lbl = ['Tracked (card only)', 'Profiled', 'Deep profile', 'Flagship'][t];
          var n = C.filter(function (r) { return matches(r, 'tier') && r.tier === t; }).length;
          return '<label class="opt' + (n ? '' : ' zero') + '"><input type="checkbox" data-k="tier" data-v="' + t + '"' + (F.tier.has(String(t)) ? ' checked' : '') + '> Tier ' + t + ' — ' + lbl + ' <span class="c">' + n + '</span></label>';
        }).join('') + '</div></div>' +
      facet('Status', 'status', uniq('status').slice(0, 10), false) +
      facet('Country', 'country', uniq('country'), false);
    document.querySelectorAll('.facet .ft').forEach(function (f) { f.onclick = function () { f.parentNode.classList.toggle('open'); }; });
    document.querySelectorAll('.opt input').forEach(function (i) { i.onchange = function () { var k = i.dataset.k, v = i.dataset.v; if (i.checked) F[k].add(v); else F[k].delete(v); render(); }; });
    document.getElementById('clr').onclick = function () { F = { vertical: new Set(), country: new Set(), type: new Set(), status: new Set(), hub: new Set(), tier: new Set() }; q = ''; var e = document.getElementById('q'); if (e) e.value = ''; render(); };
  }

  function render() {
    var rows = filtered(), ch = [];
    ['hub','vertical','type','tier','status','country'].forEach(function (k) { F[k].forEach(function (v) { ch.push('<span class="rchip" data-k="' + k + '" data-v="' + esc(v) + '">' + esc(v) + ' ×</span>'); }); });
    document.getElementById('chips').innerHTML = ch.join('');
    document.querySelectorAll('.rchip').forEach(function (c2) { c2.onclick = function () { F[c2.dataset.k].delete(c2.dataset.v); render(); }; });
    document.getElementById('cnt').textContent = rows.length + ' of ' + C.length + ' companies';
    var el = document.getElementById('results');
    if (view === 'cards') {
      el.className = 'cgrid';
      el.innerHTML = rows.map(function (r) {
        var init = r.name.replace(/[^A-Za-z0-9 ]/g, '').split(' ').filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join('').toUpperCase();
        var tags = [];
        if (r.nRobots) tags.push('<span class="cbadge">' + r.nRobots + ' robot' + (r.nRobots > 1 ? 's' : '') + '</span>');
        if (r.nComponents) tags.push('<span class="cbadge">' + r.nComponents + ' component' + (r.nComponents > 1 ? 's' : '') + '</span>');
        if (r.verified === 'unverified') tags.push('<span class="cbadge cbadge--unv">Unverified — auto-listed</span>');
        else if (r.tier >= 2) tags.push('<span class="cbadge cbadge--tier">' + (r.tier === 3 ? 'Flagship profile' : 'Deep profile') + '</span>');
        return '<div class="ctile" data-s="' + esc(r.id) + '">' +
          '<div class="ctile__t"><div class="cmark">' + esc(init) + '</div>' +
            '<div><div class="cn">' + esc(r.name) + '</div><div class="cm">' + r.flag + ' ' + esc(r.country) + (ok(r.founded) ? ' · est. ' + esc(r.founded) : '') + '</div></div></div>' +
          '<div class="cs">' + esc((r.sector || r.specialty || '').slice(0, 70)) + '</div>' +
          '<div class="cbadges"><span class="cbadge cbadge--role">' + esc(r.type) + '</span>' + tags.join('') +
            (ok(r.funding) ? '<span class="cbadge cbadge--fund">' + esc(String(r.funding).slice(0, 26)) + '</span>' : '') + '</div></div>';
      }).join('') || '<p style="color:var(--ink-3)">No companies match these filters.</p>';
    } else {
      el.className = '';
      el.innerHTML = '<table class="tbl"><thead><tr><th>Company</th><th>Category</th><th>Role</th><th>Country</th><th>Funding</th><th>Robots</th></tr></thead><tbody>' +
        rows.map(function (r) { return '<tr data-s="' + esc(r.id) + '" style="cursor:pointer"><td><b>' + esc(r.name) + '</b></td><td>' + esc(r.vertical) + '</td><td>' + esc(r.type) + '</td><td>' + r.flag + ' ' + esc(r.country) + '</td><td>' + esc(ok(r.funding) ? r.funding : '—') + '</td><td>' + (r.nRobots || '—') + '</td></tr>'; }).join('') + '</tbody></table>';
    }
    el.querySelectorAll('[data-s]').forEach(function (t) { t.onclick = function () { openCo(t.dataset.s); }; });
    buildSide();
  }

  function facts(r) {
    return [['Headquarters', r.hq], ['Founded', r.founded], ['Role', r.type], ['Category', r.vertical], ['Sector', r.sector],
            ['Status', r.status], ['Ticker', r.ticker], ['Employees', r.employees], ['CEO', r.ceo], ['Founders', r.founders],
            ['Funding', r.funding], ['Valuation', r.valuation]].filter(function (x) { return ok(x[1]); });
  }

  window.openCo = function (id) {
    var r = C.find(function (x) { return x.id === id; }); if (!r) return;
    var init = r.name.replace(/[^A-Za-z0-9 ]/g, '').split(' ').filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join('').toUpperCase();
    document.getElementById('modal').innerHTML =
      '<div class="mh"><div class="cmark cmark--lg">' + esc(init) + '</div><div><h2>' + esc(r.name) + '</h2>' +
      '<div class="crumb">' + r.flag + ' ' + esc(r.country) + ' · ' + esc(r.vertical) + ' · ' + esc(r.type) +
      (r.verified === 'unverified' ? ' · <span class="unvtag">Unverified — auto-listed</span>' : '') + '</div></div>' +
      '<div class="acts">' + (ok(r.website) ? '<a class="btn btn--ghost" href="' + esc(r.website) + '" target="_blank" rel="noopener">Visit website →</a>' : '') + '<button class="btn" id="mprof">View full profile →</button><button class="btn btn--ghost" id="mclose">×</button></div></div>' +
      '<div class="mb">' +
      (r.verified === 'unverified' ? '<div class="unvbox">Auto-listed from component data — not yet editorially reviewed.</div>' : '') +
      '<div class="popstats">' +
        '<div class="popstat"><div class="k">Sector</div><div class="v">' + esc(r.vertical || '—') + '</div></div>' +
        '<div class="popstat"><div class="k">Founded</div><div class="v">' + esc(ok(r.founded) ? r.founded : '—') + '</div></div>' +
        '<div class="popstat"><div class="k">Funding</div><div class="v">' + esc(ok(r.funding) ? String(r.funding).slice(0, 22) : '—') + '</div></div>' +
      '</div>' +
      '<div class="sect"><h4>Summary</h4><p style="font-size:14.5px;color:var(--ink-2)">' + esc(r.summary || '') + '</p></div>' +
      (r.nRobots || r.nComponents ? '<div class="sect"><h4>In our database</h4><p style="font-size:14px;color:var(--ink-2)">' +
        (r.nRobots ? r.nRobots + ' robot' + (r.nRobots > 1 ? 's' : '') : '') + (r.nRobots && r.nComponents ? ' · ' : '') +
        (r.nComponents ? r.nComponents + ' component' + (r.nComponents > 1 ? 's' : '') : '') + ' tracked</p></div>' : '') + '</div>';
    document.getElementById('mprof').onclick = function () { openCoProfile(r.id); };
    document.getElementById('mclose').onclick = closeModal;
    document.getElementById('ov').classList.add('show');
  };
  function closeModal() { document.getElementById('ov').classList.remove('show'); }
  window.closeModal = closeModal;

  var TABS = { overview: 'Overview', products: 'Products', supply: 'Supply chain', relations: 'Relations', context: 'Context', capital: 'Capital' };
  window.openCoProfile = function (id) {
    var r = C.find(function (x) { return x.id === id; }); if (!r) return;
    closeModal();
    document.title = r.name + ' — behindrobotics.com';
    try { history.replaceState(null, '', 'companies.html?id=' + encodeURIComponent(r.id)); } catch (e) {}
    var tabs = ['overview'];
    if (r.nRobots || r.nComponents) tabs.push('products');
    if (r.nComponents || (r.suppliers && r.suppliers.length)) tabs.push('supply');
    var REL = (D.relations || []).filter(function (e) { return e.from === r.id || e.to === r.id; });
    if (REL.length) tabs.push('relations');
    tabs.push('context');
    if (ok(r.funding) || ok(r.valuation) || ok(r.ticker)) tabs.push('capital');
    document.getElementById('listView').style.display = 'none';
    var pv = document.getElementById('profView'); pv.classList.add('show');
    pv.innerHTML = '<div class="ptop"><div class="back" id="pback">← Back to companies</div><h1>' + esc(r.name) + '</h1>' +
      '<div class="crumb">' + r.flag + ' ' + esc(r.country) + ' · ' + esc(r.sector || r.vertical) + ' · ' + esc(r.status) + '</div>' +
      (ok(r.website) ? '<a class="btn btn--blue" href="' + esc(r.website) + '" target="_blank" rel="noopener" style="margin-top:14px">Visit website →</a>' : '') + '</div>' +
      '<div class="rtabs" id="ptabs">' + tabs.map(function (t, i) { return '<button data-t="' + t + '"' + (i === 0 ? ' class="on"' : '') + '>' + TABS[t] + '</button>'; }).join('') + '</div><div class="pbody" id="pbody"></div>';
    document.getElementById('pback').onclick = function () { pv.classList.remove('show'); document.getElementById('listView').style.display = ''; window.scrollTo(0, 0); document.title = 'Company Database — Companies — behindrobotics.com'; try { history.replaceState(null, '', 'companies.html'); } catch (e) {} };
    document.querySelectorAll('#ptabs button').forEach(function (b) { b.onclick = function () { document.querySelectorAll('#ptabs button').forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on'); drawTab(r, b.dataset.t); }; });
    drawTab(r, 'overview'); window.scrollTo(0, 0);
  };

  function bar(list, metric, label, unit, meId) {
    var pool = list.filter(function (x) { return x[metric] != null && x[metric] > 0; }).sort(function (a, b) { return b[metric] - a[metric]; });
    if (pool.length < 2) return '';
    var rank = pool.findIndex(function (x) { return x.id === meId; }) + 1;
    var max = pool[0][metric], show = pool.slice(0, 15);
    if (rank > 15) show = pool.slice(0, 14).concat(pool.filter(function (x) { return x.id === meId; }));
    return '<div class="sect"><h4>' + label + ' — ranked across ' + pool.length + ' companies' + (rank ? ' · ranks #' + rank : '') + '</h4><div class="barwrap">' +
      show.map(function (p) { var me = p.id === meId;
        return '<div class="barrow' + (me ? ' me' : '') + '" data-c="' + esc(p.id) + '"><div class="barlab">' + esc(p.name) + '</div>' +
          '<div class="bartrack"><div class="barfill' + (me ? ' me' : '') + '" style="width:' + (p[metric] / max * 100).toFixed(1) + '%"></div></div>' +
          '<div class="barval">' + p[metric] + ' ' + unit + '</div></div>'; }).join('') + '</div></div>';
  }

  function drawTab(r, t) {
    var b = document.getElementById('pbody'), h = '';
    if (t === 'overview') {
      if (r.verified === 'unverified') h += '<div class="unvbox">This company was auto-listed from our component database and has not yet had a full editorial review. The facts below come from supplier and product data; treat as unverified until reviewed.</div>';
      h += '<div class="sect"><h4>Summary</h4><p style="font-size:15px;color:var(--ink-2)">' + esc(r.summary || '') + '</p></div>';
      if (ok(r.notable)) h += '<div class="sect"><h4>Notable</h4><p style="font-size:14.5px;color:var(--ink-2)">' + esc(r.notable) + '</p></div>';
      h += '<div class="sect"><h4>Key facts</h4><div class="specgrid">' + facts(r).map(function (f) { return '<div class="spec"><div class="k">' + esc(f[0]) + '</div><div class="v">' + esc(f[1]) + '</div></div>'; }).join('') + '</div></div>';
    } else if (t === 'products') {
      var mine = RX.filter(function (x) { return x.makerId === r.id; });
      if (mine.length) h += '<div class="sect"><h4>Robots (' + mine.length + ')</h4><div class="cmp">' + mine.map(function (p) {
        var im = p.img ? '<img src="' + esc(p.img) + '" loading="lazy" class="cmpimg" onerror="this.style.display=\'none\'">' : '';
        return '<div class="cmpc" data-r="' + esc(p.slug) + '">' + im + '<div class="n">' + esc(p.name) + '</div><div style="font-size:11.5px;color:var(--ink-3)">' + esc(p.bucket) + (p.h ? ' · ' + p.h + ' cm' : '') + '</div></div>'; }).join('') + '</div></div>';
      var kc = K.filter(function (x) { return x.maker === r.id; });
      if (kc.length) h += '<div class="sect"><h4>Components (' + kc.length + ')</h4><div class="cmp">' + kc.slice(0, 24).map(function (p) {
        var im = p.img ? '<img src="' + esc(p.img) + '" loading="lazy" class="cmpimg" onerror="this.style.display=\'none\'">' : '';
        return '<div class="cmpc"><a href="components.html?id=' + esc(p.id) + '">' + im + '<div class="n">' + esc(p.name) + '</div><div style="font-size:11.5px;color:var(--ink-3)">' + esc(p.category) + '</div></a></div>'; }).join('') + '</div>' +
        (kc.length > 24 ? '<p style="font-size:13px;color:var(--ink-3);margin-top:8px">+' + (kc.length - 24) + ' more</p>' : '') + '</div>';
    } else if (t === 'supply') {
      var kc2 = K.filter(function (x) { return x.maker === r.id; });
      if (kc2.length) {
        var cats = {}; kc2.forEach(function (x) { cats[x.category] = (cats[x.category] || 0) + 1; });
        h += '<div class="sect"><h4>Supplies these component types</h4><div class="cmp">' + Object.keys(cats).sort(function (a, b) { return cats[b] - cats[a]; }).map(function (c2) {
          return '<div class="cmpc"><div class="n">' + esc(c2) + '</div><div style="font-size:11.5px;color:var(--ink-3)">' + cats[c2] + ' part' + (cats[c2] > 1 ? 's' : '') + '</div></div>'; }).join('') + '</div></div>';
      }
      var peers = C.filter(function (x) { return x.id !== r.id && x.type === 'supplier' && x.vertical === r.vertical && x.nComponents; }).sort(function (a, b) { return b.nComponents - a.nComponents; }).slice(0, 8);
      if (peers.length) h += '<div class="sect"><h4>Other suppliers in ' + esc(r.vertical) + '</h4><div class="cmp">' + peers.map(function (p) {
        return '<div class="cmpc" data-c="' + esc(p.id) + '"><div class="n">' + esc(p.name) + '</div><div style="font-size:11.5px;color:var(--ink-3)">' + p.flag + ' ' + p.nComponents + ' components</div></div>'; }).join('') + '</div></div>';
      if (!h) h = '<p style="color:var(--ink-3)">No supply-chain records yet.</p>';
    } else if (t === 'relations') {
      var REL2 = (D.relations || []).filter(function (e) { return e.from === r.id || e.to === r.id; });
      var outg = REL2.filter(function (e) { return e.from === r.id; });
      var inc = REL2.filter(function (e) { return e.to === r.id; });
      function edge(e, dir) {
        var otherId = dir === 'out' ? e.to : e.from;
        var o = C.find(function (x) { return x.id === otherId; }) || { name: otherId, flag: '' };
        var arrow = dir === 'out' ? '→' : '←';
        return '<div class="cmpc" data-c="' + esc(otherId) + '"><div class="n">' + arrow + ' ' + esc(o.name) + '</div>' +
          '<div style="font-size:11.5px;color:var(--ink-3);margin-top:4px">' + esc(e.type) + (e.layer ? ' · ' + esc(e.layer) : '') + '</div>' +
          '<div class="conf conf--' + esc(e.status) + '">' + esc(e.status) + '</div>' +
          '<div style="font-size:11px;color:var(--ink-3);margin-top:5px">' + esc(e.evidence || '') + '</div></div>';
      }
      if (outg.length) h += '<div class="sect"><h4>Supplies / partners with</h4><div class="cmp">' + outg.map(function (e) { return edge(e, 'out'); }).join('') + '</div></div>';
      if (inc.length) h += '<div class="sect"><h4>Supplied by / receives from</h4><div class="cmp">' + inc.map(function (e) { return edge(e, 'in'); }).join('') + '</div></div>';
      h += '<div class="sect"><p style="font-size:12.5px;color:var(--ink-3)">Relationship edges are only recorded where a specific, sourced fact exists. <b>confirmed</b> = stated in a company record or filing; <b>claimed</b> = company-stated, unreviewed; <b>inferred</b> = derived from category fit. We do not publish inferred edges as fact.</p></div>';
    } else if (t === 'context') {
      var sameCat = C.filter(function (x) { return x.vertical === r.vertical; });
      h += bar(sameCat.filter(function (x) { return x.nRobots; }), 'nRobots', 'Robots tracked', '', r.id);
      h += bar(sameCat.filter(function (x) { return x.nComponents; }), 'nComponents', 'Components tracked', '', r.id);
      var peers2 = C.filter(function (x) { return x.id !== r.id && x.vertical === r.vertical && x.country === r.country; }).slice(0, 8);
      if (peers2.length) h += '<div class="sect"><h4>Peers — same category & country</h4><div class="cmp">' + peers2.map(function (p) {
        return '<div class="cmpc" data-c="' + esc(p.id) + '"><div class="n">' + esc(p.name) + '</div><div style="font-size:11.5px;color:var(--ink-3)">' + esc(p.sector || p.type) + '</div></div>'; }).join('') + '</div></div>';
      var global = C.filter(function (x) { return x.id !== r.id && x.vertical === r.vertical && x.country !== r.country; }).slice(0, 8);
      if (global.length) h += '<div class="sect"><h4>Peers — same category, other markets</h4><div class="cmp">' + global.map(function (p) {
        return '<div class="cmpc" data-c="' + esc(p.id) + '"><div class="n">' + esc(p.name) + '</div><div style="font-size:11.5px;color:var(--ink-3)">' + p.flag + ' ' + esc(p.country) + '</div></div>'; }).join('') + '</div></div>';
    } else if (t === 'capital') {
      h += '<div class="sect"><h4>Capital</h4><div class="specgrid">' +
        [['Funding', r.funding], ['Valuation', r.valuation], ['Status', r.status], ['Ticker', r.ticker], ['Employees', r.employees]]
        .filter(function (x) { return ok(x[1]); }).map(function (f) { return '<div class="spec"><div class="k">' + esc(f[0]) + '</div><div class="v">' + esc(f[1]) + '</div></div>'; }).join('') + '</div></div>';
      if (ok(r.ticker)) h += '<div class="sect"><p style="font-size:14px;color:var(--ink-2)">Publicly listed — see <a href="markets.html">Markets</a> for live pricing where covered.</p></div>';
      h += '<div class="sect"><p style="font-size:13px;color:var(--ink-3)">Figures as recorded by behindrobotics.com from company announcements, filings and market reporting. Verify before citing.</p></div>';
    }
    b.innerHTML = h || '<p style="color:var(--ink-3)">No records yet.</p>';
    b.querySelectorAll('[data-c]').forEach(function (el) { el.onclick = function () { openCoProfile(el.dataset.c); }; });
    b.querySelectorAll('[data-r]').forEach(function (el) { el.onclick = function () { location.href = 'robots.html?id=' + el.dataset.r; }; });
  }

  var qEl = document.getElementById('q'); if (qEl) qEl.oninput = function (e) { q = e.target.value; render(); };
  var vc = document.getElementById('vCards'), vt = document.getElementById('vTable');
  if (vc) vc.onclick = function () { view = 'cards'; vc.classList.add('on'); vt.classList.remove('on'); render(); };
  if (vt) vt.onclick = function () { view = 'table'; vt.classList.add('on'); vc.classList.remove('on'); render(); };
  if (C.length) render();

  // Deep-link: companies.html?id=<id> opens straight to that company's full tabbed profile —
  // this is what makes a shared/bookmarked/emailed link land on the right view instead of the grid.
  (function () {
    try {
      var pid = new URLSearchParams(location.search).get('id');
      if (pid && C.some(function (x) { return x.id === pid; })) openCoProfile(pid);
    } catch (e) {}
  })();
})();
