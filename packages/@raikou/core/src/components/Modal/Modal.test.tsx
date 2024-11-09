import { createContextContainer, render, tests } from '@raikou-tests/core';
import { Modal, ModalProps, ModalStylesNames } from './Modal';
import { ModalBody, ModalBodyProps } from './ModalBody';
import { ModalCloseButton, ModalCloseButtonProps } from './ModalCloseButton';
import { ModalContent, ModalContentProps } from './ModalContent';
import { ModalHeader, ModalHeaderProps } from './ModalHeader';
import { ModalOverlay, ModalOverlayProps } from './ModalOverlay';
import { ModalRoot, ModalRootProps } from './ModalRoot';
import { ModalTitle, ModalTitleProps } from './ModalTitle';

const defaultProps: ModalProps = {
  opened: true,
  onClose: () => {},
  title: 'test-title',
  withinPortal: false,
};

const createModalContextContainer = (component: any) =>
  createContextContainer(component, ModalRoot, defaultProps);

const BodyContainer = createModalContextContainer(ModalBody);
const CloseButtonContainer = createModalContextContainer(ModalCloseButton);
const ContentContainer = createModalContextContainer(ModalContent);
const HeaderContainer = createModalContextContainer(ModalHeader);
const OverlayContainer = createModalContextContainer(ModalOverlay);
const TitleContainer = createModalContextContainer(ModalTitle);

describe('@raikou/core/Modal', () => {
  tests.itSupportsSystemProps<ModalProps, ModalStylesNames>({
    component: Modal,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@raikou/core/Modal',
    stylesApiSelectors: ['root', 'body', 'close', 'content', 'header', 'inner', 'overlay', 'title'],
    selector: '.raikou-Modal-root',
    variantSelector: '.raikou-Modal-root',
    sizeSelector: '.raikou-Modal-root',
  });

  it('sets data-centered attribute when centered prop is passed', () => {
    const { container, rerender } = render(<Modal {...defaultProps} centered />);
    expect(container.querySelector('.raikou-Modal-root')).toHaveAttribute('data-centered');

    rerender(<Modal {...defaultProps} centered={false} />);
    expect(container.querySelector('.raikou-Modal-root')).not.toHaveAttribute('data-centered');
  });

  it('sets data-full-screen attribute when fullScreen prop is passed', () => {
    const { container, rerender } = render(<Modal {...defaultProps} fullScreen />);
    expect(container.querySelector('.raikou-Modal-root')).toHaveAttribute('data-full-screen');

    rerender(<Modal {...defaultProps} fullScreen={false} />);
    expect(container.querySelector('.raikou-Modal-root')).not.toHaveAttribute('data-full-screen');
  });

  it('does not render overlay when withOverlay is false', () => {
    const { container, rerender } = render(<Modal {...defaultProps} withOverlay={false} />);
    expect(container.querySelector('.raikou-Modal-overlay')).not.toBeInTheDocument();

    rerender(<Modal {...defaultProps} withOverlay />);
    expect(container.querySelector('.raikou-Modal-overlay')).toBeInTheDocument();
  });

  it('does not render header if title and withCloseButton are not provided', () => {
    const { container, rerender } = render(
      <Modal {...defaultProps} title={null} withCloseButton />
    );
    expect(container.querySelector('.raikou-Modal-header')).toBeInTheDocument();

    rerender(<Modal {...defaultProps} withCloseButton={false} title="test-title" />);
    expect(container.querySelector('.raikou-Modal-header')).toBeInTheDocument();

    rerender(<Modal {...defaultProps} withCloseButton={false} title={null} />);
    expect(container.querySelector('.raikou-Modal-header')).not.toBeInTheDocument();
  });

  it('renders given title', () => {
    const { container } = render(<Modal {...defaultProps} title="test-title" />);
    expect(container.querySelector('.raikou-Modal-title')).toHaveTextContent('test-title');
  });

  it('exposes compound components', () => {
    expect(Modal.Root).toBe(ModalRoot);
    expect(Modal.Overlay).toBe(ModalOverlay);
    expect(Modal.Content).toBe(ModalContent);
    expect(Modal.Body).toBe(ModalBody);
    expect(Modal.Header).toBe(ModalHeader);
    expect(Modal.Title).toBe(ModalTitle);
    expect(Modal.CloseButton).toBe(ModalCloseButton);
  });
});

describe('@raikou/core/ModalRoot', () => {
  tests.itSupportsSystemProps<ModalRootProps, 'root'>({
    component: ModalRoot,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@raikou/core/ModalRoot',
    stylesApiSelectors: ['root'],
    selector: '.raikou-Modal-root',
    variantSelector: '.raikou-Modal-root',
    sizeSelector: '.raikou-Modal-root',
    stylesApiName: 'Modal',
  });
});

describe('@raikou/core/ModalBody', () => {
  tests.itSupportsSystemProps<ModalBodyProps>({
    component: BodyContainer,
    props: {},
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@raikou/core/ModalBody',
    selector: '.raikou-Modal-body',
    variantSelector: '.raikou-Modal-body',
    sizeSelector: '.raikou-Modal-body',
  });
});

describe('@raikou/core/ModalCloseButton', () => {
  tests.itSupportsSystemProps<ModalCloseButtonProps>({
    component: CloseButtonContainer,
    props: {},
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLButtonElement,
    displayName: '@raikou/core/ModalCloseButton',
    selector: '.raikou-Modal-close',
    variantSelector: '.raikou-Modal-close',
    sizeSelector: '.raikou-Modal-close',
  });
});

describe('@raikou/core/ModalContent', () => {
  tests.itSupportsSystemProps<ModalContentProps>({
    component: ContentContainer,
    props: {},
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLElement,
    displayName: '@raikou/core/ModalContent',
    selector: '.raikou-Modal-content',
    variantSelector: '.raikou-Modal-content',
    sizeSelector: '.raikou-Modal-content',
  });
});

describe('@raikou/core/ModalHeader', () => {
  tests.itSupportsSystemProps<ModalHeaderProps>({
    component: HeaderContainer,
    props: {},
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLElement,
    displayName: '@raikou/core/ModalHeader',
    selector: '.raikou-Modal-header',
    variantSelector: '.raikou-Modal-header',
    sizeSelector: '.raikou-Modal-header',
  });
});

describe('@raikou/core/ModalOverlay', () => {
  tests.itSupportsSystemProps<ModalOverlayProps>({
    component: OverlayContainer,
    props: {},
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@raikou/core/ModalOverlay',
    selector: '.raikou-Modal-overlay',
    variantSelector: '.raikou-Modal-overlay',
    sizeSelector: '.raikou-Modal-overlay',
  });
});

describe('@raikou/core/ModalTitle', () => {
  tests.itSupportsSystemProps<ModalTitleProps>({
    component: TitleContainer,
    props: {},
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLHeadingElement,
    displayName: '@raikou/core/ModalTitle',
    selector: '.raikou-Modal-title',
    variantSelector: '.raikou-Modal-title',
    sizeSelector: '.raikou-Modal-title',
  });
});
