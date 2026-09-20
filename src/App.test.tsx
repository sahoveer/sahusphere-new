import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Mock components that we don't want to fully render during routing tests
vi.mock('./pages/HomePage', () => ({
  default: () => <div data-testid="mock-home">Home Page</div>,
}));

vi.mock('./pages/ImageToPDF', () => ({
  default: () => <div data-testid="mock-image-to-pdf">Image to PDF</div>,
}));

vi.mock('./pages/NotFoundPage', () => ({
  default: () => <div data-testid="mock-not-found">404 Not Found</div>,
}));

describe('App Routing', () => {
  it('renders HomePage on root route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId('mock-home')).toBeInTheDocument();
  });

  it('renders ImageToPDF page on /image-to-pdf route', () => {
    render(
      <MemoryRouter initialEntries={['/image-to-pdf']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId('mock-image-to-pdf')).toBeInTheDocument();
  });

  it('renders NotFoundPage on unknown route', () => {
    render(
      <MemoryRouter initialEntries={['/random-unknown-route']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId('mock-not-found')).toBeInTheDocument();
  });
});
