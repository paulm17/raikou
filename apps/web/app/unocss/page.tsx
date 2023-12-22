"use client";
import { Badge, Button } from "@raikou/server";

export default function Page() {
  return (
    <>
      <Badge
        classNames={{
          label: {
            text: "red-500",
          },
        }}
        size="sm"
      >
        badge
      </Badge>
      <Button variant="filled" size="xxd">
        New Button
      </Button>
    </>
  );
}
