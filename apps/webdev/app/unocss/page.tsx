"use client";
import { Badge } from "@raikou/server";

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
    </>
  );
}
