import React, { useState } from "react";
import {
  IconGauge,
  IconFingerprint,
  IconActivity,
  IconChevronRight,
} from "@tabler/icons-react";
import { RaikouDemo } from "@raikou/ds";
import { Box, Group } from "@raikou/server";
import { NavLink } from "@raikou/client";

const code = `
import { useState } from 'react';
import { IconGauge, IconFingerprint, IconActivity, IconChevronRight } from '@tabler/icons-react';
import { Box, NavLink } from '@raikou/core';

const data = [
  { icon: IconGauge, label: 'Dashboard', description: 'Item with description' },
  {
    icon: IconFingerprint,
    label: 'Security',
    rightSection: <IconChevronRight size="1rem" stroke={1.5} />,
  },
  { icon: IconActivity, label: 'Activity' },
];

function Demo() {
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      description={item.description}
      rightSection={item.rightSection}
      icon={<item.icon size="1rem" stroke={1.5} />}
      onClick={() => setActive(index)}
      {{props}}
    />
  ));

  return <Box w={220}>{items}</Box>;
}
`;

const data = [
  { icon: IconGauge, label: "Dashboard", description: "Item with description" },
  {
    icon: IconFingerprint,
    label: "Security",
    rightSection: <IconChevronRight size="1rem" stroke={1.5} />,
  },
  { icon: IconActivity, label: "Activity" },
];

function Demo(props: any) {
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      description={item.description}
      rightSection={item.rightSection}
      icon={<item.icon size="1rem" stroke={1.5} />}
      onClick={() => setActive(index)}
      {...props}
    />
  ));

  return (
    <Group justify="center">
      <Box w={220}>{items}</Box>
    </Group>
  );
}

export const active: RaikouDemo = {
  type: "configurator",
  component: Demo,
  code,
  controls: [
    {
      prop: "color",
      type: "color",
      initialValue: "blue",
      libraryValue: "blue",
    },
    {
      prop: "variant",
      type: "segmented",
      data: [
        { value: "subtle", label: "Subtle" },
        { value: "light", label: "Light" },
        { value: "filled", label: "Filled" },
      ],

      libraryValue: "light",
      initialValue: "light",
    },
  ],
};
