import React from "react";
import { NativeSelect } from "./NativeSelect";
import { TextInput } from "../../TextInput/src";
import { rem } from "@raikou/core";

export default { title: "NativeSelect" };

export function WithinDisabledFieldset() {
  return (
    <fieldset disabled style={{ padding: 40 }}>
      <legend>Disabled fieldset</legend>
      <NativeSelect
        data={["React"]}
        size="lg"
        placeholder="Disabled input within fieldset"
      />
      <NativeSelect
        data={["React"]}
        size="lg"
        placeholder="Disabled input"
        disabled
        mt="md"
      />
    </fieldset>
  );
}

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <NativeSelect data={["React", "Angular", "Vue"]} />
    </div>
  );
}

export function Groups() {
  return (
    <div style={{ padding: 40 }}>
      <NativeSelect
        data={[
          {
            group: "Frontend",
            items: ["React", "Angular", "Vue"],
          },
          {
            group: "Backend",
            items: ["Node", "PHP", "Python"],
          },
        ]}
      />
    </div>
  );
}

export function OptionsAsChildren() {
  return (
    <div style={{ padding: 40 }}>
      <NativeSelect error="test-error" size="xl">
        <optgroup label="Front">
          <option>React</option>
          <option>Angular</option>
          <option>Vue</option>
        </optgroup>
        <optgroup label="Back">
          <option>Node</option>
          <option>PHP</option>
          <option>Python</option>
        </optgroup>
      </NativeSelect>
    </div>
  );
}

const data = [
  { value: "eur", label: "🇪🇺 EUR" },
  { value: "usd", label: "🇺🇸 USD" },
  { value: "cad", label: "🇨🇦 CAD" },
  { value: "gbp", label: "🇬🇧 GBP" },
  { value: "aud", label: "🇦🇺 AUD" },
];

export function WithinRightSection() {
  const select = (
    <NativeSelect
      data={data}
      rightSectionWidth={28}
      styles={{
        input: {
          fontWeight: 500,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          width: rem(92),
          marginRight: rem(-2),
        },
      }}
    />
  );

  return (
    <TextInput
      type="number"
      placeholder="1000"
      label="Transfer amount"
      rightSection={select}
      rightSectionWidth={92}
    />
  );
}
