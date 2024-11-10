import { forwardRef } from 'react';
import { render, tests } from '@raikou-tests/core';
import { RaikouLoaderComponent } from './Loader.types';
import { defaultLoaders, Loader, LoaderProps, LoaderStylesNames } from './Pong';

const customLoader: RaikouLoaderComponent = forwardRef(() => <div data-custom-loader />);
customLoader.displayName = 'CustomLoader';

const defaultProps: LoaderProps = {};

describe('@raikou/core/Loader', () => {
  tests.itSupportsSystemProps<LoaderProps, LoaderStylesNames>({
    component: Loader,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    size: true,
    variant: true,
    extend: true,
    withProps: true,
    classes: true,
    id: true,
    refType: HTMLSpanElement,
    displayName: '@raikou/core/Loader',
    stylesApiSelectors: ['root'],
  });

  it('supports custom loaders', () => {
    const { container } = render(
      <Loader
        type="custom"
        loaders={{
          ...defaultLoaders,
          custom: customLoader,
        }}
      />
    );
    expect(container.querySelector('[data-custom-loader]')).toBeInTheDocument();
  });

  it('supports custom loaders on RaikouProvider', () => {
    const { container } = render(<Loader />, {
      components: {
        Loader: Loader.extend({
          defaultProps: {
            type: 'custom',
            loaders: { ...defaultLoaders, custom: customLoader },
          },
        }),
      },
    });

    expect(container.querySelector('[data-custom-loader]')).toBeInTheDocument();
  });

  it('sets data-size attribute', () => {
    const { container, rerender } = render(<Loader size="xl" />);
    expect(container.querySelector('[data-size="xl"]')).toBeInTheDocument();

    rerender(<Loader size={100} />);
    expect(container.querySelector('[data-size]')).not.toBeInTheDocument();
  });

  it('exposes defaultLoaders as static property', () => {
    expect(Loader.defaultLoaders).toStrictEqual(defaultLoaders);
  });
});
