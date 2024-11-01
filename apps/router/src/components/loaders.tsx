import { ReactNode, useState } from "react";
import {
  Ball,
  Bars,
  Bounce,
  Circle,
  Clap,
  ClimbingBox,
  Clip,
  Clock,
  Comb,
  Cube,
  Domino,
  Dot,
  Fade,
  Fill,
  Firework,
  Flag,
  Flapper,
  Grid,
  Guard,
  Hash,
  Hoop,
  HorizontalBar,
  Jellyfish,
  Magic,
  Metro,
  Moon,
  Pacman,
  Propagate,
  Puff,
  Pulsar,
  Push,
  Rainbow,
  Ring,
  Rise,
  Rotate,
  Scale,
  Sequence,
  Skew,
  Sphere,
  Spiral,
  Square,
  Stage,
  Swap,
  Swish,
  Sync,
  Wave,
  Whisper,
} from "@raikou/loaders";
import {
  Group,
  SimpleGrid,
  NativeSelect,
  Stack,
  Text,
  Title,
} from "@raikou/core";

interface shelfProps {
  title: string;
  children: ReactNode;
}

function Shelf({ title, children }: shelfProps) {
  return (
    <Stack>
      <Title size={16}>{title}</Title>
      {children}
    </Stack>
  );
}

function Loaders() {
  const [size, setSize] = useState("md");

  return (
    <div style={{ padding: 20 }}>
      <Group>
        <Title>Loaders</Title>
        <Group>
          <Text>Size</Text>
          <NativeSelect value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="xs">XS</option>
            <option value="sm">SM</option>
            <option value="md">MD</option>
            <option value="lg">LG</option>
            <option value="xl">XL</option>
          </NativeSelect>
        </Group>
      </Group>
      <SimpleGrid cols={6}>
        <Shelf title="Ball">
          <Ball size={size} />
        </Shelf>
        <Shelf title="Bars">
          <Bars size={size} />
        </Shelf>
        <Shelf title="Bounce">
          <Bounce size={size} />
        </Shelf>
        <Shelf title="Circle">
          <Circle size={size} />
        </Shelf>
        <Shelf title="Clap">
          <Clap size={size} />
        </Shelf>
        <Shelf title="ClimbingBox">
          <ClimbingBox size={size} />
        </Shelf>
        <Shelf title="Clip">
          <Clip size={size} />
        </Shelf>
        <Shelf title="Clock">
          <Clock size={size} />
        </Shelf>
        <Shelf title="Comb">
          <Comb size={size} />
        </Shelf>
        <Shelf title="Cube">
          <Cube size={size} />
        </Shelf>
        <Shelf title="Domino">
          <Domino size={size} />
        </Shelf>
        <Shelf title="Dot">
          <Dot size={size} />
        </Shelf>
        <Shelf title="Fade">
          <Fade size={size} />
        </Shelf>
        <Shelf title="Fill">
          <Fill size={size} />
        </Shelf>
        <Shelf title="Firework">
          <Firework size={size} />
        </Shelf>
        <Shelf title="Flag">
          <Flag size={size} />
        </Shelf>
        <Shelf title="Flapper">
          <Flapper size={size} />
        </Shelf>
        <Shelf title="Grid">
          <Grid size={size} />
        </Shelf>
        <Shelf title="Guard">
          <Guard size={size} />
        </Shelf>
        <Shelf title="Hash">
          <Hash size={size} />
        </Shelf>
        <Shelf title="Hoop">
          <Hoop size={size} />
        </Shelf>
        <Shelf title="HorizontalBar">
          <HorizontalBar />
        </Shelf>
        <Shelf title="Jellyfish">
          <Jellyfish size={size} />
        </Shelf>
        <Shelf title="Magic">
          <Magic size={size} />
        </Shelf>
        <Shelf title="Metro">
          <Metro size={size} />
        </Shelf>
        <Shelf title="Moon">
          <Moon size={size} />
        </Shelf>
        <Shelf title="Pacman">
          <Pacman size={size} />
        </Shelf>
        <Shelf title="Propagate">
          <Propagate size={size} />
        </Shelf>
        <Shelf title="Puff">
          <Puff size={size} />
        </Shelf>
        <Shelf title="Pulsar">
          <Pulsar size={size} />
        </Shelf>
        <Shelf title="Push">
          <Push size={size} />
        </Shelf>
        <Shelf title="Rainbow">
          <Rainbow size={size} />
        </Shelf>
        <Shelf title="Ring">
          <Ring size={size} />
        </Shelf>
        <Shelf title="Rise">
          <Rise size={size} />
        </Shelf>
        <Shelf title="Rotate">
          <Rotate size={size} />
        </Shelf>
        <Shelf title="Scale">
          <Scale size={size} />
        </Shelf>
        <Shelf title="Sequence">
          <Sequence size={size} />
        </Shelf>
        <Shelf title="Skew">
          <Skew size={size} />
        </Shelf>
        <Shelf title="Sphere">
          <Sphere size={size} />
        </Shelf>
        <Shelf title="Spiral">
          <Spiral size={size} />
        </Shelf>
        <Shelf title="Square">
          <Square size={size} />
        </Shelf>
        <Shelf title="Stage">
          <Stage size={size} />
        </Shelf>
        <Shelf title="Swap">
          <Swap size={size} />
        </Shelf>
        <Shelf title="Swish">
          <Swish size={size} />
        </Shelf>
        <Shelf title="Sync">
          <Sync size={size} />
        </Shelf>
        <Shelf title="Wave">
          <Wave size={size} />
        </Shelf>
        <Shelf title="Whisper">
          <Whisper size={size} />
        </Shelf>
      </SimpleGrid>
    </div>
  );
}

export default Loaders;
