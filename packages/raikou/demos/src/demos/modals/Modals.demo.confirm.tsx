import React from "react";
import { Button, Text } from "@raikou/server";
import { modals } from "@raikou/modals";
import { RaikouDemo } from "@raikou/ds";
import { notifications } from "@raikou/notifications";

const code = `
import { Button, Text } from '@raikou/core';
import { modals } from '@raikou/modals';

function Demo() {
  const openModal = () => modals.openConfirmModal({
    title: 'Please confirm your action',
    children: (
      <Text size="sm">
        This action is so important that you are required to confirm it with a modal. Please click
        one of these buttons to proceed.
      </Text>
    ),
    labels: { confirm: 'Confirm', cancel: 'Cancel' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () => console.log('Confirmed'),
  });

  return <Button onClick={openModal}>Open confirm modal</Button>;
}
`;

function Demo() {
  const openModal = () =>
    modals.openConfirmModal({
      modalId: "test-id",
      title: "Please confirm your action",
      children: (
        <Text size="sm">
          This action is so important that you are required to confirm it with a
          modal. Please click one of these buttons to proceed.
        </Text>
      ),
      onCancel: () =>
        notifications.show({
          title: "Canceled",
          message: "Confirm modal was canceled",
          color: "gray",
        }),
      onConfirm: () =>
        notifications.show({
          title: "Confirmed",
          message: "Confirm modal was confirmed",
          color: "teal",
        }),
    });

  return <Button onClick={openModal}>Open confirm modal</Button>;
}

export const confirm: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
