## 2023-10-04 - Icon-Only Button Accessibility Pattern
**Learning:** Found multiple icon-only buttons (Rotate, Remove, Move Up, Move Down) in `ImageToPDF.tsx` and interactive navigation elements (Dropdowns) in `Navbar.tsx` that were missing semantic cues.
**Action:** Applied a consistent accessibility pattern using `aria-label` for icon-only action buttons and `aria-expanded`/`aria-haspopup` for stateful dropdowns. Tooltips (`data-tip`) should be paired with `aria-label` to provide both visual and screen-reader context simultaneously.
