import { tests } from "@raikou/tests";
import { Spotlight, SpotlightProps, SpotlightStylesNames } from "./Spotlight";
import { SpotlightAction } from "./SpotlightAction";
import { SpotlightActionsList } from "./SpotlightActionsList";
import { SpotlightEmpty } from "./SpotlightEmpty";
import { SpotlightFooter } from "./SpotlightFooter";
import { SpotlightSearch } from "./SpotlightSearch";
import { spotlight } from "./spotlight.store";

const defaultProps: SpotlightProps = {
  forceOpened: true,
  withinPortal: false,
  transitionProps: { duration: 0 },
  actions: [
    {
      id: "1",
      label: "test-1",
      description: "test-1",
      onClick: () => {},
      leftSection: "L",
    },
    { id: "2", label: "test-2", description: "test-2", onClick: () => {} },
    {
      group: "test",
      actions: [
        { id: "3", label: "test-3", description: "test-3", onClick: () => {} },
      ],
    },
  ],
};

describe("@raikou/core/Spotlight", () => {
  tests.itSupportsSystemProps<SpotlightProps, SpotlightStylesNames>({
    component: Spotlight,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/spotlight/Spotlight",
    stylesApiSelectors: [
      "root",
      "action",
      "actionBody",
      "actionDescription",
      "actionLabel",
      "actionSection",
      "actionsList",
      "actionsGroup",
      "body",
      "content",
      "inner",
      "overlay",
      "search",
    ],
    selector: ".raikou-Spotlight-root",
    sizeSelector: ".raikou-Spotlight-root",
    variantSelector: ".raikou-Spotlight-root",
  });

  it("exposes static components and functions", () => {
    expect(Spotlight.Action).toBe(SpotlightAction);
    expect(Spotlight.ActionsList).toBe(SpotlightActionsList);
    expect(Spotlight.Empty).toBe(SpotlightEmpty);
    expect(Spotlight.Footer).toBe(SpotlightFooter);
    expect(Spotlight.Search).toBe(SpotlightSearch);
    expect(Spotlight.open).toBe(spotlight.open);
    expect(Spotlight.close).toBe(spotlight.close);
    expect(Spotlight.toggle).toBe(spotlight.toggle);
  });
});
