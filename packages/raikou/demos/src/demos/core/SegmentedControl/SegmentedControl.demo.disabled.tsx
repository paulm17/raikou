import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Stack, Text } from "@raikou/server";
import { SegmentedControl } from "@raikou/client";

const code = `
import { SegmentedControl } from '@raikou/core';

function Demo() {
  return (
    <>
      {/* Disabled control */}
      <SegmentedControl disabled={true} />

      {/* Disabled option */}
      <SegmentedControl
        data={[
          { value: 'preview', label: 'Preview', disabled: true },
          { value: 'code', label: 'Code' },
          { value: 'export', label: 'Export' },
        ]}
      />
    </>
  );
}
`;

function Demo() {
  return (
    <Stack align="center">
      <div>
        <Text size="sm" fw={500} mb={3}>
          Disabled control
        </Text>
        <SegmentedControl
          disabled
          data={[
            {
              value: "preview",
              label: "Preview",
            },
            {
              value: "code",
              label: "Code",
            },
            {
              value: "export",
              label: "Export",
            },
          ]}
        />
      </div>

      <div>
        <Text size="sm" fw={500} mb={3}>
          Disabled option
        </Text>
        <SegmentedControl
          data={[
            {
              value: "preview",
              label: "Preview",
              disabled: true,
            },
            {
              value: "code",
              label: "Code",
            },
            {
              value: "export",
              label: "Export",
            },
          ]}
        />
      </div>
    </Stack>
  );
}

export const disabled: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
