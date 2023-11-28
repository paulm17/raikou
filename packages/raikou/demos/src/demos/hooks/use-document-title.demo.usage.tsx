import React, { useState } from "react";
import { useDocumentTitle, randomId } from "@raikou/hooks";
import { RaikouDemo } from "@raikou/ds";
import { Button } from "@raikou/server";

const code = `
import { useState } from 'react';
import { useDocumentTitle, randomId } from '@raikou/hooks';
import { Button } from '@raikou/core';

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <Button onClick={() => setTitle(randomId())}>
      Set document title to random id
    </Button>
  );
}`;

function Demo() {
  const [title, setTitle] = useState("");
  useDocumentTitle(title);

  return (
    <Button onClick={() => setTitle(randomId())}>
      Set document title to random id
    </Button>
  );
}

export const useDocumentTitleDemo: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true,
};
