import { IconMoodSmile } from '@tabler/icons-react';
import { render, tests } from '@raikou-tests/core';
import { Notification, NotificationProps, NotificationStylesNames } from './Notification';

const defaultProps: NotificationProps = {
  title: 'test-notification',
  children: 'test-description',
  closeButtonProps: { title: 'test-close' },
  icon: <IconMoodSmile size={18} />,
};

describe('@raikou/core/Notification', () => {
  tests.axe([<Notification {...defaultProps} key="1" />]);

  tests.itSupportsSystemProps<NotificationProps, NotificationStylesNames>({
    component: Notification,
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
    displayName: '@raikou/core/Notification',
    stylesApiSelectors: ['root', 'icon', 'body', 'title', 'description', 'closeButton'],
  });

  it('renders close button based on withCloseButton prop', () => {
    const { container, rerender } = render(
      <Notification {...defaultProps} withCloseButton={false} />
    );
    expect(container.querySelector('.raikou-Notification-closeButton')).not.toBeInTheDocument();

    rerender(<Notification {...defaultProps} withCloseButton />);
    expect(container.querySelector('.raikou-Notification-closeButton')).toBeInTheDocument();
  });

  it('renders given icon', () => {
    const { container, rerender } = render(<Notification {...defaultProps} icon="test-icon" />);
    expect(container.querySelector('.raikou-Notification-icon')).toHaveTextContent('test-icon');
    rerender(<Notification {...defaultProps} icon={null} />);
    expect(container.querySelector('.raikou-Notification-icon')).not.toBeInTheDocument();
  });

  it('displays loader when loading prop is true', () => {
    const { container, rerender } = render(<Notification {...defaultProps} loading />);
    expect(container.querySelector('.raikou-Notification-loader')).toBeInTheDocument();

    rerender(<Notification {...defaultProps} loading={false} />);
    expect(container.querySelector('.raikou-Notification-loader')).not.toBeInTheDocument();
  });

  it('renders given title', () => {
    const { container } = render(<Notification {...defaultProps} title="test-title" />);
    expect(container.querySelector('.raikou-Notification-title')).toHaveTextContent('test-title');
  });
});
