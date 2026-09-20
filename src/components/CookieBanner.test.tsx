import { render, screen, fireEvent, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CookieBanner from './CookieBanner';

describe('CookieBanner', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('renders nothing initially, but renders after 2 seconds', () => {
    render(
      <BrowserRouter>
        <CookieBanner />
      </BrowserRouter>
    );
    expect(screen.queryByText('We use cookies 🍪')).not.toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(screen.getByText('We use cookies 🍪')).toBeInTheDocument();
  });

  it('does not render after 2 seconds if cookies already accepted', () => {
    localStorage.setItem('ss-cookies-accepted', 'true');
    render(
      <BrowserRouter>
        <CookieBanner />
      </BrowserRouter>
    );

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(screen.queryByText('We use cookies 🍪')).not.toBeInTheDocument();
  });

  it('hides banner and sets localStorage when Accept All is clicked', () => {
    render(
      <BrowserRouter>
        <CookieBanner />
      </BrowserRouter>
    );

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    const acceptButton = screen.getByText('Accept All');
    fireEvent.click(acceptButton);

    expect(localStorage.getItem('ss-cookies-accepted')).toBe('true');
    expect(screen.queryByText('We use cookies 🍪')).not.toBeInTheDocument();
  });

  it('hides banner and sets localStorage when Decline is clicked', () => {
    render(
      <BrowserRouter>
        <CookieBanner />
      </BrowserRouter>
    );

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    const declineButton = screen.getByRole('button', { name: 'Decline' });
    fireEvent.click(declineButton);

    expect(localStorage.getItem('ss-cookies-accepted')).toBe('false');
    expect(screen.queryByText('We use cookies 🍪')).not.toBeInTheDocument();
  });
});
