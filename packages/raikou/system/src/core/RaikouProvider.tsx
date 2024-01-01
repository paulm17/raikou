import fsPromises from "fs/promises";
import React from "react";
import { RaikouThemeOverride } from "../../../theme/src";

export interface RaikouProviderProps {
  /** Theme override object */
  theme?: RaikouThemeOverride;

  /** Your application */
  children?: React.ReactNode;
}

export async function RaikouProvider({ theme, children }: RaikouProviderProps) {
  // server process - save file to process temporary file
  const filePath = `${process.cwd()}/raikou_theme.ts`;
  const data = `const raikouTheme = ${JSON.stringify(
    theme,
  )};module.exports = raikouTheme;`;
  await fsPromises.writeFile(filePath, data, {
    encoding: "utf8",
    flag: "w",
    mode: 0o666,
  });

  return <>{children}</>;
}

export function RaikouStoryBookProvider({
  theme,
  children,
}: RaikouProviderProps) {
  if (typeof window !== "undefined") {
    (window as any)["raikou_theme"] = theme;
  }

  return <>{children}</>;
}
