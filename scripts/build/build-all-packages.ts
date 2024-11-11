// prettier-ignore
import chalk from 'chalk';

// import { generateCSS } from './generate-css';
import { createLogger } from '../utils/signale';
import { buildPackage } from './build-package';
import { getBuildTime } from './get-build-time';
import { getPackagesBuildOrder } from './get-packages-build-order';

const logger = createLogger('build-all-packages');

export async function buildAllPackages() {
  let packages = await getPackagesBuildOrder();
  packages = sortPackages(packages);

  const startTime = Date.now();
  logger.log('Building all packages...');

  for (const item of packages) {
    if (!item!.packageJson.name) {
      process.stdout.write(`Skipping ${item!.path} because it has no name\n`);
    } else {
      await buildPackage(item!.packageJson.name);
    }
  }

  // await generateCSS();

  logger.success(`All packages have been built in ${chalk.green(getBuildTime(startTime))}`);

  return packages;
}

// Priority packages in desired order
const priorityPackages = [
  '@raikou/hooks',
  '@raikou/ripple',
  '@raikou/core',
  '@raikou/system',
  '@raikou/emotion',
];

function sortPackages(packages: any) {
  return [...packages].sort((a, b) => {
    const aName = a.packageJson.name;
    const bName = b.packageJson.name;

    // Get indices in priority array (-1 if not found)
    const aIndex = priorityPackages.indexOf(aName);
    const bIndex = priorityPackages.indexOf(bName);

    // If both packages are in priority list, sort by their order
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    }

    // If only a is in priority list, it comes first
    if (aIndex !== -1) {
      return -1;
    }

    // If only b is in priority list, it comes first
    if (bIndex !== -1) {
      return 1;
    }

    // If neither is in priority list, maintain original order
    return 0;
  });
}
