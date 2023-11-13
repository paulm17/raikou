import { getGradientPositions, processAngle } from "./common"

/*
 * @desc gets the initial data for a conic gradient (always only angle and positions)
 * @returns object
 * @since 1.0.0
 */
const conicGradientData = prefix => {
  const hasAngle = prefix.search("from ") !== -1
  const hasPosition = prefix.search("at ") !== -1

  const data = prefix.split("at")
  const angle = !hasAngle ? 0 : getConicAngle(data[0])

  if (!hasPosition || data.length < 2) {
    return {
      angle,
      positions: {
        x: { value: 50, unit: "%" },
        y: { value: 50, unit: "%" },
      },
    }
  }
  return {
    angle,
    positions: getGradientPositions(`at ${data[1].trim()}`),
  }
}

/*
 * @desc gets the angle of a conic gradient or its colors
 * @returns number
 * @since 1.0.0
 */
const getConicAngle = gradAngle => {
  const conicAngle = gradAngle.replace("from", "").trim()
  return processAngle(conicAngle, 0)
}

const getConicPosition = angle => {
  return (getConicAngle(angle) / 360) * 100
}

export { conicGradientData, getConicPosition }
