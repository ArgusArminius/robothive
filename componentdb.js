/* behindrobotics.com — Component database: filterable browser (grid/table → popup brief → full profile) */
(function () {
  var D = window.RH_DATA || {};
  var C = D.components || [];
  var F = { category: new Set(), country: new Set(), maker: new Set() };
  var q = '', view = 'cards';

  // Pre-filter from URL, e.g. components.html?cat=Actuator
  (function () {
    var p = new URLSearchParams(location.search);
    var c = p.get('cat'); if (c) c.split(',').forEach(function (v) { F.category.add(v); });
    var co = p.get('country'); if (co) co.split(',').forEach(function (v) { F.country.add(v); });
  })();

  function esc(s) { return String(s == null ? '' : s).replace(/[<>&"]/g, function (c) { return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]; }); }
  function makerName(id) { var c = D.companies.find(function (x) { return x.id === id; }); return c ? c.name : (id || '—'); }
  function makerObj(id) { return D.companies.find(function (x) { return x.id === id; }); }

  function matches(k, skip) {
    if (q) { var t = (k.name + ' ' + makerName(k.maker) + ' ' + k.category + ' ' + k.country).toLowerCase(); var words = q.toLowerCase().split(/\s+/).filter(Boolean); if (!words.every(function (w) { return t.indexOf(w) >= 0; })) return false; }
    if (skip !== 'category' && F.category.size && !F.category.has(k.category)) return false;
    if (skip !== 'country' && F.country.size && !F.country.has(k.country)) return false;
    if (skip !== 'maker' && F.maker.size && !F.maker.has(k.maker)) return false;
    return true;
  }
  function filtered() { return C.filter(function (k) { return matches(k); }); }
  function uniq(key) { var m = {}; C.forEach(function (k) { if (k[key]) m[k[key]] = (m[k[key]] || 0) + 1; }); return Object.keys(m).sort(function (a, b) { return m[b] - m[a]; }); }

  function buildSide() {
    function facet(title, key, vals, labelFn, open) {
      var opts = vals.map(function (v) {
        var n = C.filter(function (k) { return matches(k, key) && k[key] === v; }).length;
        var lab = labelFn ? labelFn(v) : v;
        return '<label class="opt' + (n ? '' : ' zero') + '"><input type="checkbox" data-k="' + key + '" data-v="' + esc(v) + '"' + (F[key].has(v) ? ' checked' : '') + '> ' + esc(lab) + ' <span class="c">' + n + '</span></label>';
      }).join('');
      return '<div class="facet' + (open ? ' open' : '') + '"><div class="ft">' + title + '<span class="ar">▾</span></div><div class="opts">' + opts + '</div></div>';
    }
    document.getElementById('cside').innerHTML =
      '<div class="fh"><b>Filters</b><a id="cclr">Clear all</a></div>' +
      facet('Category', 'category', uniq('category'), null, true) +
      facet('Country', 'country', uniq('country'), null, true) +
      facet('Company', 'maker', uniq('maker').slice(0, 45), makerName, false);
    document.querySelectorAll('#cside .facet .ft').forEach(function (f) { f.onclick = function () { f.parentNode.classList.toggle('open'); }; });
    document.querySelectorAll('#cside .opt input').forEach(function (i) {
      i.onchange = function () { var k = i.dataset.k, v = i.dataset.v; if (i.checked) F[k].add(v); else F[k].delete(v); render(); };
    });
    document.getElementById('cclr').onclick = function () {
      F = { category: new Set(), country: new Set(), maker: new Set() }; q = '';
      var qq = document.getElementById('cq'); if (qq) qq.value = ''; render();
    };
  }

  function render() {
    var rows = filtered(), ch = [];
    ['category', 'country', 'maker'].forEach(function (k) {
      F[k].forEach(function (v) { ch.push('<span class="rchip" data-k="' + k + '" data-v="' + esc(v) + '">' + esc(k === 'maker' ? makerName(v) : v) + ' ×</span>'); });
    });
    document.getElementById('cchips').innerHTML = ch.join('');
    document.querySelectorAll('#cchips .rchip').forEach(function (c) { c.onclick = function () { F[c.dataset.k].delete(c.dataset.v); render(); }; });
    document.getElementById('ccnt').textContent = rows.length + ' of ' + C.length + ' components';
    var countEl = document.querySelector('[data-count]'); if (countEl) countEl.textContent = C.length;
    var el = document.getElementById('cresults');
    if (view === 'cards') {
      el.className = 'rgrid';
      el.innerHTML = rows.map(function (k) {
        var im = k.img ? '<img src="' + esc(k.img) + '" loading="lazy" onerror="this.parentNode.innerHTML=\'<span class=ph>no image</span>\'">' : '<span class="ph">no image</span>';
        return '<div class="rtile" data-s="' + esc(k.id) + '"><div class="im">' + im + '</div>' +
          '<div class="b"><div class="n">' + esc(k.name) + '</div><div class="mk">' + esc(makerName(k.maker)) + '</div>' +
          '<div class="rbadges"><span class="rbadge">' + esc(k.category) + '</span><span class="rbadge">' + esc(k.flag) + ' ' + esc(k.country) + '</span></div></div></div>';
      }).join('') || '<p style="color:var(--ink-3)">No components match these filters.</p>';
    } else {
      el.className = '';
      el.innerHTML = '<div style="overflow-x:auto"><table class="tbl"><thead><tr><th style="width:76px"></th><th>Component</th><th>Maker</th><th>Category</th><th>Origin</th><th>Spec</th><th>Used in</th></tr></thead><tbody>' +
        rows.map(function (k) {
          var th = k.img ? '<img src="' + esc(k.img) + '" loading="lazy" style="width:64px;height:64px;object-fit:contain;background:#eef1f5;border-radius:8px" onerror="this.style.visibility=\'hidden\'">' : '<div style="width:64px;height:64px;background:#eef1f5;border-radius:8px"></div>';
          var usedN = (k.used_in || []).length;
          return '<tr data-s="' + esc(k.id) + '" style="cursor:pointer"><td>' + th + '</td><td><b>' + esc(k.name) + '</b></td><td>' + esc(makerName(k.maker)) + '</td><td style="white-space:nowrap">' + esc(k.category) + '</td><td style="white-space:nowrap">' + esc(k.flag) + ' ' + esc(k.country) + '</td><td style="font-size:12.5px;color:var(--ink-2)">' + esc(k.spec || '—') + '</td><td style="white-space:nowrap">' + (usedN ? usedN + ' robot' + (usedN > 1 ? 's' : '') : '—') + '</td></tr>';
        }).join('') + '</tbody></table></div>';
    }
    el.querySelectorAll('[data-s]').forEach(function (t) { t.onclick = function () { openCModal(t.dataset.s); }; });
    buildSide();
  }

  window.openCModal = function (id) {
    var k = C.find(function (x) { return x.id === id; }); if (!k) return;
    var maker = makerObj(k.maker);
    var specs = [['Category', k.category], ['Origin', (k.flag || '') + ' ' + (k.country || '')], ['Spec', k.spec]]
      .filter(function (s) { return s[1] && String(s[1]).trim() !== '' && s[1] !== '—'; });
    var specHtml = '<div class="sect"><h4>Specification</h4><div class="specgrid">' + specs.map(function (s) {
      return '<div class="spec"><div class="k">' + s[0] + '</div><div class="v">' + esc(String(s[1])) + '</div></div>';
    }).join('') + '</div></div>';
    var usedIn = (k.used_in || []).map(function (rid) {
      var r = (D.robotsX || []).find(function (x) { return x.slug === rid; });
      return r ? '<a class="rbadge" href="robots.html?id=' + esc(r.slug) + '" style="text-decoration:none">' + esc(r.name) + '</a>' : '';
    }).filter(Boolean).join(' ');
    document.getElementById('cmodal').innerHTML =
      '<div class="mh"><div><h2>' + esc(k.name) + '</h2><div class="crumb">' + esc(makerName(k.maker)) + ' · ' + esc(k.category || '') + ' · ' + esc(k.flag) + ' ' + esc(k.country) + '</div></div>' +
      '<div class="acts"><button class="btn" id="cmprof">View full profile →</button><button class="btn btn--ghost" id="cmclose">×</button></div></div>' +
      '<div class="mhero">' + (k.img ? '<img src="' + esc(k.img) + '" onerror="this.parentNode.innerHTML=\'<span style=color:#8895a4;font-family:monospace;font-size:12px>no image available</span>\'">' : '<span style="color:#8895a4;font-family:monospace;font-size:12px">no image available</span>') + '</div>' +
      '<div class="mb"><div class="sect"><h4>Overview</h4><p style="font-size:14.5px;color:var(--ink-2)">' + esc(k.summary || 'No description recorded yet.') + '</p></div>' + specHtml +
      (usedIn ? '<div class="sect"><h4>Used in</h4><div class="rbadges">' + usedIn + '</div></div>' : '') +
      (maker ? '<div class="sect"><h4>Maker</h4><p style="font-size:14px"><a href="companies.html?id=' + maker.id + '" style="color:var(--blue)">' + esc(maker.name) + ' — view company profile →</a></p></div>' : '') +
      '</div>';
    document.getElementById('cmprof').onclick = function () { openCProfile(k.id); };
    document.getElementById('cmclose').onclick = closeCModal;
    document.getElementById('cov').classList.add('show');
  };
  function closeCModal() { document.getElementById('cov').classList.remove('show'); }
  window.closeCModal = closeCModal;

  var CTABS = { overview: 'Overview', usedin: 'Used in', context: 'Context' };
  window.openCProfile = function (id) {
    var k = C.find(function (x) { return x.id === id; }); if (!k) return;
    closeCModal();
    var maker = makerObj(k.maker);
    var tabs = ['overview'];
    if ((k.used_in || []).length) tabs.push('usedin');
    tabs.push('context');
    document.title = k.name + ' — behindrobotics.com';
    try { history.replaceState(null, '', 'components.html?id=' + encodeURIComponent(k.id)); } catch (e) {}
    var clv = document.getElementById('clistView'); if (clv) clv.style.display = 'none';
    var pv = document.getElementById('cprofView'); pv.classList.add('show');
    pv.innerHTML = '<div class="ptop"><div class="back" id="cpback">← Back to components</div><h1>' + esc(k.name) + '</h1>' +
      '<div class="crumb">' + esc(makerName(k.maker)) + ' · ' + esc(k.category || '') + ' · ' + esc(k.flag) + ' ' + esc(k.country) +
      (maker ? ' &nbsp;·&nbsp; <a href="companies.html?id=' + esc(maker.id) + '" style="color:#8fb6f5">Visit ' + esc(maker.name) + '’s company profile →</a>' : '') + '</div></div>' +
      '<div class="rtabs" id="cptabs">' + tabs.map(function (t, i) { return '<button data-t="' + t + '"' + (i === 0 ? ' class="on"' : '') + '>' + CTABS[t] + '</button>'; }).join('') + '</div><div class="pbody" id="cpbody"></div>';
    document.getElementById('cpback').onclick = function () { pv.classList.remove('show'); if (clv) clv.style.display = ''; window.scrollTo(0, 0); document.title = 'Components — behindrobotics.com'; try { history.replaceState(null, '', 'components.html'); } catch (e) {} };
    document.querySelectorAll('#cptabs button').forEach(function (b) {
      b.onclick = function () { document.querySelectorAll('#cptabs button').forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on'); drawCTab(k, b.dataset.t); };
    });
    drawCTab(k, 'overview'); window.scrollTo(0, 0);
  };

  function drawCTab(k, t) {
    var b = document.getElementById('cpbody'), h = '';
    var maker = makerObj(k.maker);
    if (t === 'overview') {
      if (k.img) h += '<div class="mhero" style="max-width:420px;border-radius:14px;border:1px solid var(--line);margin-bottom:20px"><img src="' + esc(k.img) + '" onerror="this.parentNode.style.display=\'none\'"></div>';
      h += '<div class="sect"><h4>Overview</h4><p style="font-size:15px;color:var(--ink-2)">' + esc(k.summary || 'No description recorded yet.') + '</p></div>';
      var specs = [['Category', k.category], ['Origin', (k.flag || '') + ' ' + (k.country || '')], ['Spec', k.spec]].filter(function (s) { return s[1] && String(s[1]).trim() !== '' && s[1] !== '—'; });
      h += '<div class="sect"><h4>Specification</h4><div class="specgrid">' + specs.map(function (s) { return '<div class="spec"><div class="k">' + s[0] + '</div><div class="v">' + esc(String(s[1])) + '</div></div>'; }).join('') + '</div></div>';
    } else if (t === 'usedin') {
      var robots = (k.used_in || []).map(function (rid) { return (D.robotsX || []).find(function (x) { return x.slug === rid; }); }).filter(Boolean);
      if (robots.length) h += '<div class="sect"><h4>Robots using this component (' + robots.length + ')</h4><div class="cmp">' + robots.map(function (r) {
        var ci = r.img ? '<img src="' + esc(r.img) + '" loading="lazy" class="cmpimg" onerror="this.style.display=\'none\'">' : '';
        return '<div class="cmpc" data-r="' + esc(r.slug) + '">' + ci + '<div class="n">' + esc(r.name) + '</div><div style="font-size:11.5px;color:var(--ink-3)">' + esc(r.maker) + '</div></div>';
      }).join('') + '</div></div>';
      else h = '<p style="color:var(--ink-3)">No linked robots yet.</p>';
    } else if (t === 'context') {
      var peers = C.filter(function (x) { return x.id !== k.id && x.category === k.category; }).slice(0, 12);
      if (peers.length) h += '<div class="sect"><h4>Other ' + esc(k.category || 'components') + ' — ' + peers.length + ' tracked</h4><div class="cmp">' + peers.map(function (p) {
        var ci = p.img ? '<img src="' + esc(p.img) + '" loading="lazy" class="cmpimg" onerror="this.style.display=\'none\'">' : '';
        return '<div class="cmpc" data-c="' + esc(p.id) + '">' + ci + '<div class="n">' + esc(p.name) + '</div><div style="font-size:11.5px;color:var(--ink-3)">' + esc(makerName(p.maker)) + '</div></div>';
      }).join('') + '</div></div>';
      var same = C.filter(function (x) { return x.id !== k.id && x.maker === k.maker; }).slice(0, 12);
      if (same.length) h += '<div class="sect"><h4>Other components from ' + esc(makerName(k.maker)) + '</h4><div class="cmp">' + same.map(function (p) {
        var ci2 = p.img ? '<img src="' + esc(p.img) + '" loading="lazy" class="cmpimg" onerror="this.style.display=\'none\'">' : '';
        return '<div class="cmpc" data-c="' + esc(p.id) + '">' + ci2 + '<div class="n">' + esc(p.name) + '</div><div style="font-size:11.5px;color:var(--ink-3)">' + esc(p.category) + '</div></div>';
      }).join('') + '</div></div>';
      if (!peers.length && !same.length) h = '<p style="color:var(--ink-3)">No comparable records yet.</p>';
      if (maker) h += '<div class="sect"><p style="font-size:13px;color:var(--ink-3)">Figures as recorded by behindrobotics.com from component and supplier data. Verify before citing.</p></div>';
    }
    b.innerHTML = h || '<p style="color:var(--ink-3)">No records yet.</p>';
    b.querySelectorAll('[data-c]').forEach(function (el) { el.onclick = function () { openCProfile(el.dataset.c); }; });
    b.querySelectorAll('[data-r]').forEach(function (el) { el.onclick = function () { location.href = 'robots.html?id=' + el.dataset.r; }; });
  }

  var qEl = document.getElementById('cq'); if (qEl) qEl.oninput = function (e) { q = e.target.value; render(); };
  var vc = document.getElementById('cvCards'), vt = document.getElementById('cvTable');
  if (vc) vc.onclick = function () { view = 'cards'; vc.classList.add('on'); vt.classList.remove('on'); render(); };
  if (vt) vt.onclick = function () { view = 'table'; vt.classList.add('on'); vc.classList.remove('on'); render(); };
  if (C.length && document.getElementById('cresults')) render();

  // Deep-link: components.html?id=<id> opens straight to that part's full profile.
  (function () {
    try {
      var pid = new URLSearchParams(location.search).get('id');
      if (pid && C.some(function (x) { return x.id === pid; })) openCProfile(pid);
    } catch (e) {}
  })();
})();
