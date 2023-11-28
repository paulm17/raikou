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
      onClick={() => {
        Array(10).fill(0).forEach((_, index) => {
          setTimeout(() => {
            notifications.show({
              title: \`Notification \${index + 1}\`,
              message: 'Most notifications are added to queue',
            });
          }, 200 * index);
        });
      }}
    >
      Show 10 notifications
    </Button>
  );
}`;

function Demo() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        Array(10)
          .fill(0)
          .forEach((_, index) => {
            setTimeout(() => {
              notifications.show({
                title: `Notification ${index + 1}`,
                message: "Most notifications are added to queue",
              });
            }, 200 * index);
          });
      }}
    >
      Show 10 notifications
    </Button>
  );
}

export const limit: RaikouDemo = {
  type: "code",
  code,
  centered: true,
  component: Demo,
};
