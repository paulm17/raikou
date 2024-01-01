import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { AspectRatio, Image } from "@raikou/server";
import { rem } from "@raikou/theme";

const code = `
import { AspectRatio, Image, rem } from '@raikou/core';

function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <AspectRatio ratio={1} style={{ flex: \`0 0 \${rem(100)}\` }}>
        <Image
          src="https://raw.githubusercontent.com/raikoudev/raikou/master/.demo/avatars/avatar-6.png"
          alt="Avatar"
        />
      </AspectRatio>
    </div>
  );
}
`;

function Demo() {
  return (
    <div style={{ display: "flex" }}>
      <AspectRatio ratio={1} style={{ flex: `0 0 ${rem(100)}` }}>
        <Image
          src="https://raw.githubusercontent.com/raikoudev/raikou/master/.demo/avatars/avatar-6.png"
          alt="Avatar"
        />
      </AspectRatio>
    </div>
  );
}

export const flex: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
