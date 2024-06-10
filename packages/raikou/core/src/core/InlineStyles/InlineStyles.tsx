import React from "react";
import {
  InlineStylesInput,
  stylesToString,
} from "./styles-to-string/styles-to-string";
// import { useRaikouStyleNonce } from '../RaikouProvider';

export interface InlineStylesProps
  extends InlineStylesInput,
    Omit<React.ComponentPropsWithoutRef<"style">, keyof InlineStylesInput> {}

export function InlineStyles(props: InlineStylesInput) {
  // const nonce = undefined //useRaikouStyleNonce();
  return (
    <style
      data-raikou-styles="inline"
      // nonce={nonce?.()}
      dangerouslySetInnerHTML={{
        __html: stylesToString(props),
      }}
    />
  );
}
