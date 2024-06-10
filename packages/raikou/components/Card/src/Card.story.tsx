import React from "react";
import { Card } from "./Card";
import { Box } from "../../Box/src";
import { Image } from "../../Image/src";
import { Text } from "../../Text/src";

export default { title: "Card" };

export function Usage() {
  return (
    <div style={{ maxWidth: 400, padding: 40, margin: "auto" }}>
      <Card withBorder>
        <Card.Section inheritPadding py="md" withBorder>
          Card section 1
        </Card.Section>
        <div>Content 1</div>
        <Card.Section inheritPadding withBorder>
          Card section 2
        </Card.Section>
        <div>Content 2</div>
        <Card.Section inheritPadding withBorder>
          Card section 3
        </Card.Section>

        <Card.Section inheritPadding withBorder>
          Card section 4
        </Card.Section>
      </Card>
    </div>
  );
}

export function CustomComponent() {
  return (
    <div style={{ maxWidth: 400, padding: 40, margin: "auto" }}>
      <Card withBorder component="a" href="https://mantine.dev">
        <Card.Section bg="blue">Card section 1</Card.Section>
        <Card.Section component="button">Card section 2</Card.Section>
        <div>Content</div>
        <Card.Section bg="red">Card section 3</Card.Section>
      </Card>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ maxWidth: 400, padding: 40, margin: "auto" }}>
      <Card withBorder unstyled>
        <Card.Section inheritPadding py="md" withBorder>
          Card section 1
        </Card.Section>
        <div>Content 1</div>
        <Card.Section inheritPadding withBorder>
          Card section 2
        </Card.Section>
        <div>Content 2</div>
        <Card.Section inheritPadding withBorder>
          Card section 3
        </Card.Section>

        <Card.Section inheritPadding withBorder>
          Card section 4
        </Card.Section>
      </Card>
    </div>
  );
}

export function LinkDemo() {
  return (
    <Box className="flex w-[600px]">
      <Card
        shadow="sm"
        padding="xl"
        component="a"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
      >
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
            h={160}
            alt="No way!"
          />
        </Card.Section>

        <Text fw={500} size="lg" mt="md">
          You&apos;ve won a million dollars in cash!
        </Text>

        <Text mt="xs" c="dimmed" size="sm">
          Please click anywhere on this card to claim your reward, this is not a
          fraud, trust us
        </Text>
      </Card>
    </Box>
  );
}
