import { inputDefaultProps, inputStylesApiSelectors, tests } from '@raikou-tests/core';
import { __InputStylesNames } from '../Input';
import { FileInput, FileInputProps } from './FileInput';

const defaultProps: FileInputProps = {
  ...inputDefaultProps,
};

describe('@raikou/core/FileInput', () => {
  tests.axe([<FileInput aria-label="test-label" key="1" />]);

  tests.itSupportsSystemProps<FileInputProps, __InputStylesNames>({
    component: FileInput,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLButtonElement,
    displayName: '@raikou/core/FileInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<FileInputProps>({
    component: FileInput,
    props: defaultProps,
    selector: 'button',
  });
});
