## 2024-05-24 - Accessibility gaps in custom components
**Learning:** The application heavily relies on custom UI patterns (like div-based switch toggles and expandable settings sections) for visual appeal, but these initially lack native accessibility structures (ARIA roles, states).
**Action:** Always ensure that custom interactive components, such as settings toggles and accordions, explicitly include appropriate ARIA attributes (`role="switch"`, `aria-checked`, `aria-expanded`, `aria-controls`) and that icon-only action buttons have descriptive `aria-label`s.
