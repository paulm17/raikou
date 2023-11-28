import React from 'react';
import { RaikouDemo } from '@raikou/ds';
import { BaseDemo } from './_base';

const getCode = (prop: string) => `
import { Accordion } from '@raikou/core';

function Demo() {
  return (
    <Accordion ${prop}>
      {/* ...content */}
    </Accordion>
  )
}
`;

export const disableTransitions: RaikouDemo = {
  type: 'code',
  component: () => <BaseDemo transitionDuration={0} maw={380} mx="auto" />,
  code: getCode('transitionDuration={0}'),
};

export const customTransitions: RaikouDemo = {
  type: 'code',
  component: () => <BaseDemo transitionDuration={1000} maw={380} mx="auto" />,
  code: getCode('transitionDuration={1000}'),
};
