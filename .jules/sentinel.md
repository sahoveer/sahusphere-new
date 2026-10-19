## 2024-03-24 - Fix insecure randomness for generating unique identifiers
**Vulnerability:** The codebase was using `Math.random().toString(36).substr(2, 9)` to generate IDs for dropped image files.
**Learning:** `Math.random()` generates easily guessable output and should not be used when unique unpredictability is required. While client-side image ordering doesn't present an immediate critical exploit path, predictable IDs often violate strict security scanners and lay the groundwork for insecure direct object references if synced with a backend later.
**Prevention:** Always use `crypto.randomUUID()` to generate unguessable, cryptographically secure IDs, as modern browsers natively support it.
