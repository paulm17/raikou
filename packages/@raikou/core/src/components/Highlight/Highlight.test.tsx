import { render, tests } from '@raikou-tests/core';
import { TextStylesNames } from '../Text';
import { Highlight, HighlightProps } from './Highlight';

const defaultProps: HighlightProps = {
  children: 'test',
  highlight: 't',
};

describe('@raikou/core/Highlight', () => {
  tests.itSupportsSystemProps<HighlightProps, TextStylesNames>({
    component: Highlight,
    props: defaultProps,
    mod: true,
    polymorphic: true,
    styleProps: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    id: true,
    refType: HTMLParagraphElement,
    displayName: '@raikou/core/Highlight',
    stylesApiSelectors: ['root'],
  });

  it('highlights correct value', () => {
    const { container } = render(<Highlight highlight="he">Hello</Highlight>);
    expect(container.querySelector('mark')!.textContent).toBe('He');
  });
});
