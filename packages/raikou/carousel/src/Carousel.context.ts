import { GetStylesApi } from "@raikou/core";
import { createSafeContext } from "../../components/_utils";
import type { CarouselFactory } from "./Carousel";

interface CarouselContextValue {
  getStyles: GetStylesApi<CarouselFactory>;
  orientation: "horizontal" | "vertical" | undefined;
}

export const [CarouselProvider, useCarouselContext] =
  createSafeContext<CarouselContextValue>(
    "Carousel component was not found in tree",
  );
