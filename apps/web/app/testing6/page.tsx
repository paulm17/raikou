"use client";
import { generateColors } from "@raikou/colors-generator";
import { createTheme } from "@raikou/global-store";
import {
  Badge,
  Button,
  ColorSwatch,
  Container,
  Divider,
  Group,
  Stack,
} from "@raikou/server";
import { createCSSVariables } from "@raikou/system";

function Testing6() {
  const COLORS_PRESET = [
    { name: "Blue gray", color: "#63687C" },
    { name: "Brown", color: "#5D4037" },
    { name: "Tomato", color: "#F06418" },
    { name: "Deep orange", color: "#fc8a08" },
    { name: "Bright orange", color: "#FFA903" },
    { name: "Yellow", color: "#D9D02F" },
    { name: "Bright green", color: "#6BD731" },
    { name: "Green", color: "#2BDD66" },
    { name: "Light blue", color: "#00B5FF" },
    { name: "Sky blue", color: "#099CFF" },
    { name: "Pale blue", color: "#5474B4" },
    { name: "Bright blue", color: "#0063FF" },
    { name: "Deep blue", color: "#1F32C4" },
    { name: "Pale indigo", color: "#4C5897" },
    { name: "Purple", color: "#4F23C0" },
    { name: "Pale purple", color: "#504C97" },
    { name: "Violet", color: "#7B2EDA" },
    { name: "Pale violet", color: "#6B31B2" },
    { name: "Dark pink", color: "#8931B2" },
    { name: "Bright pink", color: "#C02ADF" },
    { name: "Pink", color: "#F018E8" },
    { name: "Magenta", color: "#F01879" },
    { name: "Bright red", color: "#F0185C" },
    { name: "Pale red", color: "#C91A52" },
    { name: "Deep red", color: "#C91A25" },
    { name: "Red", color: "#F21616" },
  ];

  const handleChange = (color: string) => {
    const theme = createTheme({
      primaryColor: "primary",
      colors: {
        primary: generateColors(color),
      },
    });

    createCSSVariables({ theme });
  };

  return (
    <Stack>
      <Container mt={10} w={800}>
        <Group>
          <Button>Button</Button>
          <Badge>Badge</Badge>
        </Group>
        <Divider my={10} />
        <Group>
          {COLORS_PRESET.map((color) => (
            <Button
              variant="default"
              leftSection={<ColorSwatch size={20} color={color.color} />}
              radius="md"
              key={color.color}
              onClick={() => {
                handleChange(color.color);
              }}
            >
              {color.name}
            </Button>
          ))}
        </Group>
      </Container>
    </Stack>
  );
}

export default Testing6;
