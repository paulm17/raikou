import React from "react";
import { Text } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import { useDocumentTitle, useDocumentVisibility } from "@raikou/hooks";

const code = `
import { Text } from '@raikou/core';
import { useDocumentTitle, useDocumentVisibility } from '@raikou/hooks';

function Demo() {
  const documentState = useDocumentVisibility();
  useDocumentTitle(\`Document is \${documentState}\`);
  return <Text>Switch to another tab to see document title change</Text>;
}
`;

function Demo() {
  const documentState = useDocumentVisibility();
  useDocumentTitle(`Document is ${documentState}`);
  return <Text>Switch to another tab to see document title change</Text>;
}

export const useDocumentVisibilityDemo: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
