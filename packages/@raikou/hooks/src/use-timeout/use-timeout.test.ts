import { act, renderHook } from '@testing-library/react';
import { vi } from 'vitest';
import { useTimeout } from './use-timeout';

const defaultTimeout = 2000;

const callback = vi.fn();

const setupTimer = (timeout: number = defaultTimeout) => ({
  timeout,
  advanceTimerToNextTick: () => vi.advanceTimersByTime(timeout),
});

describe('@raikou/hooks/use-timeout', () => {
  beforeAll(() => {
    vi.useFakeTimers();
    vi.spyOn(global, 'setTimeout');
    vi.spyOn(global, 'clearTimeout');
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.clearAllTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it('initialize', () => {
    const hook = renderHook(() => useTimeout(callback, defaultTimeout, { autoInvoke: false }));
    const { start, clear } = hook.result.current;

    expect(typeof start).toBe('function');
    expect(typeof clear).toBe('function');
  });

  it('callback should NOT fire before calling start function, if autoInvoke is false', () => {
    const { timeout, advanceTimerToNextTick } = setupTimer();
    renderHook(() => useTimeout(callback, timeout, { autoInvoke: false }));

    advanceTimerToNextTick();

    expect(callback).not.toHaveBeenCalled();
    expect(setTimeout).not.toHaveBeenCalled();
    expect(clearTimeout).not.toHaveBeenCalled();
  });

  it('callback should fire after calling start function, if autoInvoke is false', () => {
    const { timeout, advanceTimerToNextTick } = setupTimer();
    const hook = renderHook(() => useTimeout(callback, timeout, { autoInvoke: false }));

    act(() => {
      hook.result.current.start();
    });

    advanceTimerToNextTick();

    expect(callback).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenCalled();
  });

  it('callback should fire without calling start when autoInvoke is true', () => {
    const { timeout, advanceTimerToNextTick } = setupTimer();
    renderHook(() => useTimeout(callback, timeout, { autoInvoke: true }));

    advanceTimerToNextTick();

    expect(callback).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenCalled();
  });

  it('callback should be called when rerender is triggered before timeout', () => {
    const { timeout, advanceTimerToNextTick } = setupTimer();
    const { rerender, result } = renderHook(() => useTimeout(callback, timeout));

    result.current.start();

    rerender();

    advanceTimerToNextTick();

    expect(callback).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenCalled();
  });

  it('timeout is cleared on calling clear', () => {
    const { timeout, advanceTimerToNextTick } = setupTimer(10);
    const hook = renderHook(() => useTimeout(callback, timeout, { autoInvoke: false }));

    act(() => {
      hook.result.current.start();
    });

    act(() => {
      hook.result.current.clear();
    });

    advanceTimerToNextTick();

    expect(callback).not.toHaveBeenCalled();
    expect(setTimeout).toHaveBeenCalled();
    expect(clearTimeout).toHaveBeenCalled();
  });

  it('start function passes parameters to callback', () => {
    const { timeout, advanceTimerToNextTick } = setupTimer(10);
    const hook = renderHook(() => useTimeout(callback, timeout));

    const MOCK_CALLBACK_VALUE = 'MOCK_CALLBACK_VALUE';
    act(() => {
      hook.result.current.start(MOCK_CALLBACK_VALUE);
    });

    advanceTimerToNextTick();

    expect(setTimeout).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledWith([MOCK_CALLBACK_VALUE]);
  });
});
