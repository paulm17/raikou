"use client";

import { CreateAppShellMediaStyles } from "@raikou/server";
import { Burger } from "@raikou/client";
import { useDisclosure } from "@raikou/hooks";
import { useEffect } from "react";

function AppHeader() {
  const [opened, { toggle }] = useDisclosure();

  useEffect(() => {
    CreateAppShellMediaStyles({
      aside: undefined,
      footer: undefined,
      padding: "sm",
      header: { height: 60 },
      navbar: {
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: false, mobile: !opened },
      },
    });
  }, [opened]);

  return (
    <>
      <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      header
    </>
  );
}

export default AppHeader;
