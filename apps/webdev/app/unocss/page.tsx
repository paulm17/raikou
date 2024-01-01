"use client";
import { Badge } from "@raikou/server";
// import { Client } from "../unocss2/page";

export default function Page() {
  const mode = "dark";

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
      {/* <Client /> */}
      {/* <Badge
        classNames={{
          label: "text-green-500",
        }}
        size="sm"
      >
        badge
      </Badge>
      <Badge
        classNames={{
          root: "text-blue-500",
        }}
        size="md"
      >
        badge
      </Badge>*/}
      {/* <Button variant="filled" size="xxd">
        New Button
      </Button> */}
      <div className="hover:(bg-blue-400 font-medium) font-(light mono)">
        hello
      </div>
      <div className="bg-red-600 text-blue-500">hello2</div>
      <div className="bg-green-200 text-yellow-200">hello2</div>
    </>
  );
}
