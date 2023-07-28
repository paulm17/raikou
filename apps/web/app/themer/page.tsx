"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Alert,
  Anchor,
  Badge,
  Box,
  Button,
  Center,
  Group,
  Loader,
  Notification,
  Stack,
  Text,
} from "@raikou/server";
import {
  Accordion,
  Checkbox,
  Chip,
  Grid,
  MultiSelect,
  Pagination,
  ScrollArea,
  SegmentedControl,
  Select,
  Switch,
  Tabs,
  TextInput,
} from "@raikou/client";
import { useColorScheme } from "@raikou/system";
import { useElementSize } from "@raikou/hooks";

type Mode = "light" | "dark" | "system";
type Size = "xs" | "sm" | "md" | "lg" | "xl";

function Themer() {
  const isMountedRef = useRef<boolean>(false);
  const { colorScheme, setColorScheme } = useColorScheme();
  const [mode, setMode] = useState<Mode>(colorScheme as Mode);
  const [size, setSize] = useState<Size>("xs");
  const [open, setOpen] = useState<string[]>([]);
  const { ref, height } = useElementSize();

  const modes = [
    { label: "Light mode", value: "light" },
    { label: "Dark mode", value: "dark" },
  ];
  const sizes = ["xs", "sm", "md", "lg", "xl"];

  const onOpenAll = () => {
    setOpen([
      "button",
      "checkbox",
      "switch",
      "radio",
      "chip",
      "inputs",
      "anchor",
      "pagination",
      "stepper",
      "tabs",
      "badge",
      "timeline",
      "alert",
      "loader",
      "notification",
      "segmentedControl",
    ]);
  };

  const onCloseAll = () => {
    setOpen([]);
  };

  useEffect(() => {
    if (isMountedRef.current) {
      setColorScheme(mode as Mode);
    }
  }, [mode]);

  useLayoutEffect(() => {
    isMountedRef.current = true;
  }, []);

  return (
    <Grid
      ref={ref}
      justify="center"
      align="stretch"
      py={10}
      className="h-screen"
    >
      <Grid.Col span="auto" p={8}>
        <Center>
          <Stack className="w-[80%]">
            {!isMountedRef.current && <Loader size="xs" />}
            {isMountedRef.current && (
              <Group justify="space-between">
                <Group>
                  <SegmentedControl
                    size="xs"
                    value={mode as Mode}
                    onChange={(value) => setMode(value as Mode)}
                    data={modes}
                  />

                  <SegmentedControl
                    size="xs"
                    value={size}
                    onChange={(value) => setSize(value as Size)}
                    data={sizes}
                  />
                </Group>
                <Group grow>
                  <Button
                    size="xs"
                    variant={mode === "light" ? "outline" : "light"}
                    radius={0}
                    color={mode === "light" ? "gray" : "gray.6"}
                    onClick={onOpenAll}
                    classNames={{
                      root:
                        mode === "dark"
                          ? "border border-gray-700 border-solid"
                          : "",
                    }}
                  >
                    <Text
                      size="xs"
                      className={`${
                        mode === "light" ? "text-black" : "text-white"
                      } font-medium`}
                    >
                      Open all
                    </Text>
                  </Button>
                  <Button
                    size="xs"
                    variant={mode === "light" ? "outline" : "light"}
                    radius={0}
                    color={mode === "light" ? "gray" : "gray.6"}
                    onClick={onCloseAll}
                    classNames={{
                      root:
                        mode === "dark"
                          ? "border border-gray-700 border-solid"
                          : "",
                    }}
                  >
                    <Text
                      size="xs"
                      className={`${
                        mode === "light" ? "text-black" : "text-white"
                      } font-medium`}
                    >
                      Close all
                    </Text>
                  </Button>
                </Group>
              </Group>
            )}
            <ScrollArea.Autosize mah={height - 350} type="auto">
              <Accordion multiple value={open} onChange={setOpen}>
                <Accordion.Item value="button">
                  <Accordion.Control>Button</Accordion.Control>
                  <Accordion.Panel>
                    <Group>
                      <Button variant="filled" size={size}>
                        Filled
                      </Button>
                      <Button variant="light" size={size}>
                        Light
                      </Button>
                      <Button variant="default" size={size}>
                        Default
                      </Button>
                      <Button variant="outline" size={size}>
                        Outline
                      </Button>
                      <Button variant="subtle" size={size}>
                        Subtle
                      </Button>
                      <Button variant="gradient" size={size}>
                        Gradient
                      </Button>
                    </Group>
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="checkbox">
                  <Accordion.Control>Checkbox</Accordion.Control>
                  <Accordion.Panel>
                    <Checkbox size={size} label="Checkbox" />
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="switch">
                  <Accordion.Control>Switch</Accordion.Control>
                  <Accordion.Panel>
                    <Switch size={size} label="Switch" />
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="radio">
                  <Accordion.Control>Radio</Accordion.Control>
                  <Accordion.Panel>TBD</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="chip">
                  <Accordion.Control>Chip</Accordion.Control>
                  <Accordion.Panel>
                    <Group>
                      <Chip size={size} variant="outline" checked>
                        Chip
                      </Chip>
                      <Chip size={size} variant="filled" checked>
                        Filled
                      </Chip>
                    </Group>
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="inputs">
                  <Accordion.Control>Inputs</Accordion.Control>
                  <Accordion.Panel>
                    <Stack>
                      <TextInput size={size} placeholder="Text input" />
                      <Select
                        size={size}
                        placeholder="Select"
                        data={["One", "Two", "Three"]}
                        value={undefined}
                      />
                      <MultiSelect
                        size={size}
                        placeholder="Multi select"
                        data={["One", "Two", "Three"]}
                      />
                    </Stack>
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="anchor">
                  <Accordion.Control>Anchor</Accordion.Control>
                  <Accordion.Panel>
                    <Anchor
                      size={size}
                      href="https://mantine.dev/"
                      target="_blank"
                    >
                      This is a link
                    </Anchor>
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="pagination">
                  <Accordion.Control>Pagination</Accordion.Control>
                  <Accordion.Panel>
                    <Pagination size={size} total={10} />
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="stepper">
                  <Accordion.Control>Stepper</Accordion.Control>
                  <Accordion.Panel>TBD</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="tabs">
                  <Accordion.Control>Tabs</Accordion.Control>
                  <Accordion.Panel>
                    <Tabs defaultValue="gallery">
                      <Tabs.List>
                        <Tabs.Tab value="gallery">
                          <Text size={size}>Gallery</Text>
                        </Tabs.Tab>
                        <Tabs.Tab value="messages">
                          <Text size={size}>Messages</Text>
                        </Tabs.Tab>
                        <Tabs.Tab value="settings">
                          <Text size={size}>Settings</Text>
                        </Tabs.Tab>
                      </Tabs.List>
                    </Tabs>
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="badge">
                  <Accordion.Control>Badge</Accordion.Control>
                  <Accordion.Panel>
                    <Group>
                      <Badge size={size} variant="light">
                        Badge
                      </Badge>
                      <Badge size={size} variant="filled">
                        Filled
                      </Badge>
                      <Badge size={size} variant="dot">
                        Dot
                      </Badge>
                      <Badge size={size} variant="gradient">
                        Gradient
                      </Badge>
                      <Badge size={size} variant="outline">
                        Outline
                      </Badge>
                    </Group>
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="timeline">
                  <Accordion.Control>Timeline</Accordion.Control>
                  <Accordion.Panel>TBD</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="alert">
                  <Accordion.Control>Alert</Accordion.Control>
                  <Accordion.Panel>
                    <Stack>
                      <Alert
                        variant="default"
                        color="blue"
                        title={
                          <Text size={size} className="font-medium">
                            Alert!
                          </Text>
                        }
                        py={8}
                        px={14}
                      >
                        <Text size={size}> WYSIWYG Theme is cool!</Text>
                      </Alert>
                      <Alert
                        variant="filled"
                        color="blue"
                        title={
                          <Text size={size} className="font-medium">
                            Filled
                          </Text>
                        }
                        py={8}
                        px={14}
                      >
                        <Text size={size}>WYSIWYG Theme is cool!</Text>
                      </Alert>
                      <Alert
                        variant="outline"
                        color="blue"
                        title={
                          <Text size={size} className="font-medium">
                            Outline
                          </Text>
                        }
                        py={8}
                        px={14}
                      >
                        <Text size={size}>WYSIWYG Theme is cool!</Text>
                      </Alert>
                    </Stack>
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="loader">
                  <Accordion.Control>Loader</Accordion.Control>
                  <Accordion.Panel>
                    <Group>
                      <Loader size={size} color="blue" />
                      <Loader size={size} type="bars" color="blue" />
                      <Loader size={size} type="dots" color="blue" />
                    </Group>
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="notification">
                  <Accordion.Control>
                    <Text>Notification</Text>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Notification
                      title={
                        <Text size={size} component="span">
                          Default Notification
                        </Text>
                      }
                    >
                      <Text size={size} component="span">
                        This is default notification with title and body
                      </Text>
                    </Notification>
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="segmentedControl">
                  <Accordion.Control>Segmented Control</Accordion.Control>
                  <Accordion.Panel>
                    <SegmentedControl
                      size={size}
                      data={["one", "two", "three", "four"]}
                    />
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </ScrollArea.Autosize>
          </Stack>
        </Center>
      </Grid.Col>
      <Grid.Col span={3} p={8}>
        TBD
      </Grid.Col>
    </Grid>
  );
}

export default Themer;
