import type { RaikouColor, RaikouSize } from "@raikou/core";
import { RaikouLoader } from "../../../components/Loader/src";

export type DataTableLoaderProps = {
  /**
   * Loader background blur (in pixels).
   */
  loaderBackgroundBlur?: number;
} & (
  | {
      loaderSize?: never;
      loaderType?: never;
      loaderColor?: never;

      /**
       * Custom loader component to use instead of default one.
       */
      customLoader?: React.ReactNode;
    }
  | {
      /**
       * Loader size.
       * @default `lg`.
       */
      loaderSize?: RaikouSize | (string & NonNullable<unknown>) | number;

      /**
       * Loader type.
       */
      loaderType?: RaikouLoader;

      /**
       * Loader color.
       */
      loaderColor?: RaikouColor;

      customLoader?: never;
    }
);
