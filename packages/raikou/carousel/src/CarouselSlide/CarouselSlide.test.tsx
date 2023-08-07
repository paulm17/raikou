import { createContextContainer, tests } from "@raikou/tests";
import {
  CarouselSlide,
  CarouselSlideProps,
  CarouselSlideStylesNames,
} from "./CarouselSlide";
import { Carousel } from "../Carousel";

const TestContainer = createContextContainer(CarouselSlide, Carousel, {});

const defaultProps: CarouselSlideProps = {};

describe("@raikou/core/CarouselSlide", () => {
  tests.itSupportsSystemProps<CarouselSlideProps, CarouselSlideStylesNames>({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/CarouselSlide",
    stylesApiSelectors: ["slide"],
    providerStylesApi: false,
    selector: ".raikou-Carousel-slide",
    stylesApiName: "Carousel",
    compound: true,
  });

  tests.itThrowsContextError({
    component: CarouselSlide,
    props: defaultProps,
    error: "Carousel component was not found in tree",
  });
});
