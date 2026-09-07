/* behindrobotics.com — Database Map: multi-entity country nodes + relation arcs */
(function () {
  var D = window.RH_DATA || {}, M = D.map || { nodes: [], arcs: [], total: {} };
  var LAYERS = [
    { k: 'companies',   label: 'Companies',   color: '#1f6feb' },
    { k: 'robots',      label: 'Robots',      color: '#7c3aed' },
    { k: 'components',  label: 'Components',  color: '#0891b2' },
    { k: 'events',      label: 'Events',      color: '#d97706' },
    { k: 'regulations', label: 'Regulation',  color: '#059669' },
    { k: 'capital',     label: 'Capital',     color: '#eab308' },
    { k: 'arcs',        label: 'Supply links', color: '#be123c' }
  ];
  var on = { companies: true, robots: false, components: false, events: false, regulations: false, capital: false, arcs: true };
  var sel = null;
  function esc(s) { return String(s == null ? '' : s).replace(/[<>&]/g, function (c) { return { '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]; }); }
  // equirectangular projection into the 1000x500 viewBox
  function px(lng) { return (lng + 180) / 360 * 1000; }
  function py(lat) { return (90 - lat) / 180 * 500; }

  function drawLayers() {
    document.getElementById('layers').innerHTML = LAYERS.map(function (l) {
      return '<button class="lbtn l-' + l.k + (on[l.k] ? ' on' : '') + '" data-l="' + l.k + '">' +
        '<span class="dot" style="background:' + (on[l.k] ? '#fff' : l.color) + '"></span>' + l.label + '</button>';
    }).join('');
    document.querySelectorAll('.lbtn').forEach(function (b) { b.onclick = function () { on[b.dataset.l] = !on[b.dataset.l]; drawLayers(); draw(); }; });
    var t = M.total || {};
    document.getElementById('mapstats').textContent =
      (t.companies || 0) + ' companies · ' + (t.robots || 0) + ' robots · ' + (t.components || 0) + ' components · ' +
      (t.regulations || 0) + ' regulations · ' + (t.capitalUsdM ? '$' + (t.capitalUsdM/1000).toFixed(1) + 'B capital · ' : '') + M.nodes.length + ' countries';
  }

  function activeKeys() { return LAYERS.filter(function (l) { return l.k !== 'arcs' && l.k !== 'capital' && on[l.k]; }).map(function (l) { return l.k; }); }
  function nodeTotal(n) { return activeKeys().reduce(function (s, k) { return s + (n[k] || 0); }, 0); }
  var yearFilter = null;
  function capFor(n) {
    if (!yearFilter) return n.capitalUsdM || 0;
    return ((D.capital && D.capital.rounds) || []).filter(function (r) { return r.country === n.country && r.year === yearFilter; })
      .reduce(function (s, r) { return s + r.usdM; }, 0);
  }
  function fmtM(v) { return v >= 1000 ? '$' + (v / 1000).toFixed(1) + 'B' : '$' + Math.round(v) + 'M'; }

  function draw() {
    var svg = document.getElementById('worldmap');
    var keys = activeKeys();
    var max = Math.max.apply(null, M.nodes.map(nodeTotal).concat([1]));
    var out = '<rect x="0" y="0" width="1000" height="500" fill="none"/>';
    // graticule for orientation
    for (var la = -60; la <= 60; la += 30) out += '<line x1="0" y1="' + py(la) + '" x2="1000" y2="' + py(la) + '" stroke="#1b2butF" stroke-opacity="0" />';
    out += '<g stroke="#1e2c44" stroke-width=".5" opacity=".55">';
    for (var g = -150; g <= 150; g += 30) out += '<line x1="' + px(g) + '" y1="0" x2="' + px(g) + '" y2="500"/>';
    for (var h = -60; h <= 60; h += 30) out += '<line x1="0" y1="' + py(h) + '" x2="1000" y2="' + py(h) + '"/>';
    out += '</g>';
    // arcs
    if (on.arcs) {
      (M.arcs || []).forEach(function (a) {
        var x1 = px(a.fromLng), y1 = py(a.fromLat), x2 = px(a.toLng), y2 = py(a.toLat);
        var mx = (x1 + x2) / 2, my = (y1 + y2) / 2 - Math.abs(x2 - x1) * 0.28;
        out += '<path class="arc" d="M' + x1.toFixed(1) + ',' + y1.toFixed(1) + ' Q' + mx.toFixed(1) + ',' + my.toFixed(1) + ' ' + x2.toFixed(1) + ',' + y2.toFixed(1) + '"><title>' + esc(a.fromName + ' → ' + a.toName + ' (' + a.type + ')') + '</title></path>';
      });
    }
    // capital layer — golden bubbles sized by money raised
    if (on.capital) {
      var caps = M.nodes.map(capFor);
      var capMax = Math.max.apply(null, caps.concat([1]));
      M.nodes.forEach(function (n) {
        var v = capFor(n); if (!v) return;
        var x = px(n.lng), y = py(n.lat);
        var r = 6 + Math.sqrt(v / capMax) * 38;
        out += '<g class="node" data-c="' + esc(n.country) + '">' +
          '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + r.toFixed(1) + '" fill="#eab308" fill-opacity=".22" stroke="#eab308" stroke-width="1.5"/>' +
          '<text class="captext" x="' + x.toFixed(1) + '" y="' + (y + 3.5).toFixed(1) + '" text-anchor="middle">' + fmtM(v) + '</text>' +
          '<title>' + esc(n.country) + ' — ' + fmtM(v) + ' raised across ' + (n.rounds || 0) + ' tracked rounds</title></g>';
      });
    }
    // nodes — stacked rings, one ring per active layer
    M.nodes.forEach(function (n) {
      var tot = nodeTotal(n); if (!tot) return;
      var x = px(n.lng), y = py(n.lat);
      var base = 5 + Math.sqrt(tot / max) * 30;
      var acc = 0;
      out += '<g class="node" data-c="' + esc(n.country) + '">';
      keys.slice().reverse().forEach(function (k) {
        var l = LAYERS.filter(function (z) { return z.k === k; })[0];
        acc += (n[k] || 0);
        var r = 5 + Math.sqrt(acc / max) * 30;
        out += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + r.toFixed(1) + '" fill="' + l.color + '" fill-opacity=".5" stroke="' + l.color + '" stroke-width="1"/>';
      });
      out += '<title>' + esc(n.country) + ' — ' + keys.map(function (k) { return (n[k] || 0) + ' ' + k; }).join(', ') + '</title>';
      if (base > 13) out += '<text class="nlabel" x="' + x.toFixed(1) + '" y="' + (y + base + 11).toFixed(1) + '" text-anchor="middle">' + esc(n.country) + '</text>';
      out += '</g>';
    });
    svg.innerHTML = out;
    svg.querySelectorAll('.node').forEach(function (g2) { g2.onclick = function () { drill(g2.dataset.c); }; });
    document.getElementById('legend').innerHTML = 'Circle size = entities tracked · click a country to drill in' +
      (on.arcs && (M.arcs || []).length ? '<br>Dashed lines = confirmed supply relationships' : '') +
      (on.capital ? '<br><span style="color:#eab308">Gold bubbles = capital raised</span>' : '');
    var sc = document.getElementById('scrub');
    if (sc) {
      if (on.capital && D.capital && D.capital.years.length) {
        var ys = D.capital.years;
        sc.style.display = 'flex';
        sc.innerHTML = '<span class="mono" style="font-size:11px;color:var(--ink-3)">Funding year</span>' +
          '<button class="ybtn' + (yearFilter === null ? ' on' : '') + '" data-y="">All</button>' +
          ys.map(function (y) { return '<button class="ybtn' + (yearFilter === y ? ' on' : '') + '" data-y="' + y + '">' + y + '</button>'; }).join('');
        sc.querySelectorAll('.ybtn').forEach(function (b) { b.onclick = function () { yearFilter = b.dataset.y ? parseInt(b.dataset.y) : null; draw(); }; });
      } else { sc.style.display = 'none'; sc.innerHTML = ''; }
    }
    drawRanks();
  }

  function drawRanks() {
    var keys = activeKeys();
    var capCard = '';
    if (on.capital && D.capital) {
      var cr = M.nodes.map(function (n) { return { country: n.country, v: capFor(n) }; }).filter(function (x) { return x.v; }).sort(function (a, b) { return b.v - a.v; }).slice(0, 8);
      if (cr.length) {
        var cm = cr[0].v;
        capCard = '<div class="rankcard"><h4>Capital raised by country' + (yearFilter ? ' — ' + yearFilter : '') + '</h4>' + cr.map(function (n, i) {
          return '<div class="rrow" data-c="' + esc(n.country) + '"><span class="rk">' + (i + 1) + '</span><span>' + esc(n.country) +
            '<div class="bar"><div class="bf" style="width:' + (n.v / cm * 100).toFixed(0) + '%;background:#eab308"></div></div></span><b>' + fmtM(n.v) + '</b></div>';
        }).join('') + '</div>';
      }
    }
    if (!keys.length && !capCard) { document.getElementById('ranks').innerHTML = ''; return; }
    document.getElementById('ranks').innerHTML = capCard + keys.map(function (k) {
      var l = LAYERS.filter(function (z) { return z.k === k; })[0];
      var top = M.nodes.slice().sort(function (a, b) { return (b[k] || 0) - (a[k] || 0); }).filter(function (n) { return n[k]; }).slice(0, 8);
      if (!top.length) return '';
      var mx = top[0][k];
      return '<div class="rankcard"><h4>' + l.label + ' by country</h4>' + top.map(function (n, i) {
        return '<div class="rrow" data-c="' + esc(n.country) + '"><span class="rk">' + (i + 1) + '</span>' +
          '<span>' + esc(n.country) + '<div class="bar"><div class="bf" style="width:' + (n[k] / mx * 100).toFixed(0) + '%;background:' + l.color + '"></div></div></span>' +
          '<b>' + n[k] + '</b></div>';
      }).join('') + '</div>';
    }).join('');
    document.querySelectorAll('.rrow').forEach(function (r) { r.onclick = function () { drill(r.dataset.c); }; });
  }

  function drill(country) {
    var n = M.nodes.filter(function (x) { return x.country === country; })[0];
    if (!n) return;
    sel = country;
    var it = n.items || {};
    function list(k, label, href) {
      var arr = (it[k] || []).filter(Boolean);
      if (!arr.length) return '';
      var more = (n[k] || 0) - arr.length;
      return '<div style="margin-top:14px"><h4 style="font-family:\'IBM Plex Mono\',monospace;font-size:10.5px;text-transform:uppercase;letter-spacing:.06em;color:var(--ink-3);margin-bottom:6px">' + label + ' (' + (n[k] || 0) + ')</h4>' +
        '<div class="dlist">' + arr.map(esc).join(' · ') + (more > 0 ? ' <span style="color:var(--ink-3)">+' + more + ' more</span>' : '') +
        (href ? ' — <a href="' + href + '">open in database →</a>' : '') + '</div></div>';
    }
    document.getElementById('drill').innerHTML =
      '<div class="drillbox"><h3>' + n.flag + ' ' + esc(country) + '</h3>' +
      '<div class="dstats">' + LAYERS.filter(function (l) { return l.k !== 'arcs'; }).map(function (l) {
        return '<div class="dstat"><div class="k">' + l.label + '</div><div class="v" style="color:' + l.color + '">' + (n[l.k] || 0) + '</div></div>'; }).join('') + '</div>' +
      list('companies', 'Companies', 'companies.html?country=' + encodeURIComponent(country)) +
      list('robots', 'Robots', 'robots.html') +
      list('components', 'Components', 'components.html?country=' + encodeURIComponent(country)) +
      list('events', 'Events', 'events.html') +
      list('regulations', 'Regulation', 'regulation.html') +
      (function () {
        var rr = ((D.capital && D.capital.rounds) || []).filter(function (x) { return x.country === country; }).sort(function (a, b) { return b.usdM - a.usdM; });
        if (!rr.length) return '';
        var tot = rr.reduce(function (s, x) { return s + x.usdM; }, 0);
        return '<div style="margin-top:16px"><h4 style="font-family:\'IBM Plex Mono\',monospace;font-size:10.5px;text-transform:uppercase;letter-spacing:.06em;color:var(--ink-3);margin-bottom:8px">Capital — ' + fmtM(tot) + ' across ' + rr.length + ' tracked rounds</h4>' +
          '<div class="caprows">' + rr.slice(0, 12).map(function (x) {
            return '<div class="caprow"><span>' + esc(x.company) + '</span><span class="mono" style="color:#a16207">' + fmtM(x.usdM) + (x.date ? ' · ' + esc(x.date) : '') + '</span></div>'; }).join('') +
          '</div>' + (rr.length > 12 ? '<div style="font-size:12px;color:var(--ink-3);margin-top:6px">+' + (rr.length - 12) + ' more</div>' : '') +
          ' <a href="investment.html" style="font-size:12.5px">open Investment →</a></div>';
      })() +
      '</div>';
    document.getElementById('drill').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  drawLayers(); draw();
})();
