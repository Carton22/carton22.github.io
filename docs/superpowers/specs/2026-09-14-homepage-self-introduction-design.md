# Homepage Self-Introduction Layout

## Scope

Adjust only the homepage self-introduction text layout. The profile card, navigation, Blogs panel, Latest News panel, and social links remain visually and functionally unchanged except for the social links moving with the left-column introduction flow.

## Approved design

Keep the existing HTML structure and implement the layout with CSS grid/flex placement. The homepage main area will use two columns: the existing profile card and self-introduction text will occupy the left column, while the existing Blogs and Latest News content remains in the right column. The name and biography will appear directly below the profile card, left-aligned, with a readable width and compact vertical spacing. Social links remain below the introduction in the left column.

At mobile widths, the layout collapses to one column. The introduction remains left-aligned with comfortable readable spacing, and the right-side content follows below it.

## Constraints and verification

- Do not change content copy, links, images, navigation labels, or right-column panel markup.
- Preserve the maroon/gold visual palette and existing typography.
- Verify desktop layout at the local homepage and confirm the introduction begins beneath the profile card without overlapping the right column.
- Verify a narrow viewport collapses cleanly without horizontal overflow.
