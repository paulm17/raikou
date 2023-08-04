const colors = require("tailwindcss/colors");

module.exports = [
  {
    name: "default",
    colors: {
      "text-base": colors.fuchsia["800"],
      "text-inverted": colors.fuchsia["100"],
      "bg-base": colors.fuchsia["100"],
      "bg-inverted": colors.fuchsia["800"],
    },
  },
  {
    name: "swiss",
    colors: {
      "text-base": colors.red["800"],
      "text-inverted": colors.red["100"],
      "bg-base": colors.red["100"],
      "bg-inverted": colors.red["800"],
    },
  },
  {
    name: "forest",
    colors: {
      "text-base": colors.green["800"],
      "text-inverted": colors.green["100"],
      "bg-base": colors.green["100"],
      "bg-inverted": colors.green["800"],
    },
  },
  {
    name: "aqua",
    colors: {
      "text-base": colors.cyan["800"],
      "text-inverted": colors.cyan["100"],
      "bg-base": colors.cyan["100"],
      "bg-inverted": colors.cyan["800"],
    },
  },
];
