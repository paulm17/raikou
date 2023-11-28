import { RaikouDemo } from "@raikou/ds";
import { Loader } from "@raikou/server";

const code = `
import { Loader } from '@raikou/core';

function Demo() {
  return <Loader{{props}} />;
}
`;

export const configurator: RaikouDemo = {
  type: "configurator",
  component: Loader,
  code,
  centered: true,
  controls: [
    { type: "color", prop: "color", initialValue: "blue", libraryValue: null },
    { type: "size", prop: "size", initialValue: "md", libraryValue: "md" },
    {
      type: "segmented",
      prop: "type",
      data: ["oval", "bars", "dots"],
      initialValue: "oval",
      libraryValue: "oval",
    },
  ],
};
