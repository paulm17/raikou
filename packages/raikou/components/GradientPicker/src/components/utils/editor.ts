import { convertPositionUnit } from "./utilities";

const writeHintData = (colors: any[], hints: any[], positions: any) => {
  if (colors.length < 2) {
    return;
  }

  hints.forEach((hint: any, index: number) => {
    let prevColor = colors[index];
    let nextColor = colors[index + 1];

    const { position: prevColorPos, unit: prevColorUnit } = prevColor;
    const { position: nextColorPos, unit: nextColorUnit } = nextColor;

    const posOne =
      prevColorUnit === "%" ? prevColorPos : convertPositionUnit(prevColorPos);
    const posTwo =
      nextColorUnit === "%" ? nextColorPos : convertPositionUnit(nextColorPos);

    const minPos = Math.min(posOne, posTwo);
    const maxPos = Math.max(posOne, posTwo);
    const difPos = maxPos - minPos;

    if (positions) {
      const { percentage } = hint;
      hint.position = minPos + difPos * (percentage * 0.01);
    } else {
      const { position } = hint;
      let perc = ((position - minPos) / (maxPos - minPos)) * 100;
      if (isNaN(perc)) {
        perc = 50;
      }
      hint.percentage = perc;
    }
  });
};

const resolveColorStopPosition = (container: any, x: number) => {
  const mbcr = container.getBoundingClientRect();
  const diff = x - mbcr.left;
  let loc = diff / mbcr.width;

  if (loc < 0) loc = 0;
  if (loc > 1) loc = 1;

  return loc;
};

export { writeHintData, resolveColorStopPosition };
