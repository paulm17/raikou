import { isNodeIndeterminate } from './is-node-indeterminate';

describe('@raikou/core/Tree/is-node-indeterminate', () => {
  it('detects indeterminate node in flat tree', () => {
    const data = [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
    ];

    expect(isNodeIndeterminate('1', data, ['1', '2'])).toBe(false);
  });

  it('detects indeterminate node in nested tree with one level of nesting', () => {
    const data = [
      {
        value: '1',
        label: '1',
        children: [
          { value: '2', label: '2' },
          { value: '3', label: '3' },
        ],
      },
    ];

    expect(isNodeIndeterminate('1', data, ['2'])).toBe(true);
    expect(isNodeIndeterminate('2', data, ['2'])).toBe(false);
    expect(isNodeIndeterminate('1', data, ['2', '3'])).toBe(false);
  });

  it('detects indeterminate node in nested tree with multiple levels of nesting', () => {
    const data = [
      {
        value: '1',
        label: '1',
        children: [
          {
            value: '2',
            label: '2',
            children: [
              { value: '3', label: '3' },
              { value: '4', label: '4' },
              { value: '5', label: '5' },
            ],
          },
          { value: '6', label: '6' },
        ],
      },
    ];

    expect(isNodeIndeterminate('2', data, ['3', '4'])).toBe(true);
    expect(isNodeIndeterminate('2', data, ['3', '4', '5'])).toBe(false);
  });
});
