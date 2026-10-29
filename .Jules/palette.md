## 2024-05-18 - Custom UI Accessibility Patterns
**Learning:** The application heavily relies on custom UI patterns (like `div`-based toggles and expandable sections instead of native `<details>` or checkboxes). Because of this, it's critical to manually wire up ARIA attributes like `role="switch"`, `aria-checked`, `aria-expanded`, and `aria-controls` to ensure screen reader compatibility.
**Action:** Always verify that custom interactive components have the appropriate ARIA roles and state attributes mirroring their native equivalents.
