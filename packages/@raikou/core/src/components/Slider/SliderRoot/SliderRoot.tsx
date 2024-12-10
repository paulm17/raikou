import { forwardRef } from 'react';
import { Box, BoxProps, ElementProps, RaikouColor, RaikouRadius, RaikouSize } from '../../../core';
import { useSliderContext } from '../Slider.context';

export interface SliderRootProps extends BoxProps, ElementProps<'div'> {
  size: RaikouSize | (string & {}) | number;
  children: React.ReactNode;
  color: RaikouColor | undefined;
  disabled: boolean | undefined;
  variant?: string;
  thumbSize: string | number | undefined;
  radius: RaikouRadius | undefined;
}

export const SliderRoot = forwardRef<HTMLDivElement, SliderRootProps>(
  ({ size, disabled, variant, color, thumbSize, radius, ...others }: SliderRootProps, ref) => {
    const { getStyles } = useSliderContext();

    return (
      <Box
        tabIndex={-1}
        variant={variant}
        size={size}
        ref={ref}
        {...getStyles('root')}
        {...others}
      />
    );
  }
);

SliderRoot.displayName = '@raikou/core/SliderRoot';
