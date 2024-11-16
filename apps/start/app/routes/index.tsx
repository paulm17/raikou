import { createFileRoute } from '@tanstack/react-router';
import { Badge } from '@raikou/core';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return <Badge variant="filled">hello</Badge>;
}
