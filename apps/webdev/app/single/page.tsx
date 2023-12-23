import { AppShell } from "@raikou/server";
import AppHeader from "./appHeader";

function Single() {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: false, mobile: true },
      }}
      padding="md"
    >
      <AppShell.Header>
        <AppHeader />
      </AppShell.Header>

      <AppShell.Navbar p="md">navbar</AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}

export default Single;
