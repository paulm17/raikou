import React from "react";
import { Button } from "../../components/Button/src";
import { Group } from "../../components/Group/src";
import { Notifications } from "./Notifications";
import { showNotification } from "./notifications.store";

export default { title: "Notifications" };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Notifications autoClose={false} position="top-center" />

      <Group>
        <Button
          onClick={() => showNotification({ message: "Test", title: "Test" })}
        >
          Show notification
        </Button>
      </Group>
    </div>
  );
}
