import { forwardRef } from 'react';
import cx from 'clsx';
import { BoxProps, ElementProps, RaikouRadius, RaikouShadow } from '../../core';
import { FocusTrap } from '../FocusTrap';
import { Paper } from '../Paper';
import { Transition, TransitionOverride } from '../Transition';
import { useModalBaseContext } from './ModalBase.context';
import { ModalBaseContentStyle, ModalBaseInnerStyle } from './ModalBase.css';

export interface ModalBaseContentProps extends BoxProps, ElementProps<'div'> {
  /** Props passed down to the `Transition` component */
  transitionProps?: TransitionOverride;

  /** Key of `theme.shadows` or any valid CSS value to set `box-shadow`, `none` by default */
  shadow?: RaikouShadow;

  /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `theme.defaultRadius` by default */
  radius?: RaikouRadius;
}

interface _ModalBaseContentProps extends ModalBaseContentProps {
  innerProps: React.ComponentPropsWithoutRef<'div'>;
}

export const ModalBaseContent = forwardRef<HTMLDivElement, _ModalBaseContentProps>(
  ({ transitionProps, className, innerProps, onKeyDown, style, ...others }, ref) => {
    const ctx = useModalBaseContext();

    return (
      <Transition
        mounted={ctx.opened}
        transition="pop"
        {...ctx.transitionProps}
        onExited={() => {
          ctx.onExitTransitionEnd?.();
          ctx.transitionProps?.onExited?.();
        }}
        onEntered={() => {
          ctx.onEnterTransitionEnd?.();
          ctx.transitionProps?.onEntered?.();
        }}
        {...transitionProps}
      >
        {(transitionStyles) => (
          <div
            {...innerProps}
            className={cx({ [ModalBaseInnerStyle]: !ctx.unstyled }, innerProps.className)}
          >
            <FocusTrap active={ctx.opened && ctx.trapFocus} innerRef={ref}>
              <Paper
                {...others}
                component="section"
                role="dialog"
                tabIndex={-1}
                aria-modal
                aria-describedby={ctx.bodyMounted ? ctx.getBodyId() : undefined}
                aria-labelledby={ctx.titleMounted ? ctx.getTitleId() : undefined}
                style={[style, transitionStyles]}
                className={cx({ [ModalBaseContentStyle]: !ctx.unstyled }, className)}
                unstyled={ctx.unstyled}
              >
                {others.children}
              </Paper>
            </FocusTrap>
          </div>
        )}
      </Transition>
    );
  }
);

ModalBaseContent.displayName = '@raikou/core/ModalBaseContent';
