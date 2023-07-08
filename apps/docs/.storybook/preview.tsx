import { React } from "react";
import { withThemeByDataAttribute } from "@storybook/addon-styling";
import type { Preview } from "@storybook/react";
import { Bootstrap } from "@raikou/core";
import "../tailwind.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <Bootstrap theme={undefined}>
        <Story />
      </Bootstrap>
    ),
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "dark",
      attributeName: "data-raikou-color-scheme",
    }),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
