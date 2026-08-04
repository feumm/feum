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
    youtube:   'https://www.youtube.com/@falws',
    instagram: 'https://www.instagram.com/',
    behance:   'https://www.behance.net/falw',
    discord:   'https://discord.com/users/1071929676223762452',
    pinterest: 'https://pinterest.com/',
    gumroad:   'https://gumroad.com/falw'
  };

  /* ── 2. Marquee creator cards ────────────────────────────── */
  /* Add/remove entries freely. Fields: name, subs, url, img, glow */
  var CREATORS = [
    {
      name: 'Icynutella',
      subs: '39.7K Subscribers',
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
    },
    {
      name: 'H0nri',
      subs: '2.75K Subscribers',
      url:  'https://youtube.com/@h0nritv',
      img:  './assets/h0nritv.jpg',
      glow: 'rgba(147, 112, 219, 0.55)'
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
    title:       '@falw',
    description: 'Scroll-stoppers, made to click. Professional Minecraft thumbnail design by feum.'
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
      if (href.includes('youtube.com/@falws') && SOCIAL_LINKS.youtube)
        a.href = SOCIAL_LINKS.youtube;
      if (href.includes('instagram.com') && SOCIAL_LINKS.instagram)
        a.href = SOCIAL_LINKS.instagram;
      if (href.includes('behance.net/falw') && SOCIAL_LINKS.behance)
        a.href = SOCIAL_LINKS.behance;
      if (href.includes('discord.com') && SOCIAL_LINKS.discord)
        a.href = SOCIAL_LINKS.discord;
      if (href.includes('pinterest') && SOCIAL_LINKS.pinterest)
        a.href = SOCIAL_LINKS.pinterest;
      if (href.includes('gumroad.con/falw') && SOCIAL_LINKS.gumroad)
        a.href = SOCIAL_LINKS.gumroad;
    });
    /* View more link */
    document.querySelectorAll('a.view-more-link').forEach(function(a) {
      a.href = VIEW_MORE_URL;
    });
  }

  /* Fix footer social links on mobile — force 3-column grid via inline styles */
  function fixMobileFooterLinks() {
    if (window.innerWidth > 767) return;
    if (document.querySelector('[data-mobile-footer-fixed]')) return;

    /* Find the social links list by looking for a ul with social platform hrefs */
    var ul = null;
    document.querySelectorAll('ul').forEach(function(el) {
      if (ul) return;
      var anchors = Array.from(el.querySelectorAll('a'));
      if (anchors.length < 4) return;
      var hasSocial = anchors.some(function(a) {
        var h = (a.getAttribute('href') || '').toLowerCase();
        return h.includes('instagram') || h.includes('behance') || h.includes('discord') || h.includes('youtube') || h.includes('pinterest') || h.includes('gumroad');
      });
      if (hasSocial) ul = el;
    });
    if (!ul) return;

    ul.setAttribute('data-mobile-footer-fixed', '1');

    /* Force 3-column grid via setProperty (priority 'important' overrides any class) */
    var P = 'important';
    ul.style.setProperty('display', 'grid', P);
    ul.style.setProperty('grid-template-columns', 'repeat(3, 1fr)', P);
    ul.style.setProperty('gap', '0.5rem', P);
    ul.style.setProperty('padding', '0 1rem 0.5rem', P);
    ul.style.setProperty('overflow', 'visible', P);
    ul.style.setProperty('flex-wrap', 'unset', P);
    ul.style.setProperty('width', '100%', P);

    /* Style each direct child (li or a) */
    Array.from(ul.children).forEach(function(child) {
      child.style.setProperty('width', '100%', P);
      var a = child.tagName === 'A' ? child : child.querySelector('a');
      if (!a) return;
      a.style.setProperty('display', 'flex', P);
      a.style.setProperty('width', '100%', P);
      a.style.setProperty('justify-content', 'center', P);
      a.style.setProperty('padding', '0.5rem 0.25rem', P);
      a.style.setProperty('font-size', '0.7rem', P);
      a.style.setProperty('white-space', 'nowrap', P);
      a.style.setProperty('border-radius', '10px', P);
      a.style.setProperty('box-sizing', 'border-box', P);
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

  /* Hide "Selected work." section header */
  function hideSelectedWorkHeader() {
    document.querySelectorAll('*').forEach(function(el) {
      if (el.children.length === 0 && (el.textContent || '').trim() === 'Scroll-stoppers, made to click.') {
        /* parent is the flex row containing the heading + this subtitle */
        var row = el.parentElement;
        if (row) row.style.setProperty('display', 'none', 'important');
      }
    });
  }

  /* Hide "Available for new projects" badge */
  function hideAvailableBadge() {
    document.querySelectorAll('*').forEach(function(el) {
      var text = (el.textContent || '').trim();
      if (text.toUpperCase().includes('AVAILABLE FOR NEW') && text.length < 40) {
        el.style.setProperty('display', 'none', 'important');
      }
    });
  }

  /* Patch "Trusted by creators" section */
  function patchTrustedSection() {
    /* 1. Capitalise "creators" → "Creators" */
    document.querySelectorAll('.trusted-gradient-text').forEach(function(el) {
      if ((el.textContent || '').trim() === 'creators') el.textContent = 'Creators';
    });
    /* 2. Remove "Creating thumbnails for creators worldwide." */
    document.querySelectorAll('p.text-muted-foreground.max-w-xs, p[class*="max-w-xs"]').forEach(function(el) {
      if ((el.textContent || '').includes('Creating thumbnails for creators')) {
        el.style.setProperty('display', 'none', 'important');
      }
    });
    /* 3. Center the row containing the heading + the removed subtitle */
    document.querySelectorAll('.trusted-gradient-text').forEach(function(el) {
      var section = el.closest('section') || el.closest('[class*="py-"]') || el.parentElement;
      /* Walk up to find the flex row that holds heading + subtitle */
      var row = el.parentElement;
      for (var i = 0; i < 6; i++) {
        if (!row || row === document.body) break;
        if (row.style || row.className) {
          row.style.setProperty('justify-content', 'center', 'important');
          row.style.setProperty('text-align', 'center', 'important');
        }
        row = row.parentElement;
      }
    });
  }

  /* Patch hero headline */
  function patchHeroHeadline() {
    var done = { line1: false, line2: false };
    document.querySelectorAll('*').forEach(function(el) {
      /* Line 1: plain text node element */
      if (!done.line1 && el.children.length === 0 && (el.textContent || '').trim() === 'Built for retention.') {
        el.textContent = 'Professional designs.';
        done.line1 = true;
      }
      /* Line 2: find the italic "eye." span and work from its direct parent */
      if (!done.line2 && el.children.length === 0 && (el.textContent || '').trim() === 'eye.' && el.classList.contains('italic')) {
        var parent = el.parentElement;
        if (parent) {
          parent.childNodes.forEach(function(node) {
            if (node.nodeType === 3) node.textContent = node.textContent.replace('designed for the', 'Better views.');
          });
          el.style.setProperty('display', 'none', 'important');
          done.line2 = true;
        }
      }
    });
    return done.line1 && done.line2;
  }

  /* Rename CTA button text */
  function renameCTA() {
    document.querySelectorAll('a, button').forEach(function(el) {
      if ((el.textContent || '').includes('Start a project')) {
        /* Replace the label spans while keeping the arrow icon */
        el.childNodes.forEach(function(node) {
          if (node.nodeType === 3 && node.textContent.trim()) {
            node.textContent = node.textContent.replace(/LET'S TALK/gi, "LET'S WORK TOGETHER").replace(/Start a project/gi, '');
          }
        });
        el.querySelectorAll('span, p').forEach(function(span) {
          if ((span.textContent || '').includes("LET'S TALK") || (span.textContent || '').toLowerCase().includes("let's talk")) {
            span.textContent = "LET'S WORK TOGETHER";
          }
          if ((span.textContent || '').includes('Start a project')) {
            span.textContent = '';
          }
        });
      }
    });
  }

  /* Frosted glass on the "Start a project" CTA button */
  function frostedGlassCTA() {
    var done = false;
    document.querySelectorAll('a').forEach(function(a) {
      if (done) return;
      if (!(a.textContent || '').includes('Start a project')) return;
      if (a.hasAttribute('data-frosted-cta')) return;
      a.setAttribute('data-frosted-cta', '1');
      done = true;
      var P = 'important';
      a.style.setProperty('background', 'rgba(255, 255, 255, 0.03)', P);
      a.style.setProperty('backdrop-filter', 'blur(20px) saturate(180%)', P);
      a.style.setProperty('-webkit-backdrop-filter', 'blur(20px) saturate(180%)', P);
      a.style.setProperty('border', '1px solid rgba(255, 255, 255, 0.05)', P);
      a.style.setProperty('box-shadow', '0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)', P);
      /* Make all text spans white so they're readable on the dark frosted bg */
      a.querySelectorAll('span, p').forEach(function(el) {
        el.style.setProperty('color', 'rgba(255, 255, 255, 0.9)', P);
      });
    });
    return done;
  }

  /* ── Show More thumbnails ────────────────────────────────── */
  var SHOW_MORE_LIMIT = 5;

  function applyShowMore() {
    if (document.querySelector('[data-show-more-applied]')) return false;

    /* Find the thumbnail grid — use the exact class combination from the bundle */
    var thumbGrid =
      document.querySelector('[class*="gap-x-8"][class*="gap-y-14"]') ||
      document.querySelector('[class*="gap-y-14"][class*="gap-x-8"]');
    if (!thumbGrid) return false;

    var items = Array.from(thumbGrid.children);
    if (items.length <= SHOW_MORE_LIMIT) return true; /* nothing to hide */

    thumbGrid.setAttribute('data-show-more-applied', '1');

    /* Hide items beyond the limit */
    items.forEach(function(item, i) {
      if (i >= SHOW_MORE_LIMIT) {
        item.style.display = 'none';
        item.setAttribute('data-hidden-by-show-more', '1');
      }
    });

    /* Create "Show More" button */
    var hiddenCount = items.length - SHOW_MORE_LIMIT;
    var btn = document.createElement('button');
    btn.setAttribute('data-show-more-btn', '1');
    btn.textContent = 'Show more';

    var P = 'important';
    btn.style.setProperty('display', 'flex', P);
    btn.style.setProperty('align-items', 'center', P);
    btn.style.setProperty('justify-content', 'center', P);
    btn.style.setProperty('margin', '2rem auto 0', P);
    btn.style.setProperty('padding', '11px 26px', P);
    btn.style.setProperty('background', 'rgba(255,255,255,0.05)', P);
    btn.style.setProperty('border', '1px solid rgba(255,255,255,0.12)', P);
    btn.style.setProperty('border-radius', '999px', P);
    btn.style.setProperty('color', 'rgba(255,255,255,0.85)', P);
    btn.style.setProperty('font-family', "'Clash Display','Satoshi','Inter',sans-serif", P);
    btn.style.setProperty('font-size', '15px', P);
    btn.style.setProperty('font-weight', '600', P);
    btn.style.setProperty('letter-spacing', '-0.01em', P);
    btn.style.setProperty('cursor', 'pointer', P);
    btn.style.setProperty('backdrop-filter', 'blur(14px)', P);
    btn.style.setProperty('-webkit-backdrop-filter', 'blur(14px)', P);
    btn.style.setProperty('transition', 'background 0.2s, border-color 0.2s', P);

    btn.addEventListener('mouseenter', function() {
      btn.style.setProperty('background', 'rgba(255,255,255,0.1)', P);
      btn.style.setProperty('border-color', 'rgba(255,255,255,0.22)', P);
    });
    btn.addEventListener('mouseleave', function() {
      btn.style.setProperty('background', 'rgba(255,255,255,0.05)', P);
      btn.style.setProperty('border-color', 'rgba(255,255,255,0.12)', P);
    });

    var expanded = false;
    btn.addEventListener('click', function() {
      expanded = !expanded;
      if (expanded) {
        /* Reveal all hidden items */
        items.forEach(function(item, i) {
          if (i >= SHOW_MORE_LIMIT) item.style.display = '';
        });
        btn.textContent = 'Show less';
      } else {
        /* Hide again */
        items.forEach(function(item, i) {
          if (i >= SHOW_MORE_LIMIT) item.style.display = 'none';
        });
        btn.textContent = 'Show more';
        /* Scroll back to the top of the grid so it's in view */
        thumbGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    thumbGrid.insertAdjacentElement('afterend', btn);
    return true;
  }

  /* Remove the existing "VIEW MORE" button from the bundle */
  function removeViewMoreButton() {
    document.querySelectorAll('a, button').forEach(function(el) {
      var text = (el.textContent || '').trim().toUpperCase();
      if (text === 'VIEW MORE') {
        el.style.setProperty('display', 'none', 'important');
      }
    });
  }

  /* ── Reorder sections: Trusted + Stats right after Hero ─── */
  var sectionsReordered = false;
  function reorderSections() {
    if (sectionsReordered) return true;

    // Find all top-level sections inside the page root
    var sections = Array.from(document.querySelectorAll('main > section, #root > div > section, body > div > section, div[class] > section'));
    if (sections.length < 3) return false; // not ready yet

    // Identify sections by content
    var trustedSection = null;
    var statsSection   = null;
    var heroSection    = null;

    sections.forEach(function(s) {
      if (!trustedSection && s.querySelector('.trusted-gradient-text')) trustedSection = s;
      if (!statsSection && (s.textContent || '').toUpperCase().includes('VIEWS GENERATED')) statsSection = s;
      if (!heroSection) heroSection = s; // first section is always the hero
    });

    if (!trustedSection || !statsSection || !heroSection) return false;
    if (trustedSection === heroSection || statsSection === heroSection) return false;

    var parent = heroSection.parentNode;
    if (!parent) return false;

    // Insert trusted immediately after hero, then stats right after trusted
    var heroNext = heroSection.nextSibling;
    parent.insertBefore(trustedSection, heroNext);
    parent.insertBefore(statsSection, trustedSection.nextSibling);

    sectionsReordered = true;
    return true;
  }

  /* ── Patch stats section: apply Clash Display 700 to numbers ── */
  var statsFontPatched = false;
  function patchStatsFonts() {
    if (statsFontPatched) return true;

    /* Find the stats section the same way reorderSections does */
    var statsSection = null;
    var sections = Array.from(document.querySelectorAll(
      'main > section, #root > div > section, body > div > section, div[class] > section'
    ));
    sections.forEach(function(s) {
      if (!statsSection && (s.textContent || '').toUpperCase().includes('VIEWS GENERATED')) {
        statsSection = s;
      }
    });
    if (!statsSection) return false;

    /* Target the large number elements — font-serif class + big text-size classes */
    var targets = statsSection.querySelectorAll(
      '[class*="font-serif"], [class*="text-5xl"], [class*="text-6xl"], ' +
      '[class*="text-7xl"], [class*="text-8xl"], [class*="text-9xl"]'
    );
    if (!targets.length) return false;

    var P = 'important';
    targets.forEach(function(el) {
      el.style.setProperty('font-family', "'Clash Display', 'OpenSans', sans-serif", P);
      el.style.setProperty('font-weight', '700', P);
      el.style.setProperty('letter-spacing', '-0.035em', P);
      el.style.setProperty('font-style', 'normal', P);
    });

    statsFontPatched = true;
    return true;
  }

  /* ── Patch footer brand logo ("PAID" image → new falw* logo) ── */
  function patchFooterLogo() {
    /* The bundle renders the footer logo as <img alt="feum" src="...Photoroom...">
       at two locations (main footer + a blurred bg copy). Replace both. */
    var imgs = document.querySelectorAll('img[alt="feum"], img[src*="Photoroom"]');
    if (!imgs.length) return false;
    imgs.forEach(function(img) {
      img.src = './assets/falw-logo-new.png';
      img.alt = 'falw*';
    });
    return true;
  }

  /* Inject stylesheet to strip nav pill outline — survives React re-renders */
  (function () {
    if (document.getElementById('feum-nav-pill-reset')) return;
    var s = document.createElement('style');
    s.id = 'feum-nav-pill-reset';
    s.textContent =
      'a.feum-nav-link { filter: none !important; text-shadow: none !important; }' +
      'nav .flex.items-center { background: rgba(255,255,255,0.06) !important; backdrop-filter: blur(18px) saturate(180%) !important; -webkit-backdrop-filter: blur(18px) saturate(180%) !important; border: none !important; border-radius: 999px !important; padding: 5px !important; box-shadow: none !important; outline: none !important; }';
    document.head.appendChild(s);
  })();

  /* Run all patches with polling for React hydration */
  var tries = 0;
  var showMoreApplied = false;
  var footerLogoPatched = false;
  function runPatches() {
    patchSocialLinks();
    if (!footerLogoPatched) footerLogoPatched = patchFooterLogo();
    patchThumbnails();
    injectToolkitTooltips();
    fixMobileFooterLinks();
    frostedGlassCTA();
    renameCTA();
    patchHeroHeadline();
    patchTrustedSection();
    hideAvailableBadge();
    hideSelectedWorkHeader();
    removeViewMoreButton();
    reorderSections();
    if (!showMoreApplied) showMoreApplied = applyShowMore();
    if (!statsFontPatched) statsFontPatched = patchStatsFonts();
    var needsRetry = !document.querySelector('.toolkit-glow') ||
                     (window.innerWidth <= 767 && !document.querySelector('[data-mobile-footer-fixed]')) ||
                     !showMoreApplied ||
                     !sectionsReordered ||
                     !footerLogoPatched ||
                     !statsFontPatched;
    if (needsRetry && ++tries < 60) {
      setTimeout(runPatches, 200);
    } else {
      /* All patches done — reveal the app */
      var root = document.getElementById('root');
      if (root) root.classList.add('feum-ready');
    }
  }

  if (document.readyState === 'complete') {
    runPatches();
  } else {
    window.addEventListener('load', runPatches);
  }

})();
