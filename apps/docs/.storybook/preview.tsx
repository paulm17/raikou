import { React } from "react";
import { withThemeByDataAttribute } from "@storybook/addon-styling";
import type { Preview } from "@storybook/react";
import { Bootstrap } from "@raikou/system";
import "@raikou/system/styles.css";
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
    options: {
      showPanel: false,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;