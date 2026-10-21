/**
 * Responsive Navbar with Hamburger Menu
 * Pure Vanilla JavaScript Implementation
 */

(function () {
  'use strict';

  // DOM Elements
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  /**
   * Opens or closes the mobile navigation menu.
   */
  function toggleMenu() {
    if (!navToggle || !navMenu) return;

    const isOpen = navMenu.classList.toggle('is-active');
    navToggle.classList.toggle('is-active', isOpen);

    // Update accessibility attributes
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    navToggle.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation menu' : 'Open navigation menu'
    );
  }

  /**
   * Closes the mobile navigation menu.
   */
  function closeMenu() {
    if (!navToggle || !navMenu) return;

    navToggle.classList.remove('is-active');
    navMenu.classList.remove('is-active');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation menu');
  }

  // 1. Toggle mobile menu on hamburger button click
  if (navToggle) {
    navToggle.addEventListener('click', function (event) {
      event.stopPropagation();
      toggleMenu();
    });
  }

  // 2. Close menu and set active link when a navigation link is clicked
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeMenu();

      navLinks.forEach(function (item) {
        item.classList.remove('active');
      });
      link.classList.add('active');
    });
  });

  // 3. Close menu when clicking outside of the navbar
  document.addEventListener('click', function (event) {
    if (!navMenu || !navToggle) return;

    const isClickInside = navMenu.contains(event.target) || navToggle.contains(event.target);
    if (!isClickInside && navMenu.classList.contains('is-active')) {
      closeMenu();
    }
  });

  // 4. Close menu when pressing the Escape key
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
      if (navMenu && navMenu.classList.contains('is-active')) {
        closeMenu();
        if (navToggle) {
          navToggle.focus();
        }
      }
    }
  });

  // 5. Automatically reset menu when resizing to desktop (> 768px)
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });

  // 6. Highlight active navigation link during scroll (Scroll Spy)
  function handleScrollSpy() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach(function (link) {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', handleScrollSpy, { passive: true });

})();
