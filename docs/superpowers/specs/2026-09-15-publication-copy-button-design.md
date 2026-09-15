# Publication Copy Button Design

## Goal

Add a `Copy` button for the BibTeX citation on both publication project pages and rename the homepage project links to `[Project Page]`.

## Scope

Update only the two publication project pages, their shared publication stylesheet, a shared copy script, and the two corresponding homepage link labels. Existing publication URLs, abstracts, navigation, and BibTeX content remain unchanged.

## Interaction

Each project page will place a `Copy` button beside the “Citation BibTeX” heading. The button targets the adjacent page-specific `<code>` block through a `data-copy-target` attribute. Clicking it copies the exact BibTeX text with the browser Clipboard API, changes the label to `Copied!` briefly, then restores `Copy`. If clipboard access fails, the button will show a short failure state and then restore its original label.

## Implementation

Create `layout/project/publication-project.js` with one delegated click handler for buttons carrying `data-copy-target`. Use `navigator.clipboard.writeText()` and the target element’s `textContent`, preserving the citation exactly. Keep the script dependency-free and load it with `defer` on both pages.

Add a shared `.copy-button` style to `layout/project/publication-project.css`, matching the existing maroon/gold palette, and include visible `:focus-visible` styling. Use unique citation IDs on each page so the shared behavior remains unambiguous.

Change only the two homepage labels in `index.html` from `[Paper/video]` to `[Project Page]`; their URLs remain unchanged.

## Validation

- Confirm both pages include a copy button, unique citation target, and deferred shared script.
- Confirm the script targets the exact BibTeX `textContent` and has success/failure label handling.
- Confirm homepage labels are `[Project Page]` and the third publication remains unchanged.
- Run HTML parsing, JavaScript syntax checking, whitespace checks, and a local HTTP smoke check.
- Preserve unrelated existing edits in `index.html` and `styles.css`.
