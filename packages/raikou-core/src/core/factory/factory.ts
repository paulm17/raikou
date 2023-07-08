import { forwardRef } from 'react';
import type { RaikouThemeComponent } from '../Bootstrap';
import type { Styles, ClassNames, PartialVarsResolver } from '../styles-api';

export type DataAttributes = Record<`data-${string}`, any>;

export interface FactoryPayload {
  props: Record<string, any>;
  ctx?: any;
  ref?: any;
  stylesNames?: string;
  vars?: any;
  variant?: string;
  staticComponents?: Record<string, any>;
  // Compound components cannot have classNames, styles and vars on RaikouProvider
  compound?: boolean;
}

export interface ExtendCompoundComponent<Payload extends FactoryPayload> {
  defaultProps?: Partial<Payload['props']> & DataAttributes;
}

export interface ExtendsRootComponent<Payload extends FactoryPayload> {
  defaultProps?: Partial<Payload['props']> & DataAttributes;
  classNames?: ClassNames<Payload>;
  styles?: Styles<Payload>;
  vars?: PartialVarsResolver<Payload>;
}

export type ExtendComponent<Payload extends FactoryPayload> = Payload['compound'] extends true
  ? ExtendCompoundComponent<Payload>
  : ExtendsRootComponent<Payload>;

export type StaticComponents<Input> = Input extends Record<string, any>
  ? Input
  : Record<string, never>;

export interface ThemeExtend<Payload extends FactoryPayload> {
  extend: (input: ExtendComponent<Payload>) => RaikouThemeComponent;
}

export type ComponentClasses<Payload extends FactoryPayload> = {
  classes: Payload['stylesNames'] extends string ? Record<Payload['stylesNames'], string> : never;
};

export type RaikouComponent<Payload extends FactoryPayload> = React.ForwardRefExoticComponent<
  Payload['props'] & React.RefAttributes<Payload['ref']>
> &
  ThemeExtend<Payload> &
  ComponentClasses<Payload> &
  StaticComponents<Payload['staticComponents']>;

export function identity<T>(value: T): T {
  return value;
}

export function factory<Payload extends FactoryPayload>(
  ui: React.ForwardRefRenderFunction<Payload['ref'], Payload['props']>
) {
  const Component = forwardRef(ui) as RaikouComponent<Payload>;

  Component.extend = identity as any;

  return Component as RaikouComponent<Payload>;
}
