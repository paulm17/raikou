import { RaikouColor } from "@raikou/core";

export type DataTableColorProps<T> = {
  /**
   * Data table text color.
   * Can be a `RaikouColor` (key of `theme.colors` or any valid CSS color string),
   * or an object with `light` and `dark` keys and `RaikouColor` values.
   */
  c?: RaikouColor | { light: RaikouColor; dark: RaikouColor };

  /**
   * Data table background color.
   * Can be a `RaikouColor` (key of `theme.colors` or any valid CSS color string),
   * or an object with `light` and `dark` keys and `RaikouColor` values.
   */
  backgroundColor?: RaikouColor | { light: RaikouColor; dark: RaikouColor };

  /**
   * Color of table borders, applied to all borders except row borders.
   * Can be a `RaikouColor` (key of `theme.colors` or any valid CSS color string),
   * or an object with `light` and `dark` keys and `RaikouColor` values.
   */
  borderColor?: RaikouColor | { light: RaikouColor; dark: RaikouColor };

  /**
   * Color of row borders.
   * Can be a `RaikouColor` (key of `theme.colors` or any valid CSS color string),
   * or an object with `light` and `dark` keys and `RaikouColor` values.
   */
  rowBorderColor?: RaikouColor | { light: RaikouColor; dark: RaikouColor };

  /**
   * Background color of striped rows.
   * Can be a `RaikouColor` (key of `theme.colors` or any valid CSS color string),
   * or an object with `light` and `dark` keys and `RaikouColor` values.
   */
  stripedColor?: RaikouColor | { light: RaikouColor; dark: RaikouColor };

  /**
   * Background color of hover-highlighted row.
   * Can be a `RaikouColor` (key of `theme.colors` or any valid CSS color string),
   * or an object with `light` and `dark` keys and `RaikouColor` values.
   */
  highlightOnHoverColor?:
    | RaikouColor
    | { light: RaikouColor; dark: RaikouColor };

  /**
   * Data table row text color.
   * A function that accepts row data and returns color.
   * The returned color can be a `RaikouColor` (key of `theme.colors` or any valid CSS color string),
   * or an object with `light` and `dark` keys and `RaikouColor` values.
   */
  rowColor?: (
    record: T,
    index: number,
  ) => RaikouColor | undefined | { light: RaikouColor; dark: RaikouColor };

  /**
   * Data table row background color.
   * A function that accepts row data and returns background color color.
   * Can be a `RaikouColor` (key of `theme.colors` or any valid CSS color string),
   * or an object with `light` and `dark` keys and `RaikouColor` values.
   */
  rowBackgroundColor?: (
    record: T,
    index: number,
  ) => RaikouColor | undefined | { light: RaikouColor; dark: RaikouColor };
};
