import { Center, Text, type RaikouSpacing, type StyleProp } from '@raikou/core';
import { IconDatabaseOff } from './icons/IconDatabaseOff';
import { dataTableEmptyStateIconStyle, dataTableEmptyStateStyle } from './DataTableEmptyState.css';

type DataTableEmptyStateProps = React.PropsWithChildren<{
  icon: React.ReactNode | undefined;
  text: string;
  pt: StyleProp<RaikouSpacing>;
  pb: StyleProp<RaikouSpacing>;
  active: boolean;
}>;

export function DataTableEmptyState({
  icon,
  text,
  pt,
  pb,
  active,
  children,
}: DataTableEmptyStateProps) {
  return (
    <Center pt={pt} pb={pb} className={dataTableEmptyStateStyle} data-active={active || undefined}>
      {children || (
        <>
          {icon || (
            <div className={dataTableEmptyStateIconStyle}>
              <IconDatabaseOff />
            </div>
          )}
          <Text component="div" size="sm" c="dimmed">
            {text}
          </Text>
        </>
      )}
    </Center>
  );
}
