"use client";
import { Avatar } from "@raikou/core";

function AvatarC() {
  return (
    <div style={{ padding: 40 }}>
      <Avatar.Group>
        {/* <Tooltip label="Hello"> */}
        <Avatar radius="xl" color="blue">
          AN
        </Avatar>
        {/* </Tooltip> */}
        {/* <Tooltip label="Hello"> */}
        <Avatar radius="xl" color="red">
          BU
        </Avatar>
        {/* </Tooltip> */}
        <Avatar radius="xl">+3</Avatar>
      </Avatar.Group>
    </div>
  );
}

export { AvatarC };
