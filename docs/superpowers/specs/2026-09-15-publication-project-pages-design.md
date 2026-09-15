# Publication Project Pages Design

## Goal

Add focused project pages for the first two publications on the homepage and expose each page through a `Paper/video` link in the publication list.

## Scope

The two publications are:

1. “Generative Proxy: Synthesizing Proxy-Based Interfaces for Real-World Interaction Across AR Glasses”
2. “Can AR Embedded Visualizations Foster Appropriate Reliance on AI in Spatial Decision-Making? A Comparative Study of AR X-Ray vs. 2D Minimap”

The existing paper, arXiv, and YouTube URLs are authoritative inputs. No new publication content or third-party service integration is required.

## Page structure

Create two static pages under `layout/project/`:

- `generative-proxy.html`
- `ar-embedded-visualizations.html`

Each page follows the existing project-page navigation and visual language, using one centered responsive content column. Content appears vertically in this order:

1. Publication title
2. Authors
3. Accepted conference
4. Abstract
5. Embedded YouTube video
6. Citation BibTeX

The page also includes direct links to the paper and video where useful. The BibTeX is presented in a readable, copyable code block.

## Homepage changes

Update only the first two publication entries in `index.html`. Add a `Paper/video` project-page link alongside their existing paper, arXiv, and video links. The new links are relative links to the dedicated pages and open in the same tab.

## Styling and responsive behavior

Reuse the existing project-page navigation, colors, typography, borders, and spacing conventions. Add narrowly scoped project-publication styles rather than changing unrelated project pages. The YouTube iframe should preserve a 16:9 aspect ratio and fit the content column on narrow screens. The BibTeX block should wrap or scroll horizontally without breaking the page layout.

## Validation

- Confirm both new HTML pages exist and have valid relative asset/navigation links.
- Confirm the first two homepage entries point to the correct project pages.
- Confirm the paper and video URLs match the existing publication entries.
- Check the HTML for obvious malformed or unclosed markup.
- Review the diff to ensure unrelated existing edits are preserved.
