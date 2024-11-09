import { tests } from '@raikou-tests/core';
import { Kbd, KbdProps, KbdStylesNames } from './Kbd';

const defaultProps: KbdProps = {};

describe('@raikou/core/Kbd', () => {
  tests.itSupportsSystemProps<KbdProps, KbdStylesNames>({
    component: Kbd,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLElement,
    displayName: '@raikou/core/Kbd',
    stylesApiSelectors: ['root'],
  });
});
