/* behindrobotics.com — regenerates D.map (the precomputed per-country aggregate that
   drives map.html/mapdb.js) from the LIVE D.companies / D.robotsX / D.components / D.events /
   D.regulations / D.capital arrays in data.js, so the database map never silently drifts out
   of sync with the rest of the database again.

   Geographic constants (lat/lng/flag) are NOT derivable from the entity arrays, so they are
   preserved from the CURRENT D.map.nodes table rather than recomputed. If a brand-new country
   ever appears in the entity data that has no existing map node, this script will list it at
   the end as "NEW COUNTRIES WITH NO KNOWN COORDINATES" and skip it — add its lat/lng/flag to
   the GEO table below and re-run.

   Usage: node generate-map-data.js
   This rewrites the `D.map = {...}` block inside data.js in place (matched via markers), so
   diff-review it before committing. */

var fs = require('fs');
var path = require('path');
var dir = __dirname;
var raw = fs.readFileSync(path.join(dir, 'data.js'), 'utf8');

var window = {};
eval(raw);
var D = window.RH_DATA;

// A few country-name spellings used inconsistently across the entity arrays vs. the
// canonical names used in D.map.nodes / D.capital.byCountry / D.regulations.
var NORMALIZE = { 'Türkiye': 'Turkey' };
// Regulation `region` values map onto country-node names.
var REGION_TO_COUNTRY = { 'USA': 'United States', 'EU': 'European Union', 'China': 'China' };
// Country strings that don't represent a single real country — skip these when aggregating.
var SKIP = { '—': 1, 'Unknown': 1, '': 1 };

function norm(c) { return NORMALIZE[c] || c; }
// A compound field like "United States / China" (dual-HQ / JV) attributes to BOTH countries.
function countriesOf(c) {
  if (!c || SKIP[c]) return [];
  return c.split('/').map(function (s) { return norm(s.trim()); }).filter(function (s) { return s && !SKIP[s]; });
}

// Preserve existing geo constants (lat/lng/flag) keyed by country name.
var GEO = {};
(D.map.nodes || []).forEach(function (n) { GEO[n.country] = { lat: n.lat, lng: n.lng, flag: n.flag }; });
// Manual fallback coordinates for countries not yet present in D.map.nodes (add here, then re-run).
var FALLBACK_GEO = {
  'United Arab Emirates': { lat: 23.42, lng: 53.85, flag: '🇦🇪' }
};
Object.keys(FALLBACK_GEO).forEach(function (c) { if (!GEO[c]) GEO[c] = FALLBACK_GEO[c]; });

var agg = {}; // country -> { companies:[], robots:[], components:[], events:[], regulations:[] }
function bucket(country) {
  if (!agg[country]) agg[country] = { companies: [], robots: [], components: [], events: [], regulations: [] };
  return agg[country];
}

D.companies.forEach(function (c) { countriesOf(c.country).forEach(function (co) { bucket(co).companies.push(c.name); }); });
(D.robotsX || []).forEach(function (r) { countriesOf(r.country).forEach(function (co) { bucket(co).robots.push(r.name); }); });
D.components.forEach(function (k) { countriesOf(k.country).forEach(function (co) { bucket(co).components.push(k.name); }); });
(D.events || []).forEach(function (e) { countriesOf(e.country).forEach(function (co) { bucket(co).events.push(e.name); }); });
(D.regulations || []).forEach(function (r) {
  var co = REGION_TO_COUNTRY[r.region] || r.region;
  if (co && !SKIP[co]) bucket(co).regulations.push(r.topic);
});

var byCapCountry = {};
((D.capital && D.capital.byCountry) || []).forEach(function (x) { byCapCountry[x.country] = x; });

var missingGeo = [];
var countries = Object.keys(agg).sort();
var nodes = countries.map(function (country) {
  var geo = GEO[country];
  if (!geo) { missingGeo.push(country); return null; }
  var b = agg[country];
  var cap = byCapCountry[country];
  return {
    country: country,
    lat: geo.lat,
    lng: geo.lng,
    flag: geo.flag,
    companies: b.companies.length,
    robots: b.robots.length,
    components: b.components.length,
    events: b.events.length,
    regulations: b.regulations.length,
    items: { companies: b.companies, robots: b.robots, components: b.components, events: b.events, regulations: b.regulations },
    capitalUsdM: cap ? cap.usdM : 0,
    rounds: cap ? cap.n : 0
  };
}).filter(Boolean);

// Keep the European Union node (regulation-only country with no company presence) even if it
// has zero companies/robots/components, same as it existed before — plus any other legacy node
// that still has geo coords but no longer has any live entities, so we don't silently drop it.
(D.map.nodes || []).forEach(function (old) {
  if (!agg[old.country]) {
    nodes.push({
      country: old.country, lat: old.lat, lng: old.lng, flag: old.flag,
      companies: 0, robots: 0, components: 0, events: 0, regulations: 0,
      items: { companies: [], robots: [], components: [], events: [], regulations: [] },
      capitalUsdM: 0, rounds: 0
    });
  }
});
nodes.sort(function (a, b) { return a.country.localeCompare(b.country); });

var total = {
  companies: D.companies.length,
  robots: (D.robotsX || []).length,
  components: D.components.length,
  events: (D.events || []).length,
  regulations: (D.regulations || []).length,
  capitalUsdM: (D.capital && D.capital.totalUsdM) || 0
};

var newMap = { nodes: nodes, arcs: D.map.arcs || [], total: total };

if (missingGeo.length) {
  console.log('NEW COUNTRIES WITH NO KNOWN COORDINATES (skipped — add lat/lng/flag to GEO and re-run):', missingGeo);
}

// Splice the new D.map object back into data.js source in place of the old one.
var marker = 'RH_DATA.map = ';
var idx = raw.indexOf(marker);
if (idx === -1) {
  console.error('Could not find "RH_DATA.map = " assignment in data.js — aborting without writing.');
  process.exit(1);
}
// Find the end of this statement: walk forward tracking brace depth from the first "{" after marker.
var braceStart = raw.indexOf('{', idx);
var depth = 0, i = braceStart, inStr = null;
for (; i < raw.length; i++) {
  var ch = raw[i];
  if (inStr) {
    if (ch === '\\') { i++; continue; }
    if (ch === inStr) inStr = null;
    continue;
  }
  if (ch === '"' || ch === "'") { inStr = ch; continue; }
  if (ch === '{') depth++;
  else if (ch === '}') { depth--; if (depth === 0) { i++; break; } }
}
var stmtEnd = i;
// consume trailing semicolon if present
if (raw[stmtEnd] === ';') stmtEnd++;

var newStmt = marker + JSON.stringify(newMap) + ';';
var out = raw.slice(0, idx) + newStmt + raw.slice(stmtEnd);
fs.writeFileSync(path.join(dir, 'data.js'), out);

console.log('D.map regenerated:', nodes.length, 'countries. Totals:', JSON.stringify(total));
console.log('Sum of node.companies:', nodes.reduce(function (s, n) { return s + n.companies; }, 0), '(vs total.companies ' + total.companies + '; a small gap is expected from dual-country entities like "United States / China")');
