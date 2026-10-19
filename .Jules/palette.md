## 2024-10-19 - Missing ARIA attributes for interactive sections
**Learning:** Icon-only buttons, dynamic toggles (like mobile menu and PDF settings), and switch interactions frequently lacked appropriate ARIA attributes (`aria-label`, `aria-expanded`, `aria-controls`, `role="switch"`, `aria-checked`), hindering keyboard navigation and screen reader accessibility.
**Action:** Ensure all future UI additions implement the appropriate aria state attributes out of the box, rather than treating them as afterthoughts.
