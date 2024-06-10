import React from "react";
import { useToggle } from "@raikou/hooks";
import { Menu } from "../../../../Menu/src";
import { UnstyledButton } from "../../../../UnstyledButton/src";
import { Tooltip } from "../../../../Tooltip/src";
import { Text } from "../../../../Text/src";
import { GradientMeasurement } from "../../GradientPicker.types";

interface measurementSwitcherProps {
  value: GradientMeasurement;
  onChange: (value: GradientMeasurement) => void;
}

type dropDownItems = { value: GradientMeasurement; label: string };

function MeasurementSwitcher({ value, onChange }: measurementSwitcherProps) {
  const [menu, toggleMenu] = useToggle([false, true]);

  const dropDownItems: dropDownItems[] = [
    { value: "%", label: "%" },
    { value: "px", label: "px" },
  ];

  return (
    <Menu
      shadow="md"
      width={40}
      withinPortal
      opened={menu}
      onChange={!menu ? () => {} : toggleMenu}
      position="bottom"
      styles={{
        dropdown: {
          transform: "scale(0.9)",
          background: "rgb(233, 233, 245)",
        },
        item: {
          paddingTop: "5px",
          paddingBottom: "5px",
          paddingLeft: "5px",
          paddingRight: "5px",
        },
      }}
    >
      <Menu.Target>
        <UnstyledButton
          className={`mx-[6px] my-[1px] flex justify-center w-[30px] hover:bg-[rgb(233,233,245)] ${
            menu ? "rounded-[8px]" : "rounded-none"
          }`}
          onClick={() => toggleMenu()}
        >
          <Tooltip
            label="Change Measurement"
            withinPortal
            offset={10}
            opened={menu ? false : undefined}
          >
            <Text className="flex justify-center h-[24px] w-[20px] text-center">
              %
            </Text>
          </Tooltip>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        {dropDownItems.map((item, idx: number) => {
          return (
            <Menu.Item
              key={idx}
              style={{
                background: value === item.value ? "white !important" : "",
              }}
              onClick={() => onChange(item.value)}
            >
              <Text className="text-[12px] text-[rgb(86,86,86)] text-center font-bold">
                <Text>{item.label}</Text>
              </Text>
            </Menu.Item>
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
}

export default MeasurementSwitcher;
