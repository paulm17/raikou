import type { MultiSelectFactory } from "@raikou/client";
import type { StylesApiData } from "../types";
import { InputStylesApi, InputWrapperStylesApi } from "./Input.styles-api";
import { ComboboxLikeSelectors } from "./Combobox.styles-api";

export const MultiSelectStylesApi: StylesApiData<MultiSelectFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
    ...ComboboxLikeSelectors,
    pill: "Value pill",
    inputField: "Input field",
    pillsList: "List of pills, also contains input field",
  },

  vars: {},
};
