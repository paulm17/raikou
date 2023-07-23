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
        .replace('@raikou/', '')
        .replace(/^(\w)/, (firstLetter: string) => firstLetter.toUpperCase());

      imports.add(camelCaseMatch);
    }
  });

  return Array.from(imports);
};

const getContent = (files: string[]) => files.map((f) => fs.readFileSync(f, 'utf8')).join();

const extractClassName = (selector: string) => {
  // Regular expression to match class name
  const regex = /(?:\.|\s)([a-zA-Z0-9]+)(-|\.|\[)/g;

  // Extract class names
  const match = regex.exec(selector);

  regex.lastIndex = 0; // reset regex state
  return match ? match[1] : null; // return class name or null if no match
};

module.exports = (opts: any) => {
  const { appPath, libPath, exts } = Object.assign(DEFAULT_OPTIONS, opts);
  let content = getContent(getFiles(appPath, exts));

  // Remove comments
  content = content.replace(/\/\*[\s\S]*?\*\/|(?<=[^:])\/\/.*|^\/\/.*/g, '');

  // Get all library components
  const importedModules = getImportedModules(libPath) as string[];

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
        if (importedModules.includes(item)) {
          return item.toLowerCase();
        }
      }
    })
    .filter((item) => !!item);
  const uniqComponentNames = [...new Set(componentNames)];

  return {
    postcssPlugin: 'postcss-reset',

    Rule(rule: Rule) {
      const lcRule = extractClassName(rule.selector.toLowerCase());
      let hasMatch = false;

      if (lcRule) {
        if (uniqComponentNames?.includes(lcRule)) {
          hasMatch = true;
        }

        if (!hasMatch) {
          rule.remove();
        }
      }
    },
  };
};

module.exports.postcss = true;
