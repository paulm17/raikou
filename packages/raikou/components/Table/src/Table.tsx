import React from "react";
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  RaikouColor,
  RaikouSpacing,
  getSpacing,
  getThemeColor,
  createVarsResolver,
  Factory,
} from "@raikou/core";
import {
  TableCaption,
  TableTbody,
  TableTd,
  TableTfoot,
  TableTh,
  TableTr,
  TableThead,
} from "./Table.components";
import { TableScrollContainer } from "./TableScrollContainer";
import { TableProvider } from "./Table.context";

export type TableStylesNames =
  | "table"
  | "thead"
  | "tbody"
  | "tfoot"
  | "tr"
  | "th"
  | "td"
  | "caption";

export type TableCssVariables = {
  table:
    | "--table-layout"
    | "--table-border-color"
    | "--table-caption-side"
    | "--table-horizontal-spacing"
    | "--table-vertical-spacing"
    | "--table-striped-color"
    | "--table-highlight-on-hover-color";
};

export interface TableProps
  extends BoxProps,
    StylesApiProps<TableFactory>,
    ElementProps<"table"> {
  /** Value of `table-layout` style, `auto` by default */
  layout?: React.CSSProperties["tableLayout"];

  /** Determines on which side `Table.Caption` is displayed, `bottom` by default */
  captionSide?: "top" | "bottom";

  /** Color of table borders, key of `theme.colors` or any valid CSS color */
  borderColor?: RaikouColor;

  /** Determines whether the table should have outer border, `false` by default */
  withTableBorder?: boolean;

  /** Determines whether the table should have borders between columns, `false` by default */
  withColumnBorders?: boolean;

  /** Determines whether the table should have borders between rows, `true` by default */
  withRowBorders?: boolean;

  /** Horizontal cells spacing, key of `theme.spacing` or any valid CSS value for padding, numbers are converted to rem, default value is `xs` */
  horizontalSpacing?: RaikouSpacing | number | (string & {});

  /** Vertical cells spacing, key of `theme.spacing` or any valid CSS value for padding, numbers are converted to rem, default value is `xs` */
  verticalSpacing?: RaikouSpacing | number | (string & {});

  /** Determines whether every odd/even row background should be changed to `strippedColor`, if set to `true`, then `odd` value will be used, `false` by default  */
  striped?: boolean | "odd" | "even";

  /** Background color of striped rows, key of `theme.colors` or any valid CSS color */
  stripedColor?: RaikouColor;

  /** Determines whether table rows background should change to `highlightOnHoverColor` when hovered, `false` by default */
  highlightOnHover?: boolean;

  /** Background color of table rows when hovered, key of `theme.colors` or any valid CSS color */
  highlightOnHoverColor?: RaikouColor;
}

export type TableFactory = Factory<{
  props: TableProps;
  ref: HTMLTableElement;
  stylesNames: TableStylesNames;
  vars: TableCssVariables;
  staticComponents: {
    Thead: typeof TableThead;
    Tbody: typeof TableTbody;
    Tfoot: typeof TableTfoot;
    Td: typeof TableTd;
    Th: typeof TableTh;
    Tr: typeof TableTr;
    Caption: typeof TableCaption;
    ScrollContainer: typeof TableScrollContainer;
  };
}>;

const defaultProps: Partial<TableProps> = {
  captionSide: "bottom",
  withRowBorders: true,
  verticalSpacing: 7,
  horizontalSpacing: "xs",
};

const varsResolver = createVarsResolver<TableFactory>(
  (
    theme,
    {
      layout,
      captionSide,
      horizontalSpacing,
      verticalSpacing,
      borderColor,
      stripedColor,
      highlightOnHoverColor,
      striped,
      highlightOnHover,
    },
  ) => ({
    table: {
      "--table-layout": layout,
      "--table-caption-side": captionSide,
      "--table-horizontal-spacing": getSpacing(horizontalSpacing),
      "--table-vertical-spacing": getSpacing(verticalSpacing),
      "--table-border-color": borderColor
        ? getThemeColor(borderColor, theme)
        : undefined,
      "--table-striped-color":
        striped && stripedColor
          ? getThemeColor(stripedColor, theme)
          : undefined,
      "--table-highlight-on-hover-color":
        highlightOnHover && highlightOnHoverColor
          ? getThemeColor(highlightOnHoverColor, theme)
          : undefined,
    },
  }),
);

export const Table = factory<TableFactory>((_props, ref) => {
  const props = useProps("Table", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    horizontalSpacing,
    verticalSpacing,
    captionSide,
    stripedColor,
    highlightOnHoverColor,
    striped,
    highlightOnHover,
    withColumnBorders,
    withRowBorders,
    withTableBorder,
    borderColor,
    layout,
    variant,
    ...others
  } = props;

  const getStyles = useStyles<TableFactory>({
    name: "Table",
    props,
    className,
    style,
    classes: {
      table: "table-root",
      th: "table-th",
      tr: "table-tr",
      td: "table-td",
      tbody: "table-tbody",
      caption: "table-caption",
      tfoot: "table-tfoot",
      thead: "table-thead",
    },
    classNames,
    styles,
    unstyled,
    rootSelector: "table",
    vars,
    varsResolver,
  });

  return (
    <TableProvider
      value={{
        getStyles,
        striped: striped === true ? "odd" : striped || undefined,
        highlightOnHover,
        withColumnBorders,
        withRowBorders,
        captionSide: captionSide || "bottom",
      }}
    >
      <Box
        component="table"
        variant={variant}
        ref={ref}
        mod={{ "data-with-table-border": withTableBorder }}
        {...getStyles("table")}
        {...others}
      />
    </TableProvider>
  );
});

Table.displayName = "@raikou/core/Table";
Table.Td = TableTd;
Table.Th = TableTh;
Table.Tr = TableTr;
Table.Thead = TableThead;
Table.Tbody = TableTbody;
Table.Tfoot = TableTfoot;
Table.Caption = TableCaption;
Table.ScrollContainer = TableScrollContainer;
