import { useContext, useEffect, useRef } from "react";
import { RaikouColorScheme } from "../theme.types";

function disableTransition() {
  const style = document.createElement("style");
  style.innerHTML = "*, *::before, *::after {transition: none !important;}";
  style.setAttribute("data-raikou-disable-transition", "true");
  document.head.appendChild(style);
  const clear = () =>
    document
      .querySelectorAll("[data-raikou-disable-transition]")
      .forEach((element) => element.remove());
  return clear;
}

export function useRaikouColorScheme() {
  const clearStylesRef = useRef<() => void>();
  const timeoutRef = useRef<number>();

  const setColorScheme = (value: RaikouColorScheme) => {
    clearStylesRef.current = disableTransition();
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      clearStylesRef.current?.();
    }, 10);
  };

  const clearColorScheme = () => {
    clearStylesRef.current = disableTransition();
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      clearStylesRef.current?.();
    }, 10);
  };

  useEffect(
    () => () => {
      clearStylesRef.current?.();
      window.clearTimeout(timeoutRef.current);
    },
    []
  );

  return {
    colorScheme: undefined,
    setColorScheme,
    clearColorScheme,
  };
}
