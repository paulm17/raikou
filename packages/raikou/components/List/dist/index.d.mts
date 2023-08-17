import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, Factory, RaikouSize, RaikouSpacing } from '@raikou/core';
import React from 'react';

type ListItemStylesNames = "item" | "itemWrapper" | "itemIcon" | "itemLabel";
interface ListItemProps extends BoxProps, StylesApiProps<ListItemFactory>, ElementProps<"li"> {
    /** Icon to replace item bullet */
    icon?: React.ReactNode;
    /** Item content */
    children?: React.ReactNode;
}
type ListItemFactory = Factory<{
    props: ListItemProps;
    ref: HTMLLIElement;
    stylesNames: ListItemStylesNames;
    compound: true;
}>;
declare const ListItem: _raikou_core.RaikouComponent<{
    props: ListItemProps;
    ref: HTMLLIElement;
    stylesNames: ListItemStylesNames;
    compound: true;
}>;

type ListStylesNames = "root" | ListItemStylesNames;
type ListCssVariables = {
    root: "--list-fz" | "--list-lh" | "--list-spacing";
};
interface ListProps extends BoxProps, StylesApiProps<ListFactory>, ElementProps<"ul", "type"> {
    /** `List.Item` components only */
    children?: React.ReactNode;
    /** List type: `ol` or `ul`, `'unordered'` by default */
    type?: "ordered" | "unordered";
    /** Determines whether list items should be offset with padding, `false` by default */
    withPadding?: boolean;
    /** Controls `font-size` and `line-height`, `'md'` by default */
    size?: RaikouSize;
    /** Icon that replaces list item dot */
    icon?: React.ReactNode;
    /** Key of `theme.spacing` or any valid CSS value to set spacing between items, `0` by default */
    spacing?: RaikouSpacing | (string & {}) | number;
    /** Determines whether items must be centered with their icon, `false` by default */
    center?: boolean;
    /** Controls `list-style-type`, by default inferred from `type` */
    listStyleType?: React.CSSProperties["listStyleType"];
}
type ListFactory = Factory<{
    props: ListProps;
    ref: HTMLUListElement;
    stylesNames: ListStylesNames;
    vars: ListCssVariables;
    staticComponents: {
        Item: typeof ListItem;
    };
}>;
declare const List: _raikou_core.RaikouComponent<{
    props: ListProps;
    ref: HTMLUListElement;
    stylesNames: ListStylesNames;
    vars: ListCssVariables;
    staticComponents: {
        Item: typeof ListItem;
    };
}>;

export { List, ListCssVariables, ListFactory, ListItem, ListItemFactory, ListItemProps, ListItemStylesNames, ListProps, ListStylesNames };
