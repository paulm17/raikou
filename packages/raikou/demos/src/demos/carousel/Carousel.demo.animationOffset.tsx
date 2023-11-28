import React, { useState } from "react";
import { Button } from "@raikou/server";
import { Modal } from "@raikou/client";
import { rem } from "@raikou/system";
import { RaikouDemo } from "@raikou/ds";
import { Carousel, Embla, useAnimationOffsetEffect } from "@raikou/carousel";

const code = `
import { useState } from 'react';
import { Button, Modal, rem } from '@raikou/core';
import { Carousel, useAnimationOffsetEffect } from '@raikou/carousel';

function Demo() {
  const TRANSITION_DURATION = 200;
  const [opened, setOpened] = useState(false);
  const [embla, setEmbla] = useState<Embla | null>(null);

  useAnimationOffsetEffect(embla, TRANSITION_DURATION);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open modal with carousel</Button>
      <Modal
        opened={opened}
        size={300}
        padding={0}
        transitionProps={{ duration: TRANSITION_DURATION }}
        withCloseButton={false}
        onClose={() => setOpened(false)}
      >
        <Carousel loop getEmblaApi={setEmbla} maw={300}>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: 'cover' }}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat/cute"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: 'cover' }}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat/angry"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: 'cover' }}
            />
          </Carousel.Slide>
        </Carousel>
      </Modal>
    </>
  );
}
`;

function Demo() {
  const TRANSITION_DURATION = 200;
  const [opened, setOpened] = useState(false);
  const [embla, setEmbla] = useState<Embla | null>(null);

  useAnimationOffsetEffect(embla, TRANSITION_DURATION);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open modal with carousel</Button>
      <Modal
        opened={opened}
        size={300}
        padding={0}
        transitionProps={{ duration: TRANSITION_DURATION }}
        withCloseButton={false}
        onClose={() => setOpened(false)}
      >
        <Carousel loop getEmblaApi={setEmbla} maw={300}>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: "cover" }}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat/cute"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: "cover" }}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat/angry"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: "cover" }}
            />
          </Carousel.Slide>
        </Carousel>
      </Modal>
    </>
  );
}

export const animationOffset: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
};
