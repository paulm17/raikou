import React from "react";
import { Carousel } from "@raikou/carousel";
import { RaikouDemo } from "@raikou/ds";
import { Slides } from "./_slides";

const code = `
import { Carousel } from '@raikou/carousel';

function Demo() {
  return (
    <Carousel orientation="vertical" height={200} withIndicators>
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
    <Carousel orientation="vertical" height={200} withIndicators>
      <Slides count={5} />
    </Carousel>
  );
}

export const vertical: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 320,
};
