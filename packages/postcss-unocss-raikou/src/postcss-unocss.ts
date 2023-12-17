import { readFile, stat } from 'node:fs/promises';
import { normalize } from 'node:path';
import process from 'node:process';
import os from 'node:os';
import type { UnoGenerator } from '@unocss/core';
import fg from 'fast-glob';
import type { Root } from 'postcss';
import postcss from 'postcss';
import fsPromises from 'fs/promises';
import { createGenerator } from '@unocss/core';
import { loadConfig } from '@unocss/config';
import { hasThemeFn } from '@unocss/rule-utils';
import type { UnoPostcssPluginOptions } from './types';

function matchClassesObject(content: string) {
  const regex = new RegExp(`(?<=\{\{).*?(?=\}\})`, 's');
  const elementRE = /<[^>\s]*\s((?:'.*?'|".*?"|`.*?`|\{.*?\}|[^>]*?)*)/g;

  const str = Array.from(content.matchAll(elementRE)).flatMap((match) => match[1].match(regex));

  if (str !== null && str[0] !== null) {
    let data = str[0].replace(/\s/g, '');
    data = data.replace(/,}/g, '}');
    data = data.slice(0, -1);

    data.match(/\w+:{/g)?.forEach((item) => {
      item = item.replace(':{', '');

      data = data.replace(item, function (match) {
        return `"${match}"`;
      });
    });

    data.match(/\w+:/g)?.forEach((item) => {
      data = data.replace(item, function (match) {
        return `"${match.replace(':', '')}":`;
      });
    });

    const jsonStr = JSON.parse(`{ ${data} }`);

    const transformedObject = Object.entries(jsonStr).reduce((acc, [key, value]) => {
      let newValue;
      if (typeof value === 'string') {
        newValue = value;
      } else if (typeof value === 'object') {
        const arr = [] as string[];

        Object.keys(value).forEach((_, index) => {
          arr.push(`${Object.keys(value)[index]}-${Object.values(value)[index]}`);
        });

        newValue = arr.join(' ');
      }
      acc[key] = newValue;
      return acc;
    }, {});

    let result = JSON.stringify(transformedObject);

    result = result.replace(/"\w+":/g, function (match) {
      return `${match}`.replace(/"/g, '');
    });

    result = result.replace('{', '');
    result = result.replace('}', '');

    return result;
  }

  return null;
}

function flattenClasses(content: string) {
  const regex = /<\w+\b[^<>\r]*(?:(?<==)>[^<>\r]*)*classNames=[^<>]*(?:(?<==)>[^<>\r]*)*>/g;
  const matches = content.match(regex);

  if (matches) {
    matches.map((item) => {
      // generate new classes string
      const result = matchClassesObject(item);

      if (result) {
        // match classes string of item
        const regex2 = new RegExp(`(?<=\{\{).*?(?=\}\})`, 's');
        const match = item.match(regex2);

        if (match) {
          content = content.replace(match[0], result);
        }
      }
    });
  }

  return content;
}

module.exports = (options: UnoPostcssPluginOptions = {}) => {
  const { cwd = process.cwd(), configOrPath } = options;

  const directiveMap = Object.assign(
    {
      unocss: 'unocss',
    },
    options.directiveMap || {}
  );

  const fileMap = new Map();
  const fileClassMap = new Map();
  const classes = new Set<string>();
  const targetCache = new Set<string>();
  const pagesContent = new Set<string>();
  const config = loadConfig(cwd, configOrPath);

  let uno: UnoGenerator;
  let promises: Promise<void>[] = [];
  let last_config_mtime = 0;
  const targetRE = new RegExp(Object.values(directiveMap).join('|'));

  return {
    postcssPlugin: 'postcss-unocss',

    async Once(root: Root, payload: any) {
      const { result } = payload;

      const from = result.opts.from?.split('?')[0];

      if (!from) return;

      let isTarget = targetCache.has(from);
      const isScanTarget = root.toString().includes(`@${directiveMap.unocss}`);

      if (targetRE.test(root.toString())) {
        if (!isTarget) {
          root.walkAtRules((rule) => {
            if (rule.name === directiveMap.unocss) isTarget = true;

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
            uno = createGenerator((await loadConfig(cwd, configOrPath)).config);
            last_config_mtime = config_mtime;
          }
        }
      } catch (error: any) {
        throw new Error(`UnoCSS config not found: ${error.message}`);
      }

      const globs =
        uno.config.content?.filesystem ??
        '**/*.{html,js,ts,jsx,tsx,vue,svelte,astro,elm,php,phtml,mdx,md}';
      const plainContent = uno.config.content?.inline ?? [];

      const entries = (await fg(isScanTarget ? globs : from, {
        cwd,
        absolute: true,
        ignore: ['**/node_modules/**'],
        stats: true,
      })) as unknown as { path: string; mtimeMs: number }[];

      promises.push(
        ...plainContent.map(async (c, idx) => {
          if (typeof c === 'function') c = await c();
          if (typeof c === 'string') c = { code: c };

          const { matched } = await uno.generate(c.code, {
            id: c.id ?? `__plain_content_${idx}__`,
          });

          for (const candidate of matched) classes.add(candidate);
        }),
        ...entries.map(async ({ path: file, mtimeMs }) => {
          result.messages.push({
            type: 'dependency',
            plugin: directiveMap.unocss,
            file: normalize(file),
            parent: from,
          });

          if (fileMap.has(file) && mtimeMs <= fileMap.get(file)) return;
          else fileMap.set(file, mtimeMs);

          const content = await readFile(file, 'utf8');

          const flattenedContent = flattenClasses(content);

          pagesContent.add(content);

          const { matched } = await uno.generate(flattenedContent, {
            id: file,
          });

          fileClassMap.set(file, matched);
        })
      );

      await Promise.all(promises);

      promises = [];

      for (const set of fileClassMap.values()) {
        for (const candidate of set) classes.add(candidate);
      }

      const c = await uno.generate(classes);
      let content = Array.from(pagesContent).join('\n');

      // Remove comments
      content = content.replace(/\/\*[\s\S]*?\*\/|(?<=[^:])\/\/.*|^\/\/.*/g, '');

      const filePath = `${os.tmpdir()}/raikou_purgecss_contentFile.txt`;
      await fsPromises.writeFile(filePath, content, { encoding: 'utf8', flag: 'w', mode: 0o666 });

      classes.clear();

      const excludes: string[] = [];

      root.walkAtRules(directiveMap.unocss, (rule) => {
        if (rule.params) {
          const source = rule.source;
          const layers = rule.params.split(',').map((v) => v.trim());
          const css = postcss.parse(
            layers
              .map((i) => (i === 'all' ? c.getLayers() : c.getLayer(i)) || '')
              .filter(Boolean)
              .join('\n')
          );
          css.walkDecls((declaration) => {
            declaration.source = source;
          });
          rule.replaceWith(css);
          excludes.push(rule.params);
        }
      });

      root.walkAtRules(directiveMap.unocss, (rule) => {
        if (!rule.params) {
          const source = rule.source;
          const css = postcss.parse(c.getLayers(undefined, excludes) || '');
          css.walkDecls((declaration) => {
            declaration.source = source;
          });
          rule.replaceWith(css);
        }
      });
    },
  };
};

module.exports.postcss = true;
