/* behindrobotics.com — cookie consent banner
 * Self-contained, drop-in. No external dependencies.
 * Stores the visitor's choice in localStorage under 'rh_cookie_consent'
 * ('accepted' | 'rejected') and exposes window.RH_CONSENT so other
 * scripts (e.g. future analytics) can check consent before running.
 * Uses the site's existing CSS custom properties so it matches the
 * rest of the UI without needing a separate stylesheet.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'rh_cookie_consent';

  function getStoredConsent() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStoredConsent(value) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      /* localStorage unavailable (private mode, etc.) — banner will
         just reappear next visit, which is an acceptable fallback. */
    }
  }

  window.RH_CONSENT = getStoredConsent(); // 'accepted' | 'rejected' | null

  function dispatchConsentEvent(value) {
    try {
      window.dispatchEvent(new CustomEvent('rh:consent', { detail: { consent: value } }));
    } catch (e) { /* older browsers: no-op */ }
  }

  function removeBanner(el) {
    if (!el) return;
    el.style.transform = 'translateY(120%)';
    el.style.opacity = '0';
    window.setTimeout(function () {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 250);
  }

  function injectStyles() {
    if (document.getElementById('rh-cookie-style')) return;
    var css = [
      '#rh-cookie-banner{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;',
      'max-width:860px;margin:0 auto;background:var(--nav,#0b0e14);color:#fff;',
      'border:1px solid var(--line,rgba(255,255,255,.14));border-radius:14px;',
      'box-shadow:0 12px 40px rgba(0,0,0,.35);padding:18px 20px;',
      'display:flex;flex-wrap:wrap;gap:14px 20px;align-items:center;justify-content:space-between;',
      'font:14px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;',
      'transition:transform .25s ease,opacity .25s ease}',
      '#rh-cookie-banner p{margin:0;flex:1 1 380px;color:rgba(255,255,255,.85)}',
      '#rh-cookie-banner a{color:var(--blue,#4da3ff);text-decoration:underline}',
      '#rh-cookie-banner .rh-cookie-actions{display:flex;gap:10px;flex-wrap:wrap;flex:0 0 auto}',
      '#rh-cookie-banner button{cursor:pointer;border-radius:8px;padding:9px 16px;font-size:13px;',
      'font-weight:600;border:1px solid var(--line,rgba(255,255,255,.18));transition:opacity .15s ease}',
      '#rh-cookie-banner button:hover{opacity:.85}',
      '#rh-cookie-accept{background:var(--blue,#4da3ff);color:#08101c;border-color:var(--blue,#4da3ff)}',
      '#rh-cookie-reject{background:transparent;color:#fff}',
      '@media (max-width:520px){#rh-cookie-banner{padding:16px;bottom:8px;left:8px;right:8px}',
      '#rh-cookie-banner .rh-cookie-actions{width:100%}',
      '#rh-cookie-banner .rh-cookie-actions button{flex:1 1 auto}}'
    ].join('');
    var style = document.createElement('style');
    style.id = 'rh-cookie-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function showBanner() {
    injectStyles();
    var banner = document.createElement('div');
    banner.id = 'rh-cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-live', 'polite');
    banner.setAttribute('aria-label', 'Cookie consent');

    var text = document.createElement('p');
    text.innerHTML = 'We use cookies for essential site function and, if you accept, to support newsletter sign-in and market-data features. See our <a href="privacy.html">Privacy Policy</a> for details.';

    var actions = document.createElement('div');
    actions.className = 'rh-cookie-actions';

    var rejectBtn = document.createElement('button');
    rejectBtn.id = 'rh-cookie-reject';
    rejectBtn.type = 'button';
    rejectBtn.textContent = 'Reject non-essential';

    var acceptBtn = document.createElement('button');
    acceptBtn.id = 'rh-cookie-accept';
    acceptBtn.type = 'button';
    acceptBtn.textContent = 'Accept all';

    rejectBtn.addEventListener('click', function () {
      window.RH_CONSENT = 'rejected';
      setStoredConsent('rejected');
      dispatchConsentEvent('rejected');
      removeBanner(banner);
    });

    acceptBtn.addEventListener('click', function () {
      window.RH_CONSENT = 'accepted';
      setStoredConsent('accepted');
      dispatchConsentEvent('accepted');
      removeBanner(banner);
    });

    actions.appendChild(rejectBtn);
    actions.appendChild(acceptBtn);
    banner.appendChild(text);
    banner.appendChild(actions);
    document.body.appendChild(banner);
  }

  function init() {
    if (getStoredConsent()) return; // already chosen — don't re-prompt
    if (!document.body) {
      document.addEventListener('DOMContentLoaded', showBanner);
    } else {
      showBanner();
    }
  }

  init();
})();
