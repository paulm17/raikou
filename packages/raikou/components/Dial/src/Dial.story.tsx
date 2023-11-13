import React, { useState } from "react";
import { Dial } from "./Dial";
import { Stack } from "../../Stack/src";

export default { title: "Dial" };

export function Usage() {
  const [angle, setAngle] = useState<{ value: number; unit: string }>({
    value: 135,
    unit: "px",
  });

  const sizes = ["xs", "sm", "md", "lg", "xl"];

  return (
    <div style={{ padding: 40 }}>
      <div>{JSON.stringify(angle)}</div>
      <Stack>
        {sizes.map((size, index) => {
          return (
            <div key={index}>
              <Dial
                size={size}
                value={angle.value as number}
                onChange={(value) =>
                  setAngle({
                    value: value,
                    unit: angle.unit,
                  })
                }
              />
            </div>
          );
        })}
        <Dial
          size="md"
          scale={0.5}
          value={angle.value as number}
          onChange={(value) =>
            setAngle({
              value: value,
              unit: angle.unit,
            })
          }
        />
      </Stack>
    </div>
  );
}
