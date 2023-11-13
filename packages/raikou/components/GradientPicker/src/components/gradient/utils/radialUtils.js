import { getGradientPositions } from "./common"

/*
 * @desc gets the initial data for a radial gradient
 * @returns object
 * @since 1.0.0
 */
const radialGradientData = prefix => {
  const shape = getRadialShape(prefix)

  return {
    shape,
    extent: getRadialExtent(prefix),
    sizes: getRadialSizes(prefix, shape),
    positions: getGradientPositions(prefix),
  }
}

/*
 * @desc gets the "shape" to use for the editor
 * @returns string - "ellipse", "cicle" or "size" when numbers exist
 * @since 1.0.0
 */
const getRadialShape = shape => {
  if (shape.search(/ellipse|circle/) === -1) {
    let prefix = shape.split("at")
    if (prefix.length > 1) {
      prefix = prefix[0].trim()
      if (!prefix || prefix.search(/side|corner/) !== -1) {
        return "ellipse"
      }
      return "size"
    }
    if (shape.search(/side|corner/) !== -1) {
      return "ellipse"
    }
    return !shape.trim() ? "ellipse" : "size"
  }
  return shape.search("ellipse") !== -1 ? "ellipse" : "circle"
}
/*
 * @desc gets the radial "extent" value from an incoming user value
 * @returns string
 * @since 1.0.0
 */
const getRadialExtent = grad => {
  if (grad.search("closest-side") !== -1) {
    return "closest-side"
  }
  if (grad.search("closest-corner") !== -1) {
    return "closest-corner"
  }
  if (grad.search("farthest-side") !== -1) {
    return "farthest-side"
  }

  return "farthest-corner"
}
/*
 * @desc gets the initial values for "radial size mode" based on the incoming user gradient string
 * @returns object - the width/height to be used
 * @since 1.0.0
 */
const getRadialSizes = (prefix, shape) => {
  if (shape !== "size") {
    return {
      x: { value: 75, unit: "%" },
      y: { value: 75, unit: "%" },
    }
  }

  const sizes = prefix.split("at")[0].trim().split(" ")
  if (sizes.length === 1) {
    const unit = sizes[0].slice(-2) !== "px" ? "%" : "px"
    if (unit === "%") {
      return {
        x: { value: 75, unit: "%" },
        y: { value: 75, unit: "%" },
      }
    }

    const value = parseInt(sizes[0].replace("px", ""), 10)
    return {
      x: { value, unit: "px" },
      y: { value, unit: "px" },
    }
  }

  const unitW = sizes[0].slice(-2) !== "px" ? "%" : "px"
  const unitH = sizes[1].slice(-2) !== "px" ? "%" : "px"

  const maxW = unitW === "%" ? 100 : maxPositionPixels
  const maxH = unitH === "%" ? 100 : maxPositionPixels

  const width = minMax(0, maxW, parseInt(sizes[0].replace(/%|px/g, ""), 10))
  const height = minMax(0, maxH, parseInt(sizes[1].replace(/%|px/g, ""), 10))

  return {
    x: { value: width, unit: unitW },
    y: { value: height, unit: unitH },
  }
}

const getRadialPosition = angle => {
  if (angle.search("deg") === -1) {
    const val = parseInt(angle.replace(/%|px/g, ""), 10)
    return !isNaN(val) ? val : 0
  }

  const degree = parseInt(angle.replace("deg"), 10)
  return !isNaN(degree) ? minMax(0, 1, degree / 360) * 100 : 0
}

export { radialGradientData, getRadialPosition }
