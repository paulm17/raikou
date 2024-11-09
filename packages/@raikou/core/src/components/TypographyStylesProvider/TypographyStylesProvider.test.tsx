import { tests } from '@raikou-tests/core';
import {
  TypographyStylesProvider,
  TypographyStylesProviderProps,
  TypographyStylesProviderStylesNames,
} from './TypographyStylesProvider';

const defaultProps: TypographyStylesProviderProps = {};

describe('@raikou/core/TypographyStylesProvider', () => {
  tests.itSupportsSystemProps<TypographyStylesProviderProps, TypographyStylesProviderStylesNames>({
    component: TypographyStylesProvider,
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
    refType: HTMLDivElement,
    displayName: '@raikou/core/TypographyStylesProvider',
    stylesApiSelectors: ['root'],
  });
});
