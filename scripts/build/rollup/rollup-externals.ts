import packageJson from '../../../package.json';
import { getPackagesList } from '../../packages/get-packages-list';

export const ROLLUP_EXTERNALS = [
  // default
  'dayjs/locale/ru',
  'dayjs/plugin/customParseFormat.js',
  'dayjs/plugin/customParseFormat',
  'dayjs/plugin/utc.js',
  'dayjs/plugin/timezone.js',
  'dayjs/plugin/isoWeek.js',
  'klona/full',
  'highlight.js/lib/languages/typescript',
  'react-is',
  'react/jsx-runtime',
  'next-themes',
  '@stylefusion/react',

  ...getPackagesList().map((pkg) => pkg.packageJson.name!),
  ...Object.keys({
    ...packageJson.devDependencies,
    ...packageJson.dependencies,
  }),
];
