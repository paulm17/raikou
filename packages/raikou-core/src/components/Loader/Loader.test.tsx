import React, { forwardRef } from "react";
import { tests, render } from "@raikou/tests";
import {
  Loader,
  LoaderProps,
  LoaderStylesNames,
  defaultLoaders,
} from "./Loader";
import { RaikouLoaderComponent } from "./Loader.types";

const customLoader: RaikouLoaderComponent = forwardRef(() => (
  <div data-custom-loader />
));

const defaultProps: LoaderProps = {};

describe("@raikou/core/Loader", () => {
  tests.itSupportsSystemProps<LoaderProps, LoaderStylesNames>({
    component: Loader,
    props: defaultProps,
    styleProps: true,
    size: true,
    variant: true,
    extend: true,
    classes: true,
    refType: HTMLSpanElement,
    displayName: "@raikou/core/Loader",
    stylesApiSelectors: ["root"],
  });

  it("supports custom loaders", () => {
    const { container } = render(
      <Loader
        type="custom"
        loaders={{
          ...defaultLoaders,
          custom: customLoader,
        }}
      />
    );
    expect(container.querySelector("[data-custom-loader]")).toBeInTheDocument();
  });

  it("supports custom loaders on RaikouProvider", () => {
    const { container } = render(<Loader />, {
      components: {
        Loader: Loader.extend({
          defaultProps: {
            type: "custom",
            loaders: { ...defaultLoaders, custom: customLoader },
          },
        }),
      },
    });

    expect(container.querySelector("[data-custom-loader]")).toBeInTheDocument();
  });

  it("sets data-size attribute", () => {
    const { container, rerender } = render(<Loader size="xl" />);
    expect(container.querySelector('[data-size="xl"]')).toBeInTheDocument();

    rerender(<Loader size={100} />);
    expect(container.querySelector("[data-size]")).not.toBeInTheDocument();
  });
});
