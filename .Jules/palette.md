## 2024-10-24 - Accessibility improvements for Mobile Menu
**Learning:** Adding dynamic ARIA attributes like `aria-expanded` and `aria-controls` to the mobile toggle and dropdown components ensures that screen readers can convey the current state (open/closed) of the menus, keeping navigation accessible for all users.
**Action:** Next time, always include `aria-expanded` mapped to the respective state variable and add `aria-controls` to associate toggle buttons directly with their target menus.
