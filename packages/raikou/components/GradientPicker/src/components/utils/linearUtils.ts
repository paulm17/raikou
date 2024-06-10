import { processAngle } from "./common";

/*
 * @desc returns the linear gradient data (which is always just an angle)
 * @returns object
 * @since 1.0.0
 */
const linearGradientData = (prefix: string) => {
  return { angle: processAngle(prefix, 180) };
};

export { linearGradientData };
