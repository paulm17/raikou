import { render, screen } from '@raikou-tests/core';
import { FocusTrap } from './FocusTrap';

describe('@raikou/core/FocusTrap', () => {
  it('manages aria-hidden attributes', () => {
    const adjacentDiv = document.createElement('div');
    adjacentDiv.setAttribute('data-testid', 'adjacent');
    document.body.appendChild(adjacentDiv);

    const { rerender } = render(
      <FocusTrap active>
        <div />
      </FocusTrap>
    );

    const adjacent = screen.getByTestId('adjacent');
    expect(adjacent).toHaveAttribute('aria-hidden', 'true');

    rerender(
      <FocusTrap active={false}>
        <div />
      </FocusTrap>
    );

    expect(adjacent).not.toHaveAttribute('aria-hidden');
  });

  it('has correct displayName', () => {
    expect(FocusTrap.displayName).toBe('@raikou/core/FocusTrap');
  });
});
