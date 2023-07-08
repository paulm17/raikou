export function useRandomClassName(length = 8) {
  const c = "abcdefghijklmnopqrstuvwxyz";
  const s = [...Array(1)].map((_) => c[~~(Math.random() * c.length)]).join("");
  const id = Array.from(
    { length: length },
    () => Math.random().toString(36)[2]
  ).join("");

  return `raikou-${s}${id}`;
}
