import React from "react";
import { useToggle } from "@raikou/hooks";
import { Menu } from "../../../../../Menu/src";
import { UnstyledButton } from "../../../../../UnstyledButton/src";
import { Tooltip } from "../../../../../Tooltip/src";
import { Text } from "../../../../../Text/src";
import { Group } from "../../../../../Group/src";
import {
  GradientObj,
  GradientExtent,
  SetGradient,
} from "../../../GradientPicker.types";
import HeadSideVirusSVG from "../../icons/headSideVirus.svg";

interface gradientRadialSizeDropDownProps {
  gradient: GradientObj;
  setGradient: SetGradient;
}

type dropDownItem = {
  value: GradientExtent;
  label: string;
};

function GradientRadialSizeDropDown(props: gradientRadialSizeDropDownProps) {
  const [menu, toggleMenu] = useToggle([false, true]);
  const dropDownItems: dropDownItem[] = [
    { value: "closest-side", label: "Closest Side" },
    { value: "closest-corner", label: "Closest Corner" },
    { value: "farthest-side", label: "Farthest Side" },
    { value: "farthest-corner", label: "Farthest Corner" },
  ];

  const onChange = (value: GradientExtent) => {
    const gradient = { ...props.gradient } as GradientObj;
    if (gradient) {
      gradient.extent = value;
      props.setGradient(gradient);
    }
  };

  return (
    <Menu
      shadow="md"
      width={150}
      opened={menu}
      onChange={!menu ? () => {} : toggleMenu}
      position="bottom-start"
    >
      <Menu.Target>
        <UnstyledButton onClick={() => toggleMenu()}>
          <Tooltip
            label="Radial Size"
            opened={menu ? false : undefined}
            offset={10}
          >
            <Text className="flex justify-center h-[24px] w-[20px] text-center text-[#a6a7ab]!">
              <HeadSideVirusSVG />
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
                props.gradient.extent === item.value ? "bg-[#141518]!" : ""
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

export default GradientRadialSizeDropDown;
