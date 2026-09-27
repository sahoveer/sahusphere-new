## 2023-10-24 - Add ARIA Labels to Navigation Menus and Buttons
**Learning:** Found that custom responsive menus and components often lack basic ARIA integration for dynamic states, like `aria-expanded` reflecting the open/closed states of hamburger and dropdown buttons. Also found icon-only buttons missing `aria-label`.
**Action:** Always verify `aria-expanded` paired with `aria-controls` for toggles, and add descriptive `aria-label`s to unlabelled semantic elements.
