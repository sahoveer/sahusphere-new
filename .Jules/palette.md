## 2025-05-15 - Custom UI Accessibility Patterns

**Learning:** This application heavily relies on custom UI patterns instead of standard HTML form controls, which can create accessibility gaps for screen reader users. Specifically, custom visual toggle switches (like "Page Numbers") lack semantic meaning, and custom expandable sections (like "PDF Settings") don't announce their state changes.

**Action:** Ensure that all visual switch toggles include `role="switch"` and `aria-checked` to communicate their state to assistive technologies. For interactive custom dropdowns or expandable sections, dynamically manage `aria-expanded` and associate the control with the content panel using `aria-controls` to provide structural context to screen readers.
