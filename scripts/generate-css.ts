import postcssPresetMantine from "postcss-preset-raikou";
import postcss from "postcss";
import cssnano from "cssnano";
import postcssModules from "postcss-modules";
import glob from "fast-glob";
import fs from "fs-extra";
import path from "path";
import { generateScopedName } from "hash-css-selector";

const files = glob.sync(
  path.resolve(__dirname, "../../components/**/dist/*.css"),
  {
    ignore: [path.resolve(__dirname, "../../demos/**/*")],
  },
);

console.log(files);

const modules = files.filter((file) => file.endsWith("module.css"));
// const global = files.find((file) => file.endsWith("global.css"))!;
const colorTheme = files.find((file) => file.endsWith("color-theme.css"))!;

function prepareFileName(filePath: string) {
  return path.basename(filePath).replace(".module.css", ".css");
}

const outputFolder = path.resolve(__dirname, "../dist/styles");
fs.ensureDirSync(outputFolder);

async function processFile(
  filePath: string,
  scopeBehaviour: "local" | "global",
) {
  const result = await postcss([
    postcssPresetMantine,
    postcssModules({ generateScopedName, getJSON: () => {}, scopeBehaviour }),
    cssnano({ preset: "default" }),
  ]).process(fs.readFileSync(filePath, "utf-8"), {
    from: path.basename(filePath),
  });

  const fileName = prepareFileName(filePath);
  await fs.writeFile(path.join(outputFolder, fileName), result.css);
}

async function genCSSFile() {
  // sleep 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const outputFolder = path.resolve(__dirname, "../dist");
  fs.ensureDirSync(outputFolder);

  // Define the directories and files to ignore
  const ignorePatterns = [
    path.resolve(__dirname, "../dist/styles/global.css"),
    path.resolve(__dirname, "../dist/styles/color-theme.css"),
    path.resolve(__dirname, "../dist/styles/Text.css"),
    path.resolve(__dirname, "../dist/styles/UnstyledButton.css"),
  ];

  // Get all CSS files, excluding the ones to ignore
  const files = glob.sync(path.resolve(__dirname, "../dist/styles/*.css"), {
    ignore: ignorePatterns,
  });

  // Read the contents of the files and concatenate them
  const fileContents = files.map((file) => fs.readFileSync(file, "utf8"));

  // Read the global.css file
  const globalCss = fs.readFileSync(
    path.resolve(__dirname, "../dist/styles/global.css"),
    "utf8",
  );

  const colorTheme = fs.readFileSync(
    path.resolve(__dirname, "../dist/styles/color-theme.css"),
    "utf8",
  );

  // Write the concatenated contents to css_1.css
  // await fs.writeFile(
  //   path.join(outputFolder, "styles_1.css"),
  //   globalCss + "\n" + colorTheme + "\n" + fileContents.join("\n"),
  // );

  await fs.writeFile(
    path.join(outputFolder, "styles_1.css"),
    globalCss +
      "\n" +
      colorTheme +
      "\n" +
      fs.readFileSync(
        path.resolve(__dirname, "../dist/styles/Checkbox.css"),
        "utf8",
      ) +
      fs.readFileSync(
        path.resolve(__dirname, "../dist/styles/Chip.css"),
        "utf8",
      ) +
      fs.readFileSync(
        path.resolve(__dirname, "../dist/styles/InlineInput.css"),
        "utf8",
      ) +
      fs.readFileSync(
        path.resolve(__dirname, "../dist/styles/Input.css"),
        "utf8",
      ),
  );

  // Write the concatenated contents to css_2.css
  await fs.writeFile(
    path.join(outputFolder, "styles_2.css"),
    fs.readFileSync(
      path.resolve(__dirname, "../dist/styles/Text.css"),
      "utf8",
    ) +
      fs.readFileSync(
        path.resolve(__dirname, "../dist/styles/UnstyledButton.css"),
        "utf8",
      ),
  );

  // remove styles directory
  await fs.rm(path.join(outputFolder, "styles"), {
    recursive: true,
    force: true,
  });
}

/* Init */
modules.forEach((file) => processFile(file, "local"));
// processFile(global, "global");
// processFile(colorTheme, "global");
// genCSSFile();
