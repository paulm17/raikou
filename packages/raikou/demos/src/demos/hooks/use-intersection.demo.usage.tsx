import React, { useRef } from "react";
import { useIntersection } from "@raikou/hooks";
import { RaikouDemo } from "@raikou/ds";
import { Text, Paper, Box } from "@raikou/server";

const code = `
import { useRef } from 'react';
import { useIntersection } from '@raikou/hooks';
import { Text, Paper, Box } from '@raikou/core';

function Demo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <Paper ref={containerRef} h={300} style={{ overflowY: 'scroll' }}>
      <Box pt={260} pb={280}>
        <Paper
          ref={ref}
          p="xl"
          style={{
            backgroundColor: entry?.isIntersecting
              ? 'var(--raikou-color-green-6)'
              : 'var(--raikou-color-red-6)',
            minWidth: '50%',
          }}
        >
          <Text c="#fff" fw={700}>
            {entry?.isIntersecting ? 'Fully visible' : 'Obscured'}
          </Text>
        </Paper>
      </Box>
    </Paper>
  );
}
`;

function Demo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <Paper ref={containerRef} h={300} style={{ overflowY: "scroll" }}>
      <Box pt={260} pb={280}>
        <Paper
          ref={ref}
          p="xl"
          style={{
            backgroundColor: entry?.isIntersecting
              ? "var(--raikou-color-green-6)"
              : "var(--raikou-color-red-6)",
            minWidth: "50%",
          }}
        >
          <Text c="#fff" fw={700}>
            {entry?.isIntersecting ? "Fully visible" : "Obscured"}
          </Text>
        </Paper>
      </Box>
    </Paper>
  );
}

export const useIntersectionDemo: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
