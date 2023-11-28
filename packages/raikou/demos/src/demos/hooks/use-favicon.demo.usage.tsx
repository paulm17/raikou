import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { useFavicon } from "@raikou/hooks";
import { Group, Button } from "@raikou/server";

const code = `
import { useState } from 'react';
import { useFavicon } from '@raikou/hooks';
import { Group, Button } from '@raikou/core';

function Demo() {
  const [favicon, setFavicon] = useState('https://raikou.dev/favicon.svg');
  const setTwitterFavicon = () => setFavicon('https://twitter.com/favicon.ico');
  const setRaikouFavicon = () => setFavicon('https://raikou.dev/favicon.svg');

  useFavicon(favicon);

  return (
    <Group justify="center">
      <Button onClick={setTwitterFavicon}>Twitter favicon</Button>
      <Button onClick={setRaikouFavicon}>Raikou favicon</Button>
    </Group>
  );
}
`;

function Demo() {
  const [favicon, setFavicon] = useState("https://raikou.dev/favicon.svg");
  const setTwitterFavicon = () => setFavicon("https://twitter.com/favicon.ico");
  const setRaikouFavicon = () => setFavicon("https://raikou.dev/favicon.svg");

  useFavicon(favicon);

  return (
    <Group justify="center">
      <Button onClick={setTwitterFavicon}>Twitter favicon</Button>
      <Button onClick={setRaikouFavicon}>Raikou favicon</Button>
    </Group>
  );
}

export const useFaviconUsage: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
