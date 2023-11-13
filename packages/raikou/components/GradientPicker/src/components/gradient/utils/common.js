import { minMax } from "./utilities"

/*
 * @desc converts radial/conic gradient positions to data for the editor
 * @returns object - the gradient's x/y positioning
 * @since 1.0.0
 */
const getGradientPositions = prefix => {
  if (prefix.search("at ") === -1) {
    return {
      x: { value: 50, unit: "%" },
      y: { value: 50, unit: "%" },
    }
  }

  let positions = prefix.split("at ")
  positions.shift()
  positions = positions.join("").split(" ")

  if (positions.length > 1) {
    positions = normalizePositions(positions)
  } else {
    const pos = positions[0].trim()
    if (pos === "top" || pos === "bottom") {
      positions = ["50%", pos]
    }
  }

  const x = getPosition(positions[0])
  let y

  if (positions.length === 1) {
    y = { value: 50, unit: "%" }
  } else {
    y = getPosition(positions[1])
  }

  return { x, y }
}

/*
 * @desc formats multi-position stop values (that can exist in any order) to "x,y"
 * @returns array - the original positions or the formatted positions
 * @since 1.0.0
 */
const normalizePositions = positions => {
  const firstPos = positions[0].trim()
  const lastPos = positions[1].trim()

  if (
    firstPos === "top" ||
    firstPos === "bottom" ||
    lastPos === "left" ||
    lastPos === "right"
  ) {
    return [lastPos, firstPos]
  }

  return positions
}

/*
 * @desc creates a position data object for all colors
 * @returns object
 * @since 1.0.0
 */
const getPosition = position => {
  switch (position) {
    case "left":
    case "top":
      return { value: 0, unit: "%" }
    case "right":
    case "bottom":
      return { value: 100, unit: "%" }
  }

  const unit = position.slice(-2) !== "px" ? "%" : "px"
  const value = parseInt(position.replace(/%|px/g, ""), 10)

  if (!isNaN(value)) {
    return { value, unit }
  }

  return { value: 50, unit: "%" }
}

/*
 * @desc figures out which unit is being used and returns the correct angle in degrees
 * @returns number - angle to be used in the editor
 * @since 1.0.0
 */
const processAngle = (degree, defValue) => {
  let angle = defValue

  if (degree.search("deg") !== -1) {
    angle = getAngleFromUnit(degree, "deg")
  } else if (degree.search("to ") !== -1) {
    angle = getAngleFromUnit(degree, "to")
  } else if (degree.search("turn") !== -1) {
    angle = getAngleFromUnit(degree, "turn")
  } else if (degree.search("grad") !== -1) {
    angle = getAngleFromUnit(degree, "grad")
  } else if (degree.search("rad") !== -1) {
    angle = getAngleFromUnit(degree, "rad")
  } else if (degree.search("%") !== -1) {
    angle = getAngleFromUnit(degree, "%") // conic
  }

  angle = minMax(-360, 360, angle)
  if (angle < 0) {
    angle += 360
  }

  return !isNaN(angle) ? angle : defValue
}

/*
 * @desc gets an angle in degrees from a variety of possible units
 * @returns number - angle to be used in the editor
 * @since 1.0.0
 */
const getAngleFromUnit = (degree, type) => {
  let angle = degree.replace(/%|deg|turn|grad|rad|to/, "").trim()

  switch (type) {
    case "deg":
      return minMax(-360, 360, parseInt(angle, 10))
    case "turn":
      const parsed = parseFloat(angle)
      return parsed < 0 || parsed > 1 ? 180 : parsed * 360
    case "grad":
      angle = minMax(0, 400, parseInt(angle, 10))
      return Math.round((angle / 400) * 360)
    case "rad":
      angle = minMax(0, Math.PI * 2, parseFloat(angle, 10))
      angle *= 180 / Math.PI
      return Math.round(angle)
    case "%": // conic
      return minMax(0, 100, parseInt(angle, 10)) * 0.01 * 360
  }

  return getAngleFromSides(angle) // "to"
}

/*
 * @desc converts angle keywords to numbers
 * @returns number - to be used for the editor controls
 * @since 1.0.0
 */
const getAngleFromSides = angle => {
  switch (angle) {
    case "top":
      return 0
    case "bottom":
      return 180
    case "right":
      return 90
    case "left":
      return 270
    case "top left":
    case "left top":
      return 315
    case "top right":
    case "right top":
      return 45
    case "bottom left":
    case "left bottom":
      return 225
    case "bottom right":
    case "right bottom":
      return 135
  }

  return 180
}

export { getGradientPositions, processAngle }
