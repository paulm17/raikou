import { tests } from '@raikou-tests/core';
import { InputError, InputErrorProps, InputErrorStylesNames } from './InputError';

const defaultProps: InputErrorProps = {};

describe('@raikou/core/InputError', () => {
  tests.itSupportsSystemProps<InputErrorProps, InputErrorStylesNames>({
    component: InputError,
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
    refType: HTMLParagraphElement,
    displayName: '@raikou/core/InputError',
    stylesApiName: 'InputWrapper',
    stylesApiSelectors: ['error'],
  });
});
