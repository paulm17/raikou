import clsx from 'clsx';
import { Box, rem, ScrollArea, type ScrollAreaProps } from '@raikou/core';
import {
  dataTableScrollAreaBottomShadowStyle,
  dataTableScrollAreaCornerStyle,
  dataTableScrollAreaLeftShadowStyle,
  dataTableScrollAreaRightShadowStyle,
  dataTableScrollAreaScrollbarStyle,
  dataTableScrollAreaShadowBehindStyle,
  dataTableScrollAreaShadowStyle,
  dataTableScrollAreaShadowVisibleStyle,
  dataTableScrollAreaStyle,
  dataTableScrollAreaThumbStyle,
  dataTableScrollAreaTopShadowStyle,
} from './DataTableScrollArea.css';

type DataTableScrollAreaProps = React.PropsWithChildren<{
  topShadowVisible: boolean;
  leftShadowVisible: boolean;
  leftShadowBehind: boolean;
  rightShadowVisible: boolean;
  rightShadowBehind: boolean | undefined;
  bottomShadowVisible: boolean;
  headerHeight: number;
  footerHeight: number;
  onScrollPositionChange: ScrollAreaProps['onScrollPositionChange'];
  viewportRef: React.Ref<HTMLDivElement>;
  scrollAreaProps:
    | Omit<ScrollAreaProps, 'classNames' | 'styles' | 'onScrollPositionChange'>
    | undefined;
}>;

export function DataTableScrollArea({
  topShadowVisible,
  leftShadowVisible,
  leftShadowBehind,
  rightShadowVisible,
  rightShadowBehind,
  bottomShadowVisible,
  headerHeight,
  footerHeight,
  onScrollPositionChange,
  children,
  viewportRef,
  scrollAreaProps,
}: DataTableScrollAreaProps) {
  return (
    <ScrollArea
      {...scrollAreaProps}
      viewportRef={viewportRef}
      classNames={{
        root: dataTableScrollAreaStyle,
        scrollbar: dataTableScrollAreaScrollbarStyle,
        thumb: dataTableScrollAreaThumbStyle,
        corner: dataTableScrollAreaCornerStyle,
      }}
      onScrollPositionChange={onScrollPositionChange}
    >
      {children}
      <Box
        className={clsx(dataTableScrollAreaShadowStyle, dataTableScrollAreaTopShadowStyle, {
          [dataTableScrollAreaShadowStyle]: topShadowVisible,
        })}
        style={{ top: headerHeight ? rem(headerHeight) : 0 }}
      />
      <div
        className={clsx(dataTableScrollAreaShadowStyle, dataTableScrollAreaLeftShadowStyle, {
          [dataTableScrollAreaShadowStyle]: leftShadowVisible,
          [dataTableScrollAreaShadowBehindStyle]: leftShadowBehind,
        })}
      />
      <div
        className={clsx(dataTableScrollAreaShadowStyle, dataTableScrollAreaRightShadowStyle, {
          [dataTableScrollAreaShadowStyle]: rightShadowVisible,
          [dataTableScrollAreaShadowBehindStyle]: rightShadowBehind,
        })}
      />
      <Box
        className={clsx(dataTableScrollAreaShadowStyle, dataTableScrollAreaBottomShadowStyle, {
          [dataTableScrollAreaShadowVisibleStyle]: bottomShadowVisible,
        })}
        style={{ bottom: footerHeight ? rem(footerHeight + 1) : 0 }}
      />
    </ScrollArea>
  );
}
