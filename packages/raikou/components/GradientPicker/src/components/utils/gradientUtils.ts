import {
  Color,
  Gradient,
  GradientColor,
  GradientMeasurementType,
  GradientMeasurement,
  SetGradient,
} from "../ColorPicker.types";

const updateGradient = (
  activeStopIndex: number,
  color: Color,
  gradient: Gradient,
  setGradient: SetGradient,
) => {
  const newGradient = { ...gradient };
  const newActiveColor = { ...gradient?.colors[activeStopIndex] };

  if (newActiveColor) {
    const hex = color?.toHEXA().toString() as string;
    const rgbaValues = color?.toRGBA();

    if (rgbaValues) {
      const [r, g, b, a] = rgbaValues as number[];

      newActiveColor.color = hex;
      newActiveColor.hex = hex;
      newActiveColor.opacity = color?.a as number;
      newActiveColor.preview = { background: hex };
      newActiveColor.rgb = [r, g, b];
      newActiveColor.value = [r, g, b, a];

      if (newGradient.colors) {
        newGradient.colors[activeStopIndex] = newActiveColor as GradientColor;

        setGradient(newGradient as Gradient);
      }
    }

    newGradient.colors[activeStopIndex] = newActiveColor as GradientColor;

    setGradient(newGradient as Gradient);
  }
};

const updateValue = (type: string, value: number, gradient: Gradient) => {
  if (gradient) {
    switch (type) {
      case "left":
        gradient.positions.x.value = value;
        break;
      case "top":
        gradient.positions.y.value = value;
        break;
      case "width":
        gradient.sizes.x.value = value;
        break;
      case "height":
        gradient.sizes.y.value = value;
        break;
    }

    return gradient;
  }
};

const updateUnit = (
  type: GradientMeasurementType,
  unit: GradientMeasurement,
  gradient: Gradient,
) => {
  if (gradient) {
    switch (type) {
      case "left":
        gradient.positions.x.unit = unit;
        break;
      case "top":
        gradient.positions.y.unit = unit;
        break;
      case "width":
        gradient.sizes.x.unit = unit;
        break;
      case "height":
        gradient.sizes.y.unit = unit;
        break;
    }

    return gradient;
  }
};

const updateRepeating = (gradient) => {
  gradient.repeating = !gradient?.repeating;

  return gradient;
};

export { updateGradient, updateValue, updateUnit, updateRepeating };
