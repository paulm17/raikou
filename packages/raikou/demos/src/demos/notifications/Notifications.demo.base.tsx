import React from "react";
import { Button } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import { notifications } from "@raikou/notifications";

const code = `
import { Button } from '@raikou/core';
import { notifications } from '@raikou/notifications';

function Demo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        notifications.show({
          title: 'Default notification',
          message: 'Hey there, your code is awesome! 🤥',
        })
      }
    >
      Show notification
    </Button>
  );
}`;

function Demo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        notifications.show({
          title: "Default notification",
          message: "Hey there, your code is awesome! 🤥",
        })
      }
    >
      Show notification
    </Button>
  );
}

export const base: RaikouDemo = {
  type: "code",
  code,
  centered: true,
  component: Demo,
};
