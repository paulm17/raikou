import { tests } from "@raikou/tests";
import { Space, SpaceProps } from "./Space";

const defaultProps: SpaceProps = {};

describe("@raikou/core/Space", () => {
  tests.itSupportsSystemProps<SpaceProps>({
    component: Space,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/Space",
  });
});
