import type {
  RaikouBreakpoint,
  RaikouSpacing,
  RaikouFontSize,
  RaikouLineHeight,
  RaikouColor,
} from "../../RaikouProvider";

export type StyleProp<Value> =
  | Value
  | Partial<Record<RaikouBreakpoint | (string & {}), Value>>;

export interface RaikouStyleProps {
  m?: StyleProp<RaikouSpacing>;
  my?: StyleProp<RaikouSpacing>;
  mx?: StyleProp<RaikouSpacing>;
  mt?: StyleProp<RaikouSpacing>;
  mb?: StyleProp<RaikouSpacing>;
  ml?: StyleProp<RaikouSpacing>;
  mr?: StyleProp<RaikouSpacing>;

  p?: StyleProp<RaikouSpacing>;
  py?: StyleProp<RaikouSpacing>;
  px?: StyleProp<RaikouSpacing>;
  pt?: StyleProp<RaikouSpacing>;
  pb?: StyleProp<RaikouSpacing>;
  pl?: StyleProp<RaikouSpacing>;
  pr?: StyleProp<RaikouSpacing>;

  bg?: StyleProp<RaikouColor>;
  c?: StyleProp<RaikouColor>;
  opacity?: StyleProp<React.CSSProperties["opacity"]>;

  ff?: StyleProp<React.CSSProperties["fontFamily"]>;
  fz?: StyleProp<RaikouFontSize | number | (string & {})>;
  fw?: StyleProp<React.CSSProperties["fontWeight"]>;
  lts?: StyleProp<React.CSSProperties["letterSpacing"]>;
  ta?: StyleProp<React.CSSProperties["textAlign"]>;
  lh?: StyleProp<RaikouLineHeight | number | (string & {})>;
  fs?: StyleProp<React.CSSProperties["fontStyle"]>;
  tt?: StyleProp<React.CSSProperties["textTransform"]>;
  td?: StyleProp<React.CSSProperties["textDecoration"]>;

  w?: StyleProp<React.CSSProperties["width"]>;
  miw?: StyleProp<React.CSSProperties["minWidth"]>;
  maw?: StyleProp<React.CSSProperties["maxWidth"]>;
  h?: StyleProp<React.CSSProperties["height"]>;
  mih?: StyleProp<React.CSSProperties["minHeight"]>;
  mah?: StyleProp<React.CSSProperties["maxHeight"]>;

  bgsz?: StyleProp<React.CSSProperties["backgroundSize"]>;
  bgp?: StyleProp<React.CSSProperties["backgroundPosition"]>;
  bgr?: StyleProp<React.CSSProperties["backgroundRepeat"]>;
  bga?: StyleProp<React.CSSProperties["backgroundAttachment"]>;

  pos?: StyleProp<React.CSSProperties["position"]>;
  top?: StyleProp<React.CSSProperties["top"]>;
  left?: StyleProp<React.CSSProperties["left"]>;
  bottom?: StyleProp<React.CSSProperties["bottom"]>;
  right?: StyleProp<React.CSSProperties["right"]>;
  inset?: StyleProp<React.CSSProperties["inset"]>;

  display?: StyleProp<React.CSSProperties["display"]>;
}
