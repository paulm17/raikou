import React from 'react';
import { RaikouDemo } from '@raikou/ds';
import { Wrapper } from './_wrapper';

const code = `
import { Spoiler } from '@raikou/core';

function Demo() {
  return (
    <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
      {/* Content here */}
    </Spoiler>
  );
}
`;

function Demo() {
  return <Wrapper />;
}

export const usage: RaikouDemo = {
  type: 'code',
  code,
  component: Demo,
};
