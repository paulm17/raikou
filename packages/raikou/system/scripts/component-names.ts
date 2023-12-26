import fs from "fs-extra";
import path from "node:path";
import { returnHome } from "./common";

const coreDir = [
  "/packages/raikou/server/dist/index.mjs",
  "/packages/raikou/client/dist/index.mjs",
];

const otherDir = [
  "@raikou/carousel",
  "@raikou/code-highlight",
  "@raikou/data-table",
  "@raikou/dates",
  "@raikou/dropzone",
  "@raikou/modals",
  "@raikou/notifications",
  "@raikou/nprogress",
  "@raikou/spotlight",
  "@raikou/tiptap",
];

export async function componentNames() {
  const workingDir = process.cwd();
  const home = returnHome(workingDir);

  const all_components = [] as string[];

  for (const x of getImportedModules(coreDir, home)) {
    all_components.push(x as string);
  }

  for (const x of otherDir) {
    const capitalizedWords = getComponentName(x);

    all_components.push(capitalizedWords.join(""));
  }

  all_components.sort();

  const csv = printCSV(all_components);
  await fs.promises.writeFile(
    path.join(workingDir, "dist/", "component_names.txt"),
    csv,
  );
}

function findMatches(regex: RegExp, str: string, matches: any[] = []) {
  const res = regex.exec(str);
  res && matches.push(res) && findMatches(regex, str, matches);
  return matches;
}

function printCSV(data: string[]) {
  let csvString = "";
  for (let i = 0; i < data.length; i++) {
    if (i !== 0) {
      csvString += ",";
    }
    csvString += data[i];
  }

  return csvString;
}

function getImportedModules(libPath: string[], dir: string) {
  // Make sure it's a list with unique items
  const imports = new Set();

  libPath.forEach((path) => {
    const fileContents = fs.readFileSync(`${dir}${path}`, "utf8");
    const matches = findMatches(/export \* from "([^"]+)";/g, fileContents);

    for (const match of matches) {
      const newMatch = match[1].replace("./", "");
      const capitalizedWords = getComponentName(newMatch);

      imports.add(capitalizedWords.join(""));
    }
  });

  return Array.from(imports);
}

function getComponentName(newMatch: string) {
  // Remove "@raikou/" if it exists
  let trimmedMatch = newMatch.replace(/@raikou\//, "");

  // Split the string by '-'
  let words = trimmedMatch.split("-");

  // Capitalize the first letter of every word except the first one
  let capitalizedWords = words.map((word, index) => {
    if (index > 0) {
      return word[0].toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  });

  return capitalizedWords;
}
