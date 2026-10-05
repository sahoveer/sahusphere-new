## 2024-03-25 - [Insecure Randomness in ID Generation]
**Vulnerability:** Weak random number generation using `Math.random().toString(36)` was found in `ImageToPDF.tsx` when generating unique IDs for uploaded images.
**Learning:** `Math.random()` provides predictable pseudorandom numbers that are unsuitable for anything requiring uniqueness guarantees, security, or unpredictability, even for client-side component keys or object IDs, as they could potentially be exploited to cause collisions or spoofing.
**Prevention:** Always use `crypto.randomUUID()` when a globally unique identifier is required in modern browsers to prevent insecure randomness vulnerabilities.
