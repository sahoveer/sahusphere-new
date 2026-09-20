import { describe, it, expect } from 'vitest';
import { cn } from './cn';

describe('cn utility', () => {
  it('merges basic string classes', () => {
    expect(cn('bg-red-500', 'text-white')).toBe('bg-red-500 text-white');
  });

  it('handles conditional classes', () => {
    expect(cn('bg-red-500', true && 'text-white', false && 'p-4')).toBe('bg-red-500 text-white');
  });

  it('handles arrays of classes', () => {
    expect(cn(['bg-red-500', 'text-white'])).toBe('bg-red-500 text-white');
  });

  it('handles object structures', () => {
    expect(cn({ 'bg-red-500': true, 'text-white': false })).toBe('bg-red-500');
  });

  it('merges conflicting tailwind classes using tailwind-merge', () => {
    // text-white and text-black conflict, tailwind-merge keeps the last one
    expect(cn('text-white', 'text-black')).toBe('text-black');
    expect(cn('p-4', 'p-8')).toBe('p-8');
    expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500');
  });

  it('ignores null, undefined, false, empty string, and 0', () => {
    expect(cn('bg-red-500', null, undefined, false, '', 0)).toBe('bg-red-500');
  });

  it('handles complex combinations', () => {
    const isActive = true;
    const isError = false;

    expect(
      cn(
        'base-class',
        isActive ? 'active-class bg-blue-500' : 'inactive-class bg-gray-500',
        isError && 'error-class text-red-500',
        ['array-class-1', 'array-class-2'],
        { 'object-class': true },
        // tailwind merge behavior check
        'bg-green-500' // should override the active-class background
      )
    ).toBe('base-class active-class array-class-1 array-class-2 object-class bg-green-500');
  });
});
