import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { TagsInput } from "@raikou/client";

const code = `
import { TagsInput } from '@raikou/core';

function Demo() {
  return (
    <TagsInput
      label="Enter tags"
      placeholder="Enter tags"
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Express', 'Django'] },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <TagsInput
      label="Enter tags"
      placeholder="Enter tags"
      data={[
        { group: "Frontend", items: ["React", "Angular"] },
        { group: "Backend", items: ["Express", "Django"] },
      ]}
    />
  );
}

export const groups: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
