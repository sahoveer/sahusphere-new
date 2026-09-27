## 2024-09-27 - [Insecure Randomness for Identifiers]
**Vulnerability:** Found `Math.random().toString(36).substr(2, 9)` being used for generating unique IDs in the frontend React components (e.g. `src/pages/ImageToPDF.tsx`).
**Learning:** This is a prevalent pattern for quick ID generation, but `Math.random()` is not a Cryptographically Secure Pseudorandom Number Generator (CSPRNG), making IDs predictable and potentially leading to state collisions or indirect object reference issues.
**Prevention:** Always use the Web Crypto API `crypto.randomUUID()` for unique identifiers instead of pseudo-random strings across this frontend application.
