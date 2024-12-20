import { keys, rem } from '../../../../core';
import type { AppShellProps } from '../../AppShell';
import {
  AppShellIconListConfiguration,
  AppShellNavbarConfiguration,
  AppShellResponsiveSize,
  AppShellSize,
} from '../../AppShell.types';
import { getBaseSize } from '../get-base-size/get-base-size';
import type { CSSVariables, MediaQueryVariables } from '../get-variables/get-variables';
import { isPrimitiveSize } from '../is-primitive-size/is-primitive-size';
import { isResponsiveSize } from '../is-responsive-size/is-responsive-size';

interface AssignHeaderVariablesInput {
  baseStyles: CSSVariables;
  minMediaStyles: MediaQueryVariables;
  header: AppShellProps['header'] | undefined;
  iconList: AppShellProps['iconList'] | undefined;
  navbar: AppShellProps['navbar'] | undefined;
}

export function assignHeaderVariables({
  baseStyles,
  minMediaStyles,
  header,
  iconList,
  navbar,
}: AssignHeaderVariablesInput) {
  const headerHeight = header?.height;

  const collapsedHeaderTransform = 'translateY(calc(var(--app-shell-header-height) * -1))';
  const shouldOffset = header?.offset ?? true;

  if (isPrimitiveSize(headerHeight)) {
    const baseSize = rem(getBaseSize(headerHeight));
    baseStyles['--app-shell-header-height'] = baseSize;
    if (shouldOffset) {
      baseStyles['--app-shell-header-offset-y'] = baseSize;
    }
  }

  if (isResponsiveSize(headerHeight)) {
    if (typeof headerHeight.base !== 'undefined') {
      baseStyles['--app-shell-header-height'] = rem(headerHeight.base);

      if (shouldOffset) {
        baseStyles['--app-shell-header-offset-y'] = rem(headerHeight.base);
      }
    }

    keys(headerHeight).forEach((key) => {
      if (key !== 'base') {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]['--app-shell-header-height'] = rem(headerHeight[key]);

        if (shouldOffset) {
          minMediaStyles[key]['--app-shell-header-offset-y'] = rem(headerHeight[key]);
        }
      }
    });
  }

  if (header?.collapsed) {
    baseStyles['--app-shell-header-transform'] = collapsedHeaderTransform;
    baseStyles['--app-shell-header-offset-y'] = '0px !important';
  }

  getPrimativeSize(iconList, navbar, baseStyles);
  getResponsiveSize(iconList, navbar, baseStyles);
  loopMediaStyles(iconList, navbar, minMediaStyles);
  iconListVisible();

  if (iconList?.breakpoint && !navbar?.collapsed?.mobile) {
    // console.log('hello iconlist breakpoint');
  }
}

function getBaseSizeNumber(width: AppShellSize | AppShellResponsiveSize) {
  if (isPrimitiveSize(width)) {
    const baseSize = rem(getBaseSize(width));
    return Number(baseSize);
  }

  return 0;
}

function getPrimativeSize(
  iconList: AppShellIconListConfiguration | undefined,
  navbar: AppShellNavbarConfiguration | undefined,
  baseStyles: CSSVariables
) {
  let iconListNumber = 0;
  let navbarNumber = 0;

  if (iconList?.layout === 'alt') {
    iconListNumber = getBaseSizeNumber(iconList?.width) || 0;
  }

  if (navbar?.layout === 'alt') {
    navbarNumber = getBaseSizeNumber(navbar?.width) || 0;
  }

  if (iconList?.layout === 'alt' || navbar?.layout === 'alt') {
    baseStyles['--app-shell-header-start-x'] = rem(iconListNumber + navbarNumber);
  }
}

function getResponsiveSizeNumber(width: AppShellSize | AppShellResponsiveSize) {
  if (isResponsiveSize(width)) {
    if (typeof width.base !== 'undefined') {
      return Number(width.base) || 0;
    }
  }

  return 0;
}

function getResponsiveSize(
  iconList: AppShellIconListConfiguration | undefined,
  navbar: AppShellNavbarConfiguration | undefined,
  baseStyles: CSSVariables
) {
  let iconListNumber = 0;
  let navbarNumber = 0;

  if (iconList?.layout === 'alt') {
    if (!iconList?.collapsed?.desktop) {
      iconListNumber = getResponsiveSizeNumber(iconList?.width);
    }

    if (!iconListVisible()) {
      iconListNumber = 0;
    }
  }

  if (navbar?.layout === 'alt') {
    if (!navbar?.collapsed?.desktop) {
      navbarNumber = getResponsiveSizeNumber(navbar?.width);
    }

    if (!navbarVisible()) {
      navbarNumber = 0;
    }
  }

  baseStyles['--app-shell-header-start-x'] = rem(iconListNumber + navbarNumber);
}

function loopMediaStyles(
  iconList: AppShellIconListConfiguration | undefined,
  navbar: AppShellNavbarConfiguration | undefined,
  minMediaStyles: MediaQueryVariables
) {
  const styles = {} as Record<string, number>;

  if (iconList?.layout === 'alt') {
    if (!iconList?.collapsed?.desktop) {
      const iconListWidth = iconList?.width;

      if (isResponsiveSize(iconListWidth)) {
        keys(iconListWidth).forEach((key) => {
          if (key !== 'base') {
            styles[key] = Number(iconListWidth[key]);
          }
        });
      }

      keys(styles).forEach((key) => {
        if (key !== 'base') {
          minMediaStyles[key] = minMediaStyles[key] || {};
          minMediaStyles[key]['--app-shell-header-start-x'] = rem(styles[key]);
        }
      });
    }
  }

  if (navbar?.layout === 'alt') {
    if (!navbar?.collapsed?.desktop) {
      const navbarWidth = navbar?.width;

      if (isResponsiveSize(navbarWidth)) {
        keys(navbarWidth).forEach((key) => {
          if (key !== 'base') {
            styles[key] = Number(styles[key] || 0) + Number(navbarWidth[key]);
          }
        });
      }

      keys(styles).forEach((key) => {
        if (key !== 'base') {
          minMediaStyles[key] = minMediaStyles[key] || {};
          minMediaStyles[key]['--app-shell-header-start-x'] = rem(styles[key]);
        }
      });
    }
  }
}

function iconListVisible() {
  const el = document.querySelector('.raikou-AppShell-iconList');

  if (el) {
    return el?.getBoundingClientRect().width !== 1;
  }

  return false;
}

function navbarVisible() {
  const el = document.querySelector('.raikou-AppShell-navbar');

  if (el) {
    return Math.sign(el?.getBoundingClientRect().x) !== -1;
  }

  return false;
}
