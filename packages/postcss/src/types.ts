import type { UserConfig } from "@unocss/core";

export interface UnoPostcssPluginOptions {
  content?: (
    | string
    | {
        raw: string;
        extension: string;
      }
  )[];
  directiveMap?: {
    unocss?: string;
  };
  cwd?: string;
  configOrPath?: string | UserConfig;
}
