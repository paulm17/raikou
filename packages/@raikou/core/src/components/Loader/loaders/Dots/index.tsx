import { forwardRef } from 'react';
import cx from 'clsx';
import { Box } from '../../../../core';
import { RaikouLoaderComponent } from '../../Loader.types';
import { LoaderDotsLoaderStyle, LoaderDotStyle } from './Dots.css';

export const Dots: RaikouLoaderComponent = forwardRef(({ className, ...others }, ref) => (
  <Box component="span" className={cx(LoaderDotsLoaderStyle, className)} {...others} ref={ref}>
    <span className={LoaderDotStyle} />
    <span className={LoaderDotStyle} />
    <span className={LoaderDotStyle} />
  </Box>
));

Dots.displayName = '@raikou/core/Dots';
