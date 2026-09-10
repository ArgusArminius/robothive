/* behindrobotics.com — regenerates database.html (the static, crawlable SEO snapshot)
   from the live data.js. Run this any time data.js changes so database.html never
   drifts stale again. Usage: node generate-database-html.js
   Output stays plain, linkable, crawlable HTML — no JS required to read it — while
   each name links through to its live, interactive profile on the real site. */
var fs = require('fs');
var path = require('path');
var dir = __dirname;

var window = {};
eval(fs.readFileSync(path.join(dir, 'data.js'), 'utf8'));
var D = window.RH_DATA;

function esc(s) {
  return String(s == null ? '' : s).replace(/[<>&"]/g, function (c) {
    return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c];
  });
}
function ok(v) { return v != null && String(v).trim() !== '' && v !== '—' && v !== 'Undisclosed'; }

var companies = D.companies.slice().sort(function (a, b) { return a.name.localeCompare(b.name); });
var robots = (D.robotsX || []).slice().sort(function (a, b) { return a.name.localeCompare(b.name); });
var components = D.components.slice().sort(function (a, b) { return a.name.localeCompare(b.name); });
var regCount = (D.regulations || []).length;

function makerName(id) {
  if (!id) return '';
  var c = D.companies.find(function (x) { return x.id === id; });
  return c ? c.name : id;
}

var companyArticles = companies.map(function (c) {
  var meta = [c.country, (c.sector || c.vertical || ''), c.status].filter(ok).join(' · ');
  var unv = c.verified === 'unverified' ? ' <span class="unvtag">Unverified — auto-listed</span>' : '';
  return '<article class="ce"><h2><a href="companies.html?id=' + esc(c.id) + '">' + esc(c.name) + '</a>' + unv + '</h2>' +
    '<p class="meta">' + esc(meta) + '</p>' +
    (ok(c.summary) ? '<p>' + esc(c.summary) + '</p>' : '') + '</article>';
}).join('');

var robotArticles = robots.map(function (r) {
  var meta = [(r.type || r.vertical || ''), r.maker, r.country].filter(ok).join(' · ');
  return '<article class="ce"><h3><a href="robots.html?id=' + esc(r.slug) + '">' + esc(r.name) + '</a></h3>' +
    '<p class="meta">' + esc(meta) + '</p>' +
    (ok(r.summary) ? '<p>' + esc(r.summary) + '</p>' : '') + '</article>';
}).join('');

var componentArticles = components.map(function (k) {
  var meta = [k.category, makerName(k.maker), k.country].filter(ok).join(' · ');
  return '<article class="ce"><h3><a href="components.html?id=' + esc(k.id) + '">' + esc(k.name) + '</a></h3>' +
    '<p class="meta">' + esc(meta) + '</p>' +
    (ok(k.spec) ? '<p>' + esc(k.spec) + '</p>' : '') + '</article>';
}).join('');

var html = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Robotics Database — behindrobotics.com</title>' +
  '<meta name="description" content="' + companies.length + ' companies, ' + robots.length + ' robots, ' + components.length + ' components, ' + regCount + ' regulations.">' +
  '<link rel="canonical" href="https://behindrobotics.com/database.html">' +
  '<style>body{font-family:Inter,sans-serif;max-width:900px;margin:0 auto;padding:30px 20px;color:#12181f;line-height:1.5}' +
  '.ce{border-bottom:1px solid #e6e9ee;padding:12px 0}.ce h2,.ce h3{margin:0 0 4px;font-size:16px}' +
  '.ce h2 a,.ce h3 a{color:#12181f;text-decoration:none}.ce h2 a:hover,.ce h3 a:hover{color:#1f6feb}' +
  '.ce .meta{font-size:13px;color:#8895a4}a{color:#1f6feb}' +
  'h2.sec{margin-top:34px;padding-top:10px;border-top:2px solid #12181f}' +
  '.unvtag{background:#fff8ed;border:1px solid #f5deb8;color:#a06008;border-radius:5px;padding:1px 7px;font-size:10px;font-family:\'IBM Plex Mono\',monospace}</style></head><body>' +
  '<h1>behindrobotics.com — Robotics Database</h1>' +
  '<p><strong>' + companies.length + ' companies</strong>, <strong>' + robots.length + ' robots</strong>, <strong>' + components.length + ' components</strong>, <strong>' + regCount + ' regulations</strong>. ' +
  'This is a plain-text index for search and reference — browse the interactive database at <a href="companies.html">Companies</a>, <a href="robots.html">Robots</a> and <a href="components.html">Components</a>.</p>' +
  '<h2 class="sec">Companies</h2>' + companyArticles +
  '<h2 class="sec">Robots</h2>' + robotArticles +
  '<h2 class="sec">Components</h2>' + componentArticles +
  '</body></html>';

fs.writeFileSync(path.join(dir, 'database.html'), html);
console.log('database.html regenerated:', companies.length, 'companies,', robots.length, 'robots,', components.length, 'components. Size:', html.length, 'bytes.');
