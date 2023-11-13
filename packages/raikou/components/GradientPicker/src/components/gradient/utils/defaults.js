/*
 * @desc the default gradient data excluding colors and hints
 * @since 1.0.0
 */
const defaultGradient = () => {
  return {
    type: "linear",
    angle: 180,
    shape: "ellipse",
    extent: "farthest-corner",
    repeating: false,
    hints: [],
    positions: {
      x: { value: 50, unit: "%" },
      y: { value: 50, unit: "%" },
    },
    sizes: {
      x: { value: 75, unit: "%" },
      y: { value: 75, unit: "%" },
    },
  }
}

export { defaultGradient }
