import { Badge } from "@raikou/core";
import { createFileRoute } from "@tanstack/react-router";
import { ContextMenu } from "../components/contextmenu";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return <ContextMenu />;
}
