/* behindrobotics.com — Database Map: multi-entity country nodes + relation arcs */
(function () {
  var D = window.RH_DATA || {}, M = D.map || { nodes: [], arcs: [], total: {} };
  var LAYERS = [
    { k: 'companies',   label: 'Companies',   color: '#1f6feb' },
    { k: 'robots',      label: 'Robots',      color: '#7c3aed' },
    { k: 'components',  label: 'Components',  color: '#0891b2' },
    { k: 'events',      label: 'Events',      color: '#d97706' },
    { k: 'regulations', label: 'Regulation',  color: '#059669' },
    { k: 'capital',     label: 'Capital',     color: '#ca8a04' },
    { k: 'arcs',        label: 'Supply links', color: '#be123c' }
  ];
  var DEFAULT_ON = { companies: true, robots: false, components: false, events: false, regulations: false, capital: false, arcs: true, heatmap: true };
  var on = {}; Object.keys(DEFAULT_ON).forEach(function (k) { on[k] = DEFAULT_ON[k]; });
  var sel = null;
  var LAND = window.RH_LAND || [];
  var COMPANIES = D.companies || [];
  var nodeByCountry = {};
  M.nodes.forEach(function (n) { nodeByCountry[n.country] = n; });
  function segmentMix(country) {
    var m = {};
    COMPANIES.forEach(function (c) { if (c.country === country && c.vertical) m[c.vertical] = (m[c.vertical] || 0) + 1; });
    return Object.keys(m).map(function (v) { return { vertical: v, n: m[v] }; }).sort(function (a, b) { return b.n - a.n; });
  }
  var ranksView = 'country';
  function esc(s) { return String(s == null ? '' : s).replace(/[<>&]/g, function (c) { return { '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]; }); }
  // equirectangular projection into the 1000x500 viewBox
  function px(lng) { return (lng + 180) / 360 * 1000; }
  function py(lat) { return (90 - lat) / 180 * 500; }
  // sequential blue scale for the heatmap: t in [0,1] -> pale (low) through deep blue (high)
  function heatColor(t) {
    var sat = 25 + t * 60, light = 92 - t * 57;
    return 'hsl(213,' + sat.toFixed(0) + '%,' + light.toFixed(0) + '%)';
  }

  function drawLayers() {
    document.getElementById('layers').innerHTML = LAYERS.map(function (l) {
      return '<button class="lbtn l-' + l.k + (on[l.k] ? ' on' : '') + '" data-l="' + l.k + '">' +
        '<span class="dot" style="background:' + (on[l.k] ? '#fff' : l.color) + '"></span>' + l.label + '</button>';
    }).join('') + '<button class="lbtn heat' + (on.heatmap ? ' on' : '') + '" data-l="heatmap">' +
      '<span class="dot" style="background:' + (on.heatmap ? '#fff' : '#1f6feb') + '"></span>Heatmap</button>';
    document.querySelectorAll('.lbtn').forEach(function (b) { b.onclick = function () { on[b.dataset.l] = !on[b.dataset.l]; drawLayers(); draw(); }; });
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
  function fmtN(v) { return v >= 1000 ? (v / 1000).toFixed(1) + 'k' : String(v); }

  function drawStats() {
    var t = M.total || {};
    var keys = activeKeys();
    var totals = M.nodes.map(function (n) { return { n: n, v: nodeTotal(n) }; }).filter(function (x) { return x.v; }).sort(function (a, b) { return b.v - a.v; });
    var grand = totals.reduce(function (s, x) { return s + x.v; }, 0) || 1;
    var top5 = totals.slice(0, 5).reduce(function (s, x) { return s + x.v; }, 0);
    var top5share = grand ? (top5 / grand * 100) : 0;
    var topCountry = totals[0] ? totals[0].n : null;
    var catTotals = ['companies', 'robots', 'components', 'events', 'regulations'].map(function (k) { return { k: k, v: t[k] || 0 }; });
    var catGrand = catTotals.reduce(function (s, x) { return s + x.v; }, 0) || 1;
    var topCat = catTotals.sort(function (a, b) { return b.v - a.v; })[0];
    var topCatLabel = (LAYERS.filter(function (l) { return l.k === topCat.k; })[0] || {}).label || topCat.k;

    var cards = [
      { k: 'Active countries', v: M.nodes.length, s: 'Countries with tracked entities' },
      { k: 'Tracked companies', v: fmtN(t.companies || 0), s: 'Company profiles in the database' },
      { k: 'Top-5 share', v: top5share.toFixed(1) + '%', s: 'Of ' + (keys.join(' + ') || 'selected layers') + ' concentration' },
      { k: 'Top country', v: topCountry ? (topCountry.flag + ' ' + topCountry.country) : '—', s: topCountry ? nodeTotal(topCountry) + ' tracked in view' : 'No data for this view' },
      { k: 'Top category', v: topCatLabel, s: (catTotals[0].v / catGrand * 100).toFixed(1) + '% of tracked entities' }
    ];
    document.getElementById('mapstatrow').innerHTML = cards.map(function (c) {
      return '<div class="statcard"><div class="k">' + esc(c.k) + '</div><div class="v">' + c.v + '</div><div class="s">' + esc(c.s) + '</div></div>';
    }).join('');
  }

  function draw() {
    var svg = document.getElementById('worldmap');
    var keys = activeKeys();
    var max = Math.max.apply(null, M.nodes.map(nodeTotal).concat([1]));
    var out = '<rect x="0" y="0" width="1000" height="500" fill="none"/>';
    // landmass — real country geometry, optionally tinted as a choropleth heatmap
    out += '<g class="landg">';
    LAND.forEach(function (c) {
      var n = nodeByCountry[c.n];
      var attrs = '';
      if (on.heatmap && n) {
        var tot = nodeTotal(n);
        if (tot) attrs += ' style="fill:' + heatColor(Math.sqrt(tot / max)) + '"';
      }
      out += '<path class="land"' + (n ? ' data-c="' + esc(c.n) + '"' : '') + attrs + ' d="' + c.d + '">' +
        (n ? '<title>' + esc(c.n) + '</title>' : '') + '</path>';
    });
    out += '</g>';
    // graticule for faint orientation
    out += '<g stroke="#c2ccd6" stroke-width=".5" opacity=".5">';
    for (var g = -150; g <= 150; g += 30) out += '<line x1="' + px(g) + '" y1="0" x2="' + px(g) + '" y2="500"/>';
    for (var h = -60; h <= 60; h += 30) out += '<line x1="0" y1="' + py(h) + '" x2="1000" y2="' + py(h) + '"/>';
    out += '</g>';
    // arcs — grouped by endpoint pair so multiple relations fan out instead of stacking,
    // and same-country (domestic) records are skipped since they can't be drawn as a route
    var arcList = [];
    if (on.arcs) {
      arcList = (M.arcs || []).filter(function (a) { return a.fromLat !== a.toLat || a.fromLng !== a.toLng; });
      var groups = {};
      arcList.forEach(function (a) {
        var key = a.fromLat + ',' + a.fromLng + '|' + a.toLat + ',' + a.toLng;
        (groups[key] = groups[key] || []).push(a);
      });
      Object.keys(groups).forEach(function (key) {
        var arr = groups[key];
        arr.forEach(function (a, idx) {
          var x1 = px(a.fromLng), y1 = py(a.fromLat), x2 = px(a.toLng), y2 = py(a.toLat);
          var dx = x2 - x1, dy = y2 - y1, dist = Math.sqrt(dx * dx + dy * dy) || 1;
          var nx = -dy / dist, ny = dx / dist;
          var bow = dist * 0.22;
          var spread = (idx - (arr.length - 1) / 2) * 16;
          var mx = (x1 + x2) / 2 + nx * (bow + spread), my = (y1 + y2) / 2 + ny * (bow + spread);
          out += '<path class="arc" d="M' + x1.toFixed(1) + ',' + y1.toFixed(1) + ' Q' + mx.toFixed(1) + ',' + my.toFixed(1) + ' ' + x2.toFixed(1) + ',' + y2.toFixed(1) + '"><title>' + esc(a.fromName + ' → ' + a.toName + ' (' + a.type + ')') + '</title></path>';
        });
      });
    }
    // capital layer — gold bubbles sized by money raised
    if (on.capital) {
      var caps = M.nodes.map(capFor);
      var capMax = Math.max.apply(null, caps.concat([1]));
      M.nodes.forEach(function (n) {
        var v = capFor(n); if (!v) return;
        var x = px(n.lng), y = py(n.lat);
        var r = 6 + Math.sqrt(v / capMax) * 38;
        out += '<g class="node" data-c="' + esc(n.country) + '">' +
          '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + r.toFixed(1) + '" fill="#eab308" fill-opacity=".25" stroke="#ca8a04" stroke-width="1.5"/>' +
          '<text class="captext" x="' + x.toFixed(1) + '" y="' + (y + 3.5).toFixed(1) + '" text-anchor="middle">' + fmtM(v) + '</text>' +
          '<title>' + esc(n.country) + ' — ' + fmtM(v) + ' raised across ' + (n.rounds || 0) + ' tracked rounds</title></g>';
      });
    }
    // nodes — heatmap mode: invisible hit-targets only (the choropleth fill IS the encoding);
    // bubble mode: stacked rings, one ring per active layer
    M.nodes.forEach(function (n) {
      var tot = nodeTotal(n); if (!tot) return;
      var x = px(n.lng), y = py(n.lat);
      var base = 5 + Math.sqrt(tot / max) * 30;
      out += '<g class="node" data-c="' + esc(n.country) + '">';
      if (on.heatmap) {
        out += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="12" fill="#000" fill-opacity="0"/>';
      } else {
        var acc = 0;
        keys.slice().reverse().forEach(function (k) {
          var l = LAYERS.filter(function (z) { return z.k === k; })[0];
          acc += (n[k] || 0);
          var r = 5 + Math.sqrt(acc / max) * 30;
          out += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + r.toFixed(1) + '" fill="' + l.color + '" fill-opacity=".55" stroke="' + l.color + '" stroke-width="1"/>';
        });
      }
      out += '<title>' + esc(n.country) + ' — ' + keys.map(function (k) { return (n[k] || 0) + ' ' + k; }).join(', ') + '</title>';
      if (!on.heatmap && base > 13) out += '<text class="nlabel" x="' + x.toFixed(1) + '" y="' + (y + base + 11).toFixed(1) + '" text-anchor="middle">' + esc(n.country) + '</text>';
      out += '</g>';
    });
    svg.innerHTML = out;

    // hover popup — basic filtered info for the country under the pointer
    var tip = document.getElementById('maptip');
    var wrap = svg.closest('.mapwrap');
    function tipHtml(country) {
      var n = nodeByCountry[country]; if (!n) return '';
      var rows = keys.map(function (k) {
        var l = LAYERS.filter(function (z) { return z.k === k; })[0];
        return '<div class="tr"><span>' + esc(l.label) + '</span><b>' + (n[k] || 0) + '</b></div>';
      }).join('');
      var cap = capFor(n);
      if (cap) rows += '<div class="tr"><span>Capital raised</span><b>' + fmtM(cap) + '</b></div>';
      return '<b>' + (n.flag || '') + ' ' + esc(country) + '</b>' + rows;
    }
    function showTip(country, e) {
      var html = tipHtml(country);
      if (!html || !tip || !wrap) return;
      tip.innerHTML = html;
      tip.classList.add('show');
      moveTip(e);
    }
    function moveTip(e) {
      if (!tip || !wrap) return;
      var r = wrap.getBoundingClientRect();
      tip.style.left = (e.clientX - r.left) + 'px';
      tip.style.top = (e.clientY - r.top) + 'px';
    }
    function hideTip() { if (tip) tip.classList.remove('show'); }
    svg.querySelectorAll('.node, .land[data-c]').forEach(function (g2) {
      g2.onclick = function () { drill(g2.dataset.c); };
      g2.addEventListener('mouseenter', function (e) { showTip(g2.dataset.c, e); });
      g2.addEventListener('mousemove', moveTip);
      g2.addEventListener('mouseleave', hideTip);
    });

    // legend / footer strip under the map
    var mapfoot = on.heatmap ? 'Shade = entities tracked · hover for details · click a country to drill in' : 'Circle size = entities tracked · click a country to drill in';
    if (on.heatmap) {
      var sw = [0.08, 0.3, 0.5, 0.7, 0.92].map(function (t) { return '<span class="sw" style="background:' + heatColor(t) + '"></span>'; }).join('');
      mapfoot += '<span class="heatlegend">Lower' + sw + 'Higher</span>';
    }
    if (on.arcs && arcList.length) mapfoot += '<span class="fdot" style="background:#be123c"></span>Confirmed supply relationships';
    if (on.capital) mapfoot += '<span class="fdot" style="background:#eab308"></span>Capital raised';
    document.getElementById('mapfoot').innerHTML = mapfoot;

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
    drawStats();
    drawRanks();
  }

  var COUNTRY_HREF = { companies: 'companies.html?country=', robots: 'robots.html?country=', components: 'components.html?country=' };

  function drawRanksHead() {
    var el = document.getElementById('rankspivot');
    if (!el) return;
    el.innerHTML = '<button data-v="country"' + (ranksView === 'country' ? ' class="on"' : '') + '>By country</button>' +
      '<button data-v="company"' + (ranksView === 'company' ? ' class="on"' : '') + '>By company</button>';
    el.querySelectorAll('button').forEach(function (b) { b.onclick = function () { ranksView = b.dataset.v; drawRanks(); }; });
  }

  function drawCompanyLeaders() {
    var byCo = {};
    ((D.capital && D.capital.rounds) || []).forEach(function (r) {
      byCo[r.company] = (byCo[r.company] || 0) + r.usdM;
    });
    var top = Object.keys(byCo).map(function (name) { return { name: name, v: byCo[name] }; }).sort(function (a, b) { return b.v - a.v; }).slice(0, 10);
    var cards = '';
    if (top.length) {
      var mx = top[0].v;
      cards += '<div class="rankcard"><h4>Leading companies — capital raised' + (yearFilter ? ' — ' + yearFilter : '') + '</h4>' + top.map(function (c, i) {
        var co = COMPANIES.find(function (x) { return x.name === c.name; });
        var nameHtml = co ? '<a href="company-profile.html?id=' + co.id + '">' + esc(c.name) + '</a>' : esc(c.name);
        return '<div class="rrow"><span class="rk">' + (i + 1) + '</span><span>' + nameHtml +
          '<div class="bar"><div class="bf" style="width:' + (c.v / mx * 100).toFixed(0) + '%;background:#eab308"></div></div></span><b>' + fmtM(c.v) + '</b></div>';
      }).join('') + '</div>';
    }
    var byVert = {};
    COMPANIES.forEach(function (c) { if (c.vertical) byVert[c.vertical] = (byVert[c.vertical] || 0) + 1; });
    var topVert = Object.keys(byVert).map(function (v) { return { v: v, n: byVert[v] }; }).sort(function (a, b) { return b.n - a.n; }).slice(0, 8);
    if (topVert.length) {
      var mv = topVert[0].n;
      cards += '<div class="rankcard"><h4>Companies by segment (global)</h4>' + topVert.map(function (x, i) {
        return '<div class="rrow"><span class="rk">' + (i + 1) + '</span><span><a href="companies.html?vertical=' + encodeURIComponent(x.v) + '">' + esc(x.v) + '</a>' +
          '<div class="bar"><div class="bf" style="width:' + (x.n / mv * 100).toFixed(0) + '%;background:#1f6feb"></div></div></span><b>' + x.n + '</b></div>';
      }).join('') + '</div>';
    }
    document.getElementById('ranks').innerHTML = cards || '<p style="color:var(--ink-3)">No capital data tracked yet.</p>';
  }

  function drawRanks() {
    drawRanksHead();
    if (ranksView === 'company') { drawCompanyLeaders(); return; }
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
      var href = COUNTRY_HREF[k];
      return '<div class="rankcard"><h4>' + l.label + ' by country</h4>' + top.map(function (n, i) {
        var nameHtml = href ? '<a href="' + href + encodeURIComponent(n.country) + '">' + esc(n.country) + '</a>' : esc(n.country);
        return '<div class="rrow" data-c="' + esc(n.country) + '"><span class="rk">' + (i + 1) + '</span>' +
          '<span>' + nameHtml + '<div class="bar"><div class="bf" style="width:' + (n[k] / mx * 100).toFixed(0) + '%;background:' + l.color + '"></div></div></span>' +
          '<b>' + n[k] + '</b></div>';
      }).join('') + '</div>';
    }).join('');
    document.querySelectorAll('.rrow[data-c]').forEach(function (r) { r.onclick = function (e) { if (e.target.tagName !== 'A') drill(r.dataset.c); }; });
  }

  function drill(country) {
    var n = M.nodes.filter(function (x) { return x.country === country; })[0];
    if (!n) return;
    sel = country;
    var keys = activeKeys();
    var grand = M.nodes.reduce(function (s, x) { return s + nodeTotal(x); }, 0) || 1;
    var share = nodeTotal(n) / grand * 100;
    var cap = n.capitalUsdM || 0;
    var mix = segmentMix(country).slice(0, 6);
    var qc = encodeURIComponent(country);
    document.getElementById('sidecard').innerHTML =
      '<h5 class="sidecard__eyebrow">Geography snapshot</h5>' +
      '<h3 class="sidecard__title">' + n.flag + ' ' + esc(country) + '</h3>' +
      '<div class="dstats">' +
        '<div class="dstat"><div class="k">Companies</div><div class="v" style="color:#1f6feb">' + (n.companies || 0) + '</div></div>' +
        '<div class="dstat"><div class="k">Robots</div><div class="v" style="color:#7c3aed">' + (n.robots || 0) + '</div></div>' +
        '<div class="dstat"><div class="k">Capital raised</div><div class="v" style="color:#ca8a04">' + (cap ? fmtM(cap) : '—') + '</div></div>' +
        '<div class="dstat"><div class="k">Share of view</div><div class="v">' + share.toFixed(1) + '%</div></div>' +
      '</div>' +
      (mix.length ? '<div class="sidecard__mixhead">Segment mix' + (keys.length ? '' : '') + '</div><div class="mixlist">' + mix.map(function (m) {
        var pct = mix[0].n ? (m.n / mix[0].n * 100) : 0;
        return '<a class="mixrow" href="companies.html?country=' + qc + '&vertical=' + encodeURIComponent(m.vertical) + '">' +
          '<span class="mixname">' + esc(m.vertical) + '</span>' +
          '<span class="mixbar"><span class="mixfill" style="width:' + pct.toFixed(0) + '%"></span></span>' +
          '<span class="mixn">' + m.n + '</span></a>';
      }).join('') + '</div>' : '') +
      '<a class="sidecard__cta" href="companies.html?country=' + qc + '">View all ' + esc(country) + ' companies in database →</a>';
  }

  document.addEventListener('click', function (e) {
    if (e.target && e.target.id === 'resetfilters') {
      Object.keys(DEFAULT_ON).forEach(function (k) { on[k] = DEFAULT_ON[k]; });
      yearFilter = null;
      drawLayers(); draw();
    }
  });

  drawLayers(); draw();
  // default the sidebar to the top-ranked country so it's never empty on load
  var initial = M.nodes.slice().sort(function (a, b) { return nodeTotal(b) - nodeTotal(a); })[0];
  if (initial) drill(initial.country);
})();
