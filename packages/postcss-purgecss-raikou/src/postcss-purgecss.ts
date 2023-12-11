import os from 'node:os';
import type { Root } from 'postcss';
import postcss from 'postcss';
import fsPromises from 'fs/promises';

function gen_rules(content: string, lc_importedModules: string[]) {
  // Get components being used
  const regex = /<([a-zA-Z]+)[^>]*>/g;
  const matches = content.match(regex);

  const componentNames = matches
    ?.map((match) => match.replace(/<|>|\/>/g, ''))
    .map((item) => {
      const match = item.match(/^\w+/);

      if (match) {
        return match[0];
      }

      return null;
    })
    .map((item) => {
      if (item !== null) {
        if (lc_importedModules.includes(item.toLowerCase())) {
          return item.toLowerCase();
        }
      }
    })
    .filter((item) => !!item);

  // context menu doesn't have a component, search for the import instead
  if (content.match(/\"@raikou\/contextmenu\"/)) {
    componentNames?.push('contextmenu');
  }

  const uniqComponentNames = [...new Set(componentNames)];

  return uniqComponentNames;
}

function matchKeys(array1: any, array2: { [key: string]: string }) {
  let result: any = [];

  array1.map((key: string) => {
    if (array2.hasOwnProperty(key)) {
      result.push(...Object.values(array2[key]));
    }
  });

  return [...new Set(result)];
}

module.exports = (options: any) => {
  return {
    postcssPlugin: 'postcss-purgecss',

    async Once(root: Root, payload: any) {
      const stylesFile = await fsPromises.readFile(options.styles, {
        encoding: 'utf8',
      });
      const purge_css = (await postcss().process(stylesFile, { from: undefined })).root;

      // @ts-ignore
      const componentNames = await fsPromises.readFile(options.componentNames, {
        encoding: 'utf8',
      });

      // The selectors per each component
      const cssModules: any = [];

      await fsPromises.readFile(options.cssModules, 'utf8').then((data) => {
        const lines = data.split('\n');
        lines.forEach((line) => {
          if (line.trim().length > 0) {
            const s_line = line.split('|');
            cssModules[s_line[0].toLowerCase() as any] = s_line[1].split(',');
          }
        });
      });

      // All the components in the library
      let lc_componentNames = componentNames
        .replace('\n', '')
        .split(',')
        .map((item) => item.toLowerCase());

      // Components in use
      const contentFilePath = `${os.tmpdir()}/raikou_purgecss_contentFile.txt`;
      const content = await fsPromises.readFile(contentFilePath, {
        encoding: 'utf8',
      });
      const validComponentNames = gen_rules(content, lc_componentNames);

      // Generate rules in use
      const result = matchKeys(validComponentNames, cssModules);

      // remove unused rules
      purge_css.walkRules((rule) => {
        const matches = rule.selector.match(/m\-[a-f0-9]{7,8}/g);
        const selectors = new Set(matches);
        const uniqueSelectors = [...selectors];

        if (uniqueSelectors) {
          uniqueSelectors.map((selector) => {
            if (!result.includes(selector)) {
              rule.remove();
            }
          });
        }

        if (rule.selector.includes('utilityClasses')) {
          if (!validComponentNames.includes('datatable')) {
            rule.remove();
          }
        }
      });

      // iterate through AtRules
      purge_css.walkAtRules((atRule) => {
        // remove empty media rules
        if (atRule.type == 'atrule' && atRule.name == 'media' && atRule.nodes.length == 0) {
          atRule.remove();
        }
        // remove keyframes
        if (atRule.type == 'atrule' && atRule.name == 'keyframes') {
          const matches = atRule.params.match(/m\-[a-f0-9]{7,8}/g);
          const selectors = new Set(matches);
          const uniqueSelectors = [...selectors];

          if (uniqueSelectors) {
            uniqueSelectors.map((selector) => {
              if (!result.includes(selector)) {
                atRule.remove();
              }
            });
          }
        }
      });

      // replace @raikou
      root.walkAtRules('raikou', (rule) => {
        if (!rule.params) {
          rule.replaceWith(purge_css);
        }
      });

      // Delete temp file
      const tempFilePath = `${os.tmpdir()}/raikou_purgecss_contentFile.txt`;
      fsPromises.unlink(tempFilePath);
    },
  };
};

module.exports.postcss = true;
