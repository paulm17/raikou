import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { List } from "@raikou/server";

const code = `
import { List } from '@raikou/core';

function Demo() {
  return (
    <List listStyleType="disc">
      <List.Item>First order item</List.Item>
      <List.Item>First order item</List.Item>
      <List.Item>
        First order item with list
        <List withPadding listStyleType="disc">
          <List.Item>Nested item</List.Item>
          <List.Item>Nested item</List.Item>
          <List.Item>
            Nested item with list
            <List withPadding listStyleType="disc">
              <List.Item>Event more nested</List.Item>
              <List.Item>Event more nested</List.Item>
            </List>
          </List.Item>
          <List.Item>Nested item</List.Item>
        </List>
      </List.Item>
      <List.Item>First order item</List.Item>
    </List>
  );
}
`;

function Demo() {
  return (
    <List listStyleType="disc">
      <List.Item>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </List.Item>
      <List.Item>First order item</List.Item>
      <List.Item>
        First order item with list
        <List withPadding listStyleType="disc">
          <List.Item>Nested item</List.Item>
          <List.Item>Nested item</List.Item>
          <List.Item>
            Nested item with list
            <List withPadding listStyleType="disc">
              <List.Item>Event more nested</List.Item>
              <List.Item>Event more nested</List.Item>
            </List>
          </List.Item>
          <List.Item>Nested item</List.Item>
        </List>
      </List.Item>
      <List.Item>First order item</List.Item>
    </List>
  );
}

export const nested: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
