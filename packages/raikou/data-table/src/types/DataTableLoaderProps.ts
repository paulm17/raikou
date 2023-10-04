import type { RaikouSize } from "@raikou/core";
import type { ReactNode } from "react";

export type DataTableLoaderProps = {
  /**
   * Loader background blur (in pixels)
   */
  loaderBackgroundBlur?: number;
} & (
  | {
      loaderSize?: never;
      loaderVariant?: never;
      loaderColor?: never;

      /**
       * Custom loader component to use instead of default one
       */
      customLoader?: ReactNode;
    }
  | {
      /**
       * Loader size; defaults to `lg`
       */
      loaderSize?: RaikouSize;

      /**
       * Loader variant
       */
      loaderVariant?: any;

      /**
       * Loader color
       */
      loaderColor?: any;

      customLoader?: never;
    }
);
