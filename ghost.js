/* ==========================================================================
   Robot Hive — Ghost content integration (Option 1: live JavaScript fetch)
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
    return (post.authors && post.authors[0] && post.authors[0].name) || 'Robot Hive';
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
    // news cards: the grid right under "Latest from the Hive"
    var cardGrid = document.querySelector('[data-ghost="home-cards"]');
    var rail = document.querySelector('[data-ghost="latest-rail"]');
    if (cardGrid) {
      get(api({ limit: 8 })).then(function (d) {
        if (d.posts && d.posts.length) renderHeroList(cardGrid, d.posts);
      }).catch(function () {});
    }
    if (rail) {
      get(api({ limit: 7 })).then(function (d) {
        if (d.posts && d.posts.length) {
          rail.innerHTML = d.posts.map(railItem).join('') +
            '<div class="railbox__foot"><a href="news.html">All posts →</a></div>';
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

  // ---- populate news page -------------------------------------------------
  function fillNews() {
    var grid = document.querySelector('[data-ghost="news-list"]');
    if (!grid) return;
    get(api({ limit: 20 })).then(function (d) {
      if (d.posts && d.posts.length) renderHeroList(grid, d.posts);
    }).catch(function () {});
  }

  // ---- populate an industry page (filtered by tag) ------------------------
  function fillIndustry() {
    var el = document.querySelector('[data-ghost-industry]');
    if (!el) return;
    var tag = el.getAttribute('data-ghost-industry'); // e.g. "defense"
    var cards = el.querySelector('[data-ghost="industry-cards"]');
    var rail = el.querySelector('[data-ghost="industry-rail"]');
    if (cards) {
      get(api({ limit: 12, filter: 'tag:' + tag })).then(function (d) {
        if (d.posts && d.posts.length) renderHeroList(cards, d.posts);
      }).catch(function () {});
    }
    if (rail) {
      get(api({ limit: 6, filter: 'tag:' + tag })).then(function (d) {
        if (d.posts && d.posts.length) {
          rail.innerHTML = d.posts.map(railItem).join('') +
            '<div class="railbox__foot"><a href="news.html">All posts →</a></div>';
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
      get(api({ limit: 5, filter: 'tag:' + tag })).then(function (d) {
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
      document.title = p.title + ' — Robot Hive';
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
        var input = form.querySelector('input[type="email"], input[type="text"]');
        var btn = form.querySelector('button');
        if (!input || !input.value) return;
        var email = input.value.trim();
        var original = btn ? btn.textContent : '';
        if (btn) { btn.textContent = '…'; btn.disabled = true; }
        fetch(GHOST_URL + '/members/api/send-magic-link/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: email,
            emailType: 'subscribe',
            labels: [],
            requestSrc: 'robothive-custom-site'
          })
        }).then(function (r) {
          if (r.ok) {
            if (btn) btn.textContent = '✓ Check your inbox';
            input.value = '';
          } else {
            if (btn) btn.textContent = 'Try again';
          }
        }).catch(function () {
          if (btn) btn.textContent = 'Try again';
        }).finally(function () {
          setTimeout(function () {
            if (btn) { btn.textContent = original || 'Subscribe'; btn.disabled = false; }
          }, 4000);
        });
      });
    });
  }

  // run whichever hooks exist on this page
  document.addEventListener('DOMContentLoaded', function () {
    fillHome();
    fillNews();
    fillIndustry();
    fillIndustryLatest();
    fillArticle();
    wireNewsletter();
  });
})();
