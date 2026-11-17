/* VICE / VI : mesure d'audience optionnelle. Aucun chargement Google sans accord. */
(function () {
  'use strict';
  var measurementId = 'G-CRWBGQ854J';
  var storageKey = 'vicevi_analytics_consent_v1';
  var choice;
  try { choice = localStorage.getItem(storageKey); } catch (_) { choice = null; }
  function loadAnalytics() {
    if (window.__viceviAnalyticsLoaded) return;
    window.__viceviAnalyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
    document.head.appendChild(script);
  }
  function saveChoice(value) {
    try { localStorage.setItem(storageKey, value); } catch (_) {}
    if (value === 'accepted') loadAnalytics();
    var box = document.getElementById('vicevi-consent-box');
    if (box) box.remove();
    var status = document.getElementById('vicevi-consent-status');
    if (status) status.textContent = value === 'accepted' ? 'Statistiques autorisées sur cet appareil.' : 'Statistiques refusées sur cet appareil.';
  }
  function showChoice() {
    if (document.getElementById('vicevi-consent-box')) return;
    var box = document.createElement('section');
    box.id = 'vicevi-consent-box';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-label', 'Choix des statistiques');
    box.style.cssText = 'position:fixed;bottom:12px;left:12px;right:12px;z-index:99999;max-width:690px;margin:0 auto;padding:18px 22px;background:#21132f;color:#fff;border:1px solid #bb83c0;border-radius:12px;box-shadow:0 12px 40px #0008;font:15px/1.5 system-ui,Arial,sans-serif';
    var title = document.createElement('strong');
    title.textContent = 'Statistiques de visite';
    var text = document.createElement('p');
    text.style.margin = '8px 0 14px';
    text.textContent = 'Avec ton accord, VICE / VI utilise Google Analytics pour comprendre quelles pages sont consultées. Tu peux refuser sans perdre l’accès au site et changer d’avis à tout moment.';
    var link = document.createElement('a');
    link.href = 'confidentialite.html#statistiques';
    link.textContent = 'En savoir plus';
    link.style.cssText = 'color:#ffb0db;display:inline-block;margin-right:14px';
    var buttons = document.createElement('div');
    buttons.style.cssText = 'display:flex;gap:10px;flex-wrap:wrap;margin-top:10px';
    [['Refuser', 'rejected'], ['Accepter', 'accepted']].forEach(function (item) {
      var button = document.createElement('button');
      button.type = 'button';
      button.textContent = item[0];
      button.style.cssText = 'border:1px solid #e2a7d4;border-radius:7px;padding:10px 16px;background:' + (item[1] === 'accepted' ? '#ff4aab;color:#200b26' : '#342244;color:#fff') + ';font:700 14px system-ui;cursor:pointer';
      button.addEventListener('click', function () { saveChoice(item[1]); });
      buttons.appendChild(button);
    });
    box.append(title, text, link, buttons);
    document.body.appendChild(box);
  }
  function start() {
    if (choice === 'accepted') loadAnalytics();
    else if (choice !== 'rejected') showChoice();
    var footer = document.querySelector('footer') || document.body;
    var prefs = document.createElement('p');
    prefs.style.cssText = 'margin:14px 0;font:13px/1.5 system-ui,Arial,sans-serif';
    var button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Gérer les statistiques';
    button.style.cssText = 'background:transparent;border:1px solid #ba84bd;color:#ffb0db;padding:8px 11px;border-radius:6px;cursor:pointer';
    button.addEventListener('click', function () {
      var existing = document.getElementById('vicevi-consent-box');
      if (existing) existing.remove();
      showChoice();
    });
    var status = document.createElement('span');
    status.id = 'vicevi-consent-status';
    status.style.cssText = 'margin-left:10px;color:#dfcddd';
    prefs.append(button, status);
    footer.appendChild(prefs);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
