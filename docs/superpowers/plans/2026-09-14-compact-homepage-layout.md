# Compact Homepage Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild the homepage’s first screen as a compact responsive two-column layout with profile content on the left and Selected Publications, Blogs, and Latest News on the right.

**Architecture:** Keep the existing single-page HTML/CSS structure, but replace layout-critical floats and absolute positioning in the homepage section with CSS Grid. Add a reusable publication card inside `index.html`, and scope the new responsive rules to the homepage’s existing classes so the secondary page remains unchanged.

**Tech Stack:** Semantic HTML, CSS Grid/Flexbox, existing local image assets, existing Google Fonts.

---

### Task 1: Add the Selected Publications content

**Files:**
- Modify: `/Users/carton22/carton22.github.io/index.html`

- [ ] **Step 1: Add a right-column content wrapper around the homepage cards.**

  Place the existing `components-row` after the profile/text content and make it the right-column content container. Keep the existing Blogs and Latest News cards inside it.

- [ ] **Step 2: Add the Selected Publications card before Blogs and Latest News.**

  Add a card using the existing `component-card` and `card-container` patterns. Include three entries with the local assets `image/GenProxy.gif`, `image/RealityProxy.gif`, and `image/IDI.png`, plus titles, author lines, venues/years, and links matching the supplied publication reference. Use descriptive `alt` text and make links open in a new tab with `rel="noreferrer"`.

- [ ] **Step 3: Add compact publication markup for responsive styling.**

  Each publication should use a `.publication-item` wrapper with `.publication-image`, `.publication-body`, `.publication-title`, `.publication-authors`, `.publication-meta`, and `.publication-links` so the image/text relationship can be controlled independently on desktop and mobile.

### Task 2: Replace the first-screen layout rules

**Files:**
- Modify: `/Users/carton22/carton22.github.io/styles.css`

- [ ] **Step 1: Define homepage grid sizing and spacing.**

  Make `#page1` a two-column grid with a left track near 40% and a right track near 60%, using a constrained max width, compact top padding, and `box-sizing: border-box`. Keep the top navigation layered above the grid.

- [ ] **Step 2: Convert profile content to a compact left-column flow.**

  Remove the large fixed portrait dimensions and float assumptions. Use a smaller responsive portrait card, reduce the image padding, tighten profile links, and place `.textContainer` in the same left grid area with readable but smaller type.

- [ ] **Step 3: Convert cards to a right-column stack.**

  Remove the absolute positioning from `.components-row`. Use a right-column grid with Selected Publications spanning the column and Blogs/Latest News in a two-card row beneath it. Set consistent card padding, border radius, and typography.

- [ ] **Step 4: Add publication-specific styles.**

  Use a horizontal compact publication row on desktop with a fixed thumbnail width, flexible text column, line clamping only where needed, and links that wrap without overflow.

- [ ] **Step 5: Add responsive breakpoints.**

  At tablet/mobile widths, stack the profile and right content, switch publications to a more compact row or stacked arrangement as space allows, keep navigation usable, and ensure `overflow-x` remains hidden without clipping text.

### Task 3: Verify the layout in a browser

**Files:**
- Create: `/Users/carton22/carton22.github.io/output/playwright/` only if needed for screenshots

- [ ] **Step 1: Check the local tool prerequisites.**

  Run `command -v npx` and use the repository’s local server to open `index.html` at desktop width.

- [ ] **Step 2: Inspect the desktop layout.**

  Confirm the left profile and right content align as two columns, Selected Publications appears above Blogs and Latest News, the three publication entries are present, and the main information is visible without horizontal scrolling.

- [ ] **Step 3: Inspect a narrow viewport.**

  Confirm the columns stack, titles wrap, thumbnails remain visible, navigation does not overlap content, and no horizontal scrollbar appears.

- [ ] **Step 4: Run a final diff check.**

  Run `git diff --check` and review the changed files for accidental edits or broken relative asset paths.

