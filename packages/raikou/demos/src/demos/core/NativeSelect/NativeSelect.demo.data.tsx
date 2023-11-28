import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { NativeSelect } from "@raikou/client";

const code = `
import { NativeSelect } from '@raikou/core';

function Demo() {
  return (
    <NativeSelect
      data={[
        {
          group: 'Frontend libraries',
          items: [
            { label: 'React', value: 'react' },
            { label: 'Angular', value: 'angular' },
            { label: 'Vue', value: 'vue', disabled: true },
          ],
        },
        {
          group: 'Backend libraries',
          items: [
            { label: 'Express', value: 'express' },
            { label: 'Koa', value: 'koa' },
            { label: 'Django', value: 'django' },
          ],
        },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <NativeSelect
      data={[
        {
          group: "Frontend libraries",
          items: [
            { label: "React", value: "react" },
            { label: "Angular", value: "angular" },
            { label: "Vue", value: "vue", disabled: true },
          ],
        },
        {
          group: "Backend libraries",
          items: [
            { label: "Express", value: "express" },
            { label: "Koa", value: "koa" },
            { label: "Django", value: "django" },
          ],
        },
      ]}
    />
  );
}

export const data: RaikouDemo = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
