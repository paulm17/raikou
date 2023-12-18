"use client";

import { Group, Stack, Title } from "@raikou/server";
import {
  Autocomplete,
  Avatar,
  Accordion,
  Checkbox,
  Chip,
  ColorPicker,
  Input,
  MultiSelect,
  NativeSelect,
  Pagination,
  Pill,
  PillsInput,
  Popover,
  Progress,
  Rating,
  RingProgress,
  Slider,
  Switch,
  TabsProps,
  Tabs,
  Tooltip,
} from "@raikou/client";
import { IconInfoCircle } from "@tabler/icons-react";
import { IconStar } from "@tabler/icons-react";
import { IconPackage } from "@tabler/icons-react";

const groceries = [
  {
    emoji: "🍎",
    value: "Apples",
    description:
      "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
  },
  {
    emoji: "🍌",
    value: "Bananas",
    description:
      "Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.",
  },
  {
    emoji: "🥦",
    value: "Broccoli",
    description:
      "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
  },
];

export default function Page() {
  const icon = <IconInfoCircle />;

  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  const getPills = (props: any) => (
    <>
      <Pill withRemoveButton {...props}>
        First
      </Pill>
      <Pill withRemoveButton {...props}>
        Second
      </Pill>
      <Pill withRemoveButton {...props}>
        Third
      </Pill>
      <Pill withRemoveButton {...props}>
        Fourth
      </Pill>
      <Pill withRemoveButton {...props}>
        Fifth
      </Pill>
      <Pill withRemoveButton {...props}>
        Sixth
      </Pill>
      <Pill withRemoveButton {...props}>
        Seventh
      </Pill>
      <Pill withRemoveButton {...props}>
        Eighth
      </Pill>
      {/* <Pill withRemoveButton>Ninth</Pill> */}
    </>
  );

  const marks = [
    { value: 20, label: "20%" },
    { value: 50, label: "50%" },
    { value: 80, label: "80%" },
  ];

  const Wrapper = (props: TabsProps) => (
    <Tabs maw={500} mx="auto" mt={40} {...props} />
  );

  const base = (
    <>
      <Tabs.List>
        <Tabs.Tab
          value="react"
          leftSection={<IconPackage size={16} />}
          rightSection={<IconPackage size={16} />}
        >
          React
        </Tabs.Tab>
        <Tabs.Tab value="sv">Svelte</Tabs.Tab>
        <Tabs.Tab value="ng">Wrapped tab</Tabs.Tab>
        <Tabs.Tab value="ds" disabled>
          Disabled
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="react" pr="sm">
        React Panel
      </Tabs.Panel>
      <Tabs.Panel value="sv" pr="sm">
        Svelte Panel
      </Tabs.Panel>
      <Tabs.Panel value="ng" pr="sm">
        Angular Panel
      </Tabs.Panel>
    </>
  );

  const options = [
    { value: "re", label: "React" },
    { value: "ng", label: "Angular" },
    { value: "vu", label: "Vue" },
    { value: "sv", label: "Svelte" },
    {
      group: "backend",
      items: [
        { value: "no", label: "Node" },
        { value: "ex", label: "Express" },
      ],
    },

    {
      group: "python",
      items: [
        { value: "dj", label: "Django" },
        { value: "fl", label: "Flask" },
      ],
    },
  ];

  return (
    <>
      <a href="/server" style={{ fontSize: 16, color: "orange" }}>
        Goto Server Components
      </a>
      <br />
      <br />
      <Title order={2} ml={15}>
        Client Components
      </Title>
      <Group p={20} grow>
        <Stack>
          <Title order={3}>Accordion</Title>
          <div className="w-[400px]">
            <Accordion defaultValue="Apples">{items}</Accordion>
          </div>
          <Title order={3}>Avatar</Title>
          <Group>
            <Avatar color="cyan" radius="xl">
              MK
            </Avatar>
            {/* Custom placeholder icon */}
            <Avatar color="blue" radius="sm">
              <IconStar size="1.5rem" />
            </Avatar>
          </Group>
          <Title order={3}>Checkbox</Title>
          <Checkbox defaultChecked label="I agree to sell my privacy" />
          <Title order={3}>Input</Title>
          <Input placeholder="default" />
          <Title order={3}>MultiSelect</Title>
          <MultiSelect
            data={["React", "Angular", "Svelte"]}
            placeholder="MultiSelect something"
          />
        </Stack>
        <Stack>
          <Title order={3}>Colorpicker</Title>
          <div style={{ paddingTop: 10, paddingBottom: 10 }}>
            <ColorPicker
              swatches={[
                "#25262b",
                "#868e96",
                "#fa5252",
                "#e64980",
                "#be4bdb",
                "#7950f2",
                "#4c6ef5",
                "#228be6",
                "#15aabf",
                "#12b886",
                "#40c057",
                "#82c91e",
                "#fab005",
                "#fd7e14",
              ]}
              format="rgba"
              fullWidth
            />
          </div>
          <Title order={3}>Native Select</Title>
          <div style={{ paddingTop: 10, paddingBottom: 10 }}>
            <NativeSelect data={["React", "Angular", "Vue"]} />
          </div>
          <Title order={3}>Pagination</Title>
          <Pagination total={45} disabled />
          <Title order={3}>PillsInput</Title>
          <div style={{ maxWidth: 400 }}>
            <PillsInput>
              <Pill.Group>
                {getPills({})}
                <PillsInput.Field placeholder="Pills input" />
              </Pill.Group>
            </PillsInput>
          </div>
          <Title order={3}>Popover</Title>
          <div style={{ paddingTop: 10, paddingBottom: 10 }}>
            <Popover>
              <Popover.Target>
                <button type="button">Toggle popover</button>
              </Popover.Target>

              <Popover.Dropdown>Dropdown</Popover.Dropdown>
            </Popover>
          </div>
          <Title order={3}>Slider</Title>
          <Slider defaultValue={45} marks={marks} size="md" />
          <Title order={3}>Switch</Title>
          <Switch label="I agree to sell my privacy" />
        </Stack>
        <Stack>
          <Title order={3}>Autocomplete</Title>
          <div style={{ paddingTop: 10, paddingBottom: 10 }}>
            <Autocomplete
              label="Test"
              placeholder="Test autocomplete"
              data={options}
            />
          </div>
          <Title order={3}>Tabs</Title>
          <Wrapper defaultValue="react">{base}</Wrapper>
          <Title order={3}>Tooltip</Title>
          <div style={{ paddingTop: 10, paddingBottom: 10 }}>
            <Tooltip
              position="right"
              label="Tooltip label"
              withArrow
              transitionProps={{ duration: 0 }}
              opened
              color="cyan"
              radius="md"
            >
              <button type="button">target</button>
            </Tooltip>
          </div>
          <Title order={3}>Chip</Title>
          <Chip defaultChecked>Awesome chip</Chip>
          <Title order={3}>Progress</Title>
          <Progress value={50} />
        </Stack>
        <Stack>
          <Title order={3}>Rating</Title>
          <Rating defaultValue={2} />
          <Title order={3}>Ring Progress</Title>
          <RingProgress
            label={<>data usage</>}
            sections={[
              { value: 40, color: "cyan" },
              { value: 15, color: "orange" },
              { value: 15, color: "grape" },
            ]}
          />
        </Stack>
      </Group>
    </>
  );
}
