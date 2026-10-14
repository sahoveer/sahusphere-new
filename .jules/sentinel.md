## 2024-03-24 - Insecure Randomness

**Vulnerability:** Use of `Math.random()` to generate unique identifiers in `src/pages/ImageToPDF.tsx`.
**Learning:** `Math.random()` is not cryptographically secure. It should not be used for generating unique IDs, session tokens, or other security-sensitive values where unpredictability is important, even if only used for UI state or local unique keys, to prevent insecure randomness vulnerabilities and establish good habits.
**Prevention:** Always use `crypto.randomUUID()` when generating unique identifiers to ensure sufficient randomness and uniqueness.