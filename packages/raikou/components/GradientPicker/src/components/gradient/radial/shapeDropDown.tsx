import React from "react";
import { useToggle } from "@raikou/hooks";
import { Menu } from "../../../../../Menu/src";
import { UnstyledButton } from "../../../../../UnstyledButton/src";
import { Tooltip } from "../../../../../Tooltip/src";
import { Text } from "../../../../../Text/src";
import { Group } from "../../../../../Group/src";
import {
  GradientObj,
  GradientShape,
  SetGradient,
} from "../../../GradientPicker.types";
import ShapesSVG from "../../icons/shapes.svg";

interface gradientRadialShapeDropDownProps {
  gradient: GradientObj;
  setGradient: SetGradient;
}

type dropDownItem = {
  value: GradientShape;
  label: string;
};

function GradientRadialShapeDropDown(props: gradientRadialShapeDropDownProps) {
  const [menu, toggleMenu] = useToggle([false, true]);

  const dropDownItems: dropDownItem[] = [
    { value: "ellipse", label: "Ellipse" },
    { value: "circle", label: "Circle" },
    { value: "size", label: "Size" },
  ];

  const onChange = (value: GradientShape) => {
    const gradient = { ...props.gradient } as GradientObj;
    if (gradient) {
      gradient.shape = value;
      props.setGradient(gradient);
    }
  };

  return (
    <Menu
      shadow="md"
      width={80}
      opened={menu}
      onChange={!menu ? () => {} : toggleMenu}
      position="bottom-start"
    >
      <Menu.Target>
        <UnstyledButton className="pr-[4px]!" onClick={() => toggleMenu()}>
          <Tooltip
            label="Radial Shape"
            opened={menu ? false : undefined}
            offset={10}
          >
            <Text className="flex justify-center h-[24px] w-[20px] text-center text-[#a6a7ab]!">
              <ShapesSVG />
            </Text>
          </Tooltip>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        {dropDownItems.map((item, idx: number) => {
          return (
            <Menu.Item
              key={idx}
              className={`${
                props.gradient.shape === item.value ? "bg-[#141518]!" : ""
              }`}
              onClick={() => onChange(item.value)}
            >
              <Text className="text-[12px] text-[rgb(86,86,86)] text-center font-bold">
                <Group gap={4}>
                  <Text className="ml-[4px]">{item.label}</Text>
                </Group>
              </Text>
            </Menu.Item>
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
}

export default GradientRadialShapeDropDown;
