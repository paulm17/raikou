import React from "react";
import { AspectRatio } from "./AspectRatio";

export default { title: "AspectRatio" };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          alt="img"
        />
      </AspectRatio>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <AspectRatio ratio={1} unstyled>
        <img
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          alt="img"
        />
      </AspectRatio>
    </div>
  );
}

export function WithinFlexContainer() {
  return (
    <div style={{ padding: 40, display: "flex", gap: 20 }}>
      <AspectRatio ratio={16 / 9} style={{ flex: 1 }}>
        <img
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          alt="img"
        />
      </AspectRatio>

      <AspectRatio ratio={16 / 9} style={{ flex: 1 }}>
        <img
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          alt="img"
        />
      </AspectRatio>

      <AspectRatio ratio={16 / 9} style={{ flex: 1 }}>
        <img
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          alt="img"
        />
      </AspectRatio>
    </div>
  );
}
