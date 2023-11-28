import React, { useRef } from "react";
import {
  Box,
  BoxProps,
  StylesApiProps,
  polymorphicFactory,
  useProps,
  useStyles,
  createVarsResolver,
  PolymorphicFactory,
  getSize,
  RaikouSize,
} from "@raikou/core";
import { useMergedRef } from "@raikou/hooks";
import classes from "./Dial.module.css";

export type DialStylesNames = "root" | "inner" | "handle";

export type DialCssVariables = {
  root: "--dial-size";
};

export interface DialProps extends BoxProps, StylesApiProps<DialFactory> {
  /** Controls `font-size`, `height` and horizontal `padding`, `'md'` by default */
  size?: RaikouSize | (string & {});

  scale?: number;
  value: number;
  onChange: (value: number) => void;
}

export type DialFactory = PolymorphicFactory<{
  props: DialProps;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: DialStylesNames;
  vars: DialCssVariables;
}>;

const defaultProps: Partial<DialProps> = {
  scale: 1,
};

const varsResolver = createVarsResolver<DialFactory>(
  (_, { size, scale, value: angle }) => {
    return {
      root: {
        "--dial-size": getSize(size, "dial-size"),
        "--dial-scale": scale,
        "--dial-angle": `${angle}deg`,
      },
    };
  },
);

export const Dial = polymorphicFactory<DialFactory>((_props, ref) => {
  const props = useProps("Dial", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    value,
    scale,
    onChange,
    ...others
  } = props;

  const getStyles = useStyles<DialFactory>({
    name: "Dial",
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const dialRef = useRef<HTMLDivElement | null>(null);

  const mergedRef = useMergedRef(dialRef, ref);

  let mouseValues = {
    wheelCenter: 0,
    moveX: 0,
    moveY: 0,
  };

  const onMouseUp = (e: MouseEvent): void => {
    removeListeners();
    onMouseMove(e);
  };

  const onMouseMove = (e: MouseEvent): void => {
    const { pageX, pageY } = e;
    const { moveX, moveY, wheelCenter } = mouseValues;
    const posX = pageX - moveX - window.scrollX;
    const posY = pageY - moveY - window.scrollY;

    let value =
      Math.atan2(posY - wheelCenter, posX - wheelCenter) * (180 / Math.PI) + 90;
    if (value < 0) value += 360;
    value = Math.max(0, Math.min(360, Math.round(value)));

    const { onChange } = props;
    onChange(value);
  };

  const onMouseDown = (e: React.MouseEvent): void => {
    e.preventDefault();
    const div = dialRef.current as HTMLSpanElement;
    const rect = div.getBoundingClientRect();
    const { top, left, width } = rect;

    mouseValues = {
      wheelCenter: width * 0.5 + 5,
      moveX: left,
      moveY: top,
    };

    onMouseMove(e as any);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseUp);
    document.addEventListener("mouseup", onMouseUp);
  };

  const removeListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseleave", onMouseUp);
    document.removeEventListener("mouseup", onMouseUp);
  };

  return (
    <Box
      component="span"
      ref={mergedRef}
      {...getStyles("root")}
      onMouseDown={onMouseDown}
      onKeyDown={() => {}}
      role="button"
      tabIndex={0}
      {...others}
    >
      <Box component="span" {...getStyles("inner")}>
        <Box component="span" {...getStyles("handle")} />
      </Box>
    </Box>
  );
});

Dial.displayName = "@raikou/Dial";
Dial.classes = classes;
