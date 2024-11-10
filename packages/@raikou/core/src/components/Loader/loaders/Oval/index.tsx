import { forwardRef } from 'react';
import cx from 'clsx';
import { Box } from '../../../../core';
import { RaikouLoaderComponent } from '../../Loader.types';
import { LoaderOvalLoaderStyle } from './Oval.css';

export const Oval: RaikouLoaderComponent = forwardRef(({ className, ...others }, ref) => (
  <Box component="span" className={cx(LoaderOvalLoaderStyle, className)} {...others} ref={ref} />
));

Oval.displayName = '@raikou/core/Oval';
