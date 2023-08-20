import React from "react";

export interface SvgLoaderProps extends React.ComponentPropsWithoutRef<any> {}

export type RaikouLoaderComponent = React.ForwardRefExoticComponent<
  React.HTMLAttributes<any> & React.RefAttributes<any>
>;

export type RaikouLoadersRecord = Partial<
  Record<
    "bars" | "dots" | "oval" | "progress" | (string & {}),
    RaikouLoaderComponent
  >
>;
export type RaikouLoader = keyof RaikouLoadersRecord;
