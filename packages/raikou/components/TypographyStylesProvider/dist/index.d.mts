import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, Factory } from '@raikou/core';

type TypographyStylesProviderStylesNames = "root";
interface TypographyStylesProviderProps extends BoxProps, StylesApiProps<TypographyStylesProviderFactory>, ElementProps<"div"> {
}
type TypographyStylesProviderFactory = Factory<{
    props: TypographyStylesProviderProps;
    ref: HTMLDivElement;
    stylesNames: TypographyStylesProviderStylesNames;
}>;
declare const TypographyStylesProvider: _raikou_core.RaikouComponent<{
    props: TypographyStylesProviderProps;
    ref: HTMLDivElement;
    stylesNames: TypographyStylesProviderStylesNames;
}>;

export { TypographyStylesProvider, TypographyStylesProviderFactory, TypographyStylesProviderProps, TypographyStylesProviderStylesNames };
