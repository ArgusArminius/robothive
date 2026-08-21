/* ==========================================================================
   behindrobotics.com — Ghost content integration (Option 1: live JavaScript fetch)
   Pulls published posts from Ghost and places them by TAG:
     - homepage news cards + "Latest posts" rail  (latest, any tag)
     - news page full listing                     (all posts)
     - industry pages                             (filtered by that page's tag)
   Falls back silently to the existing placeholder HTML if Ghost is unreachable,
   so the site never looks broken.
   ========================================================================== */
(function () {
  var GHOST_URL = 'https://robothive.ghost.io';
  var GHOST_KEY = 'b2360bf0d2fb751a405c35a7ab';
  var API = GHOST_URL + '/ghost/api/content/posts/';

  // Build a Ghost Content API request URL.
  function api(params) {
    var q = 'key=' + GHOST_KEY + '&include=tags&limit=' + (params.limit || 10);
    if (params.filter) q += '&filter=' + encodeURIComponent(params.filter);
    q += '&fields=title,url,slug,excerpt,published_at,feature_image,primary_tag';
    q += '&include=tags,authors';
    return API + '?' + q;
  }

  function fmtDate(iso) {
    try {
      return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase();
    } catch (e) { return ''; }
  }
  function timeAgo(iso) {
    var s = (Date.now() - new Date(iso).getTime()) / 1000;
    if (s < 3600) return Math.max(1, Math.floor(s / 60)) + 'm ago';
    if (s < 86400) return Math.floor(s / 3600) + 'h ago';
    // older than a day: show the same calendar date the cards use, so they never contradict
    return fmtDate(iso);
  }
  function catOf(post) {
    return (post.primary_tag && post.primary_tag.name) ||
           (post.tags && post.tags[0] && post.tags[0].name) || 'News';
  }
  function authorOf(post) {
    return (post.authors && post.authors[0] && post.authors[0].name) || 'behindrobotics.com';
  }

  function get(url) {
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error('Ghost ' + r.status);
      return r.json();
    });
  }

  // ---- renderers ----------------------------------------------------------
  function newsCard(post) {
    var cat = catOf(post);
    return '<a class="card" href="article.html?slug=' + post.slug + '" style="overflow:hidden;display:block;transition:transform .16s" ' +
      'onmouseover="this.style.transform=\'translateY(-3px)\'" onmouseout="this.style.transform=\'none\'">' +
      '<div style="aspect-ratio:16/9;background:' +
        (post.feature_image ? 'url(' + post.feature_image + ') center/cover' : 'linear-gradient(135deg,#dbe3ec,#c7d2de)') +
        ';position:relative">' +
        '<span class="mono" style="position:absolute;top:10px;left:10px;font-size:10px;text-transform:uppercase;padding:4px 9px;border-radius:5px;color:#fff;background:var(--nav)">' + cat + '</span></div>' +
      '<div style="padding:14px 15px 16px">' +
        '<div class="mono" style="font-size:10.5px;color:var(--ink-3);margin-bottom:7px">BY ' + authorOf(post).toUpperCase() + ' · ' + fmtDate(post.published_at) + '</div>' +
        '<div style="font-size:15px;font-weight:600;line-height:1.28;margin-bottom:7px;font-family:\'Space Grotesk\'">' + post.title + '</div>' +
        '<div style="font-size:12.5px;color:var(--ink-2);line-height:1.5">' + (post.excerpt || '').slice(0, 120) + '</div>' +
      '</div></a>';
  }

  function railItem(post) {
    return '<a class="railitem" href="article.html?slug=' + post.slug + '">' +
      '<div class="railitem__meta"><span>' + catOf(post) + '</span><span>' + timeAgo(post.published_at) + '</span></div>' +
      '<div class="railitem__t">' + post.title + '</div></a>';
  }

  // ---- populate homepage --------------------------------------------------
  function fillHome() {
    // news cards: the grid right under "Latest from behindrobotics.com"
    var cardGrid = document.querySelector('[data-ghost="home-cards"]');
    var rail = document.querySelector('[data-ghost="latest-rail"]');
    if (cardGrid) {
      get(api({ limit: 6, filter: 'tag:-wire' })).then(function (d) {
        if (d.posts && d.posts.length) renderHomeFeed(cardGrid, d.posts);
      }).catch(function () {});
    }
    if (rail) {
      get(api({ limit: 7, filter: 'featured:true' })).then(function (d) {
        if (d.posts && d.posts.length) {
          rail.innerHTML = d.posts.map(railItem).join('') +
            '<div class="railbox__foot"><a href="news.html">All posts →</a></div>';
        } else {
          rail.innerHTML = '<div class="railitem" style="color:var(--ink-3)">No featured stories yet. Toggle "Feature this post" in Ghost to surface a story here.</div>';
        }
      }).catch(function () {});
    }
  }


  function listRow(post) {
    var cat = catOf(post);
    return '<a class="news-list-row" href="article.html?slug=' + post.slug + '">' +
      '<div class="news-list-row__img"' + (post.feature_image ? ' style="background-image:url(' + post.feature_image + ')"' : '') + '></div>' +
      '<div><div class="news-list-row__meta">' + cat + ' · ' + fmtDate(post.published_at) + '</div>' +
      '<div class="news-list-row__title">' + post.title + '</div>' +
      '<div class="news-list-row__ex">' + (post.excerpt || '').slice(0, 140) + '</div></div></a>';
  }
  // Render into a container: first 2 = hero cards, rest = stacked list rows
  function renderHeroList(container, posts) {
    if (!posts || !posts.length) return;
    var heroes = posts.slice(0, 2).map(newsCard).join('');
    var rest = posts.slice(2).map(listRow).join('');
    container.innerHTML =
      '<div class="listing-heroes">' + heroes + '</div>' +
      (rest ? '<div class="news-list">' + rest + '</div>' : '');
  }
  // Homepage variant: ONE wide hero + small headline rows below
  function renderHomeFeed(container, posts) {
    if (!posts || !posts.length) return;
    function row(post, isLead) {
      var cat = catOf(post);
      var exLen = isLead ? 220 : 110;
      return '<a class="feed-row' + (isLead ? ' feed-row--lead' : '') + '" href="article.html?slug=' + post.slug + '">' +
        '<div class="feed-row__img"' + (post.feature_image ? ' style="background-image:url(' + post.feature_image + ')"' : '') + '>' +
          '<span class="feed-row__cat">' + cat + '</span></div>' +
        '<div>' +
          '<div class="feed-row__meta">' + cat + ' · ' + fmtDate(post.published_at) + '</div>' +
          '<div class="feed-row__title">' + post.title + '</div>' +
          '<div class="feed-row__ex">' + (post.excerpt || '').slice(0, exLen) + '</div>' +
        '</div></a>';
    }
    container.innerHTML = '<div class="feed">' +
      posts.map(function (p, i) { return row(p, i === 0); }).join('') +
      '</div>';
  }
  function renderHomeFeedOld(container, posts) {
    if (!posts || !posts.length) return;
    var top = posts[0];
    var cat = catOf(top);
    var hero = '<a class="home-hero" href="article.html?slug=' + top.slug + '">' +
      '<div class="home-hero__img"' + (top.feature_image ? ' style="background-image:url(' + top.feature_image + ')"' : '') + '>' +
        '<span class="home-hero__cat">' + cat + '</span></div>' +
      '<div class="home-hero__body">' +
        '<div class="home-hero__meta">' + cat + ' · ' + fmtDate(top.published_at) + '</div>' +
        '<div class="home-hero__title">' + top.title + '</div>' +
        '<div class="home-hero__ex">' + (top.excerpt || '').slice(0, 180) + '</div>' +
      '</div></a>';
    var rows = posts.slice(1).map(listRow).join('');
    container.innerHTML = hero + (rows ? '<div class="news-list">' + rows + '</div>' : '');
  }

  // ---- populate news page -------------------------------------------------
  function fillNews() {
    var grid = document.querySelector('[data-ghost="news-list"]');
    if (!grid) return;
    get(api({ limit: 30, filter: 'tag:-wire' })).then(function (d) {
      if (!d.posts || !d.posts.length) return;
      var all = d.posts;
      var state = { cat: '', industry: '', q: '' };

      // wire the existing filter bar (replace placeholder selects with real ones)
      var bar = document.querySelector('.filters');
      if (bar) {
        // collect available categories + industries from the posts' tags
        var cats = {}, inds = {};
        var INDUSTRY = ['civil', 'agriculture', 'defense', 'drones'];
        all.forEach(function (p) {
          (p.tags || []).forEach(function (t) {
            var s = (t.slug || '').toLowerCase();
            if (INDUSTRY.indexOf(s) !== -1) inds[s] = t.name; else cats[s] = t.name;
          });
        });
        bar.innerHTML =
          selectHTML('news-cat', 'Category', cats) +
          selectHTML('news-ind', 'Industry', inds) +
          '<input class="searchbar" id="news-q" placeholder="Search articles…">';
        var catSel = bar.querySelector('#news-cat');
        var indSel = bar.querySelector('#news-ind');
        var q = bar.querySelector('#news-q');
        catSel.onchange = function () { state.cat = catSel.value; render(); };
        indSel.onchange = function () { state.industry = indSel.value; render(); };
        q.oninput = function () { state.q = q.value.toLowerCase(); render(); };
      }

      function render() {
        var out = all.filter(function (p) {
          var slugs = (p.tags || []).map(function (t) { return (t.slug || '').toLowerCase(); });
          if (state.cat && slugs.indexOf(state.cat) === -1) return false;
          if (state.industry && slugs.indexOf(state.industry) === -1) return false;
          if (state.q) {
            var hay = (p.title + ' ' + (p.excerpt || '')).toLowerCase();
            if (hay.indexOf(state.q) === -1) return false;
          }
          return true;
        });
        if (out.length) renderHeroList(grid, out);
        else grid.innerHTML = '<div style="padding:40px 0;color:var(--ink-3);font-family:IBM Plex Mono,monospace">No articles match those filters.</div>';
      }
      render();
    }).catch(function () {});
  }
  function selectHTML(id, label, map) {
    var opts = '<option value="">' + label + ': All</option>';
    Object.keys(map).sort().forEach(function (slug) {
      opts += '<option value="' + slug + '">' + map[slug] + '</option>';
    });
    return '<select class="select" id="' + id + '">' + opts + '</select>';
  }

  // ---- populate an industry page (filtered by tag) ------------------------
  function fillIndustry() {
    var el = document.querySelector('[data-ghost-industry]');
    if (!el) return;
    var tag = el.getAttribute('data-ghost-industry'); // e.g. "defense"
    var cards = el.querySelector('[data-ghost="industry-cards"]');
    var rail = el.querySelector('[data-ghost="industry-rail"]');
    if (cards) {
      get(api({ limit: 12, filter: 'tag:' + tag + '+tag:-wire' })).then(function (d) {
        if (d.posts && d.posts.length) renderHeroList(cards, d.posts);
      }).catch(function () {});
    }
    if (rail) {
      get(api({ limit: 6, filter: 'featured:true' })).then(function (d) {
        if (d.posts && d.posts.length) {
          rail.innerHTML = d.posts.map(railItem).join('') +
            '<div class="railbox__foot"><a href="news.html">All posts →</a></div>';
        } else {
          rail.innerHTML = '<div class="railitem" style="color:var(--ink-3)">No featured stories yet. Toggle "Feature this post" in Ghost to surface a story here.</div>';
        }
      }).catch(function () {});
    }
  }

  // ---- populate homepage industry cards' "Latest 5 entries" lists ---------
  function latestLine(post, i) {
    return '<a href="article.html?slug=' + post.slug + '"><span class="n">' +
      (i + 1 < 10 ? '0' + (i + 1) : (i + 1)) + '</span>' + post.title + '</a>';
  }
  function fillIndustryLatest() {
    var blocks = document.querySelectorAll('[data-ghost-latest]');
    blocks.forEach(function (block) {
      var tag = block.getAttribute('data-ghost-latest');
      get(api({ limit: 5, filter: 'tag:' + tag + '+tag:-wire' })).then(function (d) {
        if (d.posts && d.posts.length) {
          block.innerHTML = '<h5>Latest 5 entries</h5>' +
            d.posts.map(latestLine).join('');
        } else {
          // no posts for this tag yet — show a clean empty state, not fake entries
          block.innerHTML = '<h5>Latest 5 entries</h5>' +
            '<a href="news.html" style="color:var(--ink-3)"><span class="n">—</span>No posts tagged "' + tag + '" yet</a>';
        }
      }).catch(function () {});
    });
  }


  // ---- full ARTICLE page (article.html?slug=...) --------------------------
  function fillArticle() {
    var mount = document.querySelector('[data-ghost="article"]');
    if (!mount) return;
    var params = new URLSearchParams(window.location.search);
    var slug = params.get('slug');
    if (!slug) { mount.innerHTML = '<div class="article__loading">Article not found.</div>'; return; }
    // fetch this single post by slug, including full html
    var url = API + '?key=' + GHOST_KEY + '&filter=' + encodeURIComponent('slug:' + slug) +
      '&include=tags,authors&formats=html&limit=1';
    get(url).then(function (d) {
      if (!d.posts || !d.posts.length) {
        mount.innerHTML = '<div class="article__loading">Article not found.</div>'; return;
      }
      var p = d.posts[0];
      document.title = p.title + ' — behindrobotics.com';
      var cat = catOf(p);
      var reading = p.reading_time ? (p.reading_time + ' min read') : '';
      mount.innerHTML =
        '<div class="article-hero">' +
          '<div class="article__crumb"><a href="index.html">Main</a> / <a href="news.html">News</a> / ' + cat + '</div>' +
          '<span class="article__cat">' + cat + '</span>' +
          '<h1 class="article__title">' + p.title + '</h1>' +
          '<div class="article__meta">By ' + authorOf(p) + ' · ' + fmtDate(p.published_at) +
            (reading ? ' · ' + reading : '') + '</div>' +
        '</div>' +
        '<div class="article-wrap">' +
          (p.feature_image ? '<img class="article__feature" src="' + p.feature_image + '" alt="">' : '') +
          '<div class="article__body">' + (p.html || '') + '</div>' +
          '<a class="article__back" href="news.html">← Back to all news</a>' +
        '</div>';
      // re-run any embedded scripts (interactive widgets) that came in via html
      mount.querySelectorAll('script').forEach(function (old) {
        var s = document.createElement('script');
        if (old.src) s.src = old.src; else s.textContent = old.textContent;
        old.parentNode.replaceChild(s, old);
      });
    }).catch(function () {
      mount.innerHTML = '<div class="article__loading">Could not load this article. <a href="news.html">Back to news</a></div>';
    });
  }


  // ---- NEWSLETTER SIGNUP → Ghost members ---------------------------------
  function wireNewsletter() {
    var forms = document.querySelectorAll('form[data-ghost-signup], .beehive__form, .nlstrip__form');
    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var input = form.querySelector('input[type="email"]') || form.querySelector('input[type="text"]');
        var nameInput = form.querySelector('input[data-name], input[name="name"]');
        var btn = form.querySelector('button');
        if (!input || !input.value) return;
        var email = input.value.trim();
        var name = nameInput && nameInput.value ? nameInput.value.trim() : undefined;
        var original = btn ? btn.textContent : '';
        if (btn) { btn.textContent = '…'; btn.disabled = true; }
        var payload = { email: email, emailType: 'subscribe', labels: [], requestSrc: 'robothive-custom-site' };
        if (name) payload.name = name;
        fetch(GHOST_URL + '/members/api/send-magic-link/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }).then(function (r) {
          if (r.ok) {
            if (btn) btn.textContent = '✓ Check your inbox';
            input.value = '';
            if (nameInput) nameInput.value = '';
          } else {
            if (btn) btn.textContent = 'Try again';
            console.error('Newsletter signup failed:', r.status, '— if 4xx, Ghost may be in Private mode or membership is off.');
          }
        }).catch(function (err) {
          if (btn) btn.textContent = 'Try again';
          console.error('Newsletter signup error (network/CORS):', err);
        }).finally(function () {
          setTimeout(function () {
            if (btn) { btn.textContent = original || 'Subscribe'; btn.disabled = false; }
          }, 4000);
        });
      });
    });
  }

  // run whichever hooks exist on this page
  // ---- THE WIRE (short signal items tagged 'wire') -----------------------
  function fillWire() {
    var mount = document.querySelector('[data-ghost="wire"]');
    if (!mount) return;
    get(api({ limit: 5, filter: 'tag:wire' })).then(function (d) {
      if (d.posts && d.posts.length) {
        mount.innerHTML = d.posts.map(function (p) {
          return '<a class="wire-row" href="article.html?slug=' + p.slug + '">' +
            '<span class="wire-time">' + timeAgo(p.published_at) + '</span>' +
            '<span class="wire-text">' + p.title + '</span>' +
            '<span class="wire-src">source →</span></a>';
        }).join('');
      } else {
        mount.innerHTML = '<div class="wire-empty">No wire items yet — tag a short post "wire" in Ghost to surface it here.</div>';
      }
    }).catch(function () {
      mount.innerHTML = '<div class="wire-empty">Wire unavailable.</div>';
    });
  }

  // ---- WIRE ARCHIVE (full list + search on wire.html) --------------------
  function fillWireArchive() {
    var mount = document.querySelector('[data-ghost="wire-archive"]');
    if (!mount) return;
    get(api({ limit: 100, filter: 'tag:wire' })).then(function (d) {
      var all = (d.posts || []);
      function render(list) {
        if (!list.length) { mount.innerHTML = '<div class="wire-empty">No wire items found.</div>'; return; }
        mount.innerHTML = list.map(function (p) {
          return '<a class="wire-row" href="article.html?slug=' + p.slug + '">' +
            '<span class="wire-time">' + fmtDate(p.published_at) + '</span>' +
            '<span class="wire-text">' + p.title + '</span>' +
            '<span class="wire-src">source →</span></a>';
        }).join('');
      }
      render(all);
      var q = document.getElementById('wire-q');
      if (q) q.oninput = function () {
        var s = q.value.toLowerCase();
        render(all.filter(function (p) { return (p.title + ' ' + (p.excerpt || '')).toLowerCase().indexOf(s) !== -1; }));
      };
    }).catch(function () {
      mount.innerHTML = '<div class="wire-empty">Wire unavailable.</div>';
    });
  }

  // ---- YOUTUBE SLIDESHOW (auto-pulled from Ghost article embeds) ---------
  function fillVideoSlideshow() {
    var box = document.querySelector('[data-ghost="video-slideshow"]');
    if (!box) return;
    var frame = box.querySelector('.ytwin__frame');
    var titleEl = box.querySelector('.ytwin__bar b');
    var countEl = box.querySelector('.ytwin__count');
    // fetch posts WITH html so we can scan for embeds
    var url = API + '?key=' + GHOST_KEY + '&limit=20&fields=title,slug,html&formats=html';
    fetch(url).then(function (r) { return r.json(); }).then(function (d) {
      var vids = [];
      (d.posts || []).forEach(function (p) {
        if (!p.html) return;
        // match youtube embed / links: youtube.com/embed/ID, youtu.be/ID, watch?v=ID
        var re = /(?:youtube(?:-nocookie)?\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([A-Za-z0-9_-]{11})/g;
        var m, seen = {};
        while ((m = re.exec(p.html)) !== null) {
          var id = m[1];
          if (id === 'videoseries' || seen[id]) continue;
          seen[id] = 1;
          vids.push({ id: id, title: p.title });
        }
      });
      // dedupe globally
      var uniq = [], ids = {};
      vids.forEach(function (v) { if (!ids[v.id]) { ids[v.id] = 1; uniq.push(v); } });

      if (!uniq.length) {
        frame.innerHTML = '<div class="ytwin__placeholder">No videos yet — embed a YouTube video in a Ghost article and it appears here.</div>';
        if (countEl) countEl.textContent = '';
        return;
      }

      var i = 0;
      function show(n) {
        i = (n + uniq.length) % uniq.length;
        var v = uniq[i];
        frame.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + v.id +
          '" title="' + v.title + '" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe>' +
          '<button class="ytwin__expand" aria-label="Enlarge">⤢</button>';
        if (titleEl) titleEl.textContent = v.title.length > 42 ? v.title.slice(0, 42) + '…' : v.title;
        if (countEl) countEl.textContent = (i + 1) + ' / ' + uniq.length;
        frame.querySelector('.ytwin__expand').onclick = function (e) {
          e.stopPropagation(); openLightbox(v);
        };
      }
      var prev = box.querySelector('.ytwin__prev');
      var next = box.querySelector('.ytwin__next');
      if (prev) prev.onclick = function () { show(i - 1); };
      if (next) next.onclick = function () { show(i + 1); };
      show(0);

      function openLightbox(v) {
        var lb = document.createElement('div');
        lb.className = 'yt-lightbox';
        lb.innerHTML = '<div class="yt-lightbox__inner"><button class="yt-lightbox__close" aria-label="Close">×</button>' +
          '<div class="yt-lightbox__frame"><iframe src="https://www.youtube-nocookie.com/embed/' + v.id +
          '?autoplay=1" title="' + v.title + '" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>' +
          '<div class="yt-lightbox__title">' + v.title + '</div></div>';
        document.body.appendChild(lb);
        function close() { lb.remove(); }
        lb.onclick = function (e) { if (e.target === lb) close(); };
        lb.querySelector('.yt-lightbox__close').onclick = close;
        document.addEventListener('keydown', function esc(ev) {
          if (ev.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
        });
      }
    }).catch(function () {
      frame.innerHTML = '<div class="ytwin__placeholder">Video unavailable.</div>';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    fillHome();
    fillNews();
    fillIndustry();
    fillIndustryLatest();
    fillArticle();
    fillWire();
    fillWireArchive();
    fillVideoSlideshow();
    wireNewsletter();
  });
})();
