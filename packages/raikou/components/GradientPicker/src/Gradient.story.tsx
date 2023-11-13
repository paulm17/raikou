import React, { useState } from "react";
import { GradientPicker } from "./GradientPicker";

export default { title: "GradientPicker" };

export function Usage() {
  const [color, setColor] = useState("#000");

  return (
    <div style={{ padding: 40 }}>
      <GradientPicker
        value={color}
        onChange={(value: string) => setColor(value)}
      >
        <GradientPicker.Compact
          picker="input"
          dropperSize={40}
          dropdownPosition="bottom-end"
          swatchSize={24}
          size="md"
          withinPortal
          width={255}
          // styles={{
          //   pickerInput: {
          //     input: {
          //       paddingLeft: "30px",
          //       height: "24px",
          //       minHeight: "24px",
          //       background: "rgb(54, 54, 54)",
          //       border: "1px solid rgb(43, 43, 43)",
          //       borderRadius: 0,
          //       "&:focus": {
          //         borderColor: "rgb(43, 43, 43)",
          //       },
          //     },
          //   },
          //   pickerDropdown: {
          //     dropdown: {
          //       padding: "6px",
          //     },
          //   },
          //   format: {
          //     gridCol: {
          //       paddingTop: "6px !important",
          //       paddingBottom: "6px !important",
          //     },
          //     input: {
          //       padding: 0,
          //     },
          //   },
          //   saturation: {
          //     marginBottom: "15px !important",
          //   },
          // }}
        />
      </GradientPicker>
    </div>
  );
}
