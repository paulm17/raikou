import type { StorybookConfig } from "@storybook/react-vite";
import Unocss from "unocss/vite";

const config: StorybookConfig = {
  stories: [
    "../../../packages/raikou/components/**/src/*.story.@(js|jsx|ts|tsx)",
    "../../../packages/raikou/@(carousel|code-highlight|contextmenu|datatable|dropzone|form|modals|notifications|nprogress|spotlight|tiptap)/**/src/*.story.@(js|jsx|ts|tsx)",
    "../../../packages/raikou/dates/**/src/**/*.story.@(js|jsx|ts|tsx)",
    "../../../packages/raikou/demos/**/src/**/*.story.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "storybook-dark-mode",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: ".storybook/customViteConfig.js",
      },
    },
  },
  typescript: {
    reactDocgen: false, // 👈 react-docgen configured here.
  },
  viteFinal(config) {
    config.plugins?.push(Unocss());
    return config;
  },
};
export default config;
