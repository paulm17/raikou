const plugin = require("tailwindcss/plugin");
const { parseColor } = require("tailwindcss/lib/util/color");

module.exports = plugin.withOptions((options) => {
  const themes = options.themes;
  return ({ addBase }) => {
    themes.forEach((theme) => {
      addBase({
        [`[data-raikou-theme="${theme.name}"]`]: getColorVars(theme),
      });
    });
  };
});

// convert HEX to RGB
const toRGB = (hex) => parseColor(hex).color.join(" ");

function getColorVars(theme) {
  const colors = Object.entries(theme.colors).map(([key, value]) => {
    return value.map((color, i) => {
      return [`--raikou-color-${key}-${i}`, toRGB(color)];
    });
  });

  const flattenedArray = colors.flat(1);

  return flattenedArray.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
}
