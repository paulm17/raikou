import process from "node:process";
import type { UserConfig, UserConfigDefaults } from "@unocss/core";
import type { ResolvedUnpluginOptions, UnpluginOptions } from "unplugin";
import { createUnplugin } from "unplugin";
import { createContext } from "./shared/context";
import { setupContentExtractor } from "./shared/content";
import { RESOLVED_ID_RE } from "./shared/layers";
import { applyTransformers } from "./shared/transformers";
import { isCssId } from "./shared/utils";

export interface WebpackPluginOptions<Theme extends object = object>
  extends UserConfig<Theme> {
  /**
   * Manually enable watch mode
   *
   * @default false
   */
  watch?: boolean;
}

export function defineConfig<Theme extends object>(
  config: WebpackPluginOptions<Theme>,
) {
  return config;
}

export default function WebpackPlugin<Theme extends object>(
  configOrPath?: WebpackPluginOptions<Theme> | string,
  defaults?: UserConfigDefaults,
) {
  return createUnplugin(() => {
    const ctx = createContext<WebpackPluginOptions>(configOrPath as any, {
      envMode: process.env.NODE_ENV === "development" ? "dev" : "build",
      ...defaults,
    });
    const { filter, extract, tasks } = ctx;

    const nonPreTransformers = ctx.uno.config.transformers?.filter(
      (i) => i.enforce !== "pre",
    );
    if (nonPreTransformers?.length) {
      console.warn(
        // eslint-disable-next-line prefer-template
        '[unocss] webpack integration only supports "pre" enforce transformers currently.' +
          "the following transformers will be ignored\n" +
          nonPreTransformers.map((i) => ` - ${i.name}`).join("\n"),
      );
    }

    // TODO: detect webpack's watch mode and enable watcher
    tasks.push(
      setupContentExtractor(
        ctx,
        typeof configOrPath === "object" && configOrPath?.watch,
      ),
    );

    const plugin = {
      name: "unocss:webpack",
      enforce: "pre",
      transformInclude(id) {
        return (
          filter("", id) && !id.endsWith(".html") && !RESOLVED_ID_RE.test(id)
        );
      },
      async transform(code, id) {
        const result = await applyTransformers(ctx, code, id, "pre");
        if (isCssId(id)) return result;
        if (result == null) tasks.push(extract(code, id));
        else tasks.push(extract(result.code, id));
        return result;
      },
    } as UnpluginOptions as Required<ResolvedUnpluginOptions>;

    return plugin;
  }).webpack() as any;
}
