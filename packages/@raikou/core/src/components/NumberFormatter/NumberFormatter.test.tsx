import { tests } from '@raikou-tests/core';
import { NumberFormatter } from './NumberFormatter';

describe('@raikou/core/NumberFormatter', () => {
  tests.itHasExtend({ component: NumberFormatter });

  it('has correct displayName', () => {
    expect(NumberFormatter.displayName).toEqual('@raikou/core/NumberFormatter');
  });
});
