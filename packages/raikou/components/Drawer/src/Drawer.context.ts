import { GetStylesApi, RaikouRadius } from "@raikou/core";
import { createSafeContext } from "../../_utils";
import type { DrawerRootFactory } from "./DrawerRoot";

export type ScrollAreaComponent = React.FC<any>;

interface DrawerContext {
  scrollAreaComponent: ScrollAreaComponent | undefined;
  getStyles: GetStylesApi<DrawerRootFactory>;
  radius: RaikouRadius | undefined;
}

export const [DrawerProvider, useDrawerContext] =
  createSafeContext<DrawerContext>("Drawer component was not found in tree");
