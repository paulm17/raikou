import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, Factory } from '@raikou/core';

interface SpaceProps extends BoxProps, StylesApiProps<SpaceFactory>, ElementProps<"div"> {
}
type SpaceFactory = Factory<{
    props: SpaceProps;
    ref: HTMLDivElement;
}>;
declare const Space: _raikou_core.RaikouComponent<{
    props: SpaceProps;
    ref: HTMLDivElement;
}>;

export { Space, type SpaceFactory, type SpaceProps };
