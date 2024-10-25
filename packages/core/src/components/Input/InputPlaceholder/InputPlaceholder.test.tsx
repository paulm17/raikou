import { tests } from '@raikou-tests/core';
import {
  InputPlaceholder,
  InputPlaceholderProps,
  InputPlaceholderStylesNames,
} from './InputPlaceholder';

const defaultProps: InputPlaceholderProps = {};

describe('@raikou/core/InputPlaceholder', () => {
  tests.itSupportsSystemProps<InputPlaceholderProps, InputPlaceholderStylesNames>({
    component: InputPlaceholder,
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
    refType: HTMLSpanElement,
    displayName: '@raikou/core/InputPlaceholder',
    stylesApiSelectors: ['placeholder'],
  });
});
