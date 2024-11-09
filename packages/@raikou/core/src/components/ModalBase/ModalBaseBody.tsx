import { forwardRef } from 'react';
import cx from 'clsx';
import { Box, BoxProps, ElementProps } from '../../core';
import { useModalBaseContext } from './ModalBase.context';
import { useModalBodyId } from './use-modal-body-id';
import { ModalBaseBodyStyle } from './ModalBase.css';

export interface ModalBaseBodyProps extends BoxProps, ElementProps<'div'> {}

export const ModalBaseBody = forwardRef<HTMLDivElement, ModalBaseBodyProps>(
  ({ className, ...others }, ref) => {
    const bodyId = useModalBodyId();
    const ctx = useModalBaseContext();
    return (
      <Box
        ref={ref}
        {...others}
        id={bodyId}
        className={cx({ [ModalBaseBodyStyle]: !ctx.unstyled }, className)}
      />
    );
  }
);

ModalBaseBody.displayName = '@raikou/core/ModalBaseBody';
