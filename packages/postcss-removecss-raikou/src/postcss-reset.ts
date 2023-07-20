const fs = require('fs');
const path = require('path');
import type { Rule } from 'postcss';

const DEFAULT_OPTIONS = {
  appPath: './src/tests',
  libPath: ['../raikou/server/src/index.ts', '../raikou/client/src/index.ts'],
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

const getImportedModules = (libPath: string[]) => {
  // Make sure it's a list with unique items
  const imports = new Set();

  libPath.forEach((path) => {
    const fileContents = fs.readFileSync(path, 'utf8');
    const matches = findMatches(/export \* from "([^"]+)";/g, fileContents);

    for (const match of matches) {
      const newMatch = match[1].replace('./', '');

      // Convert kebab-case to camelCase
      const camelCaseMatch = newMatch
        .toLowerCase()
        .replace(/-(\w)/g, (_: boolean, letter: string) => letter.toUpperCase())
        .replace('@raikou/', '');

      imports.add(camelCaseMatch);
    }
  });

  return Array.from(imports);
};

const getContent = (files: string[]) => files.map((f) => fs.readFileSync(f, 'utf8')).join();

module.exports = (opts: any) => {
  const { appPath, libPath, exts } = Object.assign(DEFAULT_OPTIONS, opts);
  const content = getContent(getFiles(appPath, exts));

  // Get all library components
  const importedModules = getImportedModules(libPath) as string[];
  const capitaliseImportedModules = importedModules.map(
    (m) => m.charAt(0).toUpperCase() + m.slice(1)
  );

  // Get components being used
  const regex = /<([a-zA-Z]+)[^>]*>/g;
  const matches = content.match(regex);
  const componentNames = matches?.map((match) => match.replace(/<|>|\/>/g, ''));

  // const lowerCaseComponentNames = componentNames?.map((c) => c.toLowerCase()) || [];

  // console.log(componentNames);
  // console.log('importedModules', importedModules);
  // console.log('lowerCaseComponentNames', lowerCaseComponentNames);

  return {
    postcssPlugin: 'postcss-reset',

    Rule(rule: Rule) {
      // Loop through all modules
      importedModules.forEach((module: string) => {
        // A rule contains a module
        if (rule.selector.toLowerCase().includes(module)) {
          const hasMatch = false;

          // Loop through all components being used in the app
          // lowerCaseComponentNames.forEach((componentName) => {
          //   if (rule.selector.toLowerCase().includes(componentName)) {
          //     hasMatch = true;
          //   }
          // });

          const regex = /^\w+/;

          componentNames?.forEach((componentName) => {
            const match = componentName.match(regex);

            if (match) {
              console.log(match[0]);
            }

            //   if (capitaliseImportedModules.includes(componentName)) {
            //     console.log(componentName);
            //   }
          });

          // The rule does not match any component, remove it
          if (!hasMatch) {
            console.log(`removing ${rule.selector} from ${module}`);

            rule.remove();
          }
        }
      });
    },
  };
};

module.exports.postcss = true;
