function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getUniqueID(prefix: string) {
  return `${prefix}-${Math.floor(Math.random() * 1000000)}`;
}

export { clamp, getUniqueID };
