## 2023-10-04 - ARIA labels for icon-only buttons
**Learning:** Icon-only buttons used for custom interactive components (like image ordering controls) need explicit `aria-label` attributes to be accessible to screen readers, even if they have visual context or tooltips.
**Action:** Always verify that every icon-only button and toggle button has a descriptive `aria-label` attribute (and appropriate roles/states when necessary) to ensure keyboard and screen reader accessibility across the design system.
