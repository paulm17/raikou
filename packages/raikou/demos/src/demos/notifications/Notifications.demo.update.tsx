import React from "react";
import { IconCheck } from "@tabler/icons-react";
import { Button } from "@raikou/server";
import { rem } from "@raikou/theme";
import { RaikouDemo } from "@raikou/ds";
import { notifications } from "@raikou/notifications";

const code = `
import { Button, rem } from '@raikou/core';
import { notifications } from '@raikou/notifications';
import { IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        const id = notifications.show({
          loading: true,
          title: 'Loading your data',
          message: 'Data will be loaded in 3 seconds, you cannot close this yet',
          autoClose: false,
          withCloseButton: false,
        });

        setTimeout(() => {
          notifications.update({
            id,
            color: 'teal',
            title: 'Data was loaded',
            message: 'Notification will close in 2 seconds, you can close this notification now',
            icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />,
            loading: false,
            autoClose: 2000,
          });
        }, 3000);
      }}
    >
      Show update notification
    </Button>
  );
}
`;

function Demo() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        const id = notifications.show({
          loading: true,
          title: "Loading your data",
          message:
            "Data will be loaded in 3 seconds, you cannot close this yet",
          autoClose: false,
          withCloseButton: false,
        });

        setTimeout(() => {
          notifications.update({
            id,
            color: "teal",
            title: "Data was loaded",
            message:
              "Notification will close in 2 seconds, you can close this notification now",
            icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />,
            loading: false,
            autoClose: 2000,
          });
        }, 3000);
      }}
    >
      Show update notification
    </Button>
  );
}

export const update: RaikouDemo = {
  type: "code",
  code,
  centered: true,
  component: Demo,
};
