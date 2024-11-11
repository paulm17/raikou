import { act, renderHook } from '@testing-library/react';
import { vi } from 'vitest';
import { useThrottledCallback } from './use-throttled-callback';

describe('useThrottledCallback', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it('should throttle the callback', () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useThrottledCallback(callback, 100));

    act(() => {
      result.current(1);
      result.current(2);
      vi.advanceTimersByTime(50);
      result.current(3);
      vi.advanceTimersByTime(100);
    });

    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenLastCalledWith(3);
  });

  it('should allow callback after throttle period', () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useThrottledCallback(callback, 100));

    act(() => {
      result.current();
      vi.advanceTimersByTime(100);
      result.current();
    });

    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('should call the callback with correct arguments', () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useThrottledCallback(callback, 100));

    act(() => {
      result.current('test');
      vi.advanceTimersByTime(100);
    });

    expect(callback).toHaveBeenCalledWith('test');
  });
});
