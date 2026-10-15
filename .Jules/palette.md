## 2024-05-15 - ARIA attributes for interactive elements
**Learning:** Icon-only buttons and visual toggles require proper ARIA attributes to be fully accessible to screen readers. Specifically, visual switches need `role="switch"` and `aria-checked`, while expandable sections need `aria-expanded` and `aria-controls`.
**Action:** Always ensure icon-only buttons have descriptive `aria-label` attributes and that visual toggles/expandable sections have the correct ARIA roles and state attributes.
