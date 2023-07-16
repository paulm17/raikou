import { useCallback, useEffect, useRef, useState } from "react";
import { useIsomorphicEffect } from "@raikou/hooks";
import type { RaikouColorSchemeManager } from "../color-scheme-managers";
import type { RaikouColorScheme } from "../theme.types";

function setColorSchemeAttribute(
  colorScheme: RaikouColorScheme,
  getRootElement: () => HTMLElement | undefined
) {
  const computedColorScheme =
    colorScheme !== "auto"
      ? colorScheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  getRootElement()?.setAttribute(
    "data-raikou-color-scheme",
    computedColorScheme
  );
}

type MediaQueryCallback = (event: { matches: boolean; media: string }) => void;

interface UseProviderColorSchemeOptions {
  manager: RaikouColorSchemeManager;
  defaultColorScheme: RaikouColorScheme;
  getRootElement(): HTMLElement | undefined;
}

export function useProviderColorScheme({
  manager,
  defaultColorScheme,
  getRootElement,
}: UseProviderColorSchemeOptions) {
  const media = useRef<MediaQueryList>();
  const [value, setValue] = useState(() => manager.get(defaultColorScheme));

  const setColorScheme = useCallback(
    (colorScheme: RaikouColorScheme) => {
      setValue(colorScheme);
      setColorSchemeAttribute(colorScheme, getRootElement);
      manager.set(colorScheme);
    },
    [manager.set, value]
  );

  const clearColorScheme = useCallback(() => {
    setValue(defaultColorScheme);
    setColorSchemeAttribute(defaultColorScheme, getRootElement);
    manager.clear();
  }, [manager.clear, defaultColorScheme]);

  useEffect(() => {
    manager.subscribe(setColorScheme);
    return manager.unsubscribe;
  }, [manager.subscribe, manager.unsubscribe]);

  useIsomorphicEffect(() => {
    setColorSchemeAttribute(manager.get(defaultColorScheme), getRootElement);
  }, []);

  useEffect(() => {
    media.current = window.matchMedia("(prefers-color-scheme: dark)");
    const listener: MediaQueryCallback = (event) => {
      if (value === "auto") {
        setColorSchemeAttribute(
          event.matches ? "dark" : "light",
          getRootElement
        );
      }
    };

    media.current?.addEventListener("change", listener);
    return () => media.current?.removeEventListener("change", listener);
  }, [value]);

  return { colorScheme: value, setColorScheme, clearColorScheme };
}
