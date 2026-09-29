## 2024-05-18 - [Insecure Randomness]
**Vulnerability:** Usage of Math.random() to generate unique IDs.
**Learning:** While Math.random() is sufficient for non-security contexts, utilizing crypto.randomUUID() guarantees cryptographically strong randomness, which is safer for unique identification tokens.
**Prevention:** Prefer built-in Web Crypto API functions like crypto.randomUUID() instead of Math.random() for anything requiring collision resistance or security.
