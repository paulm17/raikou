import { maxPositionPixels } from "./defaults";
import { convertPositionUnit, minMax, toFixed } from "./utilities";

/*
 * @desc converts radial/conic gradient positions to data for the editor
 * @returns object - the gradient's x/y positioning
 * @since 1.0.0
 */
const getGradientPositions = (prefix: string) => {
  if (prefix.search("at ") === -1) {
    return {
      x: { value: 50, unit: "%" },
      y: { value: 50, unit: "%" },
    };
  }

  let positions = prefix.split("at ");
  positions.shift();
  positions = positions.join("").split(" ");

  if (positions.length > 1) {
    positions = normalizePositions(positions);
  } else {
    const pos = positions[0].trim();
    if (pos === "top" || pos === "bottom") {
      positions = ["50%", pos];
    }
  }

  const x = getPosition(positions[0]);
  let y;

  if (positions.length === 1) {
    y = { value: 50, unit: "%" };
  } else {
    y = getPosition(positions[1]);
  }

  return { x, y };
};

/*
 * @desc creates position points for gradients with colors that omit positions
 * @returns number
 * @since 1.0.0
 */
const calcGradPosition = (
  colors,
  index,
  total,
  curPoint,
  lastPoint,
  lastIndex,
) => {
  let realTotal = total + 1;
  let stretch = index + 1 - (lastIndex + 1);

  for (let i = index; i < realTotal; i++) {
    const clr = colors[i].split(" ");
    if (clr.length === 1) {
      stretch++;
      continue;
    }

    let nextPoint;
    const unit = clr[1].slice(-2) !== "px" ? "%" : "px";
    if (unit === "%") {
      nextPoint = minMax(0, 100, parseFloat(clr[1].replace("%", "")));
    } else {
      const point = minMax(
        0,
        maxPositionPixels,
        parseInt(clr[1].replace("px", ""), 10),
      );
      nextPoint = minMax(0, 100, convertPositionUnit(point));
    }

    return toFixed(curPoint + (nextPoint - lastPoint) / stretch);
  }
};

/*
 * @desc formats multi-position stop values (that can exist in any order) to "x,y"
 * @returns array - the original positions or the formatted positions
 * @since 1.0.0
 */
const normalizePositions = (positions: string[]) => {
  const firstPos = positions[0].trim();
  const lastPos = positions[1].trim();

  if (
    firstPos === "top" ||
    firstPos === "bottom" ||
    lastPos === "left" ||
    lastPos === "right"
  ) {
    return [lastPos, firstPos];
  }

  return positions;
};

/*
 * @desc creates a position data object for all colors
 * @returns object
 * @since 1.0.0
 */
const getPosition = (position: string) => {
  switch (position) {
    case "left":
    case "top":
      return { value: 0, unit: "%" };
    case "right":
    case "bottom":
      return { value: 100, unit: "%" };
  }

  const unit = position.slice(-2) !== "px" ? "%" : "px";
  const value = parseInt(position.replace(/%|px/g, ""), 10);

  if (!isNaN(value)) {
    return { value, unit };
  }

  return { value: 50, unit: "%" };
};

/*
 * @desc figures out which unit is being used and returns the correct angle in degrees
 * @returns number - angle to be used in the editor
 * @since 1.0.0
 */
const processAngle = (degree: string, defValue: number) => {
  let angle = defValue;

  if (degree.search("deg") !== -1) {
    angle = getAngleFromUnit(degree, "deg");
  } else if (degree.search("to ") !== -1) {
    angle = getAngleFromUnit(degree, "to");
  } else if (degree.search("turn") !== -1) {
    angle = getAngleFromUnit(degree, "turn");
  } else if (degree.search("grad") !== -1) {
    angle = getAngleFromUnit(degree, "grad");
  } else if (degree.search("rad") !== -1) {
    angle = getAngleFromUnit(degree, "rad");
  } else if (degree.search("%") !== -1) {
    angle = getAngleFromUnit(degree, "%"); // conic
  }

  angle = minMax(-360, 360, angle);
  if (angle < 0) {
    angle += 360;
  }

  return !isNaN(angle) ? angle : defValue;
};

/*
 * @desc gets an angle in degrees from a variety of possible units
 * @returns number - angle to be used in the editor
 * @since 1.0.0
 */
type AngleType = "deg" | "turn" | "grad" | "rad" | "%" | "to";

const getAngleFromUnit = (degree: string, type: AngleType) => {
  let angle = degree.replace(/%|deg|turn|grad|rad|to/, "").trim();

  switch (type) {
    case "deg":
      return minMax(-360, 360, parseInt(angle, 10));
    case "turn":
      const parsedTurn = parseFloat(angle);
      return parsedTurn < 0 || parsedTurn > 1 ? 180 : parsedTurn * 360;
    case "grad":
      angle = minMax(0, 400, parseInt(angle, 10)).toString();
      return Math.round((parseInt(angle) / 400) * 360);
    case "rad":
      angle = minMax(0, Math.PI * 2, parseFloat(angle)).toString();
      angle = ((parseFloat(angle) * 180) / Math.PI).toString();
      return Math.round(parseFloat(angle));
    case "%":
      return minMax(0, 100, parseInt(angle, 10)) * 0.01 * 360;
    default:
      return getAngleFromSides(angle);
  }
};

/*
 * @desc converts angle keywords to numbers
 * @returns number - to be used for the editor controls
 * @since 1.0.0
 */
type AngleKeyword =
  | "top"
  | "bottom"
  | "right"
  | "left"
  | "top left"
  | "left top"
  | "top right"
  | "right top"
  | "bottom left"
  | "left bottom"
  | "bottom right"
  | "right bottom";

const getAngleFromSides = (angle: AngleKeyword | string) => {
  switch (angle) {
    case "top":
      return 0;
    case "bottom":
      return 180;
    case "right":
      return 90;
    case "left":
      return 270;
    case "top left":
    case "left top":
      return 315;
    case "top right":
    case "right top":
      return 45;
    case "bottom left":
    case "left bottom":
      return 225;
    case "bottom right":
    case "right bottom":
      return 135;
    default:
      return 180;
  }
};

export { calcGradPosition, getGradientPositions, processAngle };
