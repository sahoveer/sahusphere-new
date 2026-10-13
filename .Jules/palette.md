## 2026-10-13 - Accessible Interactive Controls

**Learning:** Interactive controls like toggles (visually resembling switches) or accordion buttons often lack semantic meaning to screen readers if built using generic `<button>` tags without ARIA attributes. Users with assistive technologies struggle to perceive state changes (e.g., a switch turning on/off, or a dropdown expanding).
**Action:** Ensure all interactive dropdowns/expandable sections dynamically use `aria-expanded`, `aria-controls`, and `aria-haspopup`. Visual switch toggles must include `role="switch"` and `aria-checked`. Always verify icon-only buttons include `aria-label`.
