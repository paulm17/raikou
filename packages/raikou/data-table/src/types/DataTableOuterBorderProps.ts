import type { RaikouSize } from "@raikou/core";

export type DataTableOuterBorderProps =
  | {
      withBorder?: never;
      borderRadius?: never;
    }
  | {
      /**
       * If true, table will have border
       */
      withBorder: boolean;

      /**
       * Table border radius
       */
      borderRadius?: RaikouSize;
    };
