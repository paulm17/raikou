import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { NumberFormatter } from "@raikou/client";

const code = `
import { NumberFormatter } from '@raikou/core';

function Demo() {
  return (
    <>
      <div>
        With prefix: <NumberFormatter prefix="$ " value={100} />
      </div>
      <div>
        With suffix: <NumberFormatter value={100} suffix=" RUB" />
      </div>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <div>
        With prefix: <NumberFormatter prefix="$ " value={100} />
      </div>
      <div>
        With suffix: <NumberFormatter value={100} suffix=" RUB" />
      </div>
    </>
  );
}

export const prefixSuffix: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
};
