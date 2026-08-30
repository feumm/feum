/*
 * Live YouTube subscriber counts
 * ------------------------------
 * This is intentionally client-side so the portfolio keeps working on
 * GitHub Pages without exposing a YouTube API key. SocialCounts returns
 * CORS-enabled data sourced from YouTube's public channel statistics.
 */
(function () {
  'use strict';

  var API_BASE = 'https://api.socialcounts.org/youtube-live-subscriber-count/';
  var REFRESH_MS = 30000;
  var STORAGE_KEY = 'feum-live-subscriber-counts-v1';

  var CHANNELS = {
    Wisp: { id: 'UC0h07r_UgTD0Tc-Dn5XLX3g' },
    Sharpness: { id: 'UCcsTbJjR3c8pOpfiv_d3wwg' },
    Avoma: { id: 'UCrBpcu7Isud_TXe3fhtb77A' },
    Deadpoolzain: { id: 'UC59Se53jMafKmFhcfIqJd2Q' },
    Icynutella: { id: 'UCNv8iB--rsS_CwfJ2T8B3qw' },
    Icynutella2: { id: 'UC_2KB6apc08hjbRwu9SOlQg' },
    H0nri: { id: 'UCqkrVJ5pYEefRLk7NVYvt6g' },
    Beeps: { id: 'UCxAB_8GVZGIbcUDFGLgptdg' },
    Kremiii: { id: 'UC5kce6D9aivWIam-QhOl1TQ' },
    Unliving: { id: 'UCHGgl9pmFMqD4a2vHjToSqQ' },
    Reddoons: { id: 'UCGnqunjHypvutkdX_iqmC2Q' }
  };

  function readCache() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (error) {
      return {};
    }
  }

  function writeCache(cache) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cache));
    } catch (error) {}
  }

  function parseCompactCount(value) {
    var match = String(value || '').match(/([\d.]+)\s*([KMB])?\s*subscriber/i);
    if (!match) return 0;
    var amount = Number(match[1]);
    var multiplier = match[2] === 'B' ? 1000000000 :
      match[2] === 'M' ? 1000000 :
      match[2] === 'K' ? 1000 : 1;
    return Number.isFinite(amount) ? amount * multiplier : 0;
  }

  function formatCount(count) {
    var value = Number(count);
    if (!Number.isFinite(value) || value < 0) return null;
    var suffix = '';
    var scaled = value;
    if (value >= 1000000000) {
      scaled = value / 1000000000;
      suffix = 'B';
    } else if (value >= 1000000) {
      scaled = value / 1000000;
      suffix = 'M';
    } else if (value >= 1000) {
      scaled = value / 1000;
      suffix = 'K';
    }
    var decimals = suffix === 'M' || suffix === 'B'
      ? (scaled < 10 ? 2 : 1)
      : suffix === 'K'
        ? (scaled < 10 ? 2 : scaled < 100 ? 1 : 0)
        : 0;
    var formatted = scaled.toFixed(decimals).replace(/\.?0+$/, '');
    return formatted + suffix + ' Subscribers';
  }

  function getCardName(card) {
    var nameEl = card.querySelector('.font-semibold, .font-medium');
    return nameEl ? nameEl.textContent.trim() : '';
  }

  function getCardCount(card) {
    var textEl = card.querySelector('.text-muted-foreground');
    return parseCompactCount(textEl ? textEl.textContent : '');
  }

  function getCards() {
    var cards = [];
    document.querySelectorAll('.w-max').forEach(function (container) {
      container.querySelectorAll('a.liquid-glass').forEach(function (card) {
        if (cards.indexOf(card) === -1) cards.push(card);
      });
    });
    return cards;
  }

  function sortCards() {
    document.querySelectorAll('.w-max').forEach(function (container) {
      var cards = Array.from(container.querySelectorAll('a.liquid-glass'));
      if (cards.length < 4) return;
      cards.forEach(function (card) {
        var name = getCardName(card);
        var knownCount = Number(card.getAttribute('data-subscriber-count'));
        if (!Number.isFinite(knownCount) || knownCount <= 0) knownCount = getCardCount(card);
        if (!Number.isFinite(knownCount)) knownCount = 0;
        card.setAttribute('data-creator-name', name);
        card.setAttribute('data-subscriber-count', String(knownCount));
      });

      function compareCards(a, b) {
        var countDiff = Number(b.getAttribute('data-subscriber-count')) -
          Number(a.getAttribute('data-subscriber-count'));
        if (countDiff !== 0) return countDiff;
        return getCardName(a).localeCompare(getCardName(b));
      }

      /* Sort within each repeated marquee cycle, not across the full track. */
      var uniqueNames = [];
      cards.forEach(function (card) {
        var name = getCardName(card);
        if (uniqueNames.indexOf(name) === -1) uniqueNames.push(name);
      });
      var cycleSize = uniqueNames.length;
      var sortedCards = [];
      if (cycleSize > 0 && cards.length % cycleSize === 0) {
        for (var start = 0; start < cards.length; start += cycleSize) {
          sortedCards = sortedCards.concat(cards.slice(start, start + cycleSize).sort(compareCards));
        }
      } else {
        sortedCards = cards.slice().sort(compareCards);
      }

      var currentOrder = Array.from(container.querySelectorAll('a.liquid-glass'));
      var changed = currentOrder.some(function (card, index) { return card !== sortedCards[index]; });
      if (changed) sortedCards.forEach(function (card) { container.appendChild(card); });
    });
  }

  function applyCount(name, count, cache, source) {
    var formatted = formatCount(count);
    if (!formatted) return;
    cache[name] = Number(count);
    document.querySelectorAll('a.liquid-glass').forEach(function (card) {
      if (getCardName(card) !== name) return;
      var subEl = card.querySelector('.text-muted-foreground');
      if (subEl) {
        subEl.textContent = formatted;
        subEl.title = source === 'live'
          ? 'Live subscriber count — updates every 30 seconds'
          : 'Last known subscriber count';
        subEl.setAttribute('aria-label', formatted + (source === 'live' ? ', live' : ', last known'));
      }
      card.setAttribute('data-subscriber-count', String(count));
      card.setAttribute('data-subscriber-source', source);
    });
  }

  function getApiCount(payload) {
    var estimation = payload && payload.counters && payload.counters.estimation;
    var official = payload && payload.counters && payload.counters.api;
    var value = estimation && estimation.subscriberCount;
    if (!Number.isFinite(Number(value))) value = official && official.subscriberCount;
    return Number.isFinite(Number(value)) ? Number(value) : 0;
  }

  function fetchCount(name, channel, cache) {
    return fetch(API_BASE + channel.id, {
      cache: 'no-store',
      headers: { Accept: 'application/json' }
    })
      .then(function (response) {
        if (!response.ok) throw new Error('Subscriber request failed');
        return response.json();
      })
      .then(function (payload) {
        var count = getApiCount(payload);
        if (!count) throw new Error('Subscriber count unavailable');
        applyCount(name, count, cache, 'live');
      })
      .catch(function () {
        if (cache[name]) applyCount(name, cache[name], cache, 'cached');
      });
  }

  function syncCachedCounts(cache) {
    getCards().forEach(function (card) {
      var name = getCardName(card);
      if (!CHANNELS[name]) return;
      var count = cache[name] || getCardCount(card);
      if (count) {
        card.setAttribute('data-subscriber-count', String(count));
        if (cache[name]) applyCount(name, count, cache, 'cached');
      }
    });
  }

  function refreshCounts() {
    var cache = readCache();
    syncCachedCounts(cache);
    sortCards();
    return Promise.all(Object.keys(CHANNELS).map(function (name) {
      return fetchCount(name, CHANNELS[name], cache);
    })).then(function () {
      writeCache(cache);
      sortCards();
    });
  }

  function waitForCards(attempt) {
    sortCards();
    if (getCards().length > 0 || attempt >= 20) return;
    window.setTimeout(function () { waitForCards(attempt + 1); }, 250);
  }

  function boot() {
    waitForCards(0);
    window.setTimeout(refreshCounts, 1800);
    window.setInterval(refreshCounts, REFRESH_MS);
  }

  if (document.readyState === 'complete') boot();
  else window.addEventListener('load', boot, { once: true });
})();