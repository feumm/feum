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
    youtube:   'https://www.youtube.com/@fldrz',
    instagram: 'https://www.instagram.com/0fldr',
    behance:   'https://www.behance.net/fre',
    discord:   'https://discord.com/users/1071929676223762452',
    pinterest: 'https://pinterest.com/2fldr',
    gumroad:   'https://fldrz.gumroad.com',
    twitter:   'https://twitter.com/@designerfldr',
    linkme:    'https://link.me/fld'
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
    },
    {
      name: 'Beeps',
      subs: '56.3K Subscribers',
      url:  'https://youtube.com/@Beepstv',
      img:  'https://yt3.googleusercontent.com/ZZUiQA7YIvl2ziJkDtJSly_fPmty32ZMI6bmEkFSdgB5XAiOx3_iGMMNeAUqbVMtxJZNVzyA=s200-c-k-c0x00ffffff-no-rj',
      glow: 'rgba(139, 92, 246, 0.55)'
    },
    {
      name: 'Kremiii',
      subs: '1.02K Subscribers',
      url:  'https://youtube.com/@KremiiiYT',
      img:  'https://yt3.googleusercontent.com/DSaQIG742mPCGg6MNkXlxx2IobJpYpC-xDn_qtghS-seOEM6KwRlzBCTaPzdXuC7ap8YJBhg=s200-c-k-c0x00ffffff-no-rj',
      glow: 'rgba(236, 72, 153, 0.55)'
    },
    {
      name: 'Unliving',
      subs: '432 Subscribers',
      url:  'https://youtube.com/@Unliving',
      img:  'https://yt3.googleusercontent.com/OzSNhPDusgmpyjofuGWrz5Luna8fawDWI0XUNlWF8-71ODpz2WdnTxPuuejNtJ5qBQF9uSYn=s200-c-k-c0x00ffffff-no-rj',
      glow: 'rgba(99, 102, 241, 0.55)'
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
    title:       'fre',
    description: 'Scroll-stoppers, made to click. Professional Minecraft thumbnail design by fre.'
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
      if (href.includes('youtube.com/@fldrz') && SOCIAL_LINKS.youtube)
        a.href = SOCIAL_LINKS.youtube;
      if (href.includes('instagram.com/0fldr') && SOCIAL_LINKS.instagram)
        a.href = SOCIAL_LINKS.instagram;
      if (href.includes('behance.net/fre') && SOCIAL_LINKS.behance)
        a.href = SOCIAL_LINKS.behance;
      if (href.includes('discord.com/') && SOCIAL_LINKS.discord)
        a.href = SOCIAL_LINKS.discord;
      if (href.includes('pinterest.com/2fldr') && SOCIAL_LINKS.pinterest)
        a.href = SOCIAL_LINKS.pinterest;
      if (href.includes('fldrz.gumroad.com') && SOCIAL_LINKS.gumroad)
        a.href = SOCIAL_LINKS.gumroad;
    });
    /* View more link */
    document.querySelectorAll('a.view-more-link').forEach(function(a) {
      a.href = VIEW_MORE_URL;
    });
  }

  /* Fix footer social links — ensure icon-only circular buttons arranged neatly */
  function fixMobileFooterLinks() {
    /* Find the social links list by looking for a ul with social platform hrefs */
    var ul = null;
    document.querySelectorAll('ul').forEach(function(el) {
      if (ul) return;
      var anchors = Array.from(el.querySelectorAll('a'));
      if (anchors.length < 3) return;
      var hasSocial = anchors.some(function(a) {
        var h = (a.getAttribute('href') || '').toLowerCase();
        return h.includes('instagram') || h.includes('behance') || h.includes('discord') || h.includes('youtube') || h.includes('pinterest') || h.includes('gumroad') || h.includes('twitter') || h.includes('link.me');
      });
      if (hasSocial) ul = el;
    });
    if (!ul) return;

    ul.setAttribute('data-footer-icons-fixed', '1');

    var P = 'important';
    ul.style.setProperty('display', 'flex', P);
    ul.style.setProperty('flex-wrap', 'wrap', P);
    ul.style.setProperty('justify-content', 'center', P);
    ul.style.setProperty('align-items', 'center', P);
    ul.style.setProperty('gap', '0.75rem', P);
    ul.style.setProperty('max-width', '36rem', P);
    ul.style.setProperty('margin-left', 'auto', P);
    ul.style.setProperty('margin-right', 'auto', P);
    ul.style.setProperty('padding', '0 0.5rem', P);
    ul.style.setProperty('overflow', 'visible', P);
    ul.style.setProperty('width', '100%', P);

    /* Style each direct child (li or a) */
    Array.from(ul.children).forEach(function(child) {
      child.style.setProperty('display', 'inline-flex', P);
      child.style.setProperty('flex', '0 0 auto', P);
      child.style.setProperty('width', 'auto', P);
      child.style.setProperty('margin', '0', P);
      var a = child.tagName === 'A' ? child : child.querySelector('a');
      if (!a) return;
      a.style.setProperty('display', 'inline-flex', P);
      a.style.setProperty('align-items', 'center', P);
      a.style.setProperty('justify-content', 'center', P);
      a.style.setProperty('width', '2.75rem', P);
      a.style.setProperty('height', '2.75rem', P);
      a.style.setProperty('padding', '0', P);
      a.style.setProperty('border-radius', '9999px', P);
      a.style.setProperty('box-sizing', 'border-box', P);

      var spans = a.querySelectorAll('span');
      if (spans.length >= 1) {
        /* Icon circle */
        spans[0].style.setProperty('display', 'inline-flex', P);
        spans[0].style.setProperty('align-items', 'center', P);
        spans[0].style.setProperty('justify-content', 'center', P);
        spans[0].style.setProperty('width', '1.85rem', P);
        spans[0].style.setProperty('height', '1.85rem', P);
        spans[0].style.setProperty('flex-shrink', '0', P);
        spans[0].style.setProperty('border-radius', '50%', P);
      }
      /* Hide label text */
      for (var i = 1; i < spans.length; i++) {
        spans[i].style.setProperty('display', 'none', P);
      }
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

  /* Patch Beyond thumbnails section: single Video Editings card linking to video gallery + blurred cover backdrop behind the card */
  function patchBeyondSection() {
    var beyondHeadings = document.querySelectorAll('h2');
    beyondHeadings.forEach(function(h2) {
      if ((h2.textContent || '').includes('Beyond')) {
        var section = h2.closest('section');
        if (!section) return;

        /* Ensure section has no hard border lines or solid background boxes */
        section.style.setProperty('border-top', 'none', 'important');
        section.style.setProperty('border-bottom', 'none', 'important');
        section.style.setProperty('border', 'none', 'important');
        section.style.setProperty('background-color', 'transparent', 'important');
        section.style.setProperty('background', 'transparent', 'important');
        section.style.setProperty('padding-top', '3rem', 'important');
        section.style.setProperty('padding-bottom', '5rem', 'important');
        section.style.setProperty('margin-top', '3rem', 'important');
        section.style.setProperty('z-index', '5', 'important');

        /* Hide Beyond thumbnails heading completely */
        h2.classList.add('beyond-title');
        h2.style.setProperty('display', 'none', 'important');
        if (h2.parentElement) {
          h2.parentElement.style.setProperty('display', 'none', 'important');
        }

        /* Remove the description text under Beyond thumbnails */
        var descP = section.querySelector('p');
        if (descP && (descP.textContent || '').toLowerCase().includes('long-form')) {
          descP.remove();
        }

        /* Remove any old section-level backdrop if present */
        var oldSecBg = section.querySelector('#beyond-ambient-backdrop');
        if (oldSecBg) {
          oldSecBg.remove();
        }

        var cards = section.querySelectorAll('a.group, a[class*="group"]');
        if (cards.length > 1) {
          cards.forEach(function(card) {
            var txt = (card.textContent || '').toLowerCase();
            if (txt.includes('editing') && !txt.includes('animation') && !txt.includes('video editing')) {
              card.remove();
            } else if (txt.includes('motion')) {
              card.remove();
            }
          });
        }
        var remainingCards = section.querySelectorAll('a.group, a[class*="group"]');
        remainingCards.forEach(function(card) {
          card.href = './video-gallery.html';
          card.removeAttribute('target');
          card.removeAttribute('rel');
          card.style.setProperty('width', '100%', 'important');
          card.style.setProperty('max-width', '32rem', 'important');
          card.style.setProperty('position', 'relative', 'important');
          card.style.setProperty('z-index', '10', 'important');
          card.style.setProperty('outline', 'none', 'important');
          card.style.setProperty('border', 'none', 'important');
          card.style.setProperty('margin-left', 'auto', 'important');
          card.style.setProperty('margin-right', 'auto', 'important');

          /* Remove any glowing backdrop image behind the card itself that causes cyan border */
          var glowWrap = card.querySelector('div[class*="-inset-4"]');
          if (glowWrap) {
            glowWrap.remove();
          }

          var beyondSection = card.closest('section');
          if (beyondSection) {
            beyondSection.style.setProperty('overflow', 'visible', 'important');
            beyondSection.style.setProperty('position', 'relative', 'important');
          }

          var titleEl = card.querySelector('h3');
          if (titleEl) {
            titleEl.textContent = 'Video Editings';
            titleEl.style.setProperty('font-family', "'Satoshi', 'Inter', system-ui, -apple-system, sans-serif", 'important');
            titleEl.style.setProperty('font-weight', '600', 'important');
            titleEl.style.setProperty('letter-spacing', '0.01em', 'important');
            titleEl.style.setProperty('font-size', '1.15rem', 'important');
          }
          var parentGrid = card.parentElement;
          if (parentGrid) {
            parentGrid.style.setProperty('display', 'flex', 'important');
            parentGrid.style.setProperty('justify-content', 'center', 'important');
            parentGrid.style.setProperty('max-width', '36rem', 'important');
            parentGrid.style.setProperty('margin-left', 'auto', 'important');
            parentGrid.style.setProperty('margin-right', 'auto', 'important');
            parentGrid.style.setProperty('width', '100%', 'important');
            parentGrid.style.setProperty('position', 'relative', 'important');

            /* Check/inject ambient blurred background edge-to-edge behind the Video Editings card */
            var bgWrap = parentGrid.querySelector('#card-ambient-backdrop');
            if (!bgWrap) {
              bgWrap = document.createElement('div');
              bgWrap.id = 'card-ambient-backdrop';
              bgWrap.setAttribute('aria-hidden', 'true');
              parentGrid.insertBefore(bgWrap, parentGrid.firstChild);
            }
            bgWrap.className = 'beyond-ambient-backdrop';
            bgWrap.style.cssText = 'position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:100vw;max-width:100vw;height:160%;min-height:560px;z-index:0;overflow:hidden;pointer-events:none;';

            var bgImg = bgWrap.querySelector('img');
            if (!bgImg) {
              bgImg = document.createElement('img');
              bgImg.src = './assets/animation-cover-CzzcJCy2.png';
              bgImg.alt = '';
              bgWrap.appendChild(bgImg);
            }
            bgImg.style.cssText = 'width:100%;height:100%;object-fit:cover;transform:scale(1.04);filter:blur(6px) brightness(0.9) saturate(1.15);opacity:0.85;pointer-events:none;' +
              '-webkit-mask-image:linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 14%, rgba(0,0,0,1) 32%, rgba(0,0,0,1) 68%, rgba(0,0,0,0.5) 86%, transparent 100%);' +
              'mask-image:linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 14%, rgba(0,0,0,1) 32%, rgba(0,0,0,1) 68%, rgba(0,0,0,0.5) 86%, transparent 100%);';

            var fadeOverlay = bgWrap.querySelector('div');
            if (!fadeOverlay) {
              fadeOverlay = document.createElement('div');
              bgWrap.appendChild(fadeOverlay);
            }
            fadeOverlay.style.cssText = 'position:absolute;inset:0;' +
              'background:linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0.6) 12%, transparent 28%, transparent 72%, rgba(0,0,0,0.6) 88%, #000000 100%);' +
              'pointer-events:none;';

            /* Make card thumbnail crisp and clear with no outlines */
            var cardImg = card.querySelector('img:not([alt=""])');
            if (cardImg) {
              cardImg.classList.remove('cover-blur');
              cardImg.style.setProperty('filter', 'none', 'important');
              cardImg.style.setProperty('outline', 'none', 'important');
              cardImg.style.setProperty('border', 'none', 'important');
            }
          }
        });
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

  /* Deduplicate and sanitize footer social links (ensure single Twitter, single Link.me) */
  var socialInjected = true;
  function injectNewSocialLinks() {
    /* Twitter and Link.me are already rendered natively by React in the bundle.
       Clean up any duplicate injected items or extra links in the DOM. */
    document.querySelectorAll('ul').forEach(function(ul) {
      var seenLinks = new Set();
      var lis = Array.from(ul.querySelectorAll('li'));
      lis.forEach(function(li) {
        var a = li.querySelector('a');
        if (!a) return;
        var href = (a.getAttribute('href') || '').toLowerCase().trim();
        var label = (li.textContent || '').toLowerCase().trim();
        var key = href || label;
        if (!key) return;

        if (seenLinks.has(key) || li.hasAttribute('data-injected-twitter') || li.hasAttribute('data-injected-linkme')) {
          li.remove();
        } else {
          seenLinks.add(key);
        }
      });
    });
    return true;
  }

  /* Patch copyright text font → Clash Display 500 */
  function patchCopyrightFont() {
    var found = false;
    document.querySelectorAll('*').forEach(function(el) {
      if (found) return;
      var t = (el.textContent || '').trim();
      if (t.includes('All rights reserved') && el.children.length === 0) {
        var P = 'important';
        /* Style the paragraph/span itself */
        var target = el.parentElement && el.parentElement.children.length === 1 ? el.parentElement : el;
        target.style.setProperty('font-family', "'Clash Display','OpenSans',sans-serif", P);
        target.style.setProperty('font-weight', '500', P);
        target.style.setProperty('letter-spacing', '0.04em', P);
        found = true;
      }
    });
    return found;
  }

  /* Rename "Contact" nav link → "Hire Me" */
  function renameNavContact() {
    document.querySelectorAll('a.feum-nav-link').forEach(function(a) {
      if ((a.textContent || '').trim() === 'Contact') {
        a.textContent = 'Hire Me';
      }
    });
  }

  /* Ensure nav has Edits, Shop, and Hire Me links */
  function ensureNavLinks() {
    var navContainer = document.querySelector('nav .flex.items-center, nav div[class*="items-center"]');
    if (!navContainer) return;

    var expected = [
      { text: 'Edits', href: './video-gallery.html', target: false },
      { text: 'Shop', href: 'https://feumm.github.io/feumvis', target: true },
      { text: 'Hire Me', href: 'https://discord.com/users/1071929676223762452', target: true }
    ];

    var currentLinks = Array.from(navContainer.querySelectorAll('a.feum-nav-link'));
    
    /* Rename any Contact to Hire Me */
    currentLinks.forEach(function(a) {
      var t = (a.textContent || '').trim();
      if (t.toLowerCase() === 'contact') {
        a.textContent = 'Hire Me';
      }
    });

    /* Check if all 3 links exist */
    var hasEdits = currentLinks.some(function(a) { return (a.textContent || '').trim() === 'Edits' || (a.getAttribute('href') || '').includes('video-gallery'); });
    var hasShop = currentLinks.some(function(a) { return (a.textContent || '').trim().toLowerCase() === 'shop' || (a.getAttribute('href') || '').includes('feumvis'); });
    var hasHireMe = currentLinks.some(function(a) { return (a.textContent || '').trim().toLowerCase() === 'hire me' || (a.textContent || '').trim().toLowerCase() === 'contact' || (a.getAttribute('href') || '').includes('discord'); });

    if (!hasEdits || !hasShop || !hasHireMe) {
      navContainer.innerHTML = '';
      expected.forEach(function(item) {
        var a = document.createElement('a');
        a.href = item.href;
        if (item.target) {
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
        }
        a.className = 'text-base md:text-lg font-medium leading-none text-white/75 hover:text-white transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] feum-nav-link';
        a.textContent = item.text;
        navContainer.appendChild(a);
      });
    }
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

    /* Format CTA headline: "Let's build" line 1, "something clickable." line 2 for PC only */
    document.querySelectorAll('h2').forEach(function(h2) {
      var text = (h2.textContent || '');
      if (text.includes("Let's build") || text.includes('build something')) {
        var P = 'important';
        var isMobile = window.innerWidth <= 768;
        h2.classList.add('cta-headline');
        h2.style.setProperty('font-size', isMobile ? 'clamp(3rem, 13vw, 5rem)' : 'clamp(3.5rem, 7.5vw, 7.5rem)', P);
        h2.style.setProperty('line-height', isMobile ? '0.92' : '0.9', P);
        h2.style.setProperty('letter-spacing', isMobile ? '-0.035em' : '-0.04em', P);
        h2.style.setProperty('color', '#ffffff', P);
        h2.style.setProperty('-webkit-text-fill-color', '#ffffff', P);
        h2.style.setProperty('background', 'none', P);
        h2.style.setProperty('max-width', '90rem', P);
        h2.style.setProperty('width', '100%', P);
        h2.style.setProperty('text-align', 'center', P);

        if (!h2.getAttribute('data-cta-line-split')) {
          h2.setAttribute('data-cta-line-split', '1');
          h2.innerHTML = '<span class="cta-pc-line1" style="display:' + (isMobile ? 'inline' : 'block') + ' !important; width:' + (isMobile ? 'auto' : '100%') + ' !important; white-space:' + (isMobile ? 'normal' : 'nowrap') + ' !important;">Let\'s build' + (isMobile ? ' ' : '') + '</span>' +
            '<span class="cta-pc-line2" style="display:' + (isMobile ? 'inline' : 'block') + ' !important; width:' + (isMobile ? 'auto' : '100%') + ' !important; white-space:' + (isMobile ? 'normal' : 'nowrap') + ' !important;">something' + (isMobile ? ' ' : '') + '</span>' +
            '<span class="cta-pc-line3" style="display:' + (isMobile ? 'inline' : 'block') + ' !important; width:' + (isMobile ? 'auto' : '100%') + ' !important; white-space:' + (isMobile ? 'normal' : 'nowrap') + ' !important;"><span class="italic">clickable.</span></span>';
        } else {
          var line1 = h2.querySelector('.cta-pc-line1');
          var line2 = h2.querySelector('.cta-pc-line2');
          var line3 = h2.querySelector('.cta-pc-line3');
          if (line1) {
            line1.style.setProperty('display', isMobile ? 'inline' : 'block', P);
            line1.style.setProperty('width', isMobile ? 'auto' : '100%', P);
            line1.style.setProperty('white-space', isMobile ? 'normal' : 'nowrap', P);
            line1.textContent = isMobile ? "Let's build " : "Let's build";
          }
          if (line2) {
            line2.style.setProperty('display', isMobile ? 'inline' : 'block', P);
            line2.style.setProperty('width', isMobile ? 'auto' : '100%', P);
            line2.style.setProperty('white-space', isMobile ? 'normal' : 'nowrap', P);
            line2.textContent = isMobile ? "something " : "something";
          }
          if (line3) {
            line3.style.setProperty('display', isMobile ? 'inline' : 'block', P);
            line3.style.setProperty('width', isMobile ? 'auto' : '100%', P);
            line3.style.setProperty('white-space', isMobile ? 'normal' : 'nowrap', P);
          }
        }
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

    /* ── Behance icon button (appears next to "Show less") ─── */
    var behanceBtn = document.createElement('a');
    behanceBtn.href = VIEW_MORE_URL;
    behanceBtn.target = '_blank';
    behanceBtn.rel = 'noopener noreferrer';
    behanceBtn.title = 'View on Behance';
    behanceBtn.setAttribute('aria-label', 'View on Behance');
    behanceBtn.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
        '<path d="M7.443 5.35c.639 0 1.23.05 1.77.198.541.099.984.297 1.377.544.394.247.689.594.886 1.039.197.445.296.99.296 1.583 0 .693-.148 1.286-.493 1.731-.296.446-.788.841-1.378 1.138.836.247 1.476.693 1.919 1.336.444.644.64 1.435.64 2.326 0 .693-.148 1.336-.394 1.88-.296.545-.64.99-1.132 1.336-.493.347-1.034.594-1.624.742-.64.148-1.28.198-1.92.198H1V5.35h6.443zm-.394 5.54c.542 0 .984-.148 1.329-.445.344-.297.492-.742.492-1.286 0-.297-.049-.594-.148-.792-.099-.247-.247-.395-.444-.544-.197-.099-.394-.197-.64-.247-.246-.05-.492-.05-.788-.05H3.9v3.413h3.149v-.049zm.148 5.787c.296 0 .591-.05.887-.099.295-.099.54-.197.787-.346.246-.148.442-.346.59-.643.148-.297.247-.644.247-1.04 0-.791-.197-1.385-.64-1.73-.394-.347-.985-.495-1.723-.495H3.9v4.403h3.297v-.05zM16.643 16.985c.444.445 1.083.643 1.919.643.591 0 1.132-.148 1.575-.445.394-.297.64-.594.788-.891h2.41c-.394 1.237-1.034 2.128-1.772 2.673-.788.495-1.723.742-2.854.742-.788 0-1.477-.099-2.116-.346-.64-.248-1.181-.594-1.625-1.04-.443-.445-.788-.99-1.033-1.633-.246-.644-.345-1.336-.345-2.128 0-.742.099-1.435.345-2.078.247-.644.542-1.188 1.034-1.633.443-.445.984-.792 1.624-1.039.64-.247 1.329-.396 2.067-.396.837 0 1.575.149 2.215.495.591.297 1.132.742 1.525 1.286.394.545.69 1.188.837 1.88.099.693.148 1.435.099 2.227h-7.182c0 .891.196 1.534.69 1.98l-.001.001zm3.347-5.343c-.394-.346-.935-.544-1.624-.544-.493 0-.886.099-1.23.247-.345.148-.59.347-.788.594-.197.198-.345.445-.394.643-.099.248-.148.445-.148.644h4.773c-.148-.792-.394-1.286-.59-1.584z"/>' +
      '</svg>';

    var P = 'important';
    behanceBtn.style.setProperty('display', 'flex', P);
    behanceBtn.style.setProperty('align-items', 'center', P);
    behanceBtn.style.setProperty('justify-content', 'center', P);
    behanceBtn.style.setProperty('width', '46px', P);
    behanceBtn.style.setProperty('height', '46px', P);
    behanceBtn.style.setProperty('background', 'rgba(255,255,255,0.05)', P);
    behanceBtn.style.setProperty('border', '1px solid rgba(255,255,255,0.12)', P);
    behanceBtn.style.setProperty('border-radius', '999px', P);
    behanceBtn.style.setProperty('color', 'rgba(255,255,255,0.85)', P);
    behanceBtn.style.setProperty('cursor', 'pointer', P);
    behanceBtn.style.setProperty('backdrop-filter', 'blur(14px)', P);
    behanceBtn.style.setProperty('-webkit-backdrop-filter', 'blur(14px)', P);
    behanceBtn.style.setProperty('text-decoration', 'none', P);
    behanceBtn.style.setProperty('flex-shrink', '0', P);
    behanceBtn.style.setProperty('opacity', '0', P);
    behanceBtn.style.setProperty('transform', 'scale(0.7)', P);
    behanceBtn.style.setProperty('pointer-events', 'none', P);
    behanceBtn.style.setProperty('transition', 'opacity 0.3s cubic-bezier(0.34,1.56,0.64,1), transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background 0.2s, border-color 0.2s', P);

    behanceBtn.addEventListener('mouseenter', function() {
      behanceBtn.style.setProperty('background', 'rgba(255,255,255,0.1)', P);
      behanceBtn.style.setProperty('border-color', 'rgba(255,255,255,0.22)', P);
    });
    behanceBtn.addEventListener('mouseleave', function() {
      behanceBtn.style.setProperty('background', 'rgba(255,255,255,0.05)', P);
      behanceBtn.style.setProperty('border-color', 'rgba(255,255,255,0.12)', P);
    });

    /* Clip container: collapses to 0 width when hidden, expands when shown.
       This keeps the Show More button perfectly centred at all times. */
    var behanceClip = document.createElement('div');
    behanceClip.style.setProperty('overflow', 'hidden', P);
    behanceClip.style.setProperty('max-width', '0px', P);
    behanceClip.style.setProperty('transition', 'max-width 0.35s cubic-bezier(0.34,1.56,0.64,1)', P);
    /* Give the behanceBtn a left margin so there's a gap once the clip opens */
    behanceBtn.style.setProperty('margin-left', '10px', P);
    behanceClip.appendChild(behanceBtn);

    /* Wrapper row to hold both buttons side-by-side */
    var btnRow = document.createElement('div');
    btnRow.style.setProperty('display', 'flex', P);
    btnRow.style.setProperty('align-items', 'center', P);
    btnRow.style.setProperty('justify-content', 'center', P);
    btnRow.style.setProperty('position', 'relative', P);
    btnRow.style.setProperty('z-index', '25', P);
    btnRow.style.setProperty('margin', '2.5rem auto 1.5rem', P);
    /* Move margin from btn to the row */
    btn.style.setProperty('margin', '0', P);
    btnRow.appendChild(btn);
    btnRow.appendChild(behanceClip);

    var expanded = false;
    btn.addEventListener('click', function() {
      expanded = !expanded;
      if (expanded) {
        /* Reveal all hidden items */
        items.forEach(function(item, i) {
          if (i >= SHOW_MORE_LIMIT) item.style.display = '';
        });
        btn.textContent = 'Show less';
        /* Animate Behance button in */
        behanceClip.style.setProperty('max-width', '60px', P);
        behanceBtn.style.setProperty('opacity', '1', P);
        behanceBtn.style.setProperty('transform', 'scale(1)', P);
        behanceBtn.style.setProperty('pointer-events', 'auto', P);
      } else {
        /* Hide again */
        items.forEach(function(item, i) {
          if (i >= SHOW_MORE_LIMIT) item.style.display = 'none';
        });
        btn.textContent = 'Show more';
        /* Animate Behance button out */
        behanceClip.style.setProperty('max-width', '0px', P);
        behanceBtn.style.setProperty('opacity', '0', P);
        behanceBtn.style.setProperty('transform', 'scale(0.7)', P);
        behanceBtn.style.setProperty('pointer-events', 'none', P);
        /* Scroll back to the top of the grid so it's in view */
        thumbGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    thumbGrid.insertAdjacentElement('afterend', btnRow);
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

  /* ── Patch display headings: same font treatment as stats numbers ── */
  var headingsFontPatched = false;
  function patchDisplayHeadings() {
    if (headingsFontPatched) return true;

    var P = 'important';
    var targets = document.querySelectorAll(
      'h1, h2, h3, ' +
      '[class*="text-4xl"],[class*="text-5xl"],[class*="text-6xl"],' +
      '[class*="text-7xl"],[class*="text-8xl"],[class*="text-9xl"]'
    );
    if (!targets.length) return false;

    targets.forEach(function(el) {
      if ((el.textContent || '').includes('Beyond') || el.classList.contains('beyond-title')) {
        return;
      }
      el.style.setProperty('font-family', "'Clash Display','OpenSans',sans-serif", P);
      el.style.setProperty('font-weight', '700', P);
      el.style.setProperty('letter-spacing', '-0.035em', P);
    });

    /* Preserve italic style on italic child spans */
    document.querySelectorAll(
      'h1 [class*="italic"],h2 [class*="italic"],h3 [class*="italic"],' +
      '[class*="text-5xl"] [class*="italic"],[class*="text-6xl"] [class*="italic"],' +
      '[class*="text-7xl"] [class*="italic"]'
    ).forEach(function(el) {
      el.style.setProperty('font-style', 'italic', P);
    });

    headingsFontPatched = true;
    return true;
  }

  /* ── Patch stats section: apply Clash Display 700 to numbers ── */
  /* ── Patch stats section: enforce single line 4-column layout & Clash Display numbers ── */
  var statsFontPatched = false;
  function patchStatsFonts() {
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

    var P = 'important';
    var isDesktop = window.innerWidth >= 768;
    statsSection.classList.add('feum-stats-section');
    var container = statsSection.querySelector('.max-w-6xl, .max-w-5xl, div[class*="max-w"]');
    if (container) {
      container.style.setProperty('max-width', '58rem', P);
      container.style.setProperty('margin-left', 'auto', P);
      container.style.setProperty('margin-right', 'auto', P);
      if (isDesktop) {
        container.style.setProperty('transform', 'translateX(0.75rem)', P);
      }
    }
    var grid = statsSection.querySelector('div[class*="grid"]');
    if (grid) {
      grid.classList.add('feum-stats-grid');
      grid.style.setProperty('display', 'grid', P);
      grid.style.setProperty('grid-template-columns', 'repeat(4, minmax(0, 1fr))', P);
      grid.style.setProperty('column-gap', isDesktop ? '1.25rem' : '0.5rem', P);
      grid.style.setProperty('row-gap', '0px', P);
      grid.style.setProperty('justify-content', 'center', P);
      grid.style.setProperty('align-items', 'center', P);
      Array.from(grid.children).forEach(function(col) {
        col.style.setProperty('display', 'flex', P);
        col.style.setProperty('flex-direction', 'column', P);
        col.style.setProperty('align-items', 'center', P);
        col.style.setProperty('text-align', 'center', P);
        col.style.setProperty('padding-left', '0.25rem', P);
        col.style.setProperty('padding-right', '0.25rem', P);
      });
    }

    /* Target the divider line elements */
    statsSection.querySelectorAll('span[class*="h-px"]').forEach(function(line) {
      line.style.setProperty('margin-left', 'auto', P);
      line.style.setProperty('margin-right', 'auto', P);
      line.style.setProperty('transform-origin', 'center', P);
    });

    /* Target the label elements */
    statsSection.querySelectorAll('p[class*="uppercase"]').forEach(function(label) {
      label.classList.add('feum-stat-label');
      label.style.setProperty('text-align', 'center', P);
    });

    /* Target the large number elements — font-serif class + big text-size classes */
    var targets = statsSection.querySelectorAll(
      '[class*="font-serif"], [class*="text-5xl"], [class*="text-6xl"], ' +
      '[class*="text-7xl"], [class*="text-8xl"], [class*="text-9xl"]'
    );
    if (!targets.length) return false;

    targets.forEach(function(el) {
      el.classList.add('feum-stat-number');
      el.style.setProperty('font-family', "'Clash Display', 'OpenSans', sans-serif", P);
      el.style.setProperty('font-weight', '700', P);
      el.style.setProperty('letter-spacing', '-0.035em', P);
      el.style.setProperty('font-style', 'normal', P);
    });

    statsFontPatched = true;
    return true;
  }

  /* ── Remove Role & Location block unconditionally ── */
  function removeRoleAndLocation() {
    var metaEls = document.querySelectorAll('.feum-meta-grid, [class*="feum-meta"]');
    metaEls.forEach(function(el) { el.remove(); });
    document.querySelectorAll('p, div, span').forEach(function(el) {
      var text = (el.textContent || '').trim();
      if (text === 'ROLE' || text === 'LOCATION' || text === 'Designer & Editor') {
        var parentBox = el.closest('.flex.flex-col') || el.closest('.feum-meta-grid') || el.parentElement;
        if (parentBox && (parentBox.textContent || '').includes('Role') || (parentBox.textContent || '').includes('Location')) {
          parentBox.remove();
        }
      }
    });
  }

  /* ── Patch footer & header brand logo ── */
  function patchFooterLogo() {
    removeRoleAndLocation();
    /* The bundle renders the footer logo as <img alt="feum" src="...Photoroom...">
       at two locations (main footer + a blurred bg copy). Replace both image and mask. */
    var imgs = document.querySelectorAll('img[alt="feum"], img[alt="falw"], img[alt="fre"], img[src*="Photoroom"], img[src*="falw-logo"], footer img, a[aria-label="feum"], a[aria-label="fre"] img');
    if (!imgs.length) return false;
    imgs.forEach(function(img) {
      img.src = './assets/falw-logo-new.png';
      img.alt = 'fre';
      img.onerror = function() {
        this.src = './assets/falw-nav-logo.png';
      };
    });

    /* Also update any shimmer mask overlays */
    document.querySelectorAll('span[style*="mask"], span[style*="Mask"]').forEach(function(span) {
      if (span.style.maskImage && (span.style.maskImage.includes('Photoroom') || span.style.maskImage.includes('falw') || span.style.maskImage.includes('20260428'))) {
        span.style.maskImage = "url('./assets/falw-logo-new.png')";
      }
      if (span.style.webkitMaskImage && (span.style.webkitMaskImage.includes('Photoroom') || span.style.webkitMaskImage.includes('falw') || span.style.webkitMaskImage.includes('20260428'))) {
        span.style.webkitMaskImage = "url('./assets/falw-logo-new.png')";
      }
    });

    return true;
  }

  /* Inject stylesheet — clean navbar styles + gallery gradient overlays */
  (function () {
    if (document.getElementById('feum-nav-pill-reset')) return;
    var s = document.createElement('style');
    s.id = 'feum-nav-pill-reset';
    s.textContent =
      'a.feum-nav-link { filter: none !important; text-shadow: none !important; font-family: \'OpenSans\',\'Poppins\',sans-serif !important; font-weight: 700 !important; font-size: 0.98rem !important; border-radius: 9999px !important; letter-spacing: -0.01em !important; white-space: nowrap !important; line-height: 1.2 !important; padding: 0.45rem 1.15rem !important; color: #ffffff !important; -webkit-text-fill-color: #ffffff !important; text-transform: none !important; transition: background 0.2s ease, color 0.2s ease !important; border: none !important; outline: none !important; background: transparent !important; }' +
      'a.feum-nav-link:hover { background: rgba(255, 255, 255, 0.14) !important; color: #ffffff !important; -webkit-text-fill-color: #ffffff !important; }' +
      'nav .flex.items-center, .flex:has(> a.feum-nav-link) { background: rgba(255, 255, 255, 0.08) !important; backdrop-filter: blur(20px) saturate(180%) !important; -webkit-backdrop-filter: blur(20px) saturate(180%) !important; border: 1px solid rgba(255, 255, 255, 0.08) !important; outline: none !important; border-radius: 9999px !important; padding: 0.4rem 0.6rem !important; gap: 0.35rem !important; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45) !important; display: inline-flex !important; align-items: center !important; }' +
      'nav.fixed, nav[class*="fixed"] { top: 1.25rem !important; padding: 0 2rem !important; background: transparent !important; }' +
      '.feum-nav-logo { height: 32px !important; width: auto !important; mix-blend-mode: screen !important; }' +
      '@media (max-width: 768px) { nav.fixed, nav[class*="fixed"] { top: 1rem !important; padding: 0 1.25rem !important; } .feum-nav-logo { height: 30px !important; } nav .flex.items-center, .flex:has(> a.feum-nav-link) { padding: 0.35rem 0.45rem !important; gap: 0.2rem !important; border-radius: 9999px !important; border: 1px solid rgba(255, 255, 255, 0.08) !important; outline: none !important; background: rgba(255, 255, 255, 0.08) !important; backdrop-filter: blur(20px) saturate(180%) !important; -webkit-backdrop-filter: blur(20px) saturate(180%) !important; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45) !important; } a.feum-nav-link { padding: 0.4rem 0.9rem !important; font-size: 0.92rem !important; font-weight: 700 !important; } html, body, #root, *, *::before, *::after { -ms-overflow-style: none !important; scrollbar-width: none !important; } ::-webkit-scrollbar, ::-webkit-scrollbar-thumb, ::-webkit-scrollbar-track { display: none !important; width: 0 !important; height: 0 !important; background: transparent !important; } }' +
      '@media (max-width: 380px) { nav.fixed, nav[class*="fixed"] { top: 0.85rem !important; padding: 0 1rem !important; } .feum-nav-logo { height: 28px !important; } nav .flex.items-center, .flex:has(> a.feum-nav-link) { padding: 0.3rem 0.4rem !important; gap: 0.15rem !important; } a.feum-nav-link { padding: 0.35rem 0.75rem !important; font-size: 0.85rem !important; } }' +
      /* Remove bottom-to-top gradient on main gallery thumbnails only */
      '[class*="from-black/45"][class*="bg-gradient-to-t"] { display: none !important; }' +
      '.feum-hero-bg img, .feum-hero-bg > img { display: none !important; opacity: 0 !important; visibility: hidden !important; }';
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
    ensureNavLinks();
    patchHeroHeadline();
    patchTrustedSection();
    patchBeyondSection();
    hideAvailableBadge();
    hideSelectedWorkHeader();
    removeViewMoreButton();
    reorderSections();
    if (!showMoreApplied) showMoreApplied = applyShowMore();
    if (!statsFontPatched) statsFontPatched = patchStatsFonts();
    if (!headingsFontPatched) headingsFontPatched = patchDisplayHeadings();
    if (!socialInjected) socialInjected = injectNewSocialLinks();
    patchCopyrightFont();
    var needsRetry = !document.querySelector('.toolkit-glow') ||
                     (window.innerWidth <= 767 && !document.querySelector('[data-mobile-footer-fixed]')) ||
                     !showMoreApplied ||
                     !sectionsReordered ||
                     !footerLogoPatched ||
                     !statsFontPatched ||
                     !headingsFontPatched;
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
