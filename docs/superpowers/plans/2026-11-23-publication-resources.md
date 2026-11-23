# Publication Resources Implementation Plan

**Goal:** Apply the approved publication badge and resource button design to both publication project pages.

**Architecture:** Group the conference and existing resource navigation in a wrapping flex row. Scope visual rules to the shared publication stylesheet.

**Tech Stack:** Static HTML and CSS.

## Tasks

- [x] Update `layout/project/generative-proxy.html` and `layout/project/ar-embedded-visualizations.html`: wrap venue and navigation in `project-publication`, remove link-label brackets, and mark Paper as the primary resource.
- [x] Update `layout/project/publication-project.css`: add badge, wrapping row, 44px resource buttons, and hover/focus states; retain readable mobile labels.
- [x] Preview both pages at desktop and mobile widths; check wrapping, keyboard focus, resource destinations, and `git diff --check`.

This is a reversible presentation-only edit. Verify in the browser rather than adding implementation-mirroring tests. Execute inline in the current checkout; retain the user's existing uncommitted changes.
