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
      <div className="hover:(bg-gray-400 font-medium) font-(light mono)">
        hello
      </div>
    </>
  );
}
