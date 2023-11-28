import React from 'react';
import { Box, BoxProps, ElementProps } from '@raikou/core';

export function Content(props: BoxProps & ElementProps<'div'>) {
  return (
    <Box
      style={{
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 500,
        fontSize: 'var(--raikou-font-size-lg)',
      }}
      {...props}
    />
  );
}
