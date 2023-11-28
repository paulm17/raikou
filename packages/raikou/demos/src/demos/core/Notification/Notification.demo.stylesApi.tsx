import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Box, Notification } from "@raikou/server";
import { NotificationStylesApi } from "@raikou/styles-api";
import { IconCheck } from "@tabler/icons-react";

const code = `
import { Notification } from '@raikou/core';

function Demo() {
  return (
    <Notification{{props}} title="We notify you that">
      You are now obligated to give a star to Raikou project on GitHub
    </Notification>
  );
}
`;

function Demo(props: any) {
  return (
    <Box maw={400} mx="auto">
      <Notification
        title="Please wait"
        loading
        withCloseButton={false}
        {...props}
      >
        The application is trying to reconnect to the server
      </Notification>
      <Notification
        mt="md"
        icon={<IconCheck size="1.2rem" />}
        title="We notify you that"
        {...props}
      >
        You are now obligated to give a star to Raikou project on GitHub
      </Notification>
    </Box>
  );
}

export const stylesApi: RaikouDemo = {
  type: "styles-api",
  data: NotificationStylesApi,
  centered: true,
  dimmed: true,
  component: Demo,
  code,
};
