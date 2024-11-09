import type { RaikouTheme } from "../RaikouProvider";

export interface CSSProperties extends React.CSSProperties {
  [key: string]: any;
}

type RaikouStyle = CSSProperties | ((theme: RaikouTheme) => CSSProperties);
export type RaikouStyleProp =
  | RaikouStyle
  | RaikouStyle[]
  | RaikouStyleProp[]
  | undefined;

export type CssVariable = `--${string}`;

export type CssVariables<Variable extends string = CssVariable> = Partial<
  Record<Variable, string>
>;

export type CssVars<Variable extends string = CssVariable> =
  | CssVariables<Variable>
  | ((theme: RaikouTheme) => CssVariables<Variable>)
  | CssVars<Variable>[];

export type CssVarsProp<Variable extends string = CssVariable> =
  | CssVars<Variable>
  | CssVars<Variable>[];
