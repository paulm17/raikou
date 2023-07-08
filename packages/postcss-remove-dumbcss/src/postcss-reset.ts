const glob = require('glob');
const fs = require('fs');
const path = require('path');
import type { Rule } from 'postcss';

const DEFAULT_OPTIONS = {
  appPath: './src/tests',
  libPath: '../raikou-server/src/**/index.ts',
  exts: ['.tsx'],
};

const getFiles = (pathName: string, exts: string[]) =>
  fs.readdirSync(pathName).flatMap((file: string) => {
    const filename = path.join(pathName, file);
    if (fs.lstatSync(filename).isDirectory() && !filename.includes('node_modules')) {
      return getFiles(filename, exts);
    } else if (exts.includes(path.extname(filename))) {
      return [filename];
    } else {
      return [];
    }
  });

const findMatches = (regex: RegExp, str: string, matches: any[] = []) => {
  const res = regex.exec(str);
  res && matches.push(res) && findMatches(regex, str, matches);
  return matches;
};

const getImportedModules = (libPath: string) => {
  // Make sure it's a list with unique items
  const imports = new Set();
  // The components are always declared in an index.ts, so we just have to look through those
  glob.sync(libPath, { nodir: true }).forEach((file: string) => {
    const fileContents = fs.readFileSync(file);

    const matches = findMatches(/export \* from "([^"]+)";/g, fileContents);

    for (const match of matches) {
      const newMatch = match[1].replace('./', '');

      if (/^[A-Z]/.test(newMatch)) {
        imports.add(newMatch.toLowerCase());
      }
    }
  });

  return Array.from(imports);
};

const getContent = (files: string[]) => files.map((f) => fs.readFileSync(f, 'utf8')).join();

module.exports = (opts: any) => {
  return {
    postcssPlugin: 'postcss-reset',

    Rule(rule: Rule) {
      const { appPath, libPath, exts } = Object.assign(DEFAULT_OPTIONS, opts);
      const content = getContent(getFiles(appPath, exts));

      // Get all library components
      const importedModules = getImportedModules(libPath) as string[];

      // Get components being used
      const regex = /<([a-zA-Z]+)[^>]*>/g;
      const matches = content.match(regex);
      const componentNames = matches?.map((match) => match.replace(/<|>|\/>/g, ''));
      const lowerCaseComponentNames = componentNames?.map((c) => c.toLowerCase()) || [];

      // Loop through all modules
      importedModules.forEach((module: string) => {
        // A rule contains a module
        if (rule.selector.toLowerCase().includes(module)) {
          let hasMatch = false;

          // Loop through all components being used in the app
          lowerCaseComponentNames.forEach((componentName) => {
            if (rule.selector.toLowerCase().includes(componentName)) {
              hasMatch = true;
            }
          });

          // The rule does not match any component, remove it
          if (!hasMatch) {
            rule.remove();
          }
        }
      });
    },
  };
};

module.exports.postcss = true;
