## 2025-02-27 - [Fix Insecure Randomness]
**Vulnerability:** Weak PRNG (`Math.random()`) used for generating unique IDs in `ImageToPDF.tsx`.
**Learning:** `Math.random()` generates predictable values and is not suitable for cryptographic use or ensuring true uniqueness, increasing the risk of ID collisions or predictability.
**Prevention:** Always use `crypto.randomUUID()` when generating unique identifiers in modern web applications.
