(function () {
  'use strict';

  var editableSelector = 'input, textarea, select, [contenteditable="true"]';
  var installButton = document.getElementById('installAppBtn');
  var deferredPrompt = null;

  function isEditable(target) {
    return target && target.closest && target.closest(editableSelector);
  }

  function blockEvent(event) {
    if (!isEditable(event.target)) event.preventDefault();
  }

  document.documentElement.classList.add('feum-protected-page');
  document.addEventListener('contextmenu', blockEvent, true);
  document.addEventListener('selectstart', blockEvent, true);
  document.addEventListener('copy', blockEvent, true);
  document.addEventListener('cut', blockEvent, true);
  document.addEventListener('dragstart', function (event) {
    var target = event.target;
    if (target && target.closest && target.closest('img, video, audio, a')) event.preventDefault();
  }, true);

  document.addEventListener('keydown', function (event) {
    var key = String(event.key || '').toLowerCase();
    var modifier = event.ctrlKey || event.metaKey;
    var inspectShortcut =
      event.key === 'F12' ||
      (modifier && event.shiftKey && ['i', 'j', 'c'].indexOf(key) !== -1) ||
      (modifier && ['u', 's', 'p'].indexOf(key) !== -1);
    if (inspectShortcut) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, true);

  function isStandalone() {
    return window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true;
  }

  if (installButton) {
    if (isStandalone()) installButton.hidden = true;
    installButton.addEventListener('click', function () {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.catch(function () {}).finally(function () { deferredPrompt = null; });
        return;
      }
      var isIOS = /iphone|ipad|ipod/i.test(window.navigator.userAgent);
      window.alert(isIOS
        ? 'To install this app, tap Share and choose “Add to Home Screen”.'
        : 'Open your browser menu and choose “Install app” or “Add to Home Screen”.');
    });
  }

  window.addEventListener('beforeinstallprompt', function (event) {
    event.preventDefault();
    deferredPrompt = event;
    if (installButton) installButton.hidden = false;
  });

  window.addEventListener('appinstalled', function () {
    deferredPrompt = null;
    if (installButton) installButton.hidden = true;
  });

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('./sw.js', { scope: './' }).catch(function () {});
    }, { once: true });
  }
})();