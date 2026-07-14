/* feum perf.js — drop-in runtime optimizations */
  (function(){
    // 1) Lazy-load + async-decode every image as soon as it appears in the DOM.
    //    React mounts images after the bundle runs, so we observe DOM mutations.
    function tuneImages(root){
      var imgs = (root || document).querySelectorAll('img');
      for (var i = 0; i < imgs.length; i++) {
        var img = imgs[i];
        if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
        if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
      }
    }
    function start(){
      tuneImages(document);
      try {
        var obs = new MutationObserver(function(muts){
          for (var i = 0; i < muts.length; i++) {
            var added = muts[i].addedNodes;
            for (var j = 0; j < added.length; j++) {
              var n = added[j];
              if (n && n.nodeType === 1) tuneImages(n);
            }
          }
        });
        obs.observe(document.documentElement, { childList: true, subtree: true });
      } catch(_) {}
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', start);
    } else {
      start();
    }

    // 2) Auto-pause offscreen videos to save CPU/GPU
    function tuneVideos(){
      var vids = document.querySelectorAll('video');
      if (!vids.length || !('IntersectionObserver' in window)) return;
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(e){
          var v = e.target;
          if (e.isIntersecting) { try { v.play(); } catch(_) {} }
          else { try { v.pause(); } catch(_) {} }
        });
      }, { rootMargin: '200px' });
      vids.forEach(function(v){ io.observe(v); });
    }
    setTimeout(tuneVideos, 1500);
    setInterval(tuneVideos, 4000);

    // 3) On low-end devices (≤4 cores or coarse pointer), drop the most expensive
    //    visual effects via a class hook the perf.css file targets.
    try {
      var lowEnd =
        (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
        (matchMedia('(pointer: coarse)').matches) ||
        (matchMedia('(max-width: 768px)').matches);
      if (lowEnd) document.documentElement.classList.add('feum-lite');
    } catch(_) {}
  })();
  