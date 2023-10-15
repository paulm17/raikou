import type { InputBaseFactory } from "@raikou/client";
import type { StylesApiData } from "../types";
import { InputStylesApi, InputWrapperStylesApi } from "./Input.styles-api";

export const InputBaseStylesApi: StylesApiData<InputBaseFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
  },

  vars: {},
};
