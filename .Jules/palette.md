## 2026-09-28 - Added Missing ARIA Attributes to Navbar and CookieBanner
**Learning:** Found that some interactive elements like generic buttons containing only icons lacked `aria-label` attributes. Dropdown menus and expandable sections lacked `aria-expanded`, `aria-controls`, and `aria-haspopup`. This is a common pattern in this app's components.
**Action:** Next time I work with buttons or dropdowns, check if they have proper ARIA attributes to ensure screen reader compatibility.
