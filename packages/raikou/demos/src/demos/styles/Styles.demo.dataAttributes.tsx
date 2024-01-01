import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Button, ButtonProps, Group } from "@raikou/server";
import { rem } from "@raikou/theme";
import { IconArrowRight } from "@tabler/icons-react";
import classes from "./Styles.demo.dataAttributes.module.css";

const code = `
import { Button, ButtonProps, Group, rem } from '@raikou/core';
import { IconArrowRight } from '@tabler/icons-react';
import classes from './Demo.module.css';

function SendFilesButton(props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
  return <Button {...props} radius="md" classNames={classes} />;
}

function Demo() {
  return (
    <Group>
      <SendFilesButton
        leftSection="12"
        rightSection={<IconArrowRight style={{ width: rem(18) }} />}
      >
        Send files
      </SendFilesButton>
      <SendFilesButton
        leftSection="3"
        rightSection={<IconArrowRight style={{ width: rem(18) }} />}
        disabled
      >
        Send files
      </SendFilesButton>
    </Group>
  );
}
`;

const cssCode = `
.root {
  border-top-left-radius: var(--raikou-radius-xl);
  border-bottom-left-radius: var(--raikou-radius-xl);
  padding-left: rem(4px);

  /* The following styles will be applied only when button is disabled */
  &[data-disabled] {
    /* You can use Raikou PostCSS mixins inside data attributes */
    @mixin light {
      border: rem(1px) solid var(--raikou-color-gray-2);
    }

    @mixin dark {
      border: rem(1px) solid var(--raikou-color-dark-4);
    }

    /* You can target child elements that are inside .root[data-disabled] */
    & .section[data-position='left'] {
      opacity: 0.6;
    }
  }
}

.section {
  /* Apply styles only to left section */
  &[data-position='left'] {
    --section-size: calc(var(--button-height) - rem(8px));

    background-color: var(--raikou-color-body);
    color: var(--raikou-color-text);
    height: var(--section-size);
    width: var(--section-size);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--raikou-radius-xl);
  }

  &[data-position='right'] {
    @mixin rtl {
      transform: rotate(180deg);
    }
  }
}
`;

function SendFilesButton(
  props: ButtonProps & React.ComponentPropsWithoutRef<"button">,
) {
  return <Button {...props} radius="md" classNames={classes} />;
}

function Demo() {
  return (
    <Group>
      <SendFilesButton
        leftSection="12"
        rightSection={<IconArrowRight style={{ width: rem(18) }} />}
      >
        Send files
      </SendFilesButton>
      <SendFilesButton
        leftSection="3"
        rightSection={<IconArrowRight style={{ width: rem(18) }} />}
        disabled
      >
        Send files
      </SendFilesButton>
    </Group>
  );
}

export const dataAttributes: RaikouDemo = {
  type: "code",
  component: Demo,
  centered: true,
  code: [
    { fileName: "Demo.module.css", code: cssCode, language: "css" },
    { fileName: "Demo.tsx", code, language: "tsx" },
  ],
};
