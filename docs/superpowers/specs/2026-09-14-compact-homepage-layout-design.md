# Compact Homepage Layout Design

## Goal

Make the homepage compact and coherent so the main identity, research focus, selected publications, blogs, and latest news can be understood at a glance on a typical desktop viewport.

## Layout

- Use a fixed desktop two-column grid: approximately 40% left profile and 60% right content.
- Keep the existing top navigation and burgundy/gold visual language.
- On smaller screens, stack the columns vertically and remove desktop-only sizing assumptions.

## Left column

- Group portrait, name, social links, and introduction into one responsive vertical flow.
- Reduce the portrait footprint and excessive whitespace while preserving its burgundy card treatment.
- Keep the name and key research/affiliation text readable without requiring a long scroll.

## Right column

- Add a new `Selected Publications` card above Blogs and Latest News.
- Reuse the three publications shown in the provided publication reference: Generative Proxy, AR Embedded Visualizations, and Reality Proxy.
- Display each publication compactly with a thumbnail, title, authors, venue/year, and existing paper/arXiv/video links where available.
- Keep Blogs and Latest News below the publications card, using consistent card styling and a balanced two-card row when space permits.

## Styling and behavior

- Replace layout-critical float/absolute positioning with grid/flex layout.
- Use consistent card spacing, typography, borders, and shadows.
- Preserve existing links and content unless layout changes require concise presentation.
- Ensure long publication titles wrap cleanly and do not cause horizontal overflow.

## Verification

- Check the homepage in a real browser at desktop width for above-the-fold density and alignment.
- Check a narrow viewport for stacked content, readable typography, and no horizontal scrolling.
- Confirm the three selected publication entries appear above Blogs and Latest News.
