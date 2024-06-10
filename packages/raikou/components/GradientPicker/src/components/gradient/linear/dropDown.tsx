import React from "react";
import { Menu } from "../../../../../Menu/src";
import { UnstyledButton } from "../../../../../UnstyledButton/src";
import { Tooltip } from "../../../../../Tooltip/src";
import { Text } from "../../../../../Text/src";
import { Group } from "../../../../../Group/src";
import { useToggle } from "@raikou/hooks";
import AngleSVG from "../../icons/angle.svg";
/* eslint-disable-next-line */
import ToBottom from "../../icons/toBottom.svg";
import ToLeft from "../../icons/toLeft.svg";
/* eslint-disable-next-line */
import ToLeftBottom from "../../icons/toBottom.svg";
import ToRight from "../../icons/toRight.svg";
/* eslint-disable-next-line */
import ToRightBottom from "../../icons/toBottom.svg";
/* eslint-disable-next-line */
import ToTop from "../../icons/toTop.svg";
/* eslint-disable-next-line */
import ToRightTop from "../../icons/toTop.svg";
/* eslint-disable-next-line */
import ToLeftTop from "../../icons/toTop.svg";
import { SetNumber } from "../../../GradientPicker.types";
import { Box } from "@raikou/core";

interface GradientLinearDropDownProps {
  linearAngle: number;
  setLinearAngle: SetNumber;
}

function GradientLinearDropDown({
  linearAngle,
  setLinearAngle,
}: GradientLinearDropDownProps) {
  const [menu, toggleMenu] = useToggle([false, true]);
  const dropDownItems = [
    { value: 90, label: "To Right", filename: "toRight" },
    { value: 180, label: "To Bottom", filename: "toBottom" },
    { value: 270, label: "To Left", filename: "toLeft" },
    { value: 0, label: "To Top", filename: "toTop" },
    { value: 45, label: "To Right Top", filename: "toRightTop" },
    { value: 315, label: "To Left Top", filename: "toLeftTop" },
    { value: 135, label: "To Right Bottom", filename: "toRightBottom" },
    { value: 225, label: "To Left Bottom", filename: "toLeftBottom" },
  ];

  return (
    <Menu
      shadow="md"
      width={155}
      opened={menu}
      onChange={!menu ? () => {} : toggleMenu}
      position="bottom-start"
    >
      <Menu.Target>
        <UnstyledButton
          className="px-[6px] py-[1px]"
          onClick={() => toggleMenu()}
        >
          <Tooltip label="Linear Position" opened={menu ? false : undefined}>
            <Text className="flex justify-center h-[24px] w-[20px] text-center">
              <AngleSVG />
            </Text>
          </Tooltip>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        {dropDownItems.map((item, idx: number) => {
          return (
            <Menu.Item
              key={idx}
              className={`${linearAngle === item.value ? "bg-[#141518]!" : ""}`}
              onClick={() => setLinearAngle(item.value)}
            >
              <Text className="text-[12px] text-[rgb(86,86,86)] text-center font-bold">
                <Group gap={4}>
                  <Text
                    className="flex justify-center text-[20px] h-[20px] w-[20px] align-center text-black"
                    style={{ fill: "currentcolor" }}
                  >
                    {getIcon(item.filename)}
                  </Text>
                  <Text className="ml-[4px] text-[16px]!">{item.label}</Text>
                </Group>
              </Text>
            </Menu.Item>
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
}

const getIcon = (filename: string) => {
  switch (filename) {
    case "toRight":
      return <ToRight />;
    case "toBottom":
      return <ToBottom />;
    case "toLeft":
      return <ToLeft />;
    case "toTop":
      return <ToTop />;
    case "toRightBottom":
      return (
        <Box component="span" className="w-[20px] h-[20px] rotate-45">
          <ToRightBottom />
        </Box>
      );
    case "toLeftBottom":
      return (
        <Box component="span" className="block w-[20px] h-[20px] rotate-45">
          <ToLeftBottom />
        </Box>
      );
    case "toRightTop":
      return (
        <Box component="span" className="block w-[20px] h-[20px] rotate-45">
          <ToRightTop />
        </Box>
      );
    case "toLeftTop":
      return (
        <Box component="span" className="block w-[20px] h-[20px] -rotate-45">
          <ToLeftTop />
        </Box>
      );
    default:
      return <></>;
  }
};

export default GradientLinearDropDown;
