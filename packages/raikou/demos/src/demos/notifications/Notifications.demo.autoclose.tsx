import React from "react";
import { Group, Button } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import { notifications } from "@raikou/notifications";

const code = `
import { Group, Button } from '@raikou/core';
import { notifications } from '@raikou/notifications';

function Demo() {
  return (
    <Group justify="center">
      <Button
        variant="outline"
        onClick={() => notifications.show({ message: 'I will close in 4 seconds' })}
      >
        Notifications Provider timeout
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            message: 'I will close in 500ms',
            autoClose: 500,
          })
        }
      >
        Closes in 500ms
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            color: 'blue',
            title: 'I will never close',
            message: 'unless you click X',
            autoClose: false,
          })
        }
      >
        Never closes automatically
      </Button>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center">
      <Button
        variant="outline"
        onClick={() =>
          notifications.show({ message: "I will close in 4 seconds" })
        }
      >
        Notifications Provider timeout
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            message: "I will close in 500ms",
            autoClose: 500,
          })
        }
      >
        Closes in 500ms
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            color: "blue",
            title: "I will never close",
            message: "unless you click X",
            autoClose: false,
          })
        }
      >
        Never closes automatically
      </Button>
    </Group>
  );
}

export const autoclose: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
