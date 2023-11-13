import { forwardRef, useEffect, useState } from "react";
import { Box, Text, UnstyledButton } from "@mantine/core";
import { useDidUpdate } from "@mantine/hooks";
import { DefaultProps, useComponentDefaultProps } from "@mantine/styles";
import { useGradientPickerContext } from "../../../GradientPicker.context";
import { FontAwesomeIcon } from "@ecomzilla/ui";
import { GradientObj } from "../../../GradientPicker.types";
import { sortByPosition } from "../utils";

interface ReverseProps extends DefaultProps {}

export const Reverse = forwardRef<HTMLDivElement, ReverseProps>(
  (props, ref) => {
    const { className, classNames, styles, unstyled, ...others } =
      useComponentDefaultProps("Rotate", {}, props);

    const ctx = useGradientPickerContext();

    const onChange = () => {
      const newGradient = { ...ctx.gradient };
      const colors = newGradient.colors?.reverse();

      colors?.map((item) => {
        return (item.position = 100 - item.position);
      });

      sortByPosition(colors, true);

      ctx.setGradient(newGradient as GradientObj);
    };

    return (
      <Box {...others} sx={{ width: "22px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <UnstyledButton onClick={() => onChange()}>
            <Text
              size={14}
              sx={{
                transform: "scaleX(-1)",
              }}
            >
              <FontAwesomeIcon icon="arrows-rotate" type="fas" />
            </Text>
          </UnstyledButton>
        </Box>
      </Box>
    );
  },
);
