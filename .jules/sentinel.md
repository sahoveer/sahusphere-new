## 2024-05-24 - [Fix] Insecure Randomness in Client-Side Component
**Vulnerability:** Weak PRNG using Math.random() found in ID generation inside React component (ImageToPDF.tsx).
**Learning:** While generating IDs strictly for local client UI state (like keys for React map elements) with Math.random() is usually not directly exploitable, it's flagged as a 'weak PRNG' by security scanners. It's a bad practice as developers might copy-paste this code for more sensitive ID generation like session tokens.
**Prevention:** Always use the Web Crypto API, specifically crypto.randomUUID(), which guarantees cryptographically strong random values natively in the browser.
