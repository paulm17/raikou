import React from "react";
import {
  BoxProps,
  CompoundStylesApiProps,
  factory,
  useProps,
  Factory,
  RaikouSize,
} from "@raikou/core";
import { useEyeDropper } from "@raikou/hooks";
import { HsvaColor, colord } from "colord";
import { Button } from "../../../../Button/src";
import { Image } from "../../../../Image/src";
import { Text } from "../../../../Text/src";

export type GradientPickerEyeDropperStylesNames = "pickerInput" | "dropdown";

export interface GradientPickerEyeDropperProps
  extends BoxProps,
    CompoundStylesApiProps<GradientPickerEyeDropperFactory> {
  size?: RaikouSize;
  onChange(color: HsvaColor): void;
}

export type GradientPickerEyeDropperFactory = Factory<{
  props: GradientPickerEyeDropperProps;
  ref: HTMLDivElement;
  stylesNames: GradientPickerEyeDropperStylesNames;
  compound: true;
}>;

const defaultProps: Partial<GradientPickerEyeDropperProps> = {
  size: "md",
};

export const GradientPickerEyeDropper =
  factory<GradientPickerEyeDropperFactory>((props, ref) => {
    const { classNames, className, style, styles, vars, onChange, ...others } =
      useProps("GradientPickerEyeDropper", defaultProps, props);

    const { supported, open } = useEyeDropper();

    const pickColor = async () => {
      try {
        const { sRGBHex: color } = await open();
        const _color = colord(color).toHsv();

        onChange(_color);
      } catch (e) {
        console.log(e);
      }
    };

    return (
      <>
        {supported && (
          <Button onClick={pickColor} {...others}>
            <Text className="w-[20px] text-center">
              <Image src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4yIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzQxLjYgMjkuMkwyNDAuMSAxMzAuOGwtOS40LTkuNGMtMTIuNS0xMi41LTMyLjgtMTIuNS00NS4zIDBzLTEyLjUgMzIuOCAwIDQ1LjNsMTYwIDE2MGMxMi41IDEyLjUgMzIuOCAxMi41IDQ1LjMgMHMxMi41LTMyLjggMC00NS4zbC05LjQtOS40TDQ4Mi44IDE3MC40YzM5LTM5IDM5LTEwMi4yIDAtMTQxLjFzLTEwMi4yLTM5LTE0MS4xIDB6TTU1LjQgMzIzLjNjLTE1IDE1LTIzLjQgMzUuNC0yMy40IDU2LjZ2NDIuNEw1LjQgNDYyLjJjLTguNSAxMi43LTYuOCAyOS42IDQgNDAuNHMyNy43IDEyLjUgNDAuNCA0TDg5LjcgNDgwaDQyLjRjMjEuMiAwIDQxLjYtOC40IDU2LjYtMjMuNEwzMDkuNCAzMzUuOWwtNDUuMy00NS4zTDE0My40IDQxMS4zYy0zIDMtNy4xIDQuNy0xMS4zIDQuN0g5NlYzNzkuOWMwLTQuMiAxLjctOC4zIDQuNy0xMS4zTDIyMS40IDI0Ny45bC00NS4zLTQ1LjNMNTUuNCAzMjMuM3oiLz48L3N2Zz4=" />
            </Text>
          </Button>
        )}
      </>
    );
  });

GradientPickerEyeDropper.displayName = "@raikou/core/GradientPickerEyeDropper";
