import { dirname, join } from 'path';
import type { StorybookConfig } from '@storybook/react-vite';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  stories: [
    '../../../packages/@raikou/@(carousel|contextmenu|datatable|dropzone|notifications|nprogress|spotlight|tiptap)/src/*.story.tsx',
    '../../../packages/@raikou/charts/src/**/*.story.tsx',
    '../../../packages/@raikou/dates/src/components/**/*.story.tsx',
    '../../../packages/@raikou/core/src/components/**/*.story.tsx',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
};
export default config;
