import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Group, Button } from "@raikou/server";
import { IconPhoto, IconDownload, IconArrowRight } from "@tabler/icons-react";

const code = `
import { Group, Button } from '@raikou/core';
import { IconPhoto, IconDownload, IconArrowRight } from '@tabler/icons-react';

function Demo() {
  return (
    <Group justify="center">
      <Button leftSection={<IconPhoto size={14} />} variant="default">
        Gallery
      </Button>

      <Button rightSection={<IconDownload size={14} />}>Download</Button>

      <Button
        variant="light"
        leftSection={<IconPhoto size={14} />}
        rightSection={<IconArrowRight size={14} />}
      >
        Visit gallery
      </Button>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center">
      <Button leftSection={<IconPhoto size={14} />} variant="default">
        Gallery
      </Button>

      <Button rightSection={<IconDownload size={14} />}>Download</Button>
      <Button
        variant="light"
        leftSection={<IconPhoto size={14} />}
        rightSection={
          <IconArrowRight size={14} className="raikou-rotate-rtl" />
        }
      >
        Visit gallery
      </Button>
    </Group>
  );
}

export const sections: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
