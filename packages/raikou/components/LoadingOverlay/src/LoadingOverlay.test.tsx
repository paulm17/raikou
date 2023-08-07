import { tests } from "@raikou/tests";
import {
  LoadingOverlay,
  LoadingOverlayProps,
  LoadingOverlayStylesNames,
} from "./LoadingOverlay";

const defaultProps: LoadingOverlayProps = {
  visible: true,
};

describe("@raikou/core/LoadingOverlay", () => {
  tests.itSupportsSystemProps<LoadingOverlayProps, LoadingOverlayStylesNames>({
    component: LoadingOverlay,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/LoadingOverlay",
    stylesApiSelectors: ["root", "loader", "overlay"],
  });
});
