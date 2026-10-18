## 2024-03-01 - Accessible Interactive Elements

**Learning:** Interactive dropdowns, expandable sections, and visual switch toggles require specific ARIA attributes to be fully accessible. Native `<button>` elements are not inherently understood as switches or expandable controllers by screen readers without explicit ARIA semantics.

**Action:**
- Ensure expandable sections/dropdowns use `aria-expanded="true/false"` on the trigger button, and `aria-controls="panel-id"` to link the trigger to the content block. The content block needs an `id` that matches the `aria-controls` value.
- Visual toggle switches (often implemented as styled `<button>` elements) must use `role="switch"` and `aria-checked="true/false"` to convey their state correctly, along with an appropriate `aria-label` if not visually labeled.
- Always add `aria-label` to icon-only buttons.
