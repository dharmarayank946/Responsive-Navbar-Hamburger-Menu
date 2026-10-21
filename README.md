# Responsive Navbar with Hamburger Menu

A clean, modern, and accessible responsive navigation bar built with semantic HTML5, CSS3, and Vanilla JavaScript.

## Features

- **Text Logo:** Simple and clean brand identity (**My Website**).
- **Desktop Navigation:** Horizontal navigation menu clearly displaying all sections (**Home**, **About**, **Services**, **Projects**, **Contact**).
- **Mobile Hamburger Menu:** 
  - Smooth 3-line hamburger icon transforming into an "X" when open.
  - Vertical dropdown navigation menu fitting the screen cleanly without horizontal scroll.
  - Opens and closes on button tap.
  - Automatically closes when any navigation link is clicked.
  - Automatically closes when clicking outside the menu or pressing the `Escape` key.
- **Accessibility (WAI-ARIA):** Dynamic `aria-expanded` and descriptive `aria-label` updates on the toggle button, with `:focus-visible` keyboard focus indicators.
- **Clean Aesthetic:** Light background, dark readable typography, and a subtle modern blue accent color.
- **Smooth Navigation:** In-page anchor links with smooth scrolling offset to accommodate the sticky header.

## Technologies Used

- **HTML5:** Semantic elements (`<header>`, `<nav>`, `<button>`, `<ul>`, `<section>`, `<footer>`).
- **CSS3:** Flexbox, CSS Grid, Media Queries, CSS Transitions, and CSS Variables.
- **Vanilla JavaScript:** Event-driven DOM manipulation without any external libraries or dependencies.

## Project Structure

```plaintext
Task21-Responsive-Navbar-Hamburger-Menu/
├── index.html        # Semantic markup with navigation bar and content sections
├── style.css         # Responsive styling, transitions, and layout
├── script.js         # Hamburger toggle, ARIA management, and click handlers
└── README.md         # Documentation and project overview
```

## How to Run

1. Clone or download the repository.
2. Open `index.html` in any modern web browser (Google Chrome, Firefox, Safari, Microsoft Edge).
3. Test responsiveness by resizing the browser window or using browser Developer Tools device mode (e.g. iPhone, Pixel, iPad).
