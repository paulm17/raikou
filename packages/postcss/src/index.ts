import { readFile, stat } from "node:fs/promises";
import { normalize } from "node:path";
import process from "node:process";
import type { UnoGenerator } from "@unocss/core";
import fg from "fast-glob";
import type { Result, Root } from "postcss";
import postcss from "postcss";
import util from "util";
import os from "node:os";
import fsPromises from "fs/promises";
import { createGenerator } from "@unocss/core";
import { loadConfig } from "@unocss/config";
import { hasThemeFn } from "@unocss/rule-utils";
import type { UnoPostcssPluginOptions } from "./types";

export * from "./types";

function unocss(options: UnoPostcssPluginOptions = {}) {
  const { cwd = process.cwd(), configOrPath } = options;

  const directiveMap = Object.assign(
    {
      unocss: "unocss",
    },
    options.directiveMap || {},
  );

  const fileMap = new Map();
  const fileClassMap = new Map();
  const classes = new Set<string>();
  const targetCache = new Set<string>();
  const config = loadConfig(cwd, configOrPath);

  let uno: UnoGenerator;
  let promises: Promise<void>[] = [];
  let last_config_mtime = 0;
  const targetRE = new RegExp(Object.values(directiveMap).join("|"));

  return {
    postcssPlugin: directiveMap.unocss,
    plugins: [
      async function (root: Root, result: Result) {
        const from = result.opts.from?.split("?")[0];

        if (!from) return;

        let isTarget = targetCache.has(from);
        const isScanTarget = root
          .toString()
          .includes(`@${directiveMap.unocss}`);

        if (targetRE.test(root.toString())) {
          if (!isTarget) {
            root.walkAtRules((rule) => {
              if (
                rule.name === directiveMap.unocss ||
                rule.name === directiveMap.apply ||
                rule.name === directiveMap.screen
              )
                isTarget = true;

              if (isTarget) return false;
            });

            if (!isTarget) {
              root.walkDecls((decl) => {
                if (hasThemeFn(decl.value)) {
                  isTarget = true;
                  return false;
                }
              });
            } else {
              targetCache.add(from);
            }
          }
        } else if (targetCache.has(from)) {
          targetCache.delete(from);
        }

        if (!isTarget) return;

        try {
          const cfg = await config;
          if (!uno) {
            uno = createGenerator(cfg.config);
          } else if (cfg.sources.length) {
            const config_mtime = (await stat(cfg.sources[0])).mtimeMs;
            if (config_mtime > last_config_mtime) {
              uno = createGenerator(
                (await loadConfig(cwd, configOrPath)).config,
              );
              last_config_mtime = config_mtime;
            }
          }
        } catch (error: any) {
          throw new Error(`UnoCSS config not found: ${error.message}`);
        }

        const globs =
          uno.config.content?.filesystem ??
          "**/*.{html,js,ts,jsx,tsx,vue,svelte,astro,elm,php,phtml,mdx,md}";
        const plainContent = uno.config.content?.inline ?? [];

        const entries = (await fg(isScanTarget ? globs : from, {
          cwd,
          absolute: true,
          ignore: ["**/node_modules/**"],
          stats: true,
        })) as unknown as { path: string; mtimeMs: number }[];

        promises.push(
          ...plainContent.map(async (c, idx) => {
            if (typeof c === "function") c = await c();
            if (typeof c === "string") c = { code: c };

            const { matched } = await uno.generate(c.code, {
              id: c.id ?? `__plain_content_${idx}__`,
            });

            for (const candidate of matched) classes.add(candidate);
          }),
          ...entries.map(async ({ path: file, mtimeMs }) => {
            result.messages.push({
              type: "dependency",
              plugin: directiveMap.unocss,
              file: normalize(file),
              parent: from,
            });

            if (fileMap.has(file) && mtimeMs <= fileMap.get(file)) return;
            else fileMap.set(file, mtimeMs);

            const content = await readFile(file, "utf8");
            const { matched } = await uno.generate(content, {
              id: file,
            });

            fileClassMap.set(file, matched);
          }),
        );
        await Promise.all(promises);
        promises = [];

        for (const set of fileClassMap.values()) {
          for (const candidate of set) classes.add(candidate);
        }
        const c = await uno.generate(classes);
        classes.clear();
        const excludes: string[] = [];
        root.walkAtRules(directiveMap.unocss, (rule) => {
          if (rule.params) {
            const source = rule.source;
            const layers = rule.params.split(",").map((v) => v.trim());
            const css = postcss.parse(
              layers
                .map((i) => (i === "all" ? c.getLayers() : c.getLayer(i)) || "")
                .filter(Boolean)
                .join("\n"),
            );
            css.walkDecls((declaration) => {
              declaration.source = source;
            });
            rule.replaceWith(css);
            excludes.push(rule.params);
          }
        });

        const exec = util.promisify(require("child_process").exec);
        const css = postcss.parse(c.getLayers(undefined, excludes) || "");
        const tempDir = os.tmpdir();
        const filename = `unocss_tmp_${Date.now()}.css`;
        await fsPromises.writeFile(`${tempDir}/${filename}`, css.toString());

        const cmd = `cat ${tempDir}/${filename} | ${cwd}/unocss-preset -d /app/`;
        const { stdout, stderr } = await exec(cmd);

        if (stderr) {
          throw new Error(stderr);
        }

        await fsPromises.unlink(`${tempDir}/${filename}`);

        root.walkAtRules(directiveMap.unocss, (rule) => {
          if (!rule.params) {
            const css = postcss.parse(stdout);

            css.walkDecls((declaration) => {
              declaration.source = rule.source;
            });

            rule.replaceWith(css);
          }
        });
      },
    ],
  };
}

unocss.postcss = true;
unocss.default = unocss;

export default unocss;
