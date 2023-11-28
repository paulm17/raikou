import React, { forwardRef } from "react";
import { IconChevronRight } from "@tabler/icons-react";
import { Group, Text, UnstyledButton } from "@raikou/server";
import { Avatar, Menu } from "@raikou/client";
import { RaikouDemo } from "@raikou/ds";
import { DemoMenuItems } from "./_menu-items";

const code = `
import { forwardRef } from 'react';
import { IconChevronRight } from '@tabler/icons-react';
import { Group, Avatar, Text, Menu, UnstyledButton } from '@raikou/core';

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, email, icon, ...others }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      style={{
        padding: 'var(--raikou-spacing-md)',
        color: 'var(--raikou-color-text)',
        borderRadius: 'var(--raikou-radius-sm)',
      }}
      {...others}
    >
      <Group>
        <Avatar src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {name}
          </Text>

          <Text c="dimmed" size="xs">
            {email}
          </Text>
        </div>

        {icon || <IconChevronRight size="1rem" />}
      </Group>
    </UnstyledButton>
  )
);

function Demo() {
  return (
    <Menu withArrow>
      <Menu.Target>
        <UserButton
          image="https://raw.githubusercontent.com/raikoudev/raikou/master/.demo/avatars/avatar-8.png"
          name="Harriette Spoonlicker"
          email="hspoonlicker@outlook.com"
        />
      </Menu.Target>
      {/* ... menu items */}
    </Menu>
  );
}
`;

interface UserButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, email, icon, ...others }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      style={{
        padding: "var(--raikou-spacing-md)",
        color: "var(--raikou-color-text)",
        borderRadius: "var(--raikou-radius-sm)",
      }}
      {...others}
    >
      <Group>
        <Avatar src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {name}
          </Text>

          <Text c="dimmed" size="xs">
            {email}
          </Text>
        </div>

        {icon || <IconChevronRight size="1rem" />}
      </Group>
    </UnstyledButton>
  ),
);

function Demo() {
  return (
    <Menu withArrow>
      <Menu.Target>
        <UserButton
          image="https://raw.githubusercontent.com/raikoudev/raikou/master/.demo/avatars/avatar-8.png"
          name="Harriette Spoonlicker"
          email="hspoonlicker@outlook.com"
        />
      </Menu.Target>
      <DemoMenuItems withTarget={false} />
    </Menu>
  );
}

export const customControl: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
};
