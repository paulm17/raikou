import { tests } from '@raikou-tests/core';
import {
  SegmentedControl,
  SegmentedControlProps,
  SegmentedControlStylesNames,
} from './SegmentedControl';

const defaultProps: SegmentedControlProps = {
  transitionDuration: 0,
  data: ['First', 'Second', 'Third'],
};

describe('@raikou/core/SegmentedControl', () => {
  tests.axe([
    <SegmentedControl {...defaultProps} key="1" />,
    <SegmentedControl {...defaultProps} aria-label="group label" key="2" />,
  ]);

  tests.itSupportsSystemProps<SegmentedControlProps, SegmentedControlStylesNames>({
    component: SegmentedControl,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@raikou/core/SegmentedControl',
    stylesApiSelectors: ['root', 'label', 'input', 'control', 'indicator'],
  });
});
