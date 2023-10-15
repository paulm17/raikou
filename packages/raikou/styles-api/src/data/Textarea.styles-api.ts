import type { TextareaFactory } from "@raikou/client";
import type { StylesApiData } from "../types";
import { InputStylesApi, InputWrapperStylesApi } from "./Input.styles-api";

export const TextareaStylesApi: StylesApiData<TextareaFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
  },

  vars: {},
};
