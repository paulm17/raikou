import { getByPath } from "dot-path-value";
import { RaikouThemeOverride } from "../theme.types";
import {
  cssVariablesObjectToString,
  CSSVariables,
  cssNestedVariablesObjectToString,
} from "./css-variables-object-to-string";
import { wrapWithSelector } from "./wrap-with-selector";

export interface ConvertCSSVariablesInput {
  /** Shared CSS variables that should be accessible independent from color scheme */
  variables: CSSVariables;

  /** CSS variables available only in dark color scheme */
  dark: CSSVariables;

  /** CSS variables available only in light color scheme */
  light: CSSVariables;
}

export function convertCssVariables(
  input: any,
  generator: any,
  selector: string,
  theme: RaikouThemeOverride,
) {
  let defaultCSS = convertCssDefaultVariables(input, selector);
  let generatorCSS = "";

  if (generator) {
    const fixGeneratorVariables = (obj: any) => {
      for (let key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
          fixGeneratorVariables(obj[key]);
        } else {
          if (key.match(/^--/) && obj[key].match(/^theme\./)) {
            const path: any = `${obj[key]}`.replace("theme.", "");
            obj[key] = getByPath(theme, path);
          }
        }
      }

      return obj;
    };

    // Marry the dot notation with the theme object values
    generator = fixGeneratorVariables(JSON.parse(generator));
    generatorCSS = convertGeneratorCssVariables(generator, selector);
  }

  return `${defaultCSS}\n${generatorCSS}`;
}

function convertGeneratorCssVariables(generator: any, selector: string) {
  const flatGenerator = flattenGenerator(generator);

  const sharedVariables = cssVariablesObjectToString(
    flatGenerator.flatObject.variables,
  );
  const shared = sharedVariables
    ? wrapWithSelector(selector, sharedVariables)
    : "";

  const flatVariables = convertCssFlatVariables(
    flatGenerator.flatObject,
    selector,
  );
  const nestedVariables = convertCssNestedVariables(
    flatGenerator.nestedObject,
    selector,
  );

  return `${shared}${flatVariables}${nestedVariables}`;
}

function flattenGenerator(generator: any) {
  const { variables, ...other } = generator;

  const flatObject: ConvertCSSVariablesInput = {
    variables: {},
    light: {},
    dark: {},
  };
  const nestedObject: ConvertCSSVariablesInput = {
    variables: {},
    light: {},
    dark: {},
  };

  const divideGenerator = (inputObj: any) => {
    for (let key in inputObj) {
      if (key.startsWith("--")) {
        // @ts-ignore
        flatObject["light"][key] = inputObj[key];
        // @ts-ignore
        flatObject["dark"][key] = inputObj[key];
      } else if (key.startsWith(".")) {
        // @ts-ignore
        nestedObject["light"][key] = inputObj[key];
        // @ts-ignore
        nestedObject["dark"][key] = inputObj[key];
      }
    }
  };

  // assign variables to the flatObject
  flatObject.variables = variables;

  // divide up the generator
  divideGenerator(other.light);
  divideGenerator(other.dark);

  return { flatObject, nestedObject };
}

function convertCssDefaultVariables(
  input: ConvertCSSVariablesInput,
  selector: string,
) {
  const sharedVariables = cssVariablesObjectToString(input.variables);
  const shared = sharedVariables
    ? wrapWithSelector(selector, sharedVariables)
    : "";

  const dark = cssVariablesObjectToString(input.dark);
  const darkForced = dark
    ? wrapWithSelector(`${selector}[data-raikou-color-scheme="dark"]`, dark)
    : "";

  const light = cssVariablesObjectToString(input.light);
  const lightForced = light
    ? wrapWithSelector(`${selector}[data-raikou-color-scheme="light"]`, light)
    : "";

  return `${shared}${darkForced}${lightForced}`;
}

function convertCssFlatVariables(
  input: ConvertCSSVariablesInput,
  selector: string,
) {
  const dark = cssVariablesObjectToString(input.dark);
  const darkForced = dark
    ? wrapWithSelector(`${selector}[data-raikou-color-scheme="dark"]`, dark)
    : "";

  const light = cssVariablesObjectToString(input.light);
  const lightForced = light
    ? wrapWithSelector(`${selector}[data-raikou-color-scheme="light"]`, light)
    : "";

  return `${darkForced}\n${lightForced}`;
}

function convertCssNestedVariables(
  input: ConvertCSSVariablesInput,
  selector: string,
) {
  let darkForced = "";
  for (const nestedSelector in input.dark) {
    // @ts-ignore
    const dark = cssNestedVariablesObjectToString(input.dark[nestedSelector]);
    if (dark) {
      darkForced += wrapWithSelector(
        `${selector}[data-raikou-color-scheme="dark"] ${nestedSelector}`,
        dark,
      );
    }
  }

  let lightForced = "";
  for (const nestedSelector in input.light) {
    // @ts-ignore
    const light = cssNestedVariablesObjectToString(input.light[nestedSelector]);
    if (light) {
      lightForced += wrapWithSelector(
        `${selector}[data-raikou-color-scheme="light"] ${nestedSelector}`,
        light,
      );
    }
  }

  return `${darkForced}\n${lightForced}`;
}
