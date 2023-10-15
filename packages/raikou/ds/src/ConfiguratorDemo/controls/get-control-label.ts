import { upperFirst } from "@raikou/hooks";

export function getControlLabel(label: string) {
  return upperFirst(label.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase());
}
