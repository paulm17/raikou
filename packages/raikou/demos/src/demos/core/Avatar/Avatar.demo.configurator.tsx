import { Avatar } from "@raikou/client";
import { RaikouDemo } from "@raikou/ds";
import { staticVariantsControl } from "../../../shared";

const code = `
import { Avatar } from '@raikou/core';

function Demo() {
  return <Avatar{{props}} />;
}
`;

export const configurator: RaikouDemo = {
  type: "configurator",
  component: Avatar,
  centered: true,
  code,
  controls: [
    staticVariantsControl,
    { prop: "radius", type: "size", initialValue: "sm", libraryValue: "100%" },
    { prop: "size", type: "size", initialValue: "md", libraryValue: "md" },
    {
      prop: "color",
      type: "color",
      initialValue: "gray",
      libraryValue: "gray",
    },
    {
      prop: "src",
      type: "string",
      initialValue: "",
      libraryValue: null,
    },
  ],
};
