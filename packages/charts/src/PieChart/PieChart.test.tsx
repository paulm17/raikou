import { patchConsoleWarn, tests } from '@raikou-tests/core';
import { PieChart, PieChartProps, PieChartStylesNames } from './PieChart';

const data = [
  { name: 'Group A', value: 400, color: 'indigo.6' },
  { name: 'Group B', value: 300, color: 'yellow.6' },
  { name: 'Group C', value: 300, color: 'teal.6' },
  { name: 'Group D', value: 200, color: 'pink.6' },
];

const defaultProps: PieChartProps = {
  data,
};

describe('@raikou/charts/PieChart', () => {
  beforeAll(() => {
    patchConsoleWarn();
  });

  afterAll(() => {
    patchConsoleWarn.release();
  });

  tests.itSupportsSystemProps<PieChartProps, PieChartStylesNames>({
    component: PieChart,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@raikou/charts/PieChart',
    stylesApiSelectors: ['root'],
  });
});
