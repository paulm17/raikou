import { AppShell, Button, Group, Skeleton, ActionIcon } from "@raikou/server";

function Testing5() {
  return (
    <AppShell
      padding="md"
      navbar={{
        width: { base: 200, md: 300 },
        breakpoint: "sm",
        collapsed: { desktop: false, mobile: false },
      }}
      aside={{
        width: { base: 200, md: 300 },
        breakpoint: "sm",
        collapsed: { desktop: false, mobile: false },
      }}
      header={{
        height: 50,
        collapsed: false,
      }}
      footer={{
        height: 50,
        collapsed: false,
      }}
    >
      <AppShell.Navbar>
        <AppShell.Section>First section</AppShell.Section>
        <AppShell.Section>Second section</AppShell.Section>
        <AppShell.Section grow>Grow section</AppShell.Section>
        <AppShell.Section>Last section</AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Header>Header</AppShell.Header>
      <AppShell.Main>
        <Group>
          <Button>Toggle header</Button>
          <Button>Toggle footer</Button>
          <Button>Toggle navbar</Button>
          <Button>Toggle navbar mobile</Button>

          <Button>Toggle aside</Button>
          <Button>Toggle aside mobile</Button>
        </Group>
        <p>Other content</p>
      </AppShell.Main>

      <AppShell.Aside>Aside</AppShell.Aside>

      <AppShell.Footer>Footer</AppShell.Footer>
    </AppShell>
  );
}

export default Testing5;
