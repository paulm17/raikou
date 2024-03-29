import React from "react";
import { Carousel } from "@raikou/carousel";
import { RaikouDemo } from "@raikou/ds";
import { Slides } from "./_slides";

const code = `
import { Carousel } from '@raikou/carousel';

function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={3}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`;

function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={3}
    >
      <Slides count={12} />
    </Carousel>
  );
}

export const multiple: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
