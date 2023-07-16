import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouSize, Factory } from '@raikou/core';

type KbdStylesNames = "root";
type KbdVariant = string;
type KbdCssVariables = {
    root: "--kbd-padding" | "--kbd-fz";
};
interface KbdProps extends BoxProps, StylesApiProps<KbdFactory>, ElementProps<"kbd"> {
    /** Controls font-size and padding, `'sm'` by default */
    size?: RaikouSize | (string & {});
}
type KbdFactory = Factory<{
    props: KbdProps;
    ref: HTMLElement;
    stylesNames: KbdStylesNames;
    vars: KbdCssVariables;
    variant: KbdVariant;
}>;
declare const Kbd: _raikou_core.RaikouComponent<{
    props: KbdProps;
    ref: HTMLElement;
    stylesNames: KbdStylesNames;
    vars: KbdCssVariables;
    variant: KbdVariant;
}>;

export { Kbd, KbdCssVariables, KbdFactory, KbdProps, KbdStylesNames, KbdVariant };
