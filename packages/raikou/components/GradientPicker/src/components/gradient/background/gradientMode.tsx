import React, { Box } from "@raikou/core";
import { useGradientPickerContext } from "../../../GradientPicker.context";
import { GradientObj, GradientType } from "../../../GradientPicker.types";

function GradientMode() {
  const ctx = useGradientPickerContext();
  const mode = ctx.gradient?.type as GradientType;

  const onChangeMode = () => {
    const nextIndex: number = ctx.gradientTypes.indexOf(mode) + 1;
    const newType =
      ctx.gradientTypes[nextIndex === ctx.gradientTypes.length ? 0 : nextIndex];
    const gradient = { ...ctx.gradient } as GradientObj;

    if (gradient) {
      switch (newType) {
        case "linear":
          gradient.angle = 0;
          break;
        case "radial":
          gradient.positions.x.value = 50;
          gradient.positions.y.value = 50;
          break;
        case "conic":
          break;
        default:
      }

      gradient.type = newType!;
      ctx.setGradient(gradient as GradientObj);
    }
  };

  return (
    <Box
      className={`
      vc-gradient-mode relative top-[0.15em] left-[0.15em] w-[1.50em] h-[1.50em] border-2 border-solid border-white rounded-[0.15em] cursor-pointer opacity-25 transition-all delay-150 hover:opacity-100 
      before:absolute before:content-[''] before:top-0 before:right-0 before:bottom-0 before:left-0 before:m-auto before:transition-all before:delay-150
      data-[mode=linear]:before:h-[2px] data-[mode=linear]:before:w-[70%] data-[mode=linear]:before:bg-white data-[mode=linear]:before:rotate-[45deg] data-[mode=linear]:before:rounded-[50em]
      data-[mode=radial]:before:h-[50%] data-[mode=radial]:before:w-[50%] data-[mode=radial]:before:rounded-full data-[mode=radial]:before:border-2 data-[mode=radial]:before:border-solid data-[mode=radial]:before:border-white
      data-[mode=conic]:before:h-0 data-[mode=conic]:before:w-0 data-[mode=conic]:before:border-[5px] data-[mode=conic]:before:border-solid data-[mode=conic]:before:border-t-white data-[mode=conic]:before:border-r-white data-[mode=conic]:before:border-b-transparent data-[mode=conic]:before:border-l-transparent
      `}
      data-mode={ctx.gradient?.type}
      onClick={() => onChangeMode()}
      onKeyDown={() => onChangeMode()}
      role="button"
      tabIndex={0}
    />
  );
}

export { GradientMode };
