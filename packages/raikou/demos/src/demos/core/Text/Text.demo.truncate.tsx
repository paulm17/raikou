import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Text, Box } from "@raikou/server";

const code = `
import { Text } from '@raikou/core';

function Demo() {
  return (
    <Box w={300}>
      <Text{{props}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
        necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
        perspiciatis excepturi iste sint itaque sunt laborum. Nihil?
      </Text>
    </Box>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Box w={300}>
      <Text {...props}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident
        eos fugiat id necessitatibus magni ducimus molestias. Placeat,
        consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint
        itaque sunt laborum. Nihil?
      </Text>
    </Box>
  );
}

export const truncate: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      type: "segmented",
      prop: "truncate",
      data: ["start", "end"],
      initialValue: "end",
      libraryValue: null,
    },
  ],
};
