"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Alert,
  Anchor,
  Badge,
  Button,
  Center,
  Grid,
  Group,
  Image,
  Loader,
  Notification,
  Stack,
  Text,
  Timeline,
} from "@raikou/server";
import {
  Accordion,
  Checkbox,
  Chip,
  Combobox,
  Input,
  InputBase,
  MultiSelect,
  Pagination,
  Radio,
  ScrollArea,
  SegmentedControl,
  Select,
  Stepper,
  Switch,
  Tabs,
  TextInput,
  useCombobox,
} from "@raikou/client";
import {
  useColorScheme,
  createCSSVariables,
  RaikouThemeOverride,
} from "@raikou/system";
import { useElementSize } from "@raikou/hooks";
import { createTheme } from "@raikou/global-store";
import { generateColors } from "@raikou/colors-generator";
import { CSSVariablesResolver } from "@raikou/system";

type Mode = "light" | "dark" | "system";
type Size = "xs" | "sm" | "md" | "lg" | "xl";

const allOpen = [
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
];

const themes = [
  {
    label: (
      <Group gap={3}>
        <Image className="w-[18px]" src="/logo.png" />
        <Text size={"14px"}>Mantine</Text>
      </Group>
    ),
    value: "mantine",
  },
  { label: "🧁 Cupcake", value: "cupcake" },
  { label: "🐝 Bumblebee", value: "bumblebee" },
  { label: "🧛 Dracula", value: "dracula" },
  { label: "🚗 Retro", value: "retro" },
  { label: "🌊 Synthwave", value: "synthwave" },
  { label: "🦊 Moonlight", value: "moonlight" },
];

function Themer() {
  const isMountedRef = useRef<boolean>(false);
  const { colorScheme, setColorScheme } = useColorScheme();
  const [mode, setMode] = useState<Mode>(colorScheme as Mode);
  const [size, setSize] = useState<Size>("xs");
  const [open, setOpen] = useState<string[]>(allOpen);
  const { ref, height } = useElementSize();
  const [value, setValue] = useState<string | null>("mantine");

  const modes = [
    { label: "Light mode", value: "light" },
    { label: "Dark mode", value: "dark" },
  ];
  const sizes = ["xs", "sm", "md", "lg", "xl"];

  const onOpenAll = () => {
    setOpen(allOpen);
  };

  const onCloseAll = () => {
    setOpen([]);
  };

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = themes.map((item) => (
    <Combobox.Option value={item.value} key={item.label.toString()}>
      {item.label}
    </Combobox.Option>
  ));

  const changeTheme = (value: string | null, mode: Mode) => {
    let themeObj = {} as RaikouThemeOverride;
    let cssVarsResolver = {};

    if (value === "mantine") {
      themeObj = {
        primaryColor: "theme",
        black: "#000",
        white: "#fff",
        colors: {
          theme: generateColors("#2c4c81"),
        },
      };
    } else if (value === "cupcake") {
      if (mode === "dark") {
        setColorScheme("light");
      }

      themeObj = {
        primaryColor: "theme",
        black: "#291334",
        white: "#faf7f5",
        defaultGradient: { from: "#395990", to: "#dde4f1", deg: "180deg" },
        colors: {
          theme: generateColors("e9ddee"),
        },
      };

      cssVarsResolver = {
        light: {
          ".accordion-root": {
            "--raikou-accordion-item-border-color": "#395990",
          },
          '.input-wrapper[data-variant="default"]': {
            "--raikou-input-default-bd": "#395990",
          },
        },
      };
    } else if (value === "bumblebee") {
      if (mode === "dark") {
        setColorScheme("light");
      }

      themeObj = {
        primaryColor: "theme",
        black: "#333",
        white: "#fff",
        colors: {
          theme: generateColors("#5454A0"),
        },
      };

      cssVarsResolver = {
        light: {
          ".accordion-root": {
            "--raikou-accordion-item-border-color": "#5454A0",
          },
          '.input-wrapper[data-variant="default"]': {
            "--raikou-input-default-bd": "#5454A0",
          },
        },
      };
    } else if (value === "dracula") {
      if (mode === "light") {
        setColorScheme("dark");
      }

      themeObj = {
        primaryColor: "theme",
        black: "#282a36",
        white: "#f8f8f2",
        colors: {
          theme: generateColors("#959AB1"),
        },
      };

      cssVarsResolver = {
        light: {
          ".accordion-root": {
            "--raikou-accordion-item-border-color": "#959AB1",
          },
          '.input-wrapper[data-variant="default"]': {
            "--raikou-input-default-bd": "#959AB1",
          },
        },
      };
    } else if (value === "retro") {
      if (mode === "dark") {
        setColorScheme("light");
      }

      themeObj = {
        primaryColor: "theme",
        black: "#e4d8b4",
        white: "#282425",
        colors: {
          theme: generateColors("#CCC6B7"),
        },
      };

      cssVarsResolver = {
        light: {
          ".accordion-root": {
            "--raikou-accordion-item-border-color": "#CCC6B7",
          },
          '.input-wrapper[data-variant="default"]': {
            "--raikou-input-default-bd": "#CCC6B7",
          },
        },
      };
    } else if (value === "synthwave") {
      if (mode === "light") {
        setColorScheme("dark");
      }

      themeObj = {
        primaryColor: "theme",
        black: "#2d1b69",
        white: "#f9f7fd",
        colors: {
          theme: generateColors("#5A3ACF"),
        },
      };

      cssVarsResolver = {
        light: {
          ".accordion-root": {
            "--raikou-accordion-item-border-color": "#5A3ACF",
          },
          '.input-wrapper[data-variant="default"]': {
            "--raikou-input-default-bd": "#5A3ACF",
          },
        },
      };
    } else if (value === "moonlight") {
      if (mode === "light") {
        setColorScheme("dark");
      }

      themeObj = {
        primaryColor: "theme",
        black: "#1B1E2B",
        white: "#e4f3fa",
        colors: {
          theme: generateColors("#D1D5F0"),
        },
      };

      cssVarsResolver = {
        light: {
          ".accordion-root": {
            "--raikou-accordion-item-border-color": "#D1D5F0",
          },
          '.input-wrapper[data-variant="default"]': {
            "--raikou-input-default-bd": "#D1D5F0",
          },
        },
      };
    }

    const theme = createTheme(themeObj);

    createCSSVariables({
      theme,
      cssVariablesResolver: `return ${JSON.stringify(cssVarsResolver)}`,
    });
  };

  useLayoutEffect(() => {
    isMountedRef.current = true;
  }, []);

  useEffect(() => {
    if (isMountedRef.current) {
      changeTheme(value, mode);
    }
  }, [value]);

  useEffect(() => {
    if (isMountedRef.current) {
      setColorScheme(mode);
    }
  }, [mode]);

  useEffect(() => {
    if (isMountedRef.current) {
      setMode(colorScheme as Mode);
    }
  }, [colorScheme]);

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
                    onChange={(value: Mode) => setMode(value)}
                    data={modes}
                    disabled={value !== "mantine" ? true : false}
                  />

                  <SegmentedControl
                    size="xs"
                    value={size}
                    onChange={(value: Size) => setSize(value)}
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
            <ScrollArea.Autosize mah={height - 290} type="auto">
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
                      <Button variant="filled" disabled size={size}>
                        Disabled
                      </Button>
                      <Button loading={true} size={size}>
                        Loading
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
                  <Accordion.Panel>
                    <Radio.Group defaultValue="ng">
                      <Group>
                        <Radio label="React" value="react" />
                        <Radio label="Angular" value="ng" />
                        <Radio label="Svelte" value="sv" />
                      </Group>
                    </Radio.Group>
                  </Accordion.Panel>
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
                  <Accordion.Panel>
                    <>
                      <Stepper active={1}>
                        <Stepper.Step
                          label="First step"
                          description="Create an account"
                        >
                          Step 1 content: Create an account
                        </Stepper.Step>
                        <Stepper.Step
                          label="Second step"
                          description="Verify email"
                        >
                          Step 2 content: Verify email
                        </Stepper.Step>
                        <Stepper.Step
                          label="Final step"
                          description="Get full access"
                        >
                          Step 3 content: Get full access
                        </Stepper.Step>
                        <Stepper.Completed>
                          Completed, click back button to get to previous step
                        </Stepper.Completed>
                      </Stepper>

                      <Group justify="center" mt="xl">
                        <Button variant="default">Back</Button>
                        <Button>Next step</Button>
                      </Group>
                    </>
                  </Accordion.Panel>
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
                  <Accordion.Panel>
                    <Timeline active={1} bulletSize={24}>
                      <Timeline.Item title="New branch">
                        <Text c="dimmed" size="sm">
                          You&apos;ve created new branch{" "}
                          <Text variant="link" component="span" inherit>
                            fix-notifications
                          </Text>{" "}
                          from master
                        </Text>
                        <Text size="xs" mt={4}>
                          2 hours ago
                        </Text>
                      </Timeline.Item>

                      <Timeline.Item title="Commits">
                        <Text c="dimmed" size="sm">
                          You&apos;ve pushed 23 commits to
                          <Text variant="link" component="span" inherit>
                            fix-notifications branch
                          </Text>
                        </Text>
                        <Text size="xs" mt={4}>
                          52 minutes ago
                        </Text>
                      </Timeline.Item>

                      <Timeline.Item title="Pull request" lineVariant="dashed">
                        <Text c="dimmed" size="sm">
                          You&apos;ve submitted a pull request
                          <Text variant="link" component="span" inherit>
                            Fix incorrect notification message (#187)
                          </Text>
                        </Text>
                        <Text size="xs" mt={4}>
                          34 minutes ago
                        </Text>
                      </Timeline.Item>

                      <Timeline.Item title="Code review">
                        <Text c="dimmed" size="sm">
                          <Text variant="link" component="span" inherit>
                            Robert Gluesticker
                          </Text>{" "}
                          left a code review on your pull request
                        </Text>
                        <Text size="xs" mt={4}>
                          12 minutes ago
                        </Text>
                      </Timeline.Item>
                    </Timeline>
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="alert">
                  <Accordion.Control>Alert</Accordion.Control>
                  <Accordion.Panel>
                    <Stack>
                      <Alert
                        variant="default"
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
                      <Loader size={size} />
                      <Loader size={size} type="bars" />
                      <Loader size={size} type="dots" />
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
      <Grid.Col span={3} p={0}>
        <Stack p="xs" gap={4}>
          {!isMountedRef.current && <Loader size="xs" />}
          {isMountedRef.current && (
            <Combobox
              store={combobox}
              onOptionSubmit={(val) => {
                setValue(val);
                combobox.closeDropdown();
              }}
            >
              <Combobox.Target>
                <Group grow>
                  Theme
                  <InputBase
                    component="button"
                    pointer
                    rightSection={<Combobox.Chevron />}
                    onClick={() => combobox.toggleDropdown()}
                  >
                    {value === null ? (
                      <Input.Placeholder>Pick value</Input.Placeholder>
                    ) : (
                      themes.filter((t) => t.value === value)[0].label
                    )}
                  </InputBase>
                </Group>
              </Combobox.Target>

              <Combobox.Dropdown>
                <Combobox.Options>{options}</Combobox.Options>
              </Combobox.Dropdown>
            </Combobox>
          )}
        </Stack>
      </Grid.Col>
    </Grid>
  );
}

export default Themer;
