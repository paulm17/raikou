import type { SelectFactory } from "@raikou/client";
import type { StylesApiData } from "../types";
import { InputStylesApi, InputWrapperStylesApi } from "./Input.styles-api";
import { ComboboxLikeSelectors } from "./Combobox.styles-api";

export const SelectStylesApi: StylesApiData<SelectFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
    ...ComboboxLikeSelectors,
  },

  vars: {},
};
