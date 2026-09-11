/* behindrobotics.com — Investment: funding rounds, stages, sector distribution, market-cap
   heatmap and public-markets interlinkage, built from live data.js (D.capital + D.companies).
   Matches the site's shareable/filterable/drill-down pattern used by companydb.js / mapdb.js. */
(function () {
  var D = window.RH_DATA || {};
  var ROUNDS = (D.capital && D.capital.rounds) || [];
  var COMPANIES = D.companies || [];
  var mount = document.querySelector('[data-rh="investment-v2"]');
  if (!mount) return;

  function esc(s) { return String(s == null ? '' : s).replace(/[<>&"]/g, function (c) { return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]; }); }
  function fmtM(v) { return v >= 1000 ? '$' + (v / 1000).toFixed(1) + 'B' : '$' + Math.round(v) + 'M'; }

  // ---- best-effort classifiers over our own free-text funding/valuation fields ----
  function classifyStage(raw) {
    if (!raw) return 'Other / undisclosed';
    var s = String(raw);
    if (/pre-?seed/i.test(s)) return 'Pre-seed';
    if (/\bseed\b/i.test(s)) return 'Seed';
    var m = s.match(/series\s+([a-j])\b/i);
    if (m) {
      var letter = m[1].toUpperCase();
      if (letter === 'A') return 'Series A';
      if (letter === 'B') return 'Series B';
      if (letter === 'C') return 'Series C';
      return 'Series D+';
    }
    if (/ipo/i.test(s)) return 'IPO';
    if (/spac/i.test(s)) return 'SPAC';
    if (/acqui/i.test(s)) return 'Acquisition';
    if (/grant|contract|award/i.test(s)) return 'Grant / contract';
    if (/total|revenue|raised|segment/i.test(s)) return 'Cumulative / other';
    return 'Other / undisclosed';
  }
  var STAGE_ORDER = ['Pre-seed', 'Seed', 'Series A', 'Series B', 'Series C', 'Series D+', 'IPO', 'SPAC', 'Acquisition', 'Grant / contract', 'Cumulative / other', 'Other / undisclosed'];
  var STAGE_COLOR = { 'Pre-seed': '#a3b8cc', 'Seed': '#7aa6e0', 'Series A': '#4d8cf2', 'Series B': '#1f6feb', 'Series C': '#1657c4',
    'Series D+': '#0d3d8f', 'IPO': '#059669', 'SPAC': '#0891b2', 'Acquisition': '#d97706', 'Grant / contract': '#7c3aed',
    'Cumulative / other': '#94a3b8', 'Other / undisclosed': '#cbd3dc' };

  function parseValuationUsdM(text) {
    if (!text) return null;
    var s = String(text);
    if (/parent/i.test(s)) return null; // e.g. "~$500B+ parent cap" — a division's parent-company market cap, not its own valuation
    var m = s.match(/\$\s*~?([0-9]+(?:\.[0-9]+)?)\s*(B|billion|M|million)/i);
    if (!m) return null;
    return m[2].toLowerCase()[0] === 'b' ? parseFloat(m[1]) * 1000 : parseFloat(m[1]);
  }

  var companyById = {};
  COMPANIES.forEach(function (c) { companyById[c.id] = c; });
  function roundVisibility(r) {
    var co = companyById[r.id];
    return co ? co.status : null; // 'public' | 'private' | 'ipo-filed' | ... | null if unmatched
  }
  function matchesVisibility(status, want) {
    if (!want) return true;
    if (want === 'public') return status === 'public';
    // 'private' bucket also covers pre-public states (ipo-filed etc.) — anything not confirmed public
    return status !== 'public';
  }

  var roundsAll = ROUNDS.map(function (r) { return Object.assign({}, r, { stage: classifyStage(r.raw) }); });
  var valued = COMPANIES.map(function (c) {
    var v = parseValuationUsdM(c.valuation);
    return v ? Object.assign({}, c, { valUsdM: v }) : null;
  }).filter(Boolean);

  // ---- filter state, synced to the URL so any view is shareable ----
  var qs = new URLSearchParams(location.search);
  var state = { vertical: qs.get('vertical') || '', country: qs.get('country') || '', stage: qs.get('stage') || '', visibility: qs.get('visibility') || '' };
  function syncUrl() {
    var p = new URLSearchParams();
    if (state.vertical) p.set('vertical', state.vertical);
    if (state.country) p.set('country', state.country);
    if (state.stage) p.set('stage', state.stage);
    if (state.visibility) p.set('visibility', state.visibility);
    var qstr = p.toString();
    try { history.replaceState(null, '', location.pathname + (qstr ? '?' + qstr : '')); } catch (e) {}
  }
  function filteredRounds() {
    return roundsAll.filter(function (r) {
      return (!state.vertical || r.vertical === state.vertical) &&
             (!state.country || r.country === state.country) &&
             (!state.stage || r.stage === state.stage) &&
             matchesVisibility(roundVisibility(r), state.visibility);
    });
  }

  function uniq(arr) { var seen = {}, out = []; arr.forEach(function (x) { if (x && !seen[x]) { seen[x] = 1; out.push(x); } }); return out.sort(); }
  var allVerticals = uniq(roundsAll.map(function (r) { return r.vertical; }));
  var allCountries = uniq(roundsAll.map(function (r) { return r.country; }));

  function renderFilters() {
    var el = mount.querySelector('[data-inv-filters]');
    function opts(list, cur) { return '<option value="">All</option>' + list.map(function (v) { return '<option value="' + esc(v) + '"' + (v === cur ? ' selected' : '') + '>' + esc(v) + '</option>'; }).join(''); }
    var visBtns = [['', 'All'], ['private', 'Private'], ['public', 'Public']].map(function (v) {
      return '<button type="button" class="btn ' + (state.visibility === v[0] ? 'btn--active' : 'btn--ghost') + '" data-vis="' + v[0] + '" style="padding:8px 14px;font-size:13px">' + v[1] + '</button>';
    }).join('');
    el.innerHTML =
      '<label class="select"><span class="cap">Segment</span><select data-f="vertical">' + opts(allVerticals, state.vertical) + '</select></label>' +
      '<label class="select"><span class="cap">Country</span><select data-f="country">' + opts(allCountries, state.country) + '</select></label>' +
      '<label class="select"><span class="cap">Stage</span><select data-f="stage">' + opts(STAGE_ORDER, state.stage) + '</select></label>' +
      '<div class="visgroup" role="group" aria-label="Public or private"><span class="cap" style="display:block;margin-bottom:4px">Visibility</span>' + visBtns + '</div>' +
      (state.vertical || state.country || state.stage || state.visibility ? '<button class="btn btn--ghost" data-inv-reset style="padding:8px 14px;font-size:13px">Reset filters</button>' : '');
    el.querySelectorAll('select').forEach(function (s) {
      s.onchange = function () { state[s.dataset.f] = s.value; syncUrl(); renderAll(); };
    });
    el.querySelectorAll('[data-vis]').forEach(function (btn) {
      btn.onclick = function () { state.visibility = btn.dataset.vis; syncUrl(); renderAll(); };
    });
    var reset = el.querySelector('[data-inv-reset]');
    if (reset) reset.onclick = function () { state = { vertical: '', country: '', stage: '', visibility: '' }; syncUrl(); renderAll(); };
  }

  function renderStats() {
    var rows = filteredRounds();
    var total = rows.reduce(function (s, r) { return s + r.usdM; }, 0);
    var sorted = rows.map(function (r) { return r.usdM; }).sort(function (a, b) { return a - b; });
    var median = sorted.length ? (sorted.length % 2 ? sorted[(sorted.length - 1) / 2] : (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2) : 0;
    var largest = rows.reduce(function (m, r) { return r.usdM > m ? r.usdM : m; }, 0);
    var cards = [
      { k: 'Disclosed capital tracked', v: fmtM(total), s: rows.length + ' rounds in view' + (state.vertical || state.country || state.stage ? ' (filtered)' : '') },
      { k: 'Rounds tracked', v: rows.length, s: 'Of ' + roundsAll.length + ' total disclosed rounds' },
      { k: 'Median round', v: rows.length ? fmtM(median) : '—', s: 'Middle disclosed amount' },
      { k: 'Largest round in view', v: rows.length ? fmtM(largest) : '—', s: 'Top disclosed round' },
      { k: 'Companies w/ valuation on file', v: valued.length, s: 'Of ' + COMPANIES.length + ' tracked companies' }
    ];
    mount.querySelector('[data-inv-stats]').innerHTML = cards.map(function (c) {
      return '<div class="statcard"><div class="k">' + esc(c.k) + '</div><div class="v">' + c.v + '</div><div class="s">' + esc(c.s) + '</div></div>';
    }).join('');
  }

  function barBlock(title, sub, items, colorFn, onClickKey) {
    var max = items.reduce(function (m, x) { return x.v > m ? x.v : m; }, 1);
    return '<div class="invcard"><h4>' + esc(title) + '</h4><p class="invcard__sub">' + esc(sub) + '</p>' +
      '<div class="invbars">' + items.map(function (x) {
        return '<div class="invbar" ' + (onClickKey ? 'data-invk="' + esc(x.k) + '"' : '') + ' style="' + (onClickKey ? 'cursor:pointer' : '') + '">' +
          '<div class="invbar__label">' + esc(x.k) + '<span class="invbar__n">' + x.n + ' round' + (x.n === 1 ? '' : 's') + '</span></div>' +
          '<div class="invbar__track"><div class="invbar__fill" style="width:' + (x.v / max * 100).toFixed(1) + '%;background:' + colorFn(x.k) + '"></div></div>' +
          '<div class="invbar__val">' + fmtM(x.v) + '</div></div>';
      }).join('') + '</div></div>';
  }

  function renderStageChart() {
    var rows = filteredRounds();
    var by = {};
    rows.forEach(function (r) { by[r.stage] = by[r.stage] || { k: r.stage, n: 0, v: 0 }; by[r.stage].n++; by[r.stage].v += r.usdM; });
    var items = STAGE_ORDER.map(function (s) { return by[s]; }).filter(Boolean);
    mount.querySelector('[data-inv-stage]').innerHTML = items.length
      ? barBlock('Funding by stage', 'Parsed from our own round descriptions — many disclosed rounds don’t name a stage, so "Other / undisclosed" is expected to lead.', items, function (k) { return STAGE_COLOR[k] || '#94a3b8'; }, true)
      : '<div class="invcard"><h4>Funding by stage</h4><p class="invcard__sub">No rounds match the current filters.</p></div>';
    mount.querySelectorAll('[data-inv-stage] [data-invk]').forEach(function (el) {
      el.onclick = function () { state.stage = state.stage === el.dataset.invk ? '' : el.dataset.invk; syncUrl(); renderAll(); };
    });
  }

  function renderSectorChart() {
    var rows = filteredRounds();
    var by = {};
    rows.forEach(function (r) { var v = r.vertical || 'Other'; by[v] = by[v] || { k: v, n: 0, v: 0 }; by[v].n++; by[v].v += r.usdM; });
    var items = Object.keys(by).map(function (k) { return by[k]; }).sort(function (a, b) { return b.v - a.v; });
    mount.querySelector('[data-inv-sector]').innerHTML = items.length
      ? barBlock('Funding by sector', 'Disclosed capital across ' + allVerticals.length + ' tracked segments, from ' + roundsAll.length + ' curated rounds. Click a segment to filter the whole page.', items, function () { return '#1f6feb'; }, true)
      : '<div class="invcard"><h4>Funding by sector</h4><p class="invcard__sub">No rounds match the current filters.</p></div>';
    mount.querySelectorAll('[data-inv-sector] [data-invk]').forEach(function (el) {
      el.onclick = function () { state.vertical = state.vertical === el.dataset.invk ? '' : el.dataset.invk; syncUrl(); renderAll(); };
    });
  }

  function renderHeatmap() {
    var pool = valued;
    if (state.vertical) pool = pool.filter(function (c) { return (c.vertical || c.sector) === state.vertical; });
    if (state.country) pool = pool.filter(function (c) { return c.country === state.country; });
    if (state.visibility) pool = pool.filter(function (c) { return matchesVisibility(c.status, state.visibility); });
    pool = pool.slice().sort(function (a, b) { return b.valUsdM - a.valUsdM; });
    var max = pool.length ? pool[0].valUsdM : 1;
    var html = pool.slice(0, 60).map(function (c) {
      var t = Math.sqrt(c.valUsdM / max);
      var span = t > 0.75 ? 3 : t > 0.4 ? 2 : 1;
      var isPub = c.status === 'public';
      return '<a class="heattile ' + (isPub ? 'heattile--pub' : 'heattile--priv') + '" style="grid-column:span ' + span + ';grid-row:span ' + span + '" href="companies.html?id=' + esc(c.id) + '" title="' + esc(c.name) + ' — ' + fmtM(c.valUsdM) + (isPub ? ' (public)' : ' (private, latest disclosed)') + '">' +
        '<span class="heattile__n">' + esc(c.name) + '</span><span class="heattile__v">' + fmtM(c.valUsdM) + '</span>' +
        (isPub ? '<span class="heattile__tag">PUBLIC</span>' : '') + '</a>';
    }).join('');
    mount.querySelector('[data-inv-heatmap]').innerHTML =
      '<div class="invcard"><h4>Valuation heatmap — public &amp; private</h4>' +
      '<p class="invcard__sub">Tile size = disclosed valuation or market cap. ' + pool.length + ' of ' + COMPANIES.length + ' tracked companies have a usable disclosed figure on file — most private companies don’t publish one, so this is a partial picture, not a full market map. ' +
      '<a href="markets.html" style="color:var(--blue)">See live public-market tickers →</a></p>' +
      (pool.length ? '<div class="heatgrid">' + html + '</div>' : '<p style="color:var(--ink-3);padding:20px 0">No valued companies match the current filters.</p>') +
      '</div>';
  }

  function renderGeo() {
    var rows = filteredRounds();
    var byCountry = {};
    rows.forEach(function (r) { byCountry[r.country] = byCountry[r.country] || { k: r.country, v: 0, flag: r.flag }; byCountry[r.country].v += r.usdM; });
    var top = Object.keys(byCountry).map(function (k) { return byCountry[k]; }).sort(function (a, b) { return b.v - a.v; }).slice(0, 8);
    mount.querySelector('[data-inv-geo]').innerHTML =
      '<div class="invcard"><h4>Where the capital is</h4><p class="invcard__sub">Top countries by disclosed capital in view. <a href="map.html" style="color:var(--blue)">Open the full database map →</a></p>' +
      '<div class="geolist">' + top.map(function (c) {
        return '<a class="geolist__row" href="map.html?country=' + encodeURIComponent(c.k) + '"><span>' + esc(c.flag) + ' ' + esc(c.k) + '</span><b>' + fmtM(c.v) + '</b></a>';
      }).join('') + '</div></div>';
  }

  function renderTopRounds() {
    var rows = filteredRounds().slice().sort(function (a, b) { return b.usdM - a.usdM; });
    var body = mount.querySelector('[data-inv-rows]');
    body.innerHTML = rows.map(function (r) {
      var co = COMPANIES.find(function (c) { return c.id === r.id; });
      return '<tr>' +
        '<td class="name">' + (co ? '<a class="link" href="companies.html?id=' + esc(co.id) + '">' + esc(r.company) + '</a>' : esc(r.company)) + '</td>' +
        '<td>' + fmtM(r.usdM) + '</td>' +
        '<td><span class="pill" style="border-color:' + (STAGE_COLOR[r.stage] || '#ccc') + '">' + esc(r.stage) + '</span></td>' +
        '<td class="flag">' + esc(r.flag) + ' ' + esc(r.country) + '</td>' +
        '<td>' + esc(r.vertical || '') + '</td>' +
        '<td style="color:var(--ink-3);font-size:12.5px">' + esc(r.raw || '') + '</td>' +
        '</tr>';
    }).join('') || '<tr><td colspan="6" style="color:var(--ink-3)">No rounds match the current filters.</td></tr>';
    mount.querySelector('[data-inv-count]').textContent = rows.length + ' of ' + roundsAll.length + ' tracked rounds';
  }

  function renderAll() {
    renderFilters();
    renderStats();
    renderStageChart();
    renderSectorChart();
    renderHeatmap();
    renderGeo();
    renderTopRounds();
  }

  renderAll();
})();
