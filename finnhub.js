/* Robot Hive — live stock quotes via Finnhub (free tier, US stocks).
   Works anywhere this script loads: custom site AND inside Ghost articles.
   NOTE: free key is public/disposable; regenerate if abused. Commercial use → paid tier. */
(function () {
  var FINNHUB_KEY = 'd9uen7pr01qs9cmcfntgd9uen7pr01qs9cmcfnu0';
  var Q = 'https://finnhub.io/api/v1/quote?symbol=';
  var NAMES = {
    NVDA:'NVIDIA Corporation', TSLA:'Tesla, Inc.', ISRG:'Intuitive Surgical',
    SYM:'Symbotic Inc.', SERV:'Serve Robotics', PATH:'UiPath Inc.',
    ROK:'Rockwell Automation', TER:'Teradyne Inc.', ZBRA:'Zebra Technologies',
    ABB:'ABB Ltd', GOOGL:'Alphabet Inc.', AMZN:'Amazon.com', MSFT:'Microsoft'
  };
  function nameOf(s){ return NAMES[s] || s; }

  function fmt(n) { return (n == null || isNaN(n)) ? '—' : n.toFixed(2); }
  function pct(c, pc) { if (!pc) return ''; var p = ((c - pc) / pc) * 100; return (p >= 0 ? '+' : '') + p.toFixed(2) + '%'; }
  function color(c, pc) { return (c >= pc) ? '#12a150' : '#e0685a'; }

  function quote(symbol) {
    return fetch(Q + encodeURIComponent(symbol) + '&token=' + FINNHUB_KEY)
      .then(function (r) { return r.json(); });
  }

  // ---- (1) Inline article widgets: <div data-stock="TSLA"></div> ----------
  function renderWidgets() {
    var els = document.querySelectorAll('[data-stock]');
    els.forEach(function (el) {
      var sym = (el.getAttribute('data-stock') || '').toUpperCase().trim();
      if (!sym) return;
      el.innerHTML = '<span style="font-family:IBM Plex Mono,monospace;font-size:13px;color:#748393">' + sym + ' …</span>';
      quote(sym).then(function (d) {
        if (d && d.c) {
          el.innerHTML =
            '<span title="' + nameOf(sym) + '" style="display:inline-flex;align-items:center;gap:8px;font-family:IBM Plex Mono,monospace;font-size:14px;' +
            'border:1px solid #e2e7ec;border-radius:8px;padding:6px 11px;background:#fff;cursor:help">' +
            '<b>' + sym + '</b>' +
            '<span style="color:#748393">' + nameOf(sym) + '</span>' +
            '<span>$' + fmt(d.c) + '</span>' +
            '<span style="color:' + color(d.c, d.pc) + '">' + pct(d.c, d.pc) + '</span></span>';
        } else {
          el.innerHTML = '<span style="font-family:IBM Plex Mono,monospace;font-size:12px;color:#7a8898">' + sym + ' — no data</span>';
        }
      }).catch(function () {
        el.innerHTML = '<span style="font-family:IBM Plex Mono,monospace;font-size:12px;color:#7a8898">' + sym + ' — unavailable</span>';
      });
    });
  }

  // ---- (2) Site-wide ticker: <div id="rh-ticker" data-symbols="NVDA,TSLA,..."></div> ----
  function renderTicker() {
    var bar = document.getElementById('rh-ticker');
    if (!bar) return;
    var syms = (bar.getAttribute('data-symbols') || 'NVDA,TSLA,ISRG,SYM,SERV,PATH,ROK,TER,ZBRA').split(',');
    Promise.all(syms.map(function (s) {
      s = s.trim().toUpperCase();
      return quote(s).then(function (d) { return { s: s, d: d }; }).catch(function () { return { s: s, d: null }; });
    })).then(function (rows) {
      var items = rows.map(function (r) {
        var nm = nameOf(r.s);
        if (!r.d || !r.d.c) return '<span class="tick" title="' + nm + '"><b>' + r.s + '</b> —</span>';
        return '<span class="tick" title="' + nm + '">' +
          '<b>' + r.s + '</b> $' + fmt(r.d.c) +
          ' <span style="color:' + color(r.d.c, r.d.pc) + '">' + pct(r.d.c, r.d.pc) + '</span></span>';
      }).join('');
      // duplicate for seamless scroll
      bar.querySelector('.tick-track').innerHTML = items + items;
    });
  }

  function run() { renderWidgets(); renderTicker(); }
  window.RH_FINNHUB_REFRESH = renderWidgets;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
  // refresh quotes every 60s (well under 60 calls/min free limit for a small ticker)
  setInterval(run, 60000);
})();
