/*
 * ============================================================
 *  feum-edits.js  —  Easy customisation layer
 *  Edit the values below, save, and refresh the site.
 * ============================================================
 *
 *  WHAT YOU CAN CHANGE HERE:
 *    1. Social / footer links
 *    2. "Trusted by" marquee creator cards
 *    3. Page title, tagline, OG description
 *    4. Toolkit app names  (icons are baked into the bundle)
 *    5. Stats  (views, clients, thumbnails, experience)
 *    6. "Selected work" thumbnails — replace the image files
 *       in  public/assets/  and update the src paths below
 *    7. "View more" Behance link
 *
 *  HOW TO ADD A THUMBNAIL:
 *    – Drop a new image into  artifacts/portfolio/public/assets/
 *    – Add an entry to FEUM.thumbnails (see examples below)
 *    – The section shows however many items are in the array
 *
 *  HOW TO CHANGE FONTS:
 *    – Replace the .ttf files in  public/fonts/
 *    – Keep the same file names  OR  update the @font-face
 *      declarations at the top of index.html
 * ============================================================
 */

(function () {
  /* ── 1. Social footer links ──────────────────────────────── */
  var SOCIAL_LINKS = {
    youtube:   'https://youtube.com/@feumm',
    instagram: 'https://www.instagram.com/fzerium',
    behance:   'https://www.behance.net/feum',
    discord:   'https://discord.com/users/1071929676223762452',
    pinterest: 'https://pinterest.com/feum',
    gumroad:   'https://gumroad.com/feum'
  };

  /* ── 2. Marquee creator cards ────────────────────────────── */
  /* Add/remove entries freely. Fields: name, subs, url, img, glow */
  var CREATORS = [
    {
      name: 'Icynutella',
      subs: '40.0K Subscribers',
      url:  'https://youtube.com/@icynutella',
      img:  'https://yt3.googleusercontent.com/pOdPN9SZ13Dy6pumjp5jl_vBA4-xHP7Vh55kqG1On8zvCg1Bb2PUAUmk81rIFXxR1Qus8N2I0A=s200-c-k-c0x00ffffff-no-rj',
      glow: 'rgba(56, 189, 248, 0.55)'
    },
    {
      name: 'Icynutella2',
      subs: '8.77K Subscribers',
      url:  'https://youtube.com/@icynutella2',
      img:  'https://yt3.googleusercontent.com/bzcNeMUIU7iD_Bb67Q5YYNlCnW9q8TvpKeLeBk14_i1_UaRly6Yqg-jA4RZ_th_klG0jmkZycUQ=s200-c-k-c0x00ffffff-no-rj',
      glow: 'rgba(34, 211, 238, 0.55)'
    }
    /* Add more creators here:
    {
      name: 'CreatorName',
      subs: '1M Subscribers',
      url:  'https://youtube.com/@handle',
      img:  'https://...profile-image-url...',
      glow: 'rgba(255, 100, 100, 0.55)'
    }
    */
  ];

  /* ── 3. Page meta text ───────────────────────────────────── */
  var META = {
    title:       'feum',
    description: 'Professional Minecraft thumbnail design by @feum.'
  };

  /* ── 4. Toolkit app labels (shown as tooltip on mobile) ─── */
  /* Note: icons are built into the bundle — only names shown as tooltip */
  var TOOLKIT_NAMES = ['Photoshop', 'Premiere Pro', 'After Effects', 'Lightroom'];

  /* ── 5. Stats ────────────────────────────────────────────── */
  /* These are baked into the bundle — changing them here has no effect.
     To change them, do a find-replace in public/assets/index-CESmVvPT.js:
       "2M+" → your value      (Views Generated)
       "60+" → your value      (Clients)
       "100+" → your value     (Thumbnails)
       "6mo+" → your value     (Experience)
  */

  /* ── 6. "View more" link ─────────────────────────────────── */
  var VIEW_MORE_URL = 'https://www.behance.net/gallery/202350941/Minecraft-Thumbnail';

  /* ── 7. Thumbnails — to ADD a new one, drop an image file
     into public/assets/ and reference it as "./assets/filename.png"
     This replaces the bundle's built-in image src values on load.
     To ADD new thumbnails, the bundle already loads RM array;
     patching individual images below just overrides src on specific cards.
  */
  var THUMBNAIL_SRC_OVERRIDES = {
    /* Example — replace 3rd thumbnail:
    2: './assets/your-new-image.png'
    */
  };


  /* ═══════════════════════════════════════════════════════════
   *  Runtime patcher — do not edit below this line
   * ═══════════════════════════════════════════════════════════ */

  /* Update page title / meta description */
  if (META.title) document.title = META.title;
  (function() {
    var d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute('content', META.description);
    var og = document.querySelector('meta[property="og:description"]');
    if (og) og.setAttribute('content', META.description);
    var t = document.querySelector('meta[property="og:title"]');
    if (t) t.setAttribute('content', META.title);
  })();

  /* Patch social footer links */
  function patchSocialLinks() {
    var links = document.querySelectorAll('footer a, [class*="footer"] a, ul li a');
    links.forEach(function(a) {
      var href = (a.getAttribute('href') || '').toLowerCase();
      if (href.includes('youtube.com/@fzrum') && SOCIAL_LINKS.youtube)
        a.href = SOCIAL_LINKS.youtube;
      if (href.includes('instagram.com') && SOCIAL_LINKS.instagram)
        a.href = SOCIAL_LINKS.instagram;
      if (href.includes('behance.net/feum') && SOCIAL_LINKS.behance)
        a.href = SOCIAL_LINKS.behance;
      if (href.includes('discord.com') && SOCIAL_LINKS.discord)
        a.href = SOCIAL_LINKS.discord;
      if (href.includes('pinterest') && SOCIAL_LINKS.pinterest)
        a.href = SOCIAL_LINKS.pinterest;
      if (href.includes('gumroad') && SOCIAL_LINKS.gumroad)
        a.href = SOCIAL_LINKS.gumroad;
    });
    /* View more link */
    document.querySelectorAll('a.view-more-link').forEach(function(a) {
      a.href = VIEW_MORE_URL;
    });
  }

  /* Patch thumbnail src */
  function patchThumbnails() {
    if (!Object.keys(THUMBNAIL_SRC_OVERRIDES).length) return;
    var imgs = document.querySelectorAll('[class*="aspect-video"] img, [class*="group"] img[src*="thumb-"]');
    imgs.forEach(function(img, idx) {
      if (THUMBNAIL_SRC_OVERRIDES[idx]) img.src = THUMBNAIL_SRC_OVERRIDES[idx];
    });
  }

  /* Toolkit tooltips on mobile */
  function injectToolkitTooltips() {
    var glowEl = document.querySelector('.toolkit-glow');
    if (!glowEl) return false;
    var parent = glowEl.parentElement;
    if (!parent) return false;
    var ul = parent.querySelector('ul');
    if (!ul) return false;
    var lis = ul.querySelectorAll('li');
    lis.forEach(function(li, i) {
      if (!li.hasAttribute('data-tool')) {
        var nameSpan = li.querySelector('span.truncate');
        var label = (nameSpan && nameSpan.textContent.trim()) || TOOLKIT_NAMES[i] || '';
        if (label) li.setAttribute('data-tool', label);
      }
    });
    return lis.length > 0;
  }

  /* Inject custom creator cards (from index.html script — already handled,
     this is a fallback if CREATORS was changed here) */
  function injectCreators() {
    var containers = document.querySelectorAll('.w-max');
    containers.forEach(function(container) {
      var links = Array.from(container.querySelectorAll('a.liquid-glass'));
      /* only inject if container has the original bundle cards */
      if (links.length < 4) return;
      /* mark already injected cards */
      if (container.hasAttribute('data-creators-injected')) return;
      container.setAttribute('data-creators-injected', '1');
      var groupSize = 4;
      var numGroups = Math.floor(links.length / groupSize);
      for (var r = numGroups - 1; r >= 0; r--) {
        var insertAfter = links[r * groupSize + groupSize - 1];
        CREATORS.slice().reverse().forEach(function(creator) {
          var a = document.createElement('a');
          a.href = creator.url;
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.className = 'liquid-glass group flex items-center gap-5 px-7 md:px-8 py-4 md:py-5 rounded-full shrink-0';
          a.innerHTML =
            '<span class="relative inline-flex items-center justify-center shrink-0">' +
              '<span aria-hidden="true" class="absolute inset-0 rounded-full blur-md" style="background-color:' + creator.glow + ';opacity:0.65;"></span>' +
              '<img src="' + creator.img + '" alt="' + creator.name + '" loading="lazy" class="relative w-14 h-14 md:w-16 md:h-16 rounded-full object-cover ring-1 ring-white/15 group-hover:ring-white/30 transition-shadow duration-300" />' +
            '</span>' +
            '<span class="flex flex-col">' +
              '<span class="font-semibold text-sm">' + creator.name + '</span>' +
              '<span class="text-xs text-muted-foreground">' + creator.subs + '</span>' +
            '</span>';
          insertAfter.insertAdjacentElement('afterend', a);
        });
      }
    });
  }

  /* Run all patches with polling for React hydration */
  var tries = 0;
  function runPatches() {
    patchSocialLinks();
    patchThumbnails();
    injectToolkitTooltips();
    /* Retry until toolkit is visible in DOM */
    if (!document.querySelector('.toolkit-glow') && ++tries < 60) {
      setTimeout(runPatches, 200);
    }
  }

  if (document.readyState === 'complete') {
    runPatches();
  } else {
    window.addEventListener('load', runPatches);
  }

})();
