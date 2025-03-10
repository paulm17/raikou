import type { RaikouBreakpoint } from '../../core';

export type AppShellSize = number | (string & {});

export interface AppShellResponsiveSize {
  base?: AppShellSize;
  xs?: AppShellSize;
  sm?: AppShellSize;
  md?: AppShellSize;
  lg?: AppShellSize;
  xl?: AppShellSize;
  [key: string]: AppShellSize | undefined;
}

export interface AppShellIconListConfiguration {
  width: AppShellSize | AppShellResponsiveSize;
  breakpoint: RaikouBreakpoint | (string & {}) | number;
  collapsed?: { desktop?: boolean; mobile?: boolean };
  layout?: 'alt';
}

export interface AppShellNavbarConfiguration {
  width: AppShellSize | AppShellResponsiveSize;
  breakpoint: RaikouBreakpoint | (string & {}) | number;
  collapsed?: { desktop?: boolean; mobile?: boolean };
  layout?: 'alt';
}

export interface AppShellAsideConfiguration {
  width: AppShellSize | AppShellResponsiveSize;
  breakpoint: RaikouBreakpoint | (string & {}) | number;
  collapsed?: { desktop?: boolean; mobile?: boolean };
  layout?: 'alt';
}

export interface AppShellHeaderConfiguration {
  height: AppShellSize | AppShellResponsiveSize;
  collapsed?: boolean;
  offset?: boolean;
}

export interface AppShellFooterConfiguration {
  height: AppShellSize | AppShellResponsiveSize;
  collapsed?: boolean;
  offset?: boolean;
}

export type AppShellLayout = 'iconList' | 'navbar' | 'aside';
