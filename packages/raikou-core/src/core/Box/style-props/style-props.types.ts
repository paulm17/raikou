import type {
  RaikouBreakpoint,
  RaikouSpacing,
  RaikouFontSize,
  RaikouLineHeight,
  RaikouColor,
} from '../../Bootstrap';

export type StyleProp<Value> = Value | Partial<Record<RaikouBreakpoint | (string & {}), Value>>;

export type StylePropSpacingValue = RaikouSpacing | number | (string & {});

export interface RaikouStyleProps {
  m?: StyleProp<StylePropSpacingValue>;
  my?: StyleProp<StylePropSpacingValue>;
  mx?: StyleProp<StylePropSpacingValue>;
  mt?: StyleProp<StylePropSpacingValue>;
  mb?: StyleProp<StylePropSpacingValue>;
  ml?: StyleProp<StylePropSpacingValue>;
  mr?: StyleProp<StylePropSpacingValue>;

  p?: StyleProp<StylePropSpacingValue>;
  py?: StyleProp<StylePropSpacingValue>;
  px?: StyleProp<StylePropSpacingValue>;
  pt?: StyleProp<StylePropSpacingValue>;
  pb?: StyleProp<StylePropSpacingValue>;
  pl?: StyleProp<StylePropSpacingValue>;
  pr?: StyleProp<StylePropSpacingValue>;

  bg?: StyleProp<RaikouColor>;
  c?: StyleProp<RaikouColor>;
  opacity?: StyleProp<React.CSSProperties['opacity']>;

  ff?: StyleProp<React.CSSProperties['fontFamily']>;
  fz?: StyleProp<RaikouFontSize | number | (string & {})>;
  fw?: StyleProp<React.CSSProperties['fontWeight']>;
  lts?: StyleProp<React.CSSProperties['letterSpacing']>;
  ta?: StyleProp<React.CSSProperties['textAlign']>;
  lh?: StyleProp<RaikouLineHeight | number | (string & {})>;
  fs?: StyleProp<React.CSSProperties['fontStyle']>;
  tt?: StyleProp<React.CSSProperties['textTransform']>;
  td?: StyleProp<React.CSSProperties['textDecoration']>;

  w?: StyleProp<React.CSSProperties['width']>;
  miw?: StyleProp<React.CSSProperties['minWidth']>;
  maw?: StyleProp<React.CSSProperties['maxWidth']>;
  h?: StyleProp<React.CSSProperties['height']>;
  mih?: StyleProp<React.CSSProperties['minHeight']>;
  mah?: StyleProp<React.CSSProperties['maxHeight']>;

  bgsz?: StyleProp<React.CSSProperties['backgroundSize']>;
  bgp?: StyleProp<React.CSSProperties['backgroundPosition']>;
  bgr?: StyleProp<React.CSSProperties['backgroundRepeat']>;
  bga?: StyleProp<React.CSSProperties['backgroundAttachment']>;

  pos?: StyleProp<React.CSSProperties['position']>;
  top?: StyleProp<React.CSSProperties['top']>;
  left?: StyleProp<React.CSSProperties['left']>;
  bottom?: StyleProp<React.CSSProperties['bottom']>;
  right?: StyleProp<React.CSSProperties['right']>;
  inset?: StyleProp<React.CSSProperties['inset']>;

  display?: StyleProp<React.CSSProperties['display']>;
}
