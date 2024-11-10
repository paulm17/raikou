import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
}

export function itSupportsId<Props>(options: Options<Props>, name = 'supports id') {
  it(name, () => {
    render(<options.component {...options.props} id="test-raikou-id" />);
    expect(document.querySelector('#test-raikou-id')).not.toBe(null);
  });
}
