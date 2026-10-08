## 2024-03-24 - Navigation Accessibility States
**Learning:** Found that custom dropdowns ("More" menu) and mobile navigation toggles lacked explicit state communication (`aria-expanded`, `aria-controls`), which can confuse screen reader users by not announcing when menus open/close or what they control.
**Action:** Always ensure interactive elements that reveal or hide content use `aria-expanded` tied to the component's state, and map them to their content using `aria-controls`. Also, ensure icon-only buttons (like mobile toggles and dismiss buttons) have an explicit `aria-label`.
