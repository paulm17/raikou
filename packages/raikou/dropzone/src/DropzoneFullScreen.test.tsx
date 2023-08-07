import { tests } from "@raikou/tests";
import {
  DropzoneFullScreen,
  DropzoneFullScreenProps,
  DropzoneFullScreenStylesNames,
} from "./DropzoneFullScreen";

const defaultProps: DropzoneFullScreenProps = {
  onDrop: () => {},
  withinPortal: false,
};

describe("@raikou/dropzone/DropzoneFullScreen", () => {
  tests.itSupportsSystemProps<
    DropzoneFullScreenProps,
    DropzoneFullScreenStylesNames
  >({
    component: DropzoneFullScreen,
    props: defaultProps,
    children: true,
    extend: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/dropzone/DropzoneFullScreen",
    stylesApiSelectors: ["fullScreen"],
    selector: ".raikou-DropzoneFullScreen-fullScreen",
  });
});
