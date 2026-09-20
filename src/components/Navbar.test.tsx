import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { vi, describe, it, expect, beforeEach } from 'vitest';

describe('Navbar', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
  });

  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText(/SAHU/)).toBeInTheDocument();
  });

  describe('Scroll Listener', () => {
    it('applies transparent background initially on home page', () => {
      render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      );
      const navElement = screen.getByRole('navigation');
      expect(navElement).toHaveClass('bg-transparent');
      expect(navElement).not.toHaveClass('bg-white/95');
    });

    it('changes background on scroll > 20 and reverts on scroll <= 20', () => {
      render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      );

      const navElement = screen.getByRole('navigation');
      expect(navElement).toHaveClass('bg-transparent');

      // Scroll down
      window.scrollY = 21;
      fireEvent.scroll(window);

      expect(navElement).toHaveClass('bg-white/95');
      expect(navElement).toHaveClass('backdrop-blur-xl');
      expect(navElement).toHaveClass('shadow-lg');
      expect(navElement).not.toHaveClass('bg-transparent');

      // Scroll up
      window.scrollY = 20;
      fireEvent.scroll(window);

      expect(navElement).toHaveClass('bg-transparent');
      expect(navElement).not.toHaveClass('bg-white/95');
    });

    it('adds and removes scroll event listener on mount/unmount', () => {
      const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
      const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

      const { unmount } = render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      );

      expect(addEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));

      unmount();

      expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));

      addEventListenerSpy.mockRestore();
      removeEventListenerSpy.mockRestore();
    });
  });
});
