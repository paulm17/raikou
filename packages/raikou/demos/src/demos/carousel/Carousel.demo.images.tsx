import React from "react";
import { Carousel } from "@raikou/carousel";
import { Image } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import { images as _images } from "./_images";

const code = `
import { Carousel } from '@raikou/carousel';
import { Image } from '@raikou/core';

const images = [/* ... urls of images */];

function Demo() {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return <Carousel withIndicators>{slides}</Carousel>;
}
`;

function Demo() {
  const slides = _images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return <Carousel withIndicators>{slides}</Carousel>;
}

export const images: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 320,
  centered: true,
};
