import React, { ReactNode } from "react";
import {
  factory,
  useProps,
  Factory,
  BoxProps,
  StylesApiProps,
  RaikouSize,
} from "@raikou/core";
import { Center } from "../../components/Center/src";
import { Loader, RaikouLoader } from "../../components/Loader/src";
import cx from "clsx";

export type DataTableLoaderStylesNames = "root" | "active" | "standardIcon";

export type DataTableLoaderCssVariables = {
  root:
    | "--datatable-height"
    | "--datatable-min-height"
    | "--datatable-shadow"
    | "--datatable-border-color"
    | "--datatable-row-border-color";
};

export interface DataTableLoaderProps
  extends BoxProps,
    StylesApiProps<DataTableLoaderFactory> {
  fetching: boolean | undefined;
  customContent: ReactNode | undefined;
  backgroundBlur: number | undefined;
  size: RaikouSize | undefined;
  variant: RaikouLoader | undefined;
  color: any | undefined;
}

export type DataTableLoaderFactory = Factory<{
  props: DataTableLoaderProps;
  ref: HTMLDivElement;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: DataTableLoaderStylesNames;
  vars: DataTableLoaderCssVariables;
}>;

const defaultProps: Partial<DataTableLoaderProps> = {};

export const DataTableLoader = factory<DataTableLoaderFactory>(
  (_props, ref) => {
    const props = useProps("DataTableLoader", defaultProps, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      fetching,
      customContent,
      backgroundBlur,
      size,
      variant,
      color,
      ...others
    } = props;

    return (
      <Center
        className={cx("dataTableLoader-root", {
          ["dataTableLoader-fetching"]: fetching,
        })}
        style={
          backgroundBlur
            ? { backdropFilter: `blur(${backgroundBlur}px)` }
            : undefined
        }
        {...others}
      >
        {fetching &&
          (customContent || (
            <Loader size={size} variant={variant} color={color} />
          ))}
      </Center>
    );
  },
);

DataTableLoader.displayName = "@raikou/DataTableLoader";
