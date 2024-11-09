import { __InputStylesNames } from '@raikou/core';
import { inputDefaultProps, inputStylesApiSelectors, tests } from '@raikou-tests/core';
import { TimeInput, TimeInputProps } from './TimeInput';

const defaultProps: TimeInputProps = {
  ...inputDefaultProps,
};

describe('@raikou/dates/TimeInput', () => {
  tests.axe([
    <TimeInput aria-label="test-label" key="1" />,
    <TimeInput label="test-label" key="2" />,
    <TimeInput label="test-label" error key="3" />,
    <TimeInput label="test-label" error="test-error" id="test" key="4" />,
    <TimeInput label="test-label" description="test-description" key="5" />,
  ]);

  tests.itSupportsSystemProps<TimeInputProps, __InputStylesNames>({
    component: TimeInput,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLInputElement,
    displayName: '@raikou/dates/TimeInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<TimeInputProps>({
    component: TimeInput,
    props: defaultProps,
    selector: 'input',
  });
});
