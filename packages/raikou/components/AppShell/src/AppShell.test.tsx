import { tests } from "@raikou/tests";
import { AppShell, AppShellProps, AppShellStylesNames } from "./AppShell";

const defaultProps: AppShellProps = {};

describe("@raikou/core/AppShell", () => {
  tests.itSupportsSystemProps<AppShellProps, AppShellStylesNames>({
    component: AppShell,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/AppShell",
    stylesApiSelectors: ["root"],
  });
});
