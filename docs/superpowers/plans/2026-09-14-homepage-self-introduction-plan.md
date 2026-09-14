# Homepage Self-Introduction Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition only the homepage self-introduction text beneath the profile card in the left column while preserving the right-side Blogs and Latest News panels.

**Architecture:** Adjust the existing homepage layout with CSS grid placement rather than changing content markup. The left column will contain the profile card, introduction text, and social links; the right column will retain the existing content panels. Mobile widths will use a single-column flow.

**Tech Stack:** Existing HTML and CSS, Google Fonts, Playwright CLI for browser verification.

---

### Task 1: Reflow homepage introduction with CSS

**Files:**
- Modify: `/Users/carton22/carton22.github.io/styles.css`

- [ ] **Step 1: Inspect existing homepage selectors**

Confirm the existing selectors are `.profile-section`, `.textContainer`, `.name-line`, `.components-row`, and `.page` in `/Users/carton22/carton22.github.io/styles.css`.

- [ ] **Step 2: Implement the desktop two-column flow**

Add a desktop override that keeps the profile section on the left, places `.textContainer` beneath it, and keeps `.components-row` in the right-side area. Use readable width and left alignment for `.textContainer` and `.bodytext` without changing copy or markup.

- [ ] **Step 3: Implement the mobile single-column flow**

Within the existing `max-width: 1200px` rules, make `.profile-section`, `.textContainer`, and `.components-row` participate in normal vertical flow. Keep the introduction readable and prevent horizontal overflow.

- [ ] **Step 4: Verify the layout in the browser**

Run the local homepage at desktop and narrow viewports. Confirm the introduction begins below the profile card, the right-side panels remain separate on desktop, and `document.documentElement.scrollWidth - innerWidth` is `0` on mobile.

- [ ] **Step 5: Review the diff and commit**

Run `git diff --check`, inspect the changed CSS, then commit with:

```bash
git add styles.css docs/superpowers/plans/2026-09-14-homepage-self-introduction-plan.md
git commit -m "Reflow homepage self-introduction layout"
```
