## 2026-10-25 - Standardize Custom Switch and Expandable Accessibility
**Learning:** Custom UI elements like visual toggles and expand/collapse sections lack semantic meaning by default. While users can see their state, screen readers cannot interpret them without proper ARIA attributes.
**Action:** When implementing custom toggle switches, always include `role="switch"` and dynamically update `aria-checked`. For expand/collapse buttons, ensure they have `aria-expanded` and link them to their target container using `aria-controls` and an `id`.
