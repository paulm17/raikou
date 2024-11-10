import { forwardRef } from 'react';
import cx from 'clsx';
import { Box } from '../../../../core';
import { RaikouLoaderComponent } from '../../Loader.types';
import { LoaderTrail1Style, LoaderTrail2Style, LoaderTrailLoaderStyle } from './Trail.css';

export const Trail: RaikouLoaderComponent = forwardRef(({ className, ...others }, ref) => (
  <Box component="span" className={cx(LoaderTrailLoaderStyle, className)} {...others} ref={ref}>
    <span className={LoaderTrail1Style} />
    <span className={LoaderTrail2Style} />
  </Box>
));

Trail.displayName = '@raikou/core/Bars';
