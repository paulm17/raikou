import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { NumberFormatter } from "@raikou/client";

const code = `
import { NumberFormatter } from '@raikou/core';

function Demo() {
  return (
    <>
      <div>
        With default separator: <NumberFormatter thousandSeparator value={1000000} />
      </div>
      <div>
        With custom separator:{' '}
        <NumberFormatter thousandSeparator="." decimalSeparator="," value={1000000} />
      </div>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <div>
        With default separator:{" "}
        <NumberFormatter thousandSeparator value={1000000} />
      </div>
      <div>
        With custom separator:{" "}
        <NumberFormatter
          thousandSeparator="."
          decimalSeparator=","
          value={1000000}
        />
      </div>
    </>
  );
}

export const thousandsSeparator: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
};
