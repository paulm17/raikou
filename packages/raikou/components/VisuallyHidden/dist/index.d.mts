import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, Factory } from '@raikou/core';

type VisuallyHiddenStylesNames = "root";
interface VisuallyHiddenProps extends BoxProps, StylesApiProps<VisuallyHiddenFactory>, ElementProps<"div"> {
}
type VisuallyHiddenFactory = Factory<{
    props: VisuallyHiddenProps;
    ref: HTMLDivElement;
    stylesNames: VisuallyHiddenStylesNames;
}>;
declare const VisuallyHidden: _raikou_core.RaikouComponent<{
    props: VisuallyHiddenProps;
    ref: HTMLDivElement;
    stylesNames: VisuallyHiddenStylesNames;
}>;

export { VisuallyHidden, type VisuallyHiddenProps };
