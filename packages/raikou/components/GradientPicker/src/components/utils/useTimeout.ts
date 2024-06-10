import { useEffect, useRef } from "react";

export function useTimeout(callback: () => void, delay: number | null) {
  // https://www.joshwcomeau.com/snippets/react-hooks/use-timeout/
  const timeoutRef = useRef<number | null>(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => savedCallback.current();

    if (typeof delay === "number") {
      timeoutRef.current = window.setTimeout(tick, delay);
      return () => window.clearTimeout(timeoutRef.current as number);
    }
  }, [delay]);
  return timeoutRef;
}
