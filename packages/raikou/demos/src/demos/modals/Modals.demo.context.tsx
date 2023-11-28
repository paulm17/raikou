import React from "react";
import { Button } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import { modals } from "@raikou/modals";

const code = `
import { Button } from '@raikou/core';
import { modals } from '@raikou/modals';

function Demo() {
  return (
    <Button
      onClick={() =>
        modals.openContextModal({
          modal: 'demonstration',
          title: 'Test modal from context',
          innerProps: {
            modalBody:
              'This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook',
          },
        })
      }
    >
      Open demonstration context modal
    </Button>
  );
}
`;

function Demo() {
  return (
    <Button
      onClick={() =>
        modals.openContextModal({
          modal: "demonstration",
          title: "Test modal from context",
          innerProps: {
            modalBody:
              "This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook",
          },
        })
      }
    >
      Open demonstration context modal
    </Button>
  );
}

export const context: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
