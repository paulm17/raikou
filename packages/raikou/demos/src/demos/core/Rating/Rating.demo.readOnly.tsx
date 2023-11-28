import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Rating } from "@raikou/client";

const code = `
import { Rating } from '@raikou/core';

function Demo() {
  return <Rating value={3.5} fractions={2} readOnly />;
}
`;

function Demo() {
  return <Rating value={3.5} fractions={2} readOnly />;
}

export const readOnly: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
};
