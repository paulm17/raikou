import type { RaikouSize } from '@raikou/core';

export type DataTableOuterBorderProps =
  | {
      withTableBorder?: never;
      borderRadius?: never;
    }
  | {
      /**
       * If true, table will have border.
       */
      withTableBorder: boolean;

      /**
       * Table border radius.
       */
      borderRadius?: RaikouSize | (string & NonNullable<unknown>) | number;
    };
