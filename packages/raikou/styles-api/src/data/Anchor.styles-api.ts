import type { AnchorFactory } from "@raikou/server";
import type { StylesApiData } from "../types";
import { TextStylesApi } from "./Text.styles-api";

export const AnchorStylesApi: StylesApiData<AnchorFactory> = {
  ...TextStylesApi,
  modifiers: [
    ...TextStylesApi.modifiers!,
    {
      modifier: "data-underline",
      selector: "root",
      value: "Value of `underline` prop",
    },
  ],
};
