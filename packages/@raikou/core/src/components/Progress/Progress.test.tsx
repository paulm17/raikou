import { tests } from '@raikou-tests/core';
import { Progress, ProgressProps, ProgressStylesNames } from './Progress';
import { ProgressLabel } from './ProgressLabel/ProgressLabel';
import { ProgressRoot } from './ProgressRoot/ProgressRoot';
import { ProgressSection } from './ProgressSection/ProgressSection';

const defaultProps: ProgressProps = {
  value: 40,
  'aria-label': 'test',
};

describe('@raikou/core/Progress', () => {
  tests.axe([<Progress {...defaultProps} key="1" />]);

  tests.itSupportsSystemProps<ProgressProps, ProgressStylesNames>({
    component: Progress,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@raikou/core/Progress',
    stylesApiSelectors: ['root', 'section'],
  });

  it('exposes ProgressRoot, ProgressSection and ProgressLabel components', () => {
    expect(Progress.Root).toBe(ProgressRoot);
    expect(Progress.Section).toBe(ProgressSection);
    expect(Progress.Label).toBe(ProgressLabel);
  });
});
