import React, { useState } from "react";
import { GradientPicker } from "./GradientPicker";
import { Group } from "../../Group/src";

export default { title: "GradientPicker" };

export function Usage() {
  const [color, setColor] = useState("#000");

  const [color2, setColor2] = useState(
    "linear-gradient(135deg, #D0021B 0%, #F5A623 50%, #F8E71C 100%)",
  );

  return (
    <div style={{ padding: 40 }}>
      <Group grow>
        <GradientPicker
          type="solid"
          value={color}
          onChange={(value: string) => setColor(value)}
          picker="input"
          dropperSize={40}
          dropdownPosition="bottom-start"
          swatchSize={16}
          size="md"
          withinPortal
          width={540}
          swatches={[
            "#D0021B",
            "#F5A623",
            "#F8E71C",
            "#8B572A",
            "#7ED321",
            "#417505",
            "#BD10E0",
            "#9013FE",
            "#4A90E2",
            "#50E3C2",
            "#B8E986",
            "#000000",
            "#4A4A4A",
            "#9B9B9B",
            "#FFFFFF",
            "rgba(0, 150, 136, 0.75)",
            "rgba(76, 175, 80, 0.8)",
            "rgba(139, 195, 74, 0.85)",
            "rgba(205, 220, 57, 0.9)",
            "rgba(255, 235, 59, 0.95)",
          ]}
        />
        <GradientPicker
          type="gradient"
          value={color2}
          onChange={(value: string) => setColor2(value)}
          picker="input"
          dropperSize={40}
          dropdownPosition="bottom-start"
          swatchSize={16}
          size="md"
          withinPortal
          width={540}
          swatches={[
            "#D0021B",
            "#F5A623",
            "#F8E71C",
            "#8B572A",
            "#7ED321",
            "#417505",
            "#BD10E0",
            "#9013FE",
            "#4A90E2",
            "#50E3C2",
            "#B8E986",
            "#000000",
            "#4A4A4A",
            "#9B9B9B",
            "#FFFFFF",
            "rgba(0, 150, 136, 0.75)",
            "rgba(76, 175, 80, 0.8)",
            "rgba(139, 195, 74, 0.85)",
            "rgba(205, 220, 57, 0.9)",
            "rgba(255, 235, 59, 0.95)",
          ]}
        />
        <GradientPicker
          type="gradient"
          value={color2}
          onChange={(value: string) => setColor2(value)}
          picker="dropdown"
          dropperSize={40}
          dropdownPosition="bottom-start"
          swatchSize={16}
          size="md"
          withinPortal
          width={540}
          swatches={[
            "#D0021B",
            "#F5A623",
            "#F8E71C",
            "#8B572A",
            "#7ED321",
            "#417505",
            "#BD10E0",
            "#9013FE",
            "#4A90E2",
            "#50E3C2",
            "#B8E986",
            "#000000",
            "#4A4A4A",
            "#9B9B9B",
            "#FFFFFF",
            "rgba(0, 150, 136, 0.75)",
            "rgba(76, 175, 80, 0.8)",
            "rgba(139, 195, 74, 0.85)",
            "rgba(205, 220, 57, 0.9)",
            "rgba(255, 235, 59, 0.95)",
          ]}
        />
      </Group>
    </div>
  );
}
