import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock window.scrollTo to prevent Not implemented errors in jsdom
Object.defineProperty(window, 'scrollTo', {
  value: vi.fn(),
  writable: true,
});