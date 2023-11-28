import React from "react";
import { RaikouDemo } from "@raikou/ds";

const getCodeTemplate = (component: string) =>
  `import { ${component} } from '@raikou/dates';

function Demo() {
  return <${component} defaultValue={new Date()}{{props}} />;
}
`;

function getDemo(Component: React.FC<any>) {
  return (props: any) => <Component defaultValue={new Date()} {...props} />;
}

export function getPickerSizeConfiguratorDemo(
  Component: React.FC<any>,
): RaikouDemo {
  return {
    type: "configurator",
    centered: true,
    code: getCodeTemplate(Component.displayName!.replace("@raikou/dates/", "")),
    controls: [
      { prop: "size", type: "size", initialValue: "sm", libraryValue: "sm" },
    ],
    component: getDemo(Component),
  };
}
