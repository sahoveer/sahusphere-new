## 2025-05-23 - Insecure Randomness in ID Generation
**Vulnerability:** `Math.random()` was used to generate IDs in `src/pages/ImageToPDF.tsx`.
**Learning:** `Math.random()` is not cryptographically secure and can lead to predictable IDs, which is a security risk.
**Prevention:** Always use `crypto.randomUUID()` when generating unique identifiers to prevent insecure randomness vulnerabilities.
