import postcss from 'postcss';
const preset = require('../index');

export function testTransform(input: string) {
  return postcss([preset]).process(input, { from: undefined });
}
