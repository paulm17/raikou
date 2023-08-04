const plugin = require("tailwindcss/plugin");
const { parseColor } = require("tailwindcss/lib/util/color");

// convert color prefix to tailwind theme extend key
// if not present, simply use prefixColor, like textColor
const colorKeyMap = {
  bg: "backgroundColor",
};

module.exports = plugin.withOptions(
  (options) => {
    const themes = options.themes;
    return ({ addBase }) => {
      addBase({
        ":root": getColorVars(themes[0]),
      });
      themes.forEach((theme) => {
        addBase({
          [`[data-theme="${theme.name}"]`]: getColorVars(theme),
        });
      });
    };
  },
  (options) => {
    return {
      theme: {
        extend: getExtendedTheme(options.themes[0]),
      },
    };
  },
);

function getExtendedTheme(theme) {
  // get color prefixes like text, bg, border, etc
  const prefixes = Array.from(
    new Set(Object.keys(theme.colors).map((key) => key.split("-")[0])),
  );
  const extend = Object.fromEntries(
    prefixes.map((prefix) => [
      colorKeyMap[prefix] ?? `${prefix}Color`,
      { multi: getThemeColors(theme, prefix) },
    ]),
  );
  return extend;
}

// convert HEX to RGB
const toRGB = (hex) => parseColor(hex).color.join(" ");

function getColorVars(theme) {
  return Object.fromEntries(
    Object.entries(theme.colors).map(([key, value]) => [
      `--color-${key}`,
      toRGB(value),
    ]),
  );
}

function getThemeColors(theme, type) {
  const prefix = `${type}-`;
  return Object.fromEntries(
    Object.keys(theme.colors)
      .filter((key) => key.startsWith(prefix))
      // .map((key) => [key.split('-')[1], `var(--color-${key})`]),
      // Not sure why the rgb syntax with alpha is not working
      .map((key) => [
        key.split("-")[1],
        `rgb(var(--color-${key}) / <alpha-value>)`,
      ]),
  );
}
