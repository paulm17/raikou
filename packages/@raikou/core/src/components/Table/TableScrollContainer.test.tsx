import { tests } from '@raikou-tests/core';
import {
  TableScrollContainer,
  TableScrollContainerProps,
  TableScrollContainerStylesNames,
} from './TableScrollContainer';

const defaultProps: TableScrollContainerProps = {
  minWidth: 300,
};

describe('@raikou/core/TableScrollContainer', () => {
  tests.itSupportsSystemProps<TableScrollContainerProps, TableScrollContainerStylesNames>({
    component: TableScrollContainer,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@raikou/core/TableScrollContainer',
    stylesApiSelectors: ['scrollContainer', 'scrollContainerInner'],
  });
});
