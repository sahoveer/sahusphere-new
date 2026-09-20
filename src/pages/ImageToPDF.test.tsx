import { render, screen, act, fireEvent, waitFor } from '@testing-library/react';
import ImageToPDF from './ImageToPDF';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

vi.mock('jspdf', () => {
  return {
    default: vi.fn().mockImplementation(function() {
      throw new Error('Forced jsPDF error');
    })
  };
});

describe('ImageToPDF error handling', () => {
  let originalImage: typeof Image;

  beforeEach(() => {
    vi.clearAllMocks();

    // Mock Canvas getContext
    HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
      drawImage: vi.fn(),
      getImageData: vi.fn(),
      putImageData: vi.fn(),
      createImageData: vi.fn(),
      setTransform: vi.fn(),
      clearRect: vi.fn(),
      fillRect: vi.fn(),
      scale: vi.fn(),
      translate: vi.fn(),
    }) as any;

    // Mock Canvas toBlob
    HTMLCanvasElement.prototype.toBlob = vi.fn().mockImplementation((callback) => {
      callback(new Blob(['test'], { type: 'image/png' }));
    });

    HTMLCanvasElement.prototype.toDataURL = vi.fn().mockReturnValue('data:image/png;base64,');

    // Mock Image
    originalImage = global.Image;
    global.Image = class {
      onload: () => void = () => {};
      onerror: () => void = () => {};
      src: string = '';
      width: number = 100;
      height: number = 100;
      constructor() {
        setTimeout(() => {
          this.onload();
        }, 10);
      }
    } as any;
  });

  afterEach(() => {
    global.Image = originalImage;
  });

  it('handles conversion errors correctly', async () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });

    global.URL.createObjectURL = vi.fn(function() { return 'mock-url'; });
    global.URL.revokeObjectURL = vi.fn();

    render(
      <MemoryRouter>
        <ImageToPDF />
      </MemoryRouter>
    );

    // Upload image
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    await act(async () => {
      fireEvent.change(input, { target: { files: [file] } });
    });

    // Wait for the button to appear
    const convertBtn = await screen.findByRole('button', { name: /convert 1 image to pdf/i });

    // The console.error should be called
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(function() {});

    await act(async () => {
      convertBtn.click();
    });

    // Wait for console.error to be called
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(expect.any(Error));
    });

    // Expect setConverting(false) to have been called by verifying button is enabled
    expect(convertBtn).not.toBeDisabled();

    consoleSpy.mockRestore();
  });
});
