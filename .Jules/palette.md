## 2024-05-18 - Switch Role Accessibility
**Learning:** Visual switch toggles (like the one used for 'Page Numbers') need explicit ARIA roles and state attributes so screen readers know they are toggle switches and their current state.
**Action:** Always add `role="switch"` and `aria-checked={state}` to custom div/button-based switch toggles.
