import type { TextInputFactory } from "@raikou/client";
import type { StylesApiData } from "../types";
import { InputStylesApi, InputWrapperStylesApi } from "./Input.styles-api";

export const TextInputStylesApi: StylesApiData<TextInputFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
  },

  vars: {},
};
