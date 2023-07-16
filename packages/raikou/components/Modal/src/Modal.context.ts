import { GetStylesApi } from "@raikou/core";
import { createSafeContext } from "../../utils";
import type { ModalRootFactory } from "./ModalRoot";

export type ScrollAreaComponent = React.FC<any>;

interface ModalContext {
  yOffset: string | number | undefined;
  scrollAreaComponent: ScrollAreaComponent | undefined;
  getStyles: GetStylesApi<ModalRootFactory>;
}

export const [ModalProvider, useModalContext] = createSafeContext<ModalContext>(
  "Modal component was not found in tree"
);
