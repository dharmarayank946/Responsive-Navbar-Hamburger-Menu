# VEDA Technology Web Development Internship Task 21 — Responsive Navbar with Hamburger Menu

A clean, responsive, and accessible **Responsive Navbar with Hamburger Menu** built strictly with **semantic HTML5**, **CSS3**, and **Vanilla JavaScript (ES6+)**. Designed with an elegant **light pastel green and white theme**, this component provides a horizontal navigation bar on desktop viewports and collapses into an animated 3-bar hamburger drawer menu on mobile viewports (&le; 768px). The implementation features hardware-accelerated slide-in/out transitions, automatic menu closure on navigation link selection, keyboard accessibility with Escape key support, backdrop overlay dimming, and dynamic ARIA state management. The project is 100% dependency-free and ready for one-click deployment on **GitHub Pages**.

---

## 📌 Project Overview
- **Project Title:** VEDA Technology Web Development Internship Task 21 — Responsive Navbar with Hamburger Menu
- **Internship Program:** VEDA Technology Web Development Internship
- **Developer:** Nagalambika D Koralli
- **Core Technologies:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Build Tools / Dependencies:** None (Zero npm, Node.js, bundlers, or third-party CSS/JS frameworks)
- **Deployment Platform:** GitHub Pages
- **GitHub Repository:** [https://github.com/dharmarayank946/Responsive-Navbar-with-Hamburger-Menu.git](https://github.com/dharmarayank946/Responsive-Navbar-with-Hamburger-Menu.git)
- **Live Demo (GitHub Pages):** [https://dharmarayank946.github.io/Responsive-Navbar-with-Hamburger-Menu/](https://dharmarayank946.github.io/Responsive-Navbar-with-Hamburger-Menu/)
- **Theme Palette (Light Pastel Green & White):**
  - **Page Background:** `#F4F8F5` (Soft mint background tint)
  - **Navbar & Card Background:** `#FFFFFF` (Pristine clean white)
  - **Subtle Section Background:** `#F0F6F2` (Soft pastel mint alternate)
  - **Primary Pastel Green:** `#2D6A4F` (High-contrast Forest/Sage Green, WCAG AAA compliant)
  - **Primary Green Hover:** `#21543E`
  - **Primary Green Light / Badge:** `#EAF5EE`
  - **Borders & Dividers:** `#D0E7D7` and `#E2EFE6`
  - **Focus Ring:** `0 0 0 3px rgba(45, 106, 79, 0.30)`
  - **Primary Text:** `#1C2B21` (High-contrast deep charcoal green)
  - **Secondary Text:** `#526659` (Slate green)
  - **Backdrop Dim Overlay:** `rgba(28, 43, 33, 0.40)` with subtle backdrop blur

---

## 🎯 Objectives & Requirements Breakdown

| # | Requirement | Implementation Detail | Status |
|---|---|---|:---:|
| 1 | **Desktop Horizontal Navbar** | Unordered list (`<ul>`) styled as a clean horizontal flexbox row with spacing, pill hover states, and active link indicators. | Passed |
| 2 | **Brand & 5 Links** | Brand logo ("VEDATech" with leaf icon) and links: **Home**, **About**, **Services**, **Projects**, and **Contact**. | Passed |
| 3 | **Mobile Collapse** | On mobile screens (`max-width: 768px`), navigation links collapse into an off-canvas drawer controlled by a hamburger button. | Passed |
| 4 | **Hamburger Toggle** | Clicking the hamburger button opens and closes the mobile menu via `classList.toggle('is-open')` and `classList.toggle('is-active')`. | Passed |
| 5 | **CSS Media Queries** | Responsive breakpoints established at `768px` and `480px` using standard CSS media queries. | Passed |
| 6 | **Smooth Slide Transitions** | Hardware-accelerated CSS `transform: translateX()` transitions (0.28s cubic-bezier curve) for silky 60fps opening and closing. | Passed |
| 7 | **Auto-Close on Link Select** | Clicking any navigation link immediately closes the mobile drawer and smoothly scrolls to the target anchor section. | Passed |
| 8 | **Escape Key Dismissal** | Pressing the `Escape` key closes the open drawer and automatically returns focus to the hamburger button for accessibility. | Passed |
| 9 | **Animated Hamburger Icon** | 3 horizontal lines smoothly animate into an "X" when open, and revert back to 3 lines when closed. | Passed |
| 10 | **Accessible WAI-ARIA** | Includes `aria-label`, `aria-expanded`, `aria-controls`, `aria-haspopup`, semantic elements, and visible focus rings. | Passed |

---

## 🛠️ Technologies Used
- **HTML5:** Semantic architecture (`<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<footer>`, `<button>`, `<ul>`, `<li>`, `<a>`), WAI-ARIA attributes (`role="menubar"`, `role="menuitem"`, `aria-expanded`, `aria-controls`), and inline scalable vector graphics (`<svg>`).
- **CSS3:** Custom properties (CSS variables), Flexbox, CSS Grid, media queries (`@media (max-width: 768px)`), hardware-accelerated `transform` transitions, backdrop blur filters, and `:focus-visible` outlines.
- **Vanilla JavaScript (ES6+):** Pure client-side DOM manipulation without frameworks or libraries, `classList.toggle()`, `matchMedia` listener, keyboard event listeners (`keydown`), and scroll spy intersection tracking.
- **Google Fonts:** `Plus Jakarta Sans` for clean typography and `JetBrains Mono` for diagnostics code indicators.

---

## 📂 Project Directory Structure

```plaintext
Task21-Responsive-Navbar/
│
├── index.html        # Semantic HTML5 markup, accessible navbar, and section demo
├── style.css         # Light pastel green styling, transitions, and media queries
├── script.js         # Vanilla JS: classList.toggle(), Esc key, auto-close, scroll spy
└── README.md         # Full project documentation, specifications, and testing guide
```

---

## ✨ Key Features & Technical Details

### 1. Animated 3-Bar to "X" Hamburger Icon
The hamburger icon is built purely in CSS using three distinct span elements inside the toggle button:
- When closed: 3 horizontal bars (`2.2px` height, `#2D6A4F` sage green) stacked evenly.
- When open (`.is-active`):
  - Top bar rotates `45deg` and translates downward.
  - Middle bar fades out and scales to `0`.
  - Bottom bar rotates `-45deg` and translates upward.
- The transition takes `0.28s` with `cubic-bezier(0.4, 0, 0.2, 1)`, providing a clean micro-interaction.

### 2. Smooth Slide-In / Slide-Out Drawer
On mobile viewports (&le; 768px):
- The drawer is fixed to the right (`top: 0; right: 0; width: min(320px, 85vw); height: 100dvh;`).
- It resides off-screen using `transform: translateX(105%); visibility: hidden;`.
- Applying `.is-open` smoothly animates it to `transform: translateX(0); visibility: visible;`.
- A backdrop overlay (`.nav-backdrop`) dims the background with `rgba(28, 43, 33, 0.40)` and backdrop blur. Clicking anywhere on the backdrop dismisses the menu.

### 3. Keyboard & Assistive Accessibility (WAI-ARIA)
- **Skip Navigation:** Keyboard users can press Tab to reveal a "Skip to main content" link.
- **ARIA Attributes:** The toggle button updates `aria-expanded="false"` &rarr; `aria-expanded="true"` and updates `aria-label="Open navigation menu"` &rarr; `aria-label="Close navigation menu"`.
- **Keyboard Dismiss:** Pressing the `Escape` key detects if the drawer is active, closes it, and refocuses the toggle button so keyboard users never lose their tab position.
- **Focus Rings:** High-contrast focus visible ring `0 0 0 3px rgba(45, 106, 79, 0.30)` on all interactive links and buttons.

### 4. Interactive Live Diagnostics Bar
An integrated status bar sits directly below the navigation bar during testing to provide real-time verification of:
1. **Viewport Category:** Displays `Desktop (>768px)` or `Mobile (≤768px)`.
2. **Menu State:** Displays `Closed` or `Open`.
3. **Active Link:** Displays the currently active section (Home, About, Services, Projects, Contact).
4. **Last Action:** Displays the triggering event (e.g., "Hamburger Clicked: Menu Opened", "Nav Link Clicked: 'About'", "Escape Key Pressed", "Backdrop Overlay Clicked").

---

## 🧪 Step-by-Step Testing & Verification Guide

Follow these steps to thoroughly test every requirement:

### Test 1: Desktop Horizontal Navigation (&gt; 768px)
1. Open `index.html` in any modern web browser at full screen (width &gt; 768px).
2. Verify that the brand logo and all 5 navigation links (**Home, About, Services, Projects, Contact**) are displayed horizontally.
3. Verify that the hamburger button is hidden on desktop.
4. Hover over links to verify the subtle pastel green pill background transition (`#EAF5EE`).
5. Click any navigation link to verify smooth scrolling to the corresponding section.

### Test 2: Mobile Viewport & Hamburger Toggle (&le; 768px)
1. Resize your browser window below `768px` (or open Chrome DevTools &gt; Device Mode &gt; iPhone / Pixel / iPad).
2. Verify that the desktop links collapse and the hamburger button appears.
3. Click the hamburger button:
   - Notice the 3 lines smoothly morph into an **"X"**.
   - Notice the mobile menu smoothly slides in from the right edge.
   - Notice the background dims with a soft backdrop overlay.
   - Notice the diagnostics bar updates to **Menu State: Open**.
4. Click the "X" button again:
   - Notice the drawer slides out smoothly to the right.
   - The hamburger button morphs back to 3 horizontal lines.
   - The diagnostics bar updates to **Menu State: Closed**.

### Test 3: Auto-Closing on Navigation Link Selection
1. Open the mobile menu.
2. Click on the **"Services"** navigation link.
3. Verify that:
   - The drawer automatically slides closed.
   - The hamburger icon reverts from "X" to 3 lines.
   - The page smoothly scrolls down to the `#services` section.
   - The diagnostics bar logs `Nav Link Clicked: "Services"`.

### Test 4: Escape Key Dismissal & Keyboard Focus
1. Open the mobile menu.
2. Press the <kbd>Escape</kbd> key on your keyboard.
3. Verify that:
   - The menu immediately slides closed.
   - Focus is cleanly restored to the hamburger button.
   - The diagnostics bar logs `Escape Key Pressed`.
4. Press <kbd>Tab</kbd> to verify keyboard focus outlines on the toggle and navigation links.

### Test 5: Backdrop & Outside Click Dismissal
1. Open the mobile menu.
2. Click on the dimmed background area outside the drawer.
3. Verify that the drawer closes smoothly.

### Test 6: Viewport Resize Reset
1. On a mobile viewport (&le; 768px), open the menu.
2. Expand the browser window width past `768px`.
3. Verify that the mobile open state is automatically cleared and the horizontal desktop layout appears seamlessly without stuck classes.

---

## 🚀 GitHub Pages Deployment Instructions

To deploy this project directly to **GitHub Pages**:

1. **Initialize Git Repository (if not already done):**
   ```bash
   cd d:/Projects/Veda/Task21-Responsive-Navbar
   git init
   git add .
   git commit -m "feat: complete VEDA Internship Task 21 Responsive Navbar with Hamburger Menu"
   ```

2. **Connect to GitHub Remote:**
   ```bash
   git remote add origin https://github.com/dharmarayank946/Responsive-Navbar-with-Hamburger-Menu.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Navigate to your repository on GitHub: `https://github.com/dharmarayank946/Responsive-Navbar-with-Hamburger-Menu`
   - Click **Settings** &rarr; **Pages** (under Code and automation).
   - Under **Build and deployment** &gt; **Source**, select `Deploy from a branch`.
   - Under **Branch**, select `main` and folder `/ (root)`, then click **Save**.
   - Within 1–2 minutes, your project will be live at:
     `https://dharmarayank946.github.io/Responsive-Navbar-with-Hamburger-Menu/`

---

## 📄 License & Attribution
Developed as part of the **VEDA Technology Web Development Internship Program** by **Nagalambika D Koralli**. All code is open-source and released under the [MIT License](https://opensource.org/licenses/MIT).
