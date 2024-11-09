import { createContextContainer, tests } from '@raikou-tests/core';
import { PaginationRoot } from '../PaginationRoot/PaginationRoot';
import { PaginationDots, PaginationDotsProps, PaginationDotsStylesNames } from './PaginationDots';

const TestContainer = createContextContainer(PaginationDots, PaginationRoot, { total: 10 });

const defaultProps: PaginationDotsProps = {};

describe('@raikou/core/PaginationDots', () => {
  tests.itSupportsSystemProps<PaginationDotsProps, PaginationDotsStylesNames>({
    component: TestContainer,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@raikou/core/PaginationDots',
    stylesApiSelectors: ['dots'],
    stylesApiName: 'Pagination',
    compound: true,
    providerStylesApi: false,
    selector: '.raikou-Pagination-dots',
  });

  tests.itThrowsContextError({
    component: PaginationDots,
    props: defaultProps,
    error: 'Pagination.Root component was not found in tree',
  });
});
