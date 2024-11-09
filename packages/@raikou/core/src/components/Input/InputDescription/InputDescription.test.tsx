import { tests } from '@raikou-tests/core';
import {
  InputDescription,
  InputDescriptionProps,
  InputDescriptionStylesNames,
} from './InputDescription';

const defaultProps: InputDescriptionProps = {};

describe('@raikou/core/InputDescription', () => {
  tests.itSupportsSystemProps<InputDescriptionProps, InputDescriptionStylesNames>({
    component: InputDescription,
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
    displayName: '@raikou/core/InputDescription',
    stylesApiName: 'InputWrapper',
    stylesApiSelectors: ['description'],
  });
});
