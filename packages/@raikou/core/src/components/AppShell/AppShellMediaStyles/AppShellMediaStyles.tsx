import { InlineStyles, useRaikouTheme } from '../../../core';
import type { AppShellProps } from '../AppShell';
import { getVariables } from './get-variables/get-variables';

interface AppShellMediaStylesProps {
  navbar: AppShellProps['navbar'] | undefined;
  header: AppShellProps['header'] | undefined;
  aside: AppShellProps['aside'] | undefined;
  footer: AppShellProps['footer'] | undefined;
  iconList: AppShellProps['iconList'] | undefined;
  padding: AppShellProps['padding'] | undefined;
}

export function AppShellMediaStyles({
  navbar,
  header,
  aside,
  footer,
  iconList,
  padding,
}: AppShellMediaStylesProps) {
  const theme = useRaikouTheme();
  const { media, baseStyles } = getVariables({
    navbar,
    header,
    footer,
    aside,
    iconList,
    padding,
    theme,
  });
  return <InlineStyles media={media} styles={baseStyles} selector=":root" />;
}
