## 2024-05-15 - [Math.random() for IDs]
**Vulnerability:** Weak random number generation using Math.random() for unique identifiers.
**Learning:** Found usage of Math.random().toString(36) in codebase for generating supposedly unique IDs. This is predictable and can lead to identifier collisions or insecure predictability if used for any session, element or cryptographic state.
**Prevention:** Always use crypto.randomUUID() for generating UUIDs, which provides cryptographically secure randomness.
