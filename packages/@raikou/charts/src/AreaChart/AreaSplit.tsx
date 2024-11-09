import { getThemeColor, RaikouColor, useRaikouTheme } from '@raikou/core';

interface AreaSplitProps {
  offset: number;
  colors: [RaikouColor, RaikouColor];
  id?: string;
  fillOpacity: number | undefined;
}

export function AreaSplit({ offset, id, colors, fillOpacity }: AreaSplitProps) {
  const theme = useRaikouTheme();

  return (
    <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
      <stop
        offset={offset}
        stopColor={getThemeColor(colors[0], theme)}
        stopOpacity={fillOpacity ?? 0.2}
      />
      <stop
        offset={offset}
        stopColor={getThemeColor(colors[1], theme)}
        stopOpacity={fillOpacity ?? 0.2}
      />
    </linearGradient>
  );
}

AreaSplit.displayName = '@raikou/charts/AreaSplit';
