import { tests } from '@raikou-tests/core';
import { Mark, MarkProps, MarkStylesNames } from './Mark';

const defaultProps: MarkProps = {};

describe('@raikou/core/Mark', () => {
  tests.itSupportsSystemProps<MarkProps, MarkStylesNames>({
    component: Mark,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLElement,
    displayName: '@raikou/core/Mark',
    stylesApiSelectors: ['root'],
  });
});
