import { patchConsoleWarn, tests } from '@raikou-tests/core';
import { BubbleChart, BubbleChartProps, BubbleChartStylesNames } from './BubbleChart';

const defaultProps: BubbleChartProps = {
  data: [],
  dataKey: { x: 'x', y: 'y', z: 'z' },
  range: [0, 100],
};

describe('@raikou/charts/BubbleChart', () => {
  beforeAll(() => {
    patchConsoleWarn();
  });

  afterAll(() => {
    patchConsoleWarn.release();
  });

  tests.itSupportsSystemProps<BubbleChartProps, BubbleChartStylesNames>({
    component: BubbleChart,
    props: defaultProps,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@raikou/charts/BubbleChart',
    stylesApiSelectors: ['root'],
  });
});
