import React from "react";
import { tests } from "@raikou/tests";
import { TextInput } from "../../TextInput/src";
import { Combobox } from "./Combobox";
import { useCombobox } from "./use-combobox/use-combobox";

function AxeTest() {
  const store = useCombobox({
    defaultOpened: true,
  });

  return (
    <div style={{ padding: 40 }}>
      <Combobox store={store} withinPortal={false}>
        <Combobox.Target>
          <TextInput
            label="Test input"
            onFocus={() => store.openDropdown()}
            onBlur={() => store.closeDropdown()}
          />
        </Combobox.Target>
        <Combobox.Dropdown>
          <Combobox.Options aria-label="test">
            <Combobox.Option value="react">React</Combobox.Option>
            <Combobox.Option value="vue">Vue</Combobox.Option>
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}

describe("@raikou/core/Combobox", () => {
  tests.axe([<AxeTest />]);
});
