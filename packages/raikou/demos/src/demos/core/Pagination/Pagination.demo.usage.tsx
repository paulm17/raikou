import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Pagination } from "@raikou/client";

function Demo() {
  return <Pagination total={10} />;
}

export const usage: RaikouDemo = {
  type: "code",
  component: Demo,
  centered: true,
};
