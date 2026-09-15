# Publication Project Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add dedicated project pages for the first two homepage publications and link to them from the publication list.

**Architecture:** Keep the site static and follow the existing `layout/project/` page conventions. Create two self-contained publication HTML pages that share a narrowly scoped stylesheet, and add relative project-page links to the first two publication entries in `index.html`.

**Tech Stack:** HTML5, CSS3, existing Google Fonts, YouTube embed iframes, Git validation commands.

---

## File map

- Create: `layout/project/publication-project.css` — shared layout for publication project pages, including responsive video and BibTeX presentation.
- Create: `layout/project/generative-proxy.html` — Generative Proxy project page.
- Create: `layout/project/ar-embedded-visualizations.html` — AR Embedded Visualizations project page.
- Modify: `index.html:171-194` — add `[Paper/video]` project-page links to the first two publication entries only.

### Task 1: Add shared publication project-page styles

**Files:**
- Create: `layout/project/publication-project.css`

- [ ] **Step 1: Add styles using the existing project-page visual language**

Create styles for a centered white card, maroon/gold accents, Montserrat typography, vertically ordered sections, responsive 16:9 video, and a horizontally scrollable BibTeX code block. Keep selectors prefixed with `.publication-project` so the existing project pages are unaffected.

```css
.publication-project {
  min-height: 100vh;
  padding: 110px 20px 60px;
  box-sizing: border-box;
}

.publication-project .project-shell {
  width: min(900px, 100%);
  margin: 0 auto;
  padding: 42px clamp(24px, 5vw, 64px);
  box-sizing: border-box;
  background: #fff;
  border: 2px solid #67121c;
  border-radius: 20px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.publication-project .project-title {
  margin: 0;
  color: #67121c;
  font-family: "Montserrat", sans-serif;
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 300;
  line-height: 1.2;
}

.publication-project .project-authors,
.publication-project .project-conference,
.publication-project .project-abstract,
.publication-project .project-section-title {
  font-family: "Montserrat", sans-serif;
}

.publication-project .project-authors {
  margin: 18px 0 8px;
  color: #97323b;
  font-size: 18px;
  line-height: 1.6;
}

.publication-project .project-conference {
  margin: 0;
  font-size: 18px;
  font-style: italic;
}

.publication-project .project-divider {
  height: 1px;
  margin: 28px 0;
  border: 0;
  background: linear-gradient(to right, rgba(204, 204, 204, .8), rgba(204, 204, 204, .2));
}

.publication-project .project-section-title {
  margin: 0 0 12px;
  color: #67121c;
  font-size: 22px;
  font-weight: 300;
}

.publication-project .project-abstract,
.publication-project .project-links {
  font-size: 17px;
  line-height: 1.7;
}

.publication-project .project-links a {
  margin-right: 16px;
  color: #97323b;
  text-decoration: none;
}

.publication-project .project-links a:hover {
  text-decoration: underline;
}

.publication-project .video-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.publication-project .video-frame iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

.publication-project .bibtex {
  margin: 0;
  padding: 18px;
  overflow-x: auto;
  color: #2f2525;
  background: #f9f7f6;
  border-left: 4px solid #edba4f;
  font: 14px/1.6 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  white-space: pre-wrap;
}

@media screen and (max-width: 600px) {
  .publication-project {
    padding: 92px 12px 32px;
  }

  .publication-project .project-shell {
    padding: 28px 20px;
    border-radius: 14px;
  }

  .publication-project .project-authors,
  .publication-project .project-conference,
  .publication-project .project-abstract,
  .publication-project .project-links {
    font-size: 15px;
  }
}
```

- [ ] **Step 2: Check the stylesheet for whitespace errors**

Run:

```bash
git diff --check -- layout/project/publication-project.css
```

Expected: no output and exit code 0.

### Task 2: Create the two publication pages

**Files:**
- Create: `layout/project/generative-proxy.html`
- Create: `layout/project/ar-embedded-visualizations.html`

- [ ] **Step 1: Create the shared page shell and navigation**

Each file must include the same top bars and navigation links used by `layout/project/project.html`, plus these head links:

```html
<link rel="stylesheet" href="styles.css" />
<link rel="stylesheet" href="publication-project.css" />
```

Use `<body class="publication-project">` and a `.project-shell` main container. Navigation targets must remain relative to `layout/project/`:

```html
<a href="../../layout/research/research.html">Research</a>
<a href="../../index.html">🏠Home</a>
<a href="../../assets/Resume.pdf">Resume</a>
<a href="../../layout/more/more.html">More</a>
```

- [ ] **Step 2: Add Generative Proxy content**

Use the existing title and authors exactly as shown on `index.html`; conference is `UIST 2026`. Use the existing paper URL `../../assets/UIST26_Gen_Proxy.pdf`, arXiv URL `https://arxiv.org/abs/2608.08971`, and YouTube embed URL `https://www.youtube.com/embed/N1YcwAxcPaQ`. Add the abstract and BibTeX from the existing arXiv record/site content during implementation, with an explicit section heading for each. The page order must be title, authors, conference, abstract, video, and citation.

- [ ] **Step 3: Add AR Embedded Visualizations content**

Use the existing title and authors exactly as shown on `index.html`; conference is `CHI 2026`. Use the existing arXiv URL `https://arxiv.org/abs/2507.14316` and YouTube embed URL `https://www.youtube.com/embed/TtigL7ULrSo`. Add the abstract and BibTeX from the existing arXiv record/site content during implementation, with an explicit section heading for each. The page order must be title, authors, conference, abstract, video, and citation.

- [ ] **Step 4: Validate both pages’ local structure**

Run:

```bash
for file in layout/project/generative-proxy.html layout/project/ar-embedded-visualizations.html; do
  test -s "$file"
  rg -q 'publication-project|project-shell|project-title|project-abstract|video-frame|bibtex' "$file"
done
git diff --check -- layout/project/generative-proxy.html layout/project/ar-embedded-visualizations.html
```

Expected: exit code 0 and no whitespace errors.

### Task 3: Link the homepage publication entries

**Files:**
- Modify: `index.html:171-194`

- [ ] **Step 1: Add project-page links to only the first two entries**

In the first publication’s `.publication-links`, add:

```html
<a href="layout/project/generative-proxy.html">[Paper/video]</a>
```

In the second publication’s `.publication-links`, add:

```html
<a href="layout/project/ar-embedded-visualizations.html">[Paper/video]</a>
```

Leave the third publication unchanged.

- [ ] **Step 2: Verify link targets and existing URLs**

Run:

```bash
rg -n 'generative-proxy|ar-embedded-visualizations|UIST26_Gen_Proxy|2608\.08971|2507\.14316|N1YcwAxcPaQ|TtigL7ULrSo' index.html layout/project/generative-proxy.html layout/project/ar-embedded-visualizations.html
git diff --check -- index.html
```

Expected: both new relative links appear in `index.html`, each existing paper/video URL remains present on its matching page, and the command exits 0.

### Task 4: Final review

**Files:**
- Review: `index.html`
- Review: `layout/project/publication-project.css`
- Review: `layout/project/generative-proxy.html`
- Review: `layout/project/ar-embedded-visualizations.html`

- [ ] **Step 1: Inspect the complete diff**

Run:

```bash
git diff --stat
git diff -- index.html layout/project/publication-project.css layout/project/generative-proxy.html layout/project/ar-embedded-visualizations.html
```

Confirm the diff contains only the two new pages, their shared stylesheet, and the two intended homepage link additions. Preserve the pre-existing unstaged `index.html` work while reviewing and editing.

- [ ] **Step 2: Run a local static-server smoke check if a server is available**

Run:

```bash
python3 -m http.server 8000
```

Open `/index.html`, `/layout/project/generative-proxy.html`, and `/layout/project/ar-embedded-visualizations.html` in a browser and confirm the navigation, embedded videos, and BibTeX blocks render. Stop the server after checking.

- [ ] **Step 3: Commit the implementation**

```bash
git add index.html layout/project/publication-project.css layout/project/generative-proxy.html layout/project/ar-embedded-visualizations.html
git commit -m "feat: add publication project pages"
```
