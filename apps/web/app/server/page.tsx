// "use client";

import {
  ActionIcon,
  Anchor,
  AspectRatio,
  BackgroundImage,
  Badge,
  Box,
  Blockquote,
  Breadcrumbs,
  Button,
  Center,
  CloseButton,
  ColorSwatch,
  Container,
  Code,
  Divider,
  Flex,
  Fieldset,
  Group,
  Kbd,
  Loader,
  Highlight,
  Mark,
  Paper,
  SimpleGrid,
  Skeleton,
  Space,
  Stack,
  Text,
  Title,
} from "@raikou/server";
import { IconInfoCircle } from "@tabler/icons-react";
import { IconHeart } from "@tabler/icons-react";

export default function Page() {
  const icon = <IconInfoCircle />;

  return (
    <>
      <a href="/client" style={{ fontSize: 16, color: "orange" }}>
        Goto Client Components
      </a>
      <br />
      <br />
      <Title order={2} ml={15}>
        Server Components
      </Title>
      <Group p={20}>
        <Stack
          classNames={{
            root: "w-[500px]",
          }}
        >
          <Title order={3}>Aspect Ratio</Title>
          <AspectRatio ratio={1}>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
              alt="img"
            />
          </AspectRatio>
          <Title order={3}>Background Image</Title>
          <BackgroundImage
            w={400}
            h={200}
            radius="md"
            src="https://images.unsplash.com/photo-1679692363620-d774a6cd92e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
          >
            Content
          </BackgroundImage>
          <Title order={3}>Badge</Title>
          <Badge>Unstyled badge 1</Badge>
          <Title order={3}>Blockquote</Title>
          <Blockquote color="blue" cite="– Forrest Gump" icon={icon} mt="xl">
            Life is like an npm install – you never know what you are going to
            get.
          </Blockquote>
        </Stack>
        <Stack
          classNames={{
            root: "w-[500px]",
          }}
        >
          <Title order={3}>Code</Title>
          <Box style={{ padding: 40 }}>
            <Code>Some code</Code>
            <Code color="blue.4">Code with color</Code>
          </Box>
          <Title order={3}>Group</Title>
          <Group grow>
            <Badge>Group Badge 1</Badge>
            <Badge>Group Badge 2</Badge>
          </Group>
          <Title order={3}>Kbd</Title>
          <Box style={{ padding: 40 }}>
            <Kbd>⌘</Kbd> + <Kbd>Shift</Kbd> + <Kbd>M</Kbd>
          </Box>
          <Title order={3}>Highlight</Title>
          <Box style={{ padding: 40 }}>
            <Highlight highlight={["this", "that"]}>
              Highlight this and also that, oh and this should be highlighted as
              well
            </Highlight>
          </Box>
          <Title order={3}>Mark</Title>
          <Box>
            <Mark color="orange.9">Theme color mark</Mark>
          </Box>
          <Title order={3}>Boxider</Title>
          <Box style={{ padding: 40 }}>
            <Box>First</Box>
            <Divider label="Divider label" labelPosition="right" />
            <Box>Second</Box>
          </Box>
          <Title order={3}>Text</Title>
          <Box style={{ padding: 40 }}>
            <Text size="xl">Just text</Text>
          </Box>
        </Stack>
        <Stack>
          <Title order={3}>Loader</Title>
          <Box style={{ padding: 40 }}>
            <Loader type="bars" mt="xl" />
          </Box>
          <Title order={3}>Flex</Title>
          <Flex gap="xl" direction="row" wrap="nowrap">
            <button type="button">First</button>
            <button type="button">Second</button>
            <button type="button">Third</button>
          </Flex>
          <Title order={3}>Container</Title>
          <Container size="xxs" h={50} bg="blue">
            Container
          </Container>
          <Title order={3}>Paper</Title>
          <Box style={{ padding: 40, maxWidth: 600 }}>
            <Paper radius="md" shadow="md" withBorder p="xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              et illo? Dolores mollitia, maiores est totam ab libero itaque
              fuga, dolorum hic nesciunt quibusdam, esse amet magni quia
              voluptatibus molestias!
            </Paper>
          </Box>
          <Title order={3}>Fieldset</Title>
          <Box style={{ padding: 40 }}>
            <Fieldset
              legend="Filled fieldset"
              variant="filled"
              mt="xl"
              radius="md"
            >
              <Badge>Fieldset Badge 1</Badge>
            </Fieldset>
          </Box>
          <Title order={3}>Color Swatch</Title>
          <Box style={{ padding: 40 }}>
            <Group>
              <ColorSwatch color="#ff00ff" />
              <ColorSwatch color="rgba(0, 56, 13, 0.2)" />
              <ColorSwatch color="rgba(0, 56, 13, 0.2)">$$</ColorSwatch>
              <ColorSwatch color="rgba(0, 56, 13, 0.2)" component="a" href="/">
                $$
              </ColorSwatch>
            </Group>
          </Box>
        </Stack>
        <Stack>
          <Title order={3}>Center</Title>
          <Center maw={400} h={100} bg="var(--raikou-color-gray-light)">
            <Box>Should be Center</Box>
          </Center>
          <Title order={3}>Button</Title>
          <Button variant="filled">Button</Button>
          <Title order={3}>Title</Title>
          <Title order={1} className="text-blue-200">
            A title is here
          </Title>
          <Title order={3}>Anchor</Title>
          <Anchor href="https://raikou.dev/" target="_blank" underline="always">
            Underline always
          </Anchor>
          <Title order={3}>Breadcrumbs</Title>
          <Box style={{ padding: 40 }}>
            <Breadcrumbs>
              <Anchor>Link 1</Anchor>
              <Anchor>Link 2</Anchor>
              <Anchor>Link 3</Anchor>
            </Breadcrumbs>
          </Box>
          <Title order={3}>Action Icon</Title>
          <ActionIcon
            variant="filled"
            size="xl"
            color="blue"
            aria-label="Gradient action icon"
          >
            <IconHeart />
          </ActionIcon>
          <Title order={3}>Stack</Title>
          <Stack>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
          </Stack>
        </Stack>
        <Stack>
          <Title order={3}>Closebutton</Title>
          <CloseButton variant="filled" size={30} />
          <Title order={3}>Simple Grid</Title>
          <Box style={{ maxWidth: 400 }}>
            <SimpleGrid>
              <Badge color="blue" mr="xs">
                Grid 1
              </Badge>
              <Badge color="red" mr="xs">
                Grid 2
              </Badge>
              <Badge color="orange" mr="xs">
                Grid 3
              </Badge>
            </SimpleGrid>
          </Box>
          <Title order={3}>Space</Title>
          <>
            <Text>First line</Text>
            <Space h="md" />
            <Text>Second line</Text>
          </>
          <Title order={3}>Skeleton</Title>
          <Skeleton height={50} circle mb="xl" />
        </Stack>
      </Group>
    </>
  );
}
