import React, { useEffect } from "react";
import { useUncontrolled } from "@raikou/hooks";
import {
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
  useResolvedStylesApi,
} from "@raikou/core";
import { InputBase } from "../../InputBase/src";
import {
  __InputStylesNames,
  __BaseInputProps,
  InputVariant,
} from "../../Input/src";
import {
  Combobox,
  OptionsDropdown,
  useCombobox,
  getParsedComboboxData,
  getOptionsLockup,
  ComboboxLikeProps,
  ComboboxLikeStylesNames,
} from "../../Combobox/src";

export type AutocompleteStylesNames =
  | __InputStylesNames
  | ComboboxLikeStylesNames;

export interface AutocompleteProps
  extends BoxProps,
    __BaseInputProps,
    ComboboxLikeProps,
    StylesApiProps<AutocompleteFactory>,
    ElementProps<"input", "onChange" | "size"> {
  /** Controlled component value */
  value?: string;

  /** Uncontrolled component default value */
  defaultValue?: string;

  /** Called when value changes */
  onChange?(value: string): void;
}

export type AutocompleteFactory = Factory<{
  props: AutocompleteProps;
  ref: HTMLInputElement;
  stylesNames: AutocompleteStylesNames;
  variant: InputVariant;
}>;

const defaultProps: Partial<AutocompleteProps> = {};

export const Autocomplete = factory<AutocompleteFactory>((_props, ref) => {
  const props = useProps("Autocomplete", defaultProps, _props);
  const {
    classNames,
    styles,
    unstyled,
    vars,
    dropdownOpened,
    defaultDropdownOpened,
    onDropdownClose,
    onDropdownOpen,
    onFocus,
    onBlur,
    onClick,
    onChange,
    data,
    value,
    defaultValue,
    selectFirstOptionOnChange,
    onOptionSubmit,
    comboboxProps,
    readOnly,
    disabled,
    filter,
    limit,
    withScrollArea,
    maxDropdownHeight,
    size,
    ...others
  } = props;

  const parsedData = getParsedComboboxData(data);
  const optionsLockup = getOptionsLockup(parsedData);

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: "",
    onChange,
  });

  const combobox = useCombobox({
    opened: dropdownOpened,
    defaultOpened: defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose: () => {
      onDropdownClose?.();
      combobox.resetSelectedOption();
    },
  });

  const { resolvedClassNames, resolvedStyles } =
    useResolvedStylesApi<AutocompleteFactory>({
      props,
      styles,
      classNames,
    });

  useEffect(() => {
    if (selectFirstOptionOnChange) {
      combobox.selectFirstOption();
    }
  }, [selectFirstOptionOnChange, _value]);

  return (
    <Combobox
      store={combobox}
      __staticSelector="Autocomplete"
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      unstyled={unstyled}
      readOnly={readOnly}
      onOptionSubmit={(val) => {
        onOptionSubmit?.(val);
        setValue(optionsLockup[val].label);
        combobox.closeDropdown();
      }}
      size={size}
      {...comboboxProps}
    >
      <Combobox.Target>
        <InputBase
          ref={ref}
          {...others}
          size={size}
          __staticSelector="Autocomplete"
          disabled={disabled}
          readOnly={readOnly}
          value={_value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            combobox.openDropdown();
            // eslint-disable-next-line
            selectFirstOptionOnChange && combobox.selectFirstOption();
          }}
          onFocus={(event) => {
            combobox.openDropdown();
            onFocus?.(event);
          }}
          onBlur={(event) => {
            combobox.closeDropdown();
            onBlur?.(event);
          }}
          onClick={(event) => {
            combobox.openDropdown();
            onClick?.(event);
          }}
          classNames={resolvedClassNames}
          styles={resolvedStyles}
          unstyled={unstyled}
        />
      </Combobox.Target>
      <OptionsDropdown
        data={parsedData}
        hidden={readOnly || disabled}
        filter={filter}
        search={_value}
        limit={limit}
        hiddenWhenEmpty
        withScrollArea={withScrollArea}
        maxDropdownHeight={maxDropdownHeight}
      />
    </Combobox>
  );
});

Autocomplete.displayName = "@raikou/core/Autocomplete";
