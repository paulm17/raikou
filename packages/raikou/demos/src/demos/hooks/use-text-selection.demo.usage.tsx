import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { useTextSelection } from "@raikou/hooks";

const code = `
import { useTextSelection } from '@raikou/hooks';

function Demo() {
  const selection = useTextSelection();
  return (
    <>
      <div>Select some text here or anywhere on the page and it will be displayed below</div>
      <div>Selected text: {selection?.toString()}</div>
    </>
  );
}
`;

function Demo() {
  const selection = useTextSelection();
  return (
    <>
      <div>
        Select some text here or anywhere on the page and it will be displayed
        below
      </div>
      <div>
        Selected text: <b>{selection?.toString()}</b>
      </div>
    </>
  );
}

export const useTextSelectionUsage: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
