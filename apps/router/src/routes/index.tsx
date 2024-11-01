import { ActionIcon, Button, Loader } from "@raikou/core";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <>
      <Button
        loading={true}
        loaderPosition="left"
        loaderProps={{ type: "trail" }}
        onClick={() => console.log("click")}
      >
        hello
      </Button>
    </>
  );
}
