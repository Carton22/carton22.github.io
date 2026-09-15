# Internship Notice Pill Design

## Goal

Make the “I am actively seeking for research internships starting from Winter 2026.” notice more distinguishable while eliminating overlap with the email address and the name on desktop and narrow screens.

## Design

- Keep the email centered as the first line of the profile header.
- Wrap the internship notice in a dedicated inline element styled as a soft muted-red pill.
- Use dark-red text, a light red background, rounded corners, and modest horizontal padding so the notice is visibly distinct without competing with the name.
- Give the email, notice, and name independent vertical spacing instead of relying on `<br>` elements or overlapping positioning.
- Preserve the existing large name treatment as the dominant visual element.
- At smaller widths, allow the pill text to wrap naturally and reduce the name size and gaps through responsive CSS.

## Scope

- Modify the existing profile-header markup in `index.html` only as needed to give the notice its own class.
- Add focused styles to `styles.css` for the notice pill, profile-header spacing, and responsive behavior.
- Preserve unrelated page content, assets, colors, and navigation.

## Verification

- Inspect the header at desktop width and confirm the three header rows are visually separated.
- Inspect a narrow mobile width and confirm the notice wraps without colliding with the name or overflowing horizontally.
- Confirm no unrelated layout or content changes are introduced.
