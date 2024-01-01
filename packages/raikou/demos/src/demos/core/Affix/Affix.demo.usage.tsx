import React from "react";
import { IconArrowUp } from "@tabler/icons-react";
import { useWindowScroll } from "@raikou/hooks";
import { RaikouDemo } from "@raikou/ds";
import { Button, Text } from "@raikou/server";
import { Transition, Affix } from "@raikou/client";
import { rem } from "@raikou/theme";

const code = `
import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@raikou/hooks';
import { Affix, Button, Text, Transition, rem } from '@raikou/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Text ta="center">Affix is located at the bottom of the screen, scroll to see it</Text>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={<IconArrowUp style={{ width: rem(16), height: rem(16) }} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}
`;

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Text ta="center">
        Affix is located at the bottom of the screen, scroll to see it
      </Text>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={
                <IconArrowUp style={{ width: rem(16), height: rem(16) }} />
              }
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}

export const usage: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
