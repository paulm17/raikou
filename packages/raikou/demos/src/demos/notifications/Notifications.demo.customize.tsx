import React from "react";
import { Button, Group } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import { notifications } from "@raikou/notifications";
import classes from "./Notifications.demo.customize.module.css";

const code = `
import { Button, Group } from '@raikou/core';
import { notifications } from '@raikou/notifications';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Group justify="center">
      <Button
        onClick={() =>
          notifications.show({
            title: 'Notification with custom styles',
            message: 'It is default blue',
            classNames: classes,
          })
        }
      >
        Default notification
      </Button>

      <Button
        color="red"
        onClick={() =>
          notifications.show({
            color: 'red',
            title: 'Notification with custom styles',
            message: 'It is red',
            classNames: classes,
          })
        }
      >
        Error notification
      </Button>
    </Group>
  );
}`;

const cssCode = `
.root {
  background-color: var(--notification-color, var(--raikou-primary-color-filled));

  &::before {
    background-color: var(--raikou-color-white);
  }
}

.description,
.title {
  color: var(--raikou-color-white);
}

.closeButton {
  color: var(--raikou-color-white);

  @mixin hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
`;

function Demo() {
  return (
    <Group justify="center">
      <Button
        onClick={() =>
          notifications.show({
            title: "Notification with custom styles",
            message: "It is default blue",
            classNames: classes,
          })
        }
      >
        Default notification
      </Button>

      <Button
        color="red"
        onClick={() =>
          notifications.show({
            color: "red",
            title: "Notification with custom styles",
            message: "It is red",
            classNames: classes,
          })
        }
      >
        Error notification
      </Button>
    </Group>
  );
}

export const customize: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code: [
    { fileName: "Demo.tsx", code, language: "tsx" },
    { fileName: "Demo.module.css", code: cssCode, language: "css" },
  ],
};
