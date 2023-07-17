import { tests, createContextContainer } from "@raikou/tests";
import {
  AppShellMain,
  AppShellMainProps,
  AppShellMainStylesNames,
} from "./AppShellMain";
import { AppShell } from "../AppShell";

const TestContainer = createContextContainer(AppShellMain, AppShell, {});

const defaultProps: AppShellMainProps = {};

describe("@raikou/core/AppShellMain", () => {
  tests.itSupportsSystemProps<AppShellMainProps, AppShellMainStylesNames>({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLElement,
    displayName: "@raikou/core/AppShellMain",
    stylesApiSelectors: ["main"],
    selector: ".raikou-AppShell-main",
    stylesApiName: "AppShell",
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: AppShellMain,
    props: defaultProps,
    error: "AppShell was not found in tree",
  });
});
