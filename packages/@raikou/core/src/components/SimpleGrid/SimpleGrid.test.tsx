import { tests } from '@raikou-tests/core';
import { SimpleGrid, SimpleGridProps, SimpleGridStylesNames } from './SimpleGrid';

const defaultProps: SimpleGridProps = {};

describe('@raikou/core/SimpleGrid', () => {
  tests.itSupportsSystemProps<SimpleGridProps, SimpleGridStylesNames>({
    component: SimpleGrid,
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
    displayName: '@raikou/core/SimpleGrid',
    stylesApiSelectors: ['root'],
  });
});
