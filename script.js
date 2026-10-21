/**
 * ============================================================================
 * VEDA TECHNOLOGY WEB DEVELOPMENT INTERNSHIP — TASK 21
 * Responsive Navbar with Hamburger Menu
 * Pure Vanilla JavaScript (ES6+) Implementation
 * Developer: Nagalambika D Koralli
 * ============================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DOM ELEMENT REFERENCES
  // --------------------------------------------------------------------------
  const navToggle = document.getElementById('nav-toggle');
  const navMenuWrapper = document.getElementById('nav-menu-wrapper');
  const navBackdrop = document.getElementById('nav-backdrop');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link, .nav-drawer-footer a');
  const sections = document.querySelectorAll('section[id]');

  // Diagnostics Bar Elements
  const diagViewport = document.getElementById('diag-viewport');
  const diagMenuState = document.getElementById('diag-menu-state');
  const diagActiveLink = document.getElementById('diag-active-link');
  const diagLastAction = document.getElementById('diag-last-action');

  // Media Query matcher for mobile (<= 768px)
  const mobileMediaQuery = window.matchMedia('(max-width: 768px)');

  // --------------------------------------------------------------------------
  // 2. STATE MANAGEMENT FUNCTIONS
  // --------------------------------------------------------------------------

  /**
   * Updates the diagnostic information bar for reviewers and tests.
   * @param {string} actionText - Description of the most recent user action
   */
  function updateDiagnostics(actionText) {
    const isMobile = mobileMediaQuery.matches;
    const isOpen = navMenuWrapper ? navMenuWrapper.classList.contains('is-open') : false;

    if (diagViewport) {
      diagViewport.textContent = isMobile ? 'Mobile (≤768px)' : 'Desktop (>768px)';
      diagViewport.style.backgroundColor = isMobile ? '#EAF5EE' : '#FFFFFF';
    }

    if (diagMenuState) {
      diagMenuState.textContent = isOpen ? 'Open' : 'Closed';
      diagMenuState.style.color = isOpen ? '#2D6A4F' : '#526659';
      diagMenuState.style.borderColor = isOpen ? '#2D6A4F' : '#D0E7D7';
    }

    if (diagLastAction && actionText) {
      diagLastAction.textContent = actionText;
    }
  }

  /**
   * Opens the mobile navigation drawer.
   */
  function openMenu() {
    if (!navToggle || !navMenuWrapper) return;

    // Apply active class using classList.toggle/add
    navToggle.classList.add('is-active');
    navMenuWrapper.classList.add('is-open');

    if (navBackdrop) {
      navBackdrop.classList.add('is-active');
    }

    document.body.classList.add('menu-open');

    // Accessibility attributes update
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Close navigation menu');

    updateDiagnostics('Menu Opened');
  }

  /**
   * Closes the mobile navigation drawer.
   * @param {string} [reason] - Optional reason for closing (for diagnostics)
   */
  function closeMenu(reason = 'Menu Closed') {
    if (!navToggle || !navMenuWrapper) return;

    navToggle.classList.remove('is-active');
    navMenuWrapper.classList.remove('is-open');

    if (navBackdrop) {
      navBackdrop.classList.remove('is-active');
    }

    document.body.classList.remove('menu-open');

    // Accessibility attributes update
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation menu');

    updateDiagnostics(reason);
  }

  /**
   * Toggles the mobile navigation drawer using classList.toggle().
   * Fulfills Requirement 4 & Code Requirement: "Use classList.toggle() to control menu state"
   */
  function toggleMenu() {
    if (!navToggle || !navMenuWrapper) return;

    // Toggle active state classes using classList.toggle()
    const isHamburgerActive = navToggle.classList.toggle('is-active');
    const isDrawerOpen = navMenuWrapper.classList.toggle('is-open');

    if (navBackdrop) {
      navBackdrop.classList.toggle('is-active', isDrawerOpen);
    }

    // Synchronize body scroll locking
    document.body.classList.toggle('menu-open', isDrawerOpen);

    // Update ARIA attributes (Requirement 9 & 10)
    navToggle.setAttribute('aria-expanded', isDrawerOpen ? 'true' : 'false');
    navToggle.setAttribute(
      'aria-label',
      isDrawerOpen ? 'Close navigation menu' : 'Open navigation menu'
    );

    updateDiagnostics(isDrawerOpen ? 'Hamburger Clicked: Menu Opened' : 'Hamburger Clicked: Menu Closed');
  }

  // --------------------------------------------------------------------------
  // 3. EVENT LISTENERS
  // --------------------------------------------------------------------------

  // Requirement 4 & 9: Clicking hamburger icon toggles open and closed states
  if (navToggle) {
    navToggle.addEventListener('click', function (event) {
      event.stopPropagation();
      toggleMenu();
    });
  }

  // Requirement 7: Close mobile menu when a navigation link is selected
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      const linkLabel = this.textContent.trim();

      // Update active link class visually
      document.querySelectorAll('.nav-menu .nav-link').forEach(function (l) {
        l.classList.remove('active');
      });

      // Find matching nav-link if clicked from drawer footer or inside menu
      const href = this.getAttribute('href');
      const targetNavLink = document.querySelector(`.nav-menu a[href="${href}"]`);
      if (targetNavLink) {
        targetNavLink.classList.add('active');
      }

      if (diagActiveLink) {
        diagActiveLink.textContent = linkLabel;
      }

      // If on mobile screen and drawer is open, close it
      if (navMenuWrapper && navMenuWrapper.classList.contains('is-open')) {
        closeMenu(`Nav Link Clicked: "${linkLabel}"`);
      } else {
        updateDiagnostics(`Nav Link Clicked: "${linkLabel}"`);
      }
    });
  });

  // Requirement 8: Close menu when the Escape key is pressed
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
      if (navMenuWrapper && navMenuWrapper.classList.contains('is-open')) {
        closeMenu('Escape Key Pressed');
        // Return focus to the toggle button for optimal keyboard accessibility
        if (navToggle) {
          navToggle.focus();
        }
      }
    }
  });

  // Close when clicking on the backdrop overlay
  if (navBackdrop) {
    navBackdrop.addEventListener('click', function () {
      if (navMenuWrapper && navMenuWrapper.classList.contains('is-open')) {
        closeMenu('Backdrop Overlay Clicked');
      }
    });
  }

  // Close when clicking outside of the navbar on mobile
  document.addEventListener('click', function (event) {
    if (navMenuWrapper && navMenuWrapper.classList.contains('is-open')) {
      const isClickInsideMenu = navMenuWrapper.contains(event.target);
      const isClickOnToggle = navToggle && navToggle.contains(event.target);

      if (!isClickInsideMenu && !isClickOnToggle) {
        closeMenu('Clicked Outside Menu');
      }
    }
  });

  // Automatically reset menu state when resizing from mobile to desktop
  function handleViewportResize(e) {
    if (!e.matches) {
      // Switched to desktop (> 768px): ensure mobile menu classes are removed
      if (navMenuWrapper && navMenuWrapper.classList.contains('is-open')) {
        closeMenu('Resized to Desktop Viewport');
      }
    }
    updateDiagnostics('Viewport Resized');
  }

  if (mobileMediaQuery.addEventListener) {
    mobileMediaQuery.addEventListener('change', handleViewportResize);
  } else if (mobileMediaQuery.addListener) {
    mobileMediaQuery.addListener(handleViewportResize);
  }

  // --------------------------------------------------------------------------
  // 4. SCROLL SPY (HIGHLIGHT ACTIVE NAV LINK ON SCROLL)
  // --------------------------------------------------------------------------
  function handleScrollSpy() {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        document.querySelectorAll('.nav-menu .nav-link').forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
            if (diagActiveLink) {
              diagActiveLink.textContent = link.textContent.trim();
            }
          }
        });
      }
    });
  }

  // Throttled scroll listener
  let scrollTimeout;
  window.addEventListener('scroll', function () {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(function () {
        handleScrollSpy();
        scrollTimeout = null;
      }, 100);
    }
  });

  // --------------------------------------------------------------------------
  // 5. INITIALIZATION
  // --------------------------------------------------------------------------
  function init() {
    updateDiagnostics('Page Initialized & Ready');
    handleScrollSpy();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
