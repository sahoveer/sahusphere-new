## 2026-11-03 - Add accessibility to custom toggles and sections
**Learning:** The codebase heavily uses non-semantic HTML elements like `button` for custom UI interactive elements (switches and expandable sections) without ARIA attributes. Such patterns prevent proper screen reader understanding.
**Action:** When working on custom interactive elements (e.g. toggles, switches, accordions), ensure the explicit addition of appropriate ARIA roles like `role="switch"`, state attributes like `aria-checked`, `aria-expanded`, and linkage attributes like `aria-controls` to them.
