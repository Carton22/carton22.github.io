# Internship Notice Pill Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Separate the internship notice from the email and name, make it more visually distinct with a pill treatment, and prevent overlap at narrow widths.

**Architecture:** Give the notice its own semantic span inside the existing profile header, then style the header as independent stacked rows. Use a mobile media query to reduce typography and spacing while allowing the notice text to wrap.

**Tech Stack:** Static HTML and CSS; browser-based visual verification.

---

### Task 1: Give the internship notice its own element

**Files:**
- Modify: `/Users/carton22/carton22.github.io/index.html` in `.profile-email`

- [x] **Step 1: Replace the text-only notice line**

Change the existing `.profile-email` contents from a text node separated by `<br>` elements to three explicit rows:

```html
<div class="profile-email">
	<span class="email-address">liu03008[at]umn.edu</span>
	<span class="internship-notice">
		I am actively seeking for research internships starting from Winter 2026.
	</span>
</div>
```

- [x] **Step 2: Confirm the markup change is isolated**

Run:

```bash
git diff -- index.html
```

Expected: only the `.profile-email` block changes; existing user edits elsewhere in `index.html` remain intact.

### Task 2: Style the stacked header and pill responsively

**Files:**
- Modify: `/Users/carton22/carton22.github.io/styles.css` near the existing profile-section rules

- [x] **Step 1: Add desktop header styles**

Add:

```css
.profile-email {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 14px;
	width: min(100%, 760px);
	text-align: center;
}

.email-address {
	line-height: 1.2;
}

.internship-notice {
	display: inline-block;
	max-width: 100%;
	box-sizing: border-box;
	padding: 7px 14px;
	border: 1px solid rgba(151, 50, 59, 0.22);
	border-radius: 999px;
	background-color: rgba(151, 50, 59, 0.1);
	color: #6f131d;
	font-size: 0.76em;
	line-height: 1.35;
	text-align: center;
}
```

- [x] **Step 2: Replace spacing that causes collision**

Update the existing `.profile-links` margin from `50px` to `32px`, and add:

```css
.textContainer {
	position: relative;
}
```

Do not alter the existing name typography in this task.

- [x] **Step 3: Add the narrow-screen rule**

Add:

```css
@media (max-width: 700px) {
	.profile-section {
		float: none;
		width: auto;
		margin: 28px 16px 0;
	}

	.profile-email {
		gap: 10px;
	}

	.internship-notice {
		font-size: 0.82em;
		padding: 6px 12px;
	}

	.name-line {
		flex-wrap: wrap;
		gap: 8px 14px;
		margin-top: 24px;
	}
}
```

### Task 3: Verify the visual result

**Files:**
- Test: `/Users/carton22/carton22.github.io/index.html` and `/Users/carton22/carton22.github.io/styles.css`

- [x] **Step 1: Check the diff and syntax-sensitive structure**

Run:

```bash
git diff --check
git diff --stat
```

Expected: no whitespace errors; only the intended header markup and styles are changed.

- [x] **Step 2: Inspect at desktop width**

Open the local site at approximately 1280px wide. Confirm the email, pill, and name are separate rows; the pill is visibly highlighted; and no text overlaps.

- [x] **Step 3: Inspect at mobile width**

Open the local site at approximately 390px wide. Confirm the pill wraps inside the viewport, the name wraps without collision, and no horizontal overflow is introduced by the header.

- [x] **Step 4: Review final status**

Run:

```bash
git status --short
```

Expected: only the intended implementation files and this plan are modified; the pre-existing user change in `index.html` is preserved.
