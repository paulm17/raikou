import type { RaikouTheme } from "../RaikouProvider";

type RaikouStyle =
  | React.CSSProperties
  | ((theme: RaikouTheme) => React.CSSProperties);
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
