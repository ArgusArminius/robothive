/* behindrobotics.com — Robot database: 3-layer browser (grid → popup → tabbed profile) */
(function () {
  var D = window.RH_DATA || {};
  var R = D.robotsX || [];
  var F = { vertical: new Set(), country: new Set(), maker: new Set(), status: new Set() };
  var q = '', view = 'cards', SL = { h: null, w: null };

  function esc(s) { return String(s == null ? '' : s).replace(/[<>&"]/g, function (c) { return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]; }); }
  function matches(r, skip) {
    if (q) { var t = (r.name + ' ' + r.maker + ' ' + r.country).toLowerCase(); if (t.indexOf(q.toLowerCase()) < 0) return false; }
    if (skip !== 'vertical' && F.vertical.size && !F.vertical.has(r.vertical)) return false;
    if (skip !== 'country' && F.country.size && !F.country.has(r.country)) return false;
    if (skip !== 'maker' && F.maker.size && !F.maker.has(r.maker)) return false;
    if (skip !== 'status' && F.status.size && !F.status.has(r.bucket)) return false;
    if (SL.h && r.h != null && (r.h < SL.h[0] || r.h > SL.h[1])) return false;
    if (SL.w && r.w != null && (r.w < SL.w[0] || r.w > SL.w[1])) return false;
    return true;
  }
  function filtered() { return R.filter(function (r) { return matches(r); }); }
  function uniq(k) { var m = {}; R.forEach(function (r) { if (r[k]) m[r[k]] = (m[r[k]] || 0) + 1; }); return Object.keys(m).sort(function (a, b) { return m[b] - m[a]; }); }

  function buildSide() {
    function facet(title, key, vals, open) {
      var fk = key === 'status' ? 'bucket' : key;
      var opts = vals.map(function (v) {
        var n = R.filter(function (r) { return matches(r, key) && r[fk] === v; }).length;
        return '<label class="opt' + (n ? '' : ' zero') + '"><input type="checkbox" data-k="' + key + '" data-v="' + esc(v) + '"' + (F[key].has(v) ? ' checked' : '') + '> ' + esc(v) + ' <span class="c">' + n + '</span></label>';
      }).join('');
      return '<div class="facet' + (open ? ' open' : '') + '"><div class="ft">' + title + '<span class="ar">▾</span></div><div class="opts">' + opts + '</div></div>';
    }
    var hs = R.filter(function (r) { return r.h != null; }).map(function (r) { return r.h; });
    var ws = R.filter(function (r) { return r.w != null; }).map(function (r) { return r.w; });
    var hmin = Math.floor(Math.min.apply(0, hs)), hmax = Math.ceil(Math.max.apply(0, hs));
    var wmin = Math.floor(Math.min.apply(0, ws)), wmax = Math.ceil(Math.max.apply(0, ws));
    if (!SL.h) { SL.h = [hmin, hmax]; SL.w = [wmin, wmax]; }
    document.getElementById('side').innerHTML =
      '<div class="fh"><b>Filters</b><a id="clr">Clear all</a></div>' +
      facet('Category', 'vertical', uniq('vertical'), true) +
      facet('Status', 'status', ['Shipping', 'Production', 'Pilot / Deployed', 'Development', 'Announced', 'Research', 'Other'], true) +
      facet('Country', 'country', uniq('country'), false) +
      '<div class="facet open"><div class="ft">Key specs<span class="ar">▾</span></div><div class="opts">' +
        '<div class="sl"><div class="lab"><span>Height</span><span class="mono" id="hv">' + SL.h[0] + '–' + SL.h[1] + ' cm</span></div>' +
        '<div class="meta">Available: ' + hmin + '–' + hmax + ' cm · ' + hs.length + ' platforms</div>' +
        '<input type="range" id="hr" min="' + hmin + '" max="' + hmax + '" value="' + SL.h[1] + '"></div>' +
        '<div class="sl"><div class="lab"><span>Weight</span><span class="mono" id="wv">' + SL.w[0] + '–' + SL.w[1] + ' kg</span></div>' +
        '<div class="meta">Available: ' + wmin + '–' + wmax + ' kg · ' + ws.length + ' platforms</div>' +
        '<input type="range" id="wr" min="' + wmin + '" max="' + wmax + '" value="' + SL.w[1] + '"></div>' +
      '</div></div>' +
      facet('Company', 'maker', uniq('maker').slice(0, 45), false);
    document.querySelectorAll('.facet .ft').forEach(function (f) { f.onclick = function () { f.parentNode.classList.toggle('open'); }; });
    document.querySelectorAll('.opt input').forEach(function (i) {
      i.onchange = function () { var k = i.dataset.k, v = i.dataset.v; if (i.checked) F[k].add(v); else F[k].delete(v); render(); };
    });
    document.getElementById('clr').onclick = function () {
      F = { vertical: new Set(), country: new Set(), maker: new Set(), status: new Set() }; SL = { h: null, w: null }; q = '';
      var qq = document.getElementById('q'); if (qq) qq.value = ''; render();
    };
    var hr = document.getElementById('hr'); if (hr) hr.oninput = function () { SL.h[1] = +hr.value; document.getElementById('hv').textContent = SL.h[0] + '–' + hr.value + ' cm'; render(); };
    var wr = document.getElementById('wr'); if (wr) wr.oninput = function () { SL.w[1] = +wr.value; document.getElementById('wv').textContent = SL.w[0] + '–' + wr.value + ' kg'; render(); };
  }

  function render() {
    var rows = filtered(), ch = [];
    ['vertical', 'status', 'country', 'maker'].forEach(function (k) {
      F[k].forEach(function (v) { ch.push('<span class="rchip" data-k="' + k + '" data-v="' + esc(v) + '">' + esc(v) + ' ×</span>'); });
    });
    document.getElementById('chips').innerHTML = ch.join('');
    document.querySelectorAll('.rchip').forEach(function (c) { c.onclick = function () { F[c.dataset.k].delete(c.dataset.v); render(); }; });
    document.getElementById('cnt').textContent = rows.length + ' of ' + R.length + ' platforms';
    var el = document.getElementById('results');
    if (view === 'cards') {
      el.className = 'rgrid';
      el.innerHTML = rows.map(function (r) {
        var im = r.img ? '<img src="' + esc(r.img) + '" loading="lazy" onerror="this.parentNode.innerHTML=\'<span class=ph>no image</span>\'">' : '<span class="ph">no image</span>';
        var pr = r.price ? '<div class="rprice">' + esc(r.price) + '</div>' : '';
        return '<div class="rtile" data-s="' + esc(r.slug) + '"><div class="im">' + im + '</div>' +
          '<div class="b"><div class="n">' + esc(r.name) + '</div><div class="mk">' + esc(r.maker) + '</div>' + pr +
          '<div class="rbadges"><span class="rbadge">' + esc(r.bucket) + '</span><span class="rbadge">' + r.flag + ' ' + esc(r.country) + '</span></div></div></div>';
      }).join('') || '<p style="color:var(--ink-3)">No platforms match these filters.</p>';
    } else {
      el.className = '';
      el.innerHTML = '<table class="tbl"><thead><tr><th>Robot</th><th>Maker</th><th>Category</th><th>Status</th><th>Origin</th><th>Price</th><th>Height</th></tr></thead><tbody>' +
        rows.map(function (r) { return '<tr data-s="' + esc(r.slug) + '" style="cursor:pointer"><td><b>' + esc(r.name) + '</b></td><td>' + esc(r.maker) + '</td><td>' + esc(r.vertical) + '</td><td>' + esc(r.bucket) + '</td><td>' + r.flag + ' ' + esc(r.country) + '</td><td>' + esc(r.price || '—') + '</td><td>' + (r.h ? r.h + ' cm' : '—') + '</td></tr>'; }).join('') + '</tbody></table>';
    }
    el.querySelectorAll('[data-s]').forEach(function (t) { t.onclick = function () { openModal(t.dataset.s); }; });
    buildSide();
  }

  var GROUPS = { Physical: ['HEIGHT', 'WEIGHT', 'PAYLOAD', 'FOLDED'], Performance: ['DOF', 'SPEED', 'RUNTIME', 'BATTERY'], Manipulation: ['HAND', 'END EFFECTOR', 'GRIP'], Systems: ['ACTUATION', 'PERCEPTION', 'TACTILE', 'COMPUTE', 'AI'] };
  function specHtml(r) {
    var used = {}, out = '';
    Object.keys(GROUPS).forEach(function (g) {
      var items = Object.keys(r.sp || {}).filter(function (k) { return GROUPS[g].some(function (p) { return k.toUpperCase().indexOf(p) >= 0; }) && !used[k]; });
      items.forEach(function (k) { used[k] = 1; });
      if (items.length) out += '<div class="sect"><h4>' + g + '</h4><div class="specgrid">' + items.map(function (k) { return '<div class="spec"><div class="k">' + esc(k) + '</div><div class="v">' + esc(r.sp[k]) + '</div></div>'; }).join('') + '</div></div>';
    });
    var rest = Object.keys(r.sp || {}).filter(function (k) { return !used[k]; });
    if (rest.length) out += '<div class="sect"><h4>Other</h4><div class="specgrid">' + rest.map(function (k) { return '<div class="spec"><div class="k">' + esc(k) + '</div><div class="v">' + esc(r.sp[k]) + '</div></div>'; }).join('') + '</div></div>';
    return out;
  }

  window.openModal = function (slug) {
    var r = R.find(function (x) { return x.slug === slug; }); if (!r) return;
    document.getElementById('modal').innerHTML =
      '<div class="mh"><div><h2>' + esc(r.name) + '</h2><div class="crumb">' + esc(r.maker) + ' · ' + esc(r.vertical || r.type) + ' · ' + r.flag + ' ' + esc(r.country) + '</div></div>' +
      '<div class="acts"><button class="btn" id="mprof">View full profile →</button><button class="btn btn--ghost" id="mclose">×</button></div></div>' +
      '<div class="mhero">' + (r.img ? '<img src="' + esc(r.img) + '" onerror="this.parentNode.innerHTML=\'<span style=color:#8895a4;font-family:monospace;font-size:12px>no image available</span>\'">' : '<span style="color:#8895a4;font-family:monospace;font-size:12px">no image available</span>') + '</div>' +
      '<div class="mb"><div class="sect"><h4>Overview</h4><p style="font-size:14.5px;color:var(--ink-2)">' + esc(r.summary || 'No description recorded yet.') + '</p></div>' + specHtml(r) + '</div>';
    document.getElementById('mprof').onclick = function () { openProfile(r.slug); };
    document.getElementById('mclose').onclick = closeModal;
    document.getElementById('ov').classList.add('show');
  };
  function closeModal() { document.getElementById('ov').classList.remove('show'); }
  window.closeModal = closeModal;

  var TABS = { overview: 'Overview', capabilities: 'Capabilities', context: 'Context', timeline: 'Timeline', research: 'Research', resources: 'Resources', deployments: 'Deployments', operations: 'Operations', supply: 'Supply' };
  window.openProfile = function (slug) {
    var r = R.find(function (x) { return x.slug === slug; }); if (!r) return;
    closeModal();
    var tabs = ['overview'].concat(Object.keys(TABS).filter(function (t) { return t !== 'overview' && ((t === 'context') || (r.tabc && r.tabc[t] && r.tabc[t].length)); }));
    document.getElementById('listView').style.display = 'none';
    var pv = document.getElementById('profView'); pv.classList.add('show');
    pv.innerHTML = '<div class="ptop"><div class="back" id="pback">← Back to database</div><h1>' + esc(r.name) + '</h1>' +
      '<div class="crumb">' + esc(r.maker) + ' · ' + r.flag + ' ' + esc(r.country) + ' · ' + esc(r.status) + '</div></div>' +
      '<div class="rtabs" id="ptabs">' + tabs.map(function (t, i) { return '<button data-t="' + t + '"' + (i === 0 ? ' class="on"' : '') + '>' + TABS[t] + '</button>'; }).join('') + '</div><div class="pbody" id="pbody"></div>';
    document.getElementById('pback').onclick = function () { pv.classList.remove('show'); document.getElementById('listView').style.display = ''; window.scrollTo(0, 0); };
    document.querySelectorAll('#ptabs button').forEach(function (b) {
      b.onclick = function () { document.querySelectorAll('#ptabs button').forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on'); drawTab(r, b.dataset.t); };
    });
    drawTab(r, 'overview'); window.scrollTo(0, 0);
  };

  function chart(r, metric, label, unit) {
    var pool = R.filter(function (x) { return x[metric] != null && x.vertical === r.vertical; }).sort(function (a, b) { return b[metric] - a[metric]; });
    if (!pool.length || r[metric] == null) return '';
    var rank = pool.findIndex(function (x) { return x.slug === r.slug; }) + 1;
    var max = pool[0][metric];
    var show = pool.slice(0, 18);
    if (rank > 18) show = pool.slice(0, 17).concat([r]);
    return '<div class="sect"><h4>' + label + ' — ranked across ' + pool.length + ' ' + esc(r.vertical) + ' platforms' + (rank ? ' · this robot ranks #' + rank : '') + '</h4><div class="barwrap">' +
      show.map(function (p) {
        var me = p.slug === r.slug;
        return '<div class="barrow' + (me ? ' me' : '') + '" data-s="' + esc(p.slug) + '"><div class="barlab">' + esc(p.name) + '</div>' +
          '<div class="bartrack"><div class="barfill' + (me ? ' me' : '') + '" style="width:' + (p[metric] / max * 100).toFixed(1) + '%"></div></div>' +
          '<div class="barval">' + p[metric] + ' ' + unit + '</div></div>';
      }).join('') + '</div></div>';
  }

  function drawTab(r, t) {
    var b = document.getElementById('pbody'), h = '';
    if (t === 'overview') {
      if (r.img) h += '<div class="mhero" style="max-width:520px;border-radius:14px;border:1px solid var(--line);margin-bottom:20px"><img src="' + esc(r.img) + '" onerror="this.parentNode.style.display=\'none\'"></div>';
      h += '<div class="sect"><h4>Summary</h4><p style="font-size:15px;color:var(--ink-2)">' + esc(r.summary || 'No description recorded yet.') + '</p></div>';
      h += '<div class="sect"><h4>Identity</h4><div class="specgrid">' +
        [['Status', r.status], ['Category', r.vertical], ['Indicative price', r.price], ['Type', r.type], ['Function', r.function], ['Audience', r.audience]].filter(function (x) { return x[1]; })
        .map(function (x) { return '<div class="spec"><div class="k">' + x[0] + '</div><div class="v">' + esc(x[1]) + '</div></div>'; }).join('') + '</div></div>';
      h += specHtml(r);
      if (r.yt) h += '<div class="sect"><h4>Video</h4><iframe width="100%" height="330" style="border-radius:12px;border:1px solid var(--line)" src="' + esc(r.yt) + '" frameborder="0" allowfullscreen></iframe></div>';
    } else if (t === 'context') {
      h += chart(r, 'h', 'Height', 'cm') + chart(r, 'w', 'Weight', 'kg') + chart(r, 'pay', 'Payload', 'kg') + chart(r, 'dof', 'Degrees of freedom', 'DoF');
      var peers = R.filter(function (x) { return x.slug !== r.slug && x.bucket === r.bucket && x.vertical === r.vertical; }).slice(0, 6);
      var same = R.filter(function (x) { return x.slug !== r.slug && x.maker === r.maker; });
      if (peers.length) h += '<div class="sect"><h4>Comparable systems — same status tier</h4><div class="cmp">' + peers.map(function (p) { return '<div class="cmpc" data-s="' + esc(p.slug) + '"><div class="n">' + esc(p.name) + '</div><div style="color:var(--ink-3);font-size:12px">' + esc(p.maker) + '</div><div style="font-size:11.5px;margin-top:5px">' + (p.h ? p.h + ' cm' : '—') + ' · ' + p.flag + '</div></div>'; }).join('') + '</div></div>';
      if (same.length) h += '<div class="sect"><h4>Other systems from ' + esc(r.maker) + '</h4><div class="cmp">' + same.map(function (p) { return '<div class="cmpc" data-s="' + esc(p.slug) + '"><div class="n">' + esc(p.name) + '</div><div style="font-size:11.5px;color:var(--ink-3)">' + esc(p.bucket) + '</div></div>'; }).join('') + '</div></div>';
      if (r.tabc && r.tabc.context) h += '<div class="sect"><h4>Recorded context</h4>' + r.tabc.context.map(function (c) { return '<div class="logitem">' + esc(c) + '</div>'; }).join('') + '</div>';
    } else {
      var items = (r.tabc && r.tabc[t]) || [];
      h += '<div class="sect"><h4>' + TABS[t] + '</h4>' + (items.length ? items.map(function (c) {
        var m = String(c).match(/^(CLAIMED|DEMONSTRATED|PILOT|FIELD USE|RESEARCH)/);
        var tag = m ? '<span class="evtag ev-' + m[1].split(' ')[0] + '">' + m[1] + '</span>' : '';
        var body = m ? String(c).slice(m[1].length).replace(/^\s*[—-]\s*/, '') : String(c);
        return '<div class="logitem">' + tag + esc(body) + '</div>';
      }).join('') : '<p style="color:var(--ink-3)">No records yet.</p>') + '</div>';
    }
    b.innerHTML = h;
    b.querySelectorAll('[data-s]').forEach(function (el) { el.onclick = function () { openProfile(el.dataset.s); }; });
  }

  var qEl = document.getElementById('q'); if (qEl) qEl.oninput = function (e) { q = e.target.value; render(); };
  var vc = document.getElementById('vCards'), vt = document.getElementById('vTable');
  if (vc) vc.onclick = function () { view = 'cards'; vc.classList.add('on'); vt.classList.remove('on'); render(); };
  if (vt) vt.onclick = function () { view = 'table'; vt.classList.add('on'); vc.classList.remove('on'); render(); };
  if (R.length) render();
})();
