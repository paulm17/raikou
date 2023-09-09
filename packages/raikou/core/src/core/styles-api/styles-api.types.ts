import type { CSSProperties } from "react";
import type { RaikouTheme } from "../RaikouProvider";
import type { RaikouStyleProp } from "../Box";
import type { FactoryPayload } from "../factory";
import { PartialVarsResolver } from "./create-vars-resolver/create-vars-resolver";

export interface GetStylesApiOptions {
  className?: string;
  style?: RaikouStyleProp;
  focusable?: boolean;
  active?: boolean;
  classNames?: ClassNames<{ props: any; stylesNames: string }>;
  styles?: Styles<{ props: any; stylesNames: string }>;
  variant?: string;
  props?: Record<string, any>;
}

export type StylesApiRecord<
  Payload extends FactoryPayload,
  DataType,
> = Payload["compound"] extends true
  ? Payload["stylesNames"] extends string
    ? StylesRecord<Payload["stylesNames"], DataType>
    : never
  : Payload["stylesNames"] extends string
  ?
      | StylesRecord<Payload["stylesNames"], DataType>
      | ((
          theme: RaikouTheme,
          props: Payload["props"],
          ctx: Payload["ctx"],
        ) => StylesRecord<Payload["stylesNames"], DataType>)
  : never;

export type Styles<Payload extends FactoryPayload> = StylesApiRecord<
  Payload,
  CSSProperties
>;
export type ClassNames<Payload extends FactoryPayload> = StylesApiRecord<
  Payload,
  string
>;
export type ClassNamesArray<Payload extends FactoryPayload> = (
  | StylesApiRecord<Payload, string>
  | undefined
)[];

export type StylesRecord<StylesNames extends string, Payload> = Partial<
  Record<StylesNames, Payload>
>;

export interface StylesApiProps<Payload extends FactoryPayload> {
  unstyled?: boolean;
  variant?: Payload["variant"] extends string
    ? Payload["variant"] | (string & {})
    : string;
  classNames?: ClassNames<Payload>;
  styles?: Styles<Payload>;
  vars?: PartialVarsResolver<Payload>;
}

export interface CompoundStylesApiProps<Payload extends FactoryPayload>
  extends Omit<StylesApiProps<Payload>, "unstyled"> {}
