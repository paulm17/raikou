import { forwardRef } from 'react';
import cx from 'clsx';
import { Box, BoxProps, ElementProps } from '../../core';
import { useModalBaseContext } from './ModalBase.context';
import { ModalBaseHeaderStyle } from './ModalBase.css';

export interface ModalBaseHeaderProps extends BoxProps, ElementProps<'header'> {}

export const ModalBaseHeader = forwardRef<HTMLElement, ModalBaseHeaderProps>(
  ({ className, ...others }, ref) => {
    const ctx = useModalBaseContext();
    return (
      <Box
        component="header"
        ref={ref}
        className={cx({ [ModalBaseHeaderStyle]: !ctx.unstyled }, className)}
        {...others}
      />
    );
  }
);

ModalBaseHeader.displayName = '@raikou/core/ModalBaseHeader';
