import React, { useState } from "react";
import { useElementSize } from "@raikou/hooks";
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  rem,
} from "@raikou/core";
import { Anchor } from "../../Anchor/src";

export type SpoilerStylesNames = "root" | "control" | "content";
export type SpoilerCssVariables = {
  root: "--spoiler-transition-duration";
};

export interface SpoilerProps
  extends BoxProps,
    StylesApiProps<SpoilerFactory>,
    ElementProps<"div"> {
  /** Maximum height of the visible content, when this point is reached spoiler appears, `100` by default */
  maxHeight?: number;

  /** Label for close spoiler action */
  hideLabel: React.ReactNode;

  /** Label for open spoiler action */
  showLabel: React.ReactNode;

  /** Get ref of spoiler toggle button */
  controlRef?: React.ForwardedRef<HTMLButtonElement>;

  /** Initial spoiler state, true to wrap content in spoiler, false to show content without spoiler, opened state is updated on mount */
  initialState?: boolean;

  /** Spoiler reveal transition duration in ms, set 0 or null to turn off animation, `200` by default */
  transitionDuration?: number;
}

export type SpoilerFactory = Factory<{
  props: SpoilerProps;
  ref: HTMLDivElement;
  stylesNames: SpoilerStylesNames;
  vars: SpoilerCssVariables;
}>;

const defaultProps: Partial<SpoilerProps> = {
  maxHeight: 100,
  initialState: false,
};

const varsResolver = createVarsResolver<SpoilerFactory>(
  (_, { transitionDuration }) => ({
    root: {
      "--spoiler-transition-duration":
        transitionDuration !== undefined
          ? `${transitionDuration}ms`
          : undefined,
    },
  }),
);

export const Spoiler = factory<SpoilerFactory>((_props, ref) => {
  const props = useProps("Spoiler", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    initialState,
    maxHeight,
    hideLabel,
    showLabel,
    children,
    controlRef,
    ...others
  } = props;

  const getStyles = useStyles<SpoilerFactory>({
    name: "Spoiler",
    classes: {
      root: "spoiler-root",
      content: "spoiler-content",
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const [show, setShowState] = useState(initialState);
  const { ref: contentRef, height } = useElementSize();
  const spoiler = maxHeight! < height;

  const spoilerMoreContent = show ? hideLabel : showLabel;

  const s = {
    maxHeight: !show ? rem(maxHeight) : height ? rem(height) : undefined,
  };

  return (
    <Box {...getStyles("root")} ref={ref} {...others}>
      <div {...getStyles("content", { style: s })} data-reduce-motion>
        <div ref={contentRef}>{children}</div>
      </div>

      {spoiler && (
        <Anchor
          component="button"
          ref={controlRef}
          onClick={() => setShowState((opened) => !opened)}
          {...getStyles("control")}
        >
          {spoilerMoreContent}
        </Anchor>
      )}
    </Box>
  );
});

Spoiler.displayName = "@raikou/core/Spoiler";
