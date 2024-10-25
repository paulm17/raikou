import { tests } from '@raikou-tests/core';
import {
  CheckboxIndicator,
  CheckboxIndicatorProps,
  CheckboxIndicatorStylesNames,
} from './CheckboxIndicator';

const defaultProps: CheckboxIndicatorProps = {};

describe('@raikou/core/CheckboxIndicator', () => {
  tests.itSupportsSystemProps<CheckboxIndicatorProps, CheckboxIndicatorStylesNames>({
    component: CheckboxIndicator,
    props: defaultProps,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@raikou/core/CheckboxIndicator',
    stylesApiSelectors: ['indicator', 'icon'],
  });
});
