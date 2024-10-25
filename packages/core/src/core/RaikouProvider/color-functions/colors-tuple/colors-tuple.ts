import { RaikouColorsTuple } from '../../theme.types';

export function colorsTuple(input: string | string[]): RaikouColorsTuple {
  if (Array.isArray(input)) {
    return input as unknown as RaikouColorsTuple;
  }

  return Array(10).fill(input) as unknown as RaikouColorsTuple;
}
