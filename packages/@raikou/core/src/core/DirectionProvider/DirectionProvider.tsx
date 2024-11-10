export type Direction = 'ltr' | 'rtl';

export function useDirection() {
  return {
    dir: 'ltr' as Direction,
    toggleDirection: () => {},
    setDirection: () => {},
  };
}
