import { createFileRoute } from '@tanstack/react-router';
import { Badge } from '@raikou/core';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <Badge
      variant="filled"
      styles={(theme, __, ___) => ({
        root: {
          background: theme.colors.green[4],
        },
      })}
    >
      hello
    </Badge>
  );
}
