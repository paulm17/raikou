import { stylesToString, useRaikouTheme } from "@raikou/core";
import type { AppShellProps } from "../AppShell";
import { getVariables } from "../AppShellMediaStyles/get-variables/get-variables";

interface AppShellMediaStylesProps {
  navbar: AppShellProps["navbar"] | undefined;
  header: AppShellProps["header"] | undefined;
  aside: AppShellProps["aside"] | undefined;
  footer: AppShellProps["footer"] | undefined;
  padding: AppShellProps["padding"] | undefined;
}

export function CreateAppShellMediaStyles({
  navbar,
  header,
  aside,
  footer,
  padding,
}: AppShellMediaStylesProps) {
  const theme = useRaikouTheme();
  const { media, baseStyles } = getVariables({
    navbar,
    header,
    footer,
    aside,
    padding,
    theme,
  });

  var elem = document.querySelector(
    "#appshell-style style[data-raikou-styles]",
  );
  elem?.remove();

  var newElem = document.createElement("style");
  newElem.setAttribute("data-raikou-styles", "inline");
  newElem.innerHTML = stylesToString({
    selector: ":root",
    styles: baseStyles,
    media,
  });

  document.querySelector("#appshell-style")!.append(newElem);

  return null;
}
