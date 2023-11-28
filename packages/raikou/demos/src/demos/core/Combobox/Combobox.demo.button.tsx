import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { Combobox, useCombobox } from "@raikou/client";
import { Button, Text, Box } from "@raikou/server";

const code = `
import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box } from '@raikou/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Box mb="xs">
        <Text span size="sm" c="dimmed">
          Selected item:{' '}
        </Text>

        <Text span size="sm">
          {selectedItem || 'Nothing selected'}
        </Text>
      </Box>

      <Combobox
        store={combobox}
        width={250}
        position="bottom-start"
        withArrow
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <Button onClick={() => combobox.toggleDropdown()}>Pick item</Button>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
`;

const groceries = [
  "🍎 Apples",
  "🍌 Bananas",
  "🥦 Broccoli",
  "🥕 Carrots",
  "🍫 Chocolate",
];

function Demo() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Box mb="xs">
        <Text span size="sm" c="dimmed">
          Selected item:{" "}
        </Text>

        <Text span size="sm">
          {selectedItem || "Nothing selected"}
        </Text>
      </Box>

      <Combobox
        store={combobox}
        width={250}
        position="bottom-start"
        withArrow
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <Button onClick={() => combobox.toggleDropdown()}>Pick item</Button>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}

export const button: RaikouDemo = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  defaultExpanded: false,
  code,
};
