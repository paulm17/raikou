import React, { useEffect } from "react";
import { useId, useUncontrolled } from "@raikou/hooks";
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
import { __CloseButtonProps } from "../../CloseButton/src";
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

export type SelectStylesNames = __InputStylesNames | ComboboxLikeStylesNames;

export interface SelectProps
  extends BoxProps,
    __BaseInputProps,
    ComboboxLikeProps,
    StylesApiProps<SelectFactory>,
    ElementProps<"input", "onChange" | "size" | "value" | "defaultValue"> {
  /** Controlled component value */
  value?: string | null;

  /** Uncontrolled component default value */
  defaultValue?: string | null;

  /** Called when value changes */
  onChange?(value: string | null): void;

  /** Determines whether the select should be searchable, `false` by default */
  searchable?: boolean;

  /** Determines whether check icon should be displayed near the selected option label, `true` by default */
  withCheckIcon?: boolean;

  /** Position of the check icon relative to the option label, `'left'` by default */
  checkIconPosition?: "left" | "right";

  /** Message displayed when no option matched current search query, only applicable when `searchable` prop is set */
  nothingFoundMessage?: React.ReactNode;

  /** Controlled search value */
  searchValue?: string;

  /** Default search value */
  defaultSearchValue?: string;

  /** Called when search changes */
  onSearchChange?(value: string): void;

  /** Determines whether it should be possible to deselect value by clicking on the selected option, `true` by default */
  allowDeselect?: boolean;

  /** Determines whether the clear button should be displayed in the right section when the component has value, `false` by default */
  clearable?: boolean;

  /** Props passed down to the clear button */
  clearButtonProps?: __CloseButtonProps & ElementProps<"button">;
}

export type SelectFactory = Factory<{
  props: SelectProps;
  ref: HTMLInputElement;
  stylesNames: SelectStylesNames;
  variant: InputVariant;
}>;

const defaultProps: Partial<SelectProps> = {
  searchable: false,
  withCheckIcon: true,
  allowDeselect: true,
  checkIconPosition: "left",
};

export const Select = factory<SelectFactory>((_props, ref) => {
  const props = useProps("Select", defaultProps, _props);
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
    searchable,
    rightSection,
    checkIconPosition,
    withCheckIcon,
    nothingFoundMessage,
    name,
    form,
    searchValue,
    defaultSearchValue,
    onSearchChange,
    allowDeselect,
    error,
    rightSectionPointerEvents,
    id,
    clearable,
    clearButtonProps,
    ...others
  } = props;

  const _id = useId(id);
  const parsedData = getParsedComboboxData(data);
  const optionsLockup = getOptionsLockup(parsedData);

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange,
  });

  const selectedOption = _value ? optionsLockup[_value] : undefined;
  const [search, setSearch] = useUncontrolled({
    value: searchValue,
    defaultValue: defaultSearchValue,
    finalValue: selectedOption ? selectedOption.label : "",
    onChange: onSearchChange,
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
    useResolvedStylesApi<SelectFactory>({
      props,
      styles,
      classNames,
    });

  useEffect(() => {
    if (selectFirstOptionOnChange) {
      combobox.selectFirstOption();
    }
  }, [selectFirstOptionOnChange, _value]);

  useEffect(() => {
    if (value === null) {
      setSearch("");
    }

    if (typeof value === "string" && optionsLockup[value]) {
      setSearch(optionsLockup[value].label);
    }
  }, [value, optionsLockup]);

  const clearButton = clearable && !!_value && !disabled && !readOnly && (
    <Combobox.ClearButton
      size={size as string}
      {...clearButtonProps}
      onClear={() => {
        setValue(null);
        setSearch("");
      }}
    />
  );

  return (
    <>
      <Combobox
        store={combobox}
        __staticSelector="Select"
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        unstyled={unstyled}
        readOnly={readOnly}
        onOptionSubmit={(val) => {
          onOptionSubmit?.(val);
          const nextValue = allowDeselect
            ? optionsLockup[val].value === _value
              ? null
              : optionsLockup[val].value
            : optionsLockup[val].value;
          setValue(nextValue);
          setSearch(nextValue ? optionsLockup[val].label : "");
          combobox.closeDropdown();
        }}
        size={size}
        {...comboboxProps}
      >
        <Combobox.Target targetType={searchable ? "input" : "button"}>
          <InputBase
            id={_id}
            ref={ref}
            rightSection={
              rightSection ||
              clearButton || (
                <Combobox.Chevron
                  size={size}
                  error={error}
                  unstyled={unstyled}
                />
              )
            }
            rightSectionPointerEvents={
              rightSectionPointerEvents || clearButton ? "all" : "none"
            }
            {...others}
            size={size}
            __staticSelector="Select"
            disabled={disabled}
            readOnly={readOnly || !searchable}
            value={search}
            onChange={(event) => {
              setSearch(event.currentTarget.value);
              combobox.openDropdown();
              // eslint-disable-next-line
              selectFirstOptionOnChange && combobox.selectFirstOption();
            }}
            onFocus={(event) => {
              // eslint-disable-next-line
              searchable && combobox.openDropdown();
              onFocus?.(event);
            }}
            onBlur={(event) => {
              // eslint-disable-next-line
              searchable && combobox.closeDropdown();
              setSearch(_value ? optionsLockup[_value].label : "");
              onBlur?.(event);
            }}
            onClick={(event) => {
              // eslint-disable-next-line
              searchable ? combobox.openDropdown() : combobox.toggleDropdown();
              onClick?.(event);
            }}
            classNames={resolvedClassNames}
            styles={resolvedStyles}
            unstyled={unstyled}
            pointer={!searchable}
            error={error}
          />
        </Combobox.Target>
        <OptionsDropdown
          data={parsedData}
          hidden={readOnly || disabled}
          filter={filter}
          search={search}
          limit={limit}
          hiddenWhenEmpty={!searchable || !nothingFoundMessage}
          withScrollArea={withScrollArea}
          maxDropdownHeight={maxDropdownHeight}
          filterOptions={searchable && selectedOption?.label !== search}
          value={_value}
          checkIconPosition={checkIconPosition}
          withCheckIcon={withCheckIcon}
          nothingFoundMessage={nothingFoundMessage}
          labelId={`${_id}-label`}
        />
      </Combobox>
      <input
        type="hidden"
        name={name}
        value={_value || ""}
        form={form}
        disabled={disabled}
      />
    </>
  );
});

Select.displayName = "@raikou/core/Select";
