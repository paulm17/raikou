import React from "react";
import { Box, Text } from "@raikou/server";
import { Portal } from "@raikou/client";
import { rem } from "@raikou/system";
import { useHeadroom } from "@raikou/hooks";
import { RaikouDemo } from "@raikou/ds";

const code = `
import { Box, Portal, rem, Text } from '@raikou/core';
import { useHeadroom } from '@raikou/hooks';

function Demo() {
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <>
      <Portal>
        <Box
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            padding: 'var(--raikou-spacing-xs)',
            height: rem(60),
            zIndex: 1000000,
            transform: \`translate3d(0, \${pinned ? 0 : rem(-110)}, 0)\`,
            transition: 'transform 400ms ease',
            backgroundColor: 'var(--raikou-color-body)',
          }}
        >
          Pinned header
        </Box>
      </Portal>
      <Text ta="center">Header is {pinned ? 'pinned' : 'not pinned'}</Text>
    </>
  );
}

`;

function Demo() {
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <>
      <Portal>
        <Box
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            padding: "var(--raikou-spacing-xs)",
            height: rem(60),
            zIndex: 1000000,
            transform: `translate3d(0, ${pinned ? 0 : rem(-110)}, 0)`,
            transition: "transform 400ms ease",
            backgroundColor: "var(--raikou-color-body)",
          }}
        >
          Pinned header
        </Box>
      </Portal>
      <Text ta="center">Header is {pinned ? "pinned" : "not pinned"}</Text>
    </>
  );
}

export const useHeadroomDemo: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
