import React, { useMemo, useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { Spotlight, createSpotlight } from "@raikou/spotlight";
import { Button } from "@raikou/server";
import { IconSearch } from "@tabler/icons-react";

const code = `
import { useState } from 'react';
import { Spotlight, spotlight } from '@raikou/spotlight';
import { Button } from '@raikou/core';
import { IconSearch } from '@tabler/icons-react';

const data = ['Home', 'About us', 'Contacts', 'Blog', 'Careers', 'Terms of service'];

function Demo() {
  const [query, setQuery] = useState('');

  const items = data
    .filter((item) => item.toLowerCase().includes(query.toLowerCase().trim()))
    .map((item) => <Spotlight.Action key={item} label={item} />);

  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>

      <Spotlight.Root query={query} onQueryChange={setQuery}>
        <Spotlight.Search placeholder="Search..." leftSection={<IconSearch stroke={1.5} />} />
        <Spotlight.ActionsList>
          {items.length > 0 ? items : <Spotlight.Empty>Nothing found...</Spotlight.Empty>}
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </>
  );
}
`;

const data = [
  "Home",
  "About us",
  "Contacts",
  "Blog",
  "Careers",
  "Terms of service",
];

function Demo() {
  const [store, spotlight] = useMemo(createSpotlight, []);
  const [query, setQuery] = useState("");

  const items = data
    .filter((item) => item.toLowerCase().includes(query.toLowerCase().trim()))
    .map((item) => <Spotlight.Action key={item} label={item} />);

  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>

      <Spotlight.Root
        store={store}
        query={query}
        onQueryChange={setQuery}
        shortcut={null}
      >
        <Spotlight.Search
          placeholder="Search..."
          leftSection={<IconSearch stroke={1.5} />}
        />
        <Spotlight.ActionsList>
          {items.length > 0 ? (
            items
          ) : (
            <Spotlight.Empty>Nothing found...</Spotlight.Empty>
          )}
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </>
  );
}

export const compound: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
};
