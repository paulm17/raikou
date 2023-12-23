"use client";
import { ActionIcon } from "@raikou/server";
import { useDirection } from "@raikou/system";
import {
  IconTextDirectionLtr,
  IconTextDirectionRtl,
} from "@tabler/icons-react";

function Direction() {
  const { toggleDirection, dir } = useDirection();

  console.log(dir);

  return (
    <ActionIcon
      onClick={() => toggleDirection()}
      variant="default"
      radius="md"
      size="lg"
    >
      {dir === "rtl" ? (
        <IconTextDirectionLtr stroke={1.5} />
      ) : (
        <IconTextDirectionRtl stroke={1.5} />
      )}
    </ActionIcon>
  );
}

export default Direction;
