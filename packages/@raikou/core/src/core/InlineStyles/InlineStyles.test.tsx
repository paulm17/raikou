import React from 'react';
import { render } from '@raikou-tests/core';
import { InlineStyles } from './InlineStyles';

describe('@raikou/core/InlineStyles', () => {
  it('renders styles', () => {
    const { container } = render(<InlineStyles selector="body" styles={{ color: 'red' }} />);
    expect(container.querySelector('[data-raikou-styles="inline"]')).toHaveTextContent(
      'body { color: red; }'
    );
  });

  it('renders media styles', () => {
    const { container } = render(
      <InlineStyles
        selector="body"
        styles={{ color: 'red' }}
        media={[{ query: '(min-width: 500px)', styles: { color: 'blue' } }]}
      />
    );
    expect(container.querySelector('[data-raikou-styles="inline"]')).toHaveTextContent(
      'body { color: red; } @media (min-width: 500px) { body { color: blue; } }'
    );
  });
});
