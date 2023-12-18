"use client";
import { Badge, Group } from "@raikou/server";
import { Chip } from "@raikou/client";

export default function Page() {
  return (
    <Group>
      <Badge className="bg-violet-800">badge</Badge>
      <Chip
        variant="filled"
        checked
        style={{ "--chip-bg": "var(--violet-950)" }}
      >
        chip
      </Chip>
    </Group>
  );
}
