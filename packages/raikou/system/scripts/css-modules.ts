const fs = require("fs");
const path = require("path");
import { returnHome } from "./common";

const componentsDir = "components";

const otherDir = [
  "carousel",
  "code-highlight",
  "contextmenu",
  "datatable",
  "dates",
  "dropzone",
  "modals",
  "notifications",
  "nprogress",
  "spotlight",
  "tiptap",
];

export async function cssModules() {
  const workingDir = process.cwd();
  const home = returnHome(workingDir);

  let all_modules = {} as Record<string, any>;
  const componentCSSModules = getComponentCSSModules(home, componentsDir);

  for (const key of Object.keys(componentCSSModules)) {
    if (!Object.keys(all_modules).includes(key)) {
      all_modules[key] = componentCSSModules[key];
    }
  }

  const otherCSSModules = getOtherCSSModules(home, otherDir);

  for (const key of Object.keys(otherCSSModules)) {
    if (!Object.keys(all_modules).includes(key)) {
      all_modules[key] = otherCSSModules[key];
    }
  }

  const csv = printCSV(all_modules);
  await fs.promises.writeFile(
    path.join(workingDir, "dist/", "css_modules.txt"),
    csv,
  );
}

function getComponentCSSModules(dir: string, packagePath: string) {
  let componentPath = `${dir}/packages/raikou/${packagePath}`;
  let paths = walkDirectory(componentPath);
  let modules = {} as Record<string, any>;

  for (const _path of paths) {
    let fileContents = fs.readFileSync(_path, "utf8");

    const regex = /\w+_module_default\s*=\s*{[^}]*}/g;
    let match;

    let data = [] as string[];

    while ((match = regex.exec(fileContents)) !== null) {
      let newMatch = match[0];
      const splitRegex = /_module_default\s*=\s*/;
      const matchSplit = newMatch.split(splitRegex);
      const value = matchSplit[1];

      try {
        let parsed = JSON.parse(value);

        if (typeof parsed === "object" && parsed !== null) {
          for (let prop in parsed) {
            data.push(parsed[prop]);
          }
        }
      } catch (err) {
        console.log("Error parsing JSON string:", err);
      }
    }

    let component_name = getComponentName(_path) as string;
    modules[component_name.toLowerCase()] = data;
  }

  return modules;
}

function getOtherCSSModules(dir: string, packagePath: string[]) {
  let modules = {} as Record<string, any>;

  for (const _path of packagePath) {
    let componentPath = `${dir}/packages/raikou/${_path}/dist/index.mjs`;
    let fileContents = fs.readFileSync(componentPath, "utf8");

    const regex = /\w+_module_default\s*=\s*{[^}]*}/g;
    let match;

    let data = [] as string[];

    while ((match = regex.exec(fileContents)) !== null) {
      let newMatch = match[0];
      const splitRegex = /_module_default\s*=\s*/;
      const matchSplit = newMatch.split(splitRegex);
      const value = matchSplit[1];

      try {
        let parsed = JSON.parse(value);

        if (typeof parsed === "object" && parsed !== null) {
          for (let prop in parsed) {
            data.push(parsed[prop]);
          }
        }
      } catch (err) {
        console.log("Error parsing JSON string:", err);
      }
    }

    let component_name = getComponentName(componentPath) as string;
    modules[component_name.toLowerCase()] = data;
  }

  return modules;
}

function printCSV(data: any) {
  let csvString = "";

  for (const [key, values] of Object.entries(data)) {
    const valuesStr = (values as any).join(",").replace(/"/g, "");
    csvString += `${key}|${valuesStr}\n`;
  }

  return csvString;
}

function walkDirectory(dir: string) {
  let paths = [] as string[];

  if (!dir.endsWith("_utils/dist")) {
    fs.readdirSync(dir).forEach((file: string) => {
      let filePath = path.join(dir, file);

      // Skip if the directory is not 'dist'
      if (fs.statSync(filePath).isDirectory()) {
        paths = paths.concat(walkDirectory(`${filePath}/dist`));
      } else if (file.endsWith("index.mjs")) {
        paths.push(filePath);
      }
    });
  }

  return paths;
}

function getComponentName(dir: string) {
  const components = dir.split("/");
  const index = components.indexOf("dist");

  return components[index - 1];
}
