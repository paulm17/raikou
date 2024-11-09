import { RaikouColor } from '../../../core';
import { getInitials } from '../get-initials/get-initials';

function hashCode(input: string) {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    const char = input.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash;
}

const defaultColors: RaikouColor[] = [
  'blue',
  'cyan',
  'grape',
  'green',
  'indigo',
  'lime',
  'orange',
  'pink',
  'red',
  'teal',
  'violet',
];

export function getInitialsColor(name: string, colors: RaikouColor[] = defaultColors) {
  const hash = hashCode(getInitials(name));
  const index = Math.abs(hash) % colors.length;
  return colors[index];
}
