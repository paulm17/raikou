import { getBreakpointValue, keys, RaikouTheme, rem } from '../../../../core';
import type { AppShellProps } from '../../AppShell';
import { getBaseSize } from '../get-base-size/get-base-size';
import type { CSSVariables, MediaQueryVariables } from '../get-variables/get-variables';
import { isPrimitiveSize } from '../is-primitive-size/is-primitive-size';
import { isResponsiveSize } from '../is-responsive-size/is-responsive-size';

interface AssignIconListVariablesInput {
  baseStyles: CSSVariables;
  minMediaStyles: MediaQueryVariables;
  maxMediaStyles: MediaQueryVariables;
  iconList: AppShellProps['iconList'] | undefined;
  theme: RaikouTheme;
}

export function assignIconListVariables({
  baseStyles,
  minMediaStyles,
  maxMediaStyles,
  iconList,
  theme,
}: AssignIconListVariablesInput) {
  const iconListWidth = iconList?.width;
  const collapsedIconListTransform = 'translateX(calc(var(--app-shell-iconlist-width) * -1))';
  const collapsedIconListTransformRtl = 'translateX(var(--app-shell-iconlist-width))';

  if (iconList?.breakpoint && !iconList?.collapsed?.mobile) {
    maxMediaStyles[iconList?.breakpoint] = maxMediaStyles[iconList?.breakpoint] || {};
    maxMediaStyles[iconList?.breakpoint]['--app-shell-iconlist-width'] = '100%';
    maxMediaStyles[iconList?.breakpoint]['--app-shell-iconlist-offset'] = '0px';
  }

  if (isPrimitiveSize(iconListWidth)) {
    const baseSize = rem(getBaseSize(iconListWidth));
    baseStyles['--app-shell-iconlist-width'] = baseSize;
    baseStyles['--app-shell-iconlist-offset'] = baseSize;
  }

  if (isResponsiveSize(iconListWidth)) {
    if (typeof iconListWidth.base !== 'undefined') {
      baseStyles['--app-shell-iconlist-width'] = rem(iconListWidth.base);
      baseStyles['--app-shell-iconlist-offset'] = rem(iconListWidth.base);
    }

    keys(iconListWidth).forEach((key) => {
      if (key !== 'base') {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]['--app-shell-iconlist-width'] = rem(iconListWidth![key]);
        minMediaStyles[key]['--app-shell-iconlist-offset'] = rem(iconListWidth![key]);
      }
    });
  }

  if (iconList?.collapsed?.desktop) {
    const breakpointValue = iconList!.breakpoint;
    minMediaStyles[breakpointValue] = minMediaStyles[breakpointValue] || {};
    minMediaStyles[breakpointValue]['--app-shell-iconlist-transform'] = collapsedIconListTransform;
    minMediaStyles[breakpointValue]['--app-shell-iconlist-transform-rtl'] =
      collapsedIconListTransformRtl;
    minMediaStyles[breakpointValue]['--app-shell-iconlist-offset'] = '0px !important';
  }

  if (iconList?.collapsed?.mobile) {
    const breakpointValue = getBreakpointValue(iconList!.breakpoint, theme.breakpoints) - 0.1;
    maxMediaStyles[breakpointValue] = maxMediaStyles[breakpointValue] || {};
    maxMediaStyles[breakpointValue]['--app-shell-iconlist-width'] = '0%';
    maxMediaStyles[breakpointValue]['--app-shell-iconlist-offset'] = '0px';
    maxMediaStyles[breakpointValue]['--app-shell-iconlist-opacity'] = '0';
    maxMediaStyles[breakpointValue]['--app-shell-iconlist-transform'] = collapsedIconListTransform;
    maxMediaStyles[breakpointValue]['--app-shell-iconlist-transform-rtl'] =
      collapsedIconListTransformRtl;
  }
}
