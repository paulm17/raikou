import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Image } from "@raikou/server";

const code = `
import { Image } from '@raikou/core';

function Demo() {
  return (
    <Image
      radius="md"
      src={null}
      h={200}
      fallbackSrc="https://placehold.co/600x400?text=Placeholder"
    />
  );
}
`;

function Demo() {
  return (
    <Image
      radius="md"
      src={null}
      h={200}
      fallbackSrc="https://placehold.co/600x400?text=Placeholder"
    />
  );
}

export const fallback: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
