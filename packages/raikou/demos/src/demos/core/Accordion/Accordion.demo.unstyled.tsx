import React from 'react';
import { RaikouDemo } from '@raikou/ds';
import { BaseDemo } from './_base';

const code = `
import { Accordion } from '@raikou/core';

function Demo() {
  return (
    <Accordion unstyled>
      {/* ... Accordion items */}
    </Accordion>
  );
}
`;

function Demo() {
  return <BaseDemo unstyled />;
}

export const unstyled: RaikouDemo = {
  type: 'code',
  component: Demo,
  code,
};
