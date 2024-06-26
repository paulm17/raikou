import React from "react";
import { ScrollArea, ScrollAreaProps } from "../../../ScrollArea/src";
import { CheckIcon } from "../../../Checkbox/src";
import { Combobox } from "../Combobox";
import {
  ComboboxItem,
  ComboboxLikeRenderOptionInput,
  ComboboxParsedItem,
} from "../Combobox.types";
import {
  defaultOptionsFilter,
  FilterOptionsInput,
} from "./default-options-filter";
import { isEmptyComboboxData } from "./is-empty-combobox-data";
import { isOptionsGroup } from "./is-options-group";
import { validateOptions } from "./validate-options";
import classes from "../Combobox.module.css";

export type OptionsFilter = (input: FilterOptionsInput) => ComboboxParsedItem[];

export interface OptionsGroup {
  group: string;
  items: ComboboxItem[];
}

export type OptionsData = (ComboboxItem | OptionsGroup)[];

interface OptionProps {
  data: ComboboxItem | OptionsGroup;
  withCheckIcon?: boolean;
  value?: string | string[] | null;
  checkIconPosition?: "left" | "right";
  renderOption?: (input: ComboboxLikeRenderOptionInput<any>) => React.ReactNode;
}

function isValueChecked(
  value: string | string[] | undefined | null,
  optionValue: string,
) {
  return Array.isArray(value)
    ? value.includes(optionValue)
    : value === optionValue;
}

function Option({
  data,
  withCheckIcon,
  value,
  checkIconPosition,
  renderOption,
}: OptionProps) {
  if (!isOptionsGroup(data)) {
    const check = withCheckIcon && isValueChecked(value, data.value) && (
      <CheckIcon className={classes.optionsDropdownCheckIcon} />
    );
    return (
      <Combobox.Option
        value={data.value}
        disabled={data.disabled}
        className={classes.optionsDropdownOption}
        data-reverse={checkIconPosition === "right" || undefined}
        data-checked={isValueChecked(value, data.value) || undefined}
        aria-selected={isValueChecked(value, data.value)}
      >
        {checkIconPosition === "left" && check}
        <span>{data.label}</span>
        {checkIconPosition === "right" && check}
      </Combobox.Option>
    );
  }

  const options = data.items.map((item) => (
    <Option
      data={item}
      value={value}
      key={item.value}
      withCheckIcon={withCheckIcon}
      checkIconPosition={checkIconPosition}
      renderOption={renderOption}
    />
  ));
  return <Combobox.Group label={data.group}>{options}</Combobox.Group>;
}

export interface OptionsDropdownProps {
  data: OptionsData;
  filter: OptionsFilter | undefined;
  search: string | undefined;
  limit: number | undefined;
  withScrollArea: boolean | undefined;
  maxDropdownHeight: number | string | undefined;
  hidden?: boolean;
  hiddenWhenEmpty?: boolean;
  filterOptions?: boolean;
  withCheckIcon?: boolean;
  value?: string | string[] | null;
  checkIconPosition?: "left" | "right";
  nothingFoundMessage?: React.ReactNode;
  labelId: string | undefined;
  "aria-label": string | undefined;
  renderOption?: (input: ComboboxLikeRenderOptionInput<any>) => React.ReactNode;
  scrollAreaProps: ScrollAreaProps | undefined;
}

export function OptionsDropdown({
  data,
  hidden,
  hiddenWhenEmpty,
  filter,
  search,
  limit,
  maxDropdownHeight,
  withScrollArea = true,
  filterOptions = true,
  withCheckIcon = false,
  value,
  checkIconPosition,
  nothingFoundMessage,
  labelId,
  renderOption,
  scrollAreaProps,
  "aria-label": ariaLabel,
}: OptionsDropdownProps) {
  validateOptions(data);

  const shouldFilter = typeof search === "string";
  const filteredData = shouldFilter
    ? (filter || defaultOptionsFilter)({
        options: data,
        search: filterOptions ? search : "",
        limit: limit ?? Infinity,
      })
    : data;
  const isEmpty = isEmptyComboboxData(filteredData);

  const options = filteredData.map((item) => (
    <Option
      data={item}
      key={isOptionsGroup(item) ? item.group : item.value}
      withCheckIcon={withCheckIcon}
      value={value}
      checkIconPosition={checkIconPosition}
      renderOption={renderOption}
    />
  ));

  return (
    <Combobox.Dropdown hidden={hidden || (hiddenWhenEmpty && isEmpty)}>
      <Combobox.Options labelledBy={labelId} aria-label={ariaLabel}>
        {withScrollArea ? (
          <ScrollArea.Autosize
            mah={maxDropdownHeight ?? 220}
            type="scroll"
            scrollbarSize="var(--_combobox-padding)"
            offsetScrollbars="y"
            className="comboBox-optionsDropdownScrollArea"
            {...scrollAreaProps}
          >
            {options}
          </ScrollArea.Autosize>
        ) : (
          options
        )}
        {isEmpty && nothingFoundMessage && (
          <Combobox.Empty>{nothingFoundMessage}</Combobox.Empty>
        )}
      </Combobox.Options>
    </Combobox.Dropdown>
  );
}
