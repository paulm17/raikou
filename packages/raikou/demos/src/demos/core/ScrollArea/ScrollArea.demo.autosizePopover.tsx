import React, { useState, useRef } from "react";
import { RaikouDemo } from "@raikou/ds";
import { UnstyledButton, Text } from "@raikou/server";
import { ScrollArea, Popover, TextInput } from "@raikou/client";

const code = `
import { useState, useRef } from 'react';
import { ScrollArea, Popover, TextInput, UnstyledButton, Text } from '@raikou/core';

const groceries = [
  'Apples',
  'Bananas',
  'Oranges',
  'Milk',
  'Bread',
  'Eggs',
  'Chicken',
  'Beef',
  'Pasta',
  'Rice',
  'Potatoes',
  'Onions',
  'Tomatoes',
  'Cucumbers',
  'Carrots',
  'Lettuce',
  'Spinach',
  'Broccoli',
  'Cheese',
  'Yogurt',
  'Butter',
  'Sugar',
  'Salt',
  'Pepper',
  'Coffee',
  'Tea',
  'Juice',
  'Water',
  'Cookies',
  'Chocolate',
];

function Demo() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');
  const [opened, setOpened] = useState(false);
  const [hovered, setHovered] = useState(-1);
  const filtered = groceries.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  const items = filtered.map((item, index) => (
    <UnstyledButton
      data-list-item
      key={item}
      display="block"
      bg={index === hovered ? 'var(--raikou-color-blue-light)' : undefined}
      w="100%"
      p={5}
    >
      {item}
    </UnstyledButton>
  ));

  return (
    <Popover width="target" opened={opened}>
      <Popover.Target>
        <TextInput
          value={query}
          onFocus={() => setOpened(true)}
          onBlur={() => setOpened(false)}
          onChange={(event) => {
            setQuery(event.currentTarget.value);
            setHovered(-1);
          }}
          onKeyDown={(event) => {
            if (event.key === 'ArrowDown') {
              event.preventDefault();
              setHovered((current) => {
                const nextIndex = current + 1 >= filtered.length ? current : current + 1;
                viewportRef.current
                  ?.querySelectorAll('[data-list-item]')
                  ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
                return nextIndex;
              });
            }

            if (event.key === 'ArrowUp') {
              event.preventDefault();
              setHovered((current) => {
                const nextIndex = current - 1 < 0 ? current : current - 1;
                viewportRef.current
                  ?.querySelectorAll('[data-list-item]')
                  ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
                return nextIndex;
              });
            }
          }}
          placeholder="Search groceries"
        />
      </Popover.Target>
      <Popover.Dropdown p="xs">
        <ScrollArea.Autosize viewportRef={viewportRef} mah={200} type="always">
          {items.length > 0 ? items : <Text c="dimmed">Nothing found</Text>}
        </ScrollArea.Autosize>
      </Popover.Dropdown>
    </Popover>
  );
}
`;

const groceries = [
  "Apples",
  "Bananas",
  "Oranges",
  "Milk",
  "Bread",
  "Eggs",
  "Chicken",
  "Beef",
  "Pasta",
  "Rice",
  "Potatoes",
  "Onions",
  "Tomatoes",
  "Cucumbers",
  "Carrots",
  "Lettuce",
  "Spinach",
  "Broccoli",
  "Cheese",
  "Yogurt",
  "Butter",
  "Sugar",
  "Salt",
  "Pepper",
  "Coffee",
  "Tea",
  "Juice",
  "Water",
  "Cookies",
  "Chocolate",
];

function Demo() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [opened, setOpened] = useState(false);
  const [hovered, setHovered] = useState(-1);
  const filtered = groceries.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase()),
  );
  const items = filtered.map((item, index) => (
    <UnstyledButton
      data-list-item
      key={item}
      display="block"
      bg={index === hovered ? "var(--raikou-color-blue-light)" : undefined}
      w="100%"
      p={5}
    >
      {item}
    </UnstyledButton>
  ));

  return (
    <Popover width="target" opened={opened}>
      <Popover.Target>
        <TextInput
          value={query}
          onFocus={() => setOpened(true)}
          onBlur={() => setOpened(false)}
          onChange={(event) => {
            setQuery(event.currentTarget.value);
            setHovered(-1);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setHovered((current) => {
                const nextIndex =
                  current + 1 >= filtered.length ? current : current + 1;
                viewportRef.current
                  ?.querySelectorAll("[data-list-item]")
                  ?.[nextIndex]?.scrollIntoView({ block: "nearest" });
                return nextIndex;
              });
            }

            if (event.key === "ArrowUp") {
              event.preventDefault();
              setHovered((current) => {
                const nextIndex = current - 1 < 0 ? current : current - 1;
                viewportRef.current
                  ?.querySelectorAll("[data-list-item]")
                  ?.[nextIndex]?.scrollIntoView({ block: "nearest" });
                return nextIndex;
              });
            }
          }}
          placeholder="Search groceries"
        />
      </Popover.Target>
      <Popover.Dropdown p="xs">
        <ScrollArea.Autosize viewportRef={viewportRef} mah={200} type="always">
          {items.length > 0 ? items : <Text c="dimmed">Nothing found</Text>}
        </ScrollArea.Autosize>
      </Popover.Dropdown>
    </Popover>
  );
}

export const autosizePopover: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
