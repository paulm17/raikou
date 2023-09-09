import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, StyleProp, RaikouSpacing, Factory } from '@raikou/core';

type SimpleGridStylesNames = "root";
interface SimpleGridProps extends BoxProps, StylesApiProps<SimpleGridFactory>, ElementProps<"div"> {
    /** Number of columns, `1` by default */
    cols?: StyleProp<number>;
    /** Spacing between columns, `'md'` by default */
    spacing?: StyleProp<RaikouSpacing>;
    /** Spacing between rows, `'md'` by default */
    verticalSpacing?: StyleProp<RaikouSpacing>;
}
type SimpleGridFactory = Factory<{
    props: SimpleGridProps;
    ref: HTMLDivElement;
    stylesNames: SimpleGridStylesNames;
}>;
declare const SimpleGrid: _raikou_core.RaikouComponent<{
    props: SimpleGridProps;
    ref: HTMLDivElement;
    stylesNames: SimpleGridStylesNames;
}>;

export { SimpleGrid, SimpleGridFactory, SimpleGridProps, SimpleGridStylesNames };
