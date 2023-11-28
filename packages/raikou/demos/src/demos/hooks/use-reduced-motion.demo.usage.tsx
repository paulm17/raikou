import React from "react";
import { Badge } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import { useReducedMotion } from "@raikou/hooks";

const code = `
import { Badge } from '@raikou/core';
import { useReducedMotion } from '@raikou/hooks';

function Demo() {
  const reduceMotion = useReducedMotion();

  return (
    <Badge
      color={reduceMotion ? 'red' : 'teal'}
      style={{ transitionDuration: reduceMotion ? '0ms' : '200ms' }}
      variant="filled"
    >
      {reduceMotion ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
    </Badge>
  );
}`;

function Demo() {
  const reduceMotion = useReducedMotion();
  return (
    <Badge
      color={reduceMotion ? "red" : "teal"}
      style={{ transitionDuration: reduceMotion ? "0ms" : "200ms" }}
      variant="filled"
    >
      {reduceMotion
        ? "You prefer to reduce motion"
        : "You prefer not to reduce motion"}
    </Badge>
  );
}

export const useReducedMotionDemo: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true,
};
