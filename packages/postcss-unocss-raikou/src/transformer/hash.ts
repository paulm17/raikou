import { createHash } from 'node:crypto';

export function getHash(input: string, length = 8) {
  return createHash('sha256').update(input).digest('hex').slice(0, length);
}

export function hash(str: string) {
  let i;
  let l;
  let hval = 0x811c9dc5;

  for (i = 0, l = str.length; i < l; i++) {
    hval ^= str.charCodeAt(i);
    hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
  }
  return `00000${(hval >>> 0).toString(36)}`.slice(-6);
}
