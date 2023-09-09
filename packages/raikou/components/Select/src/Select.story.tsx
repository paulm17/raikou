import React, { useState } from "react";
import { Select } from "./Select";
import { Button } from "../../Button/src";

export default { title: "Select" };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        data={["React", "Angular", "Svelte"]}
        placeholder="Select something"
        defaultValue="First"
      />
    </div>
  );
}

export function ControlledSearch() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        data={["React", "Angular", "Svelte"]}
        placeholder="Select something"
        searchable
        searchValue="Re"
      />
    </div>
  );
}

export function AllowDeselectFalse() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        data={["React", "Angular", "Svelte"]}
        placeholder="Select something"
        allowDeselect={false}
      />
    </div>
  );
}

export function ReadOnly() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        data={["React", "Angular", "Svelte"]}
        placeholder="Select something"
        readOnly
      />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState<string | null>("React");
  return (
    <div style={{ padding: 40 }}>
      <Select
        value={value}
        onChange={setValue}
        data={["React", "Angular", "Svelte"]}
        placeholder="Select something"
      />
      <Button onClick={() => setValue("Angular")}>Angular</Button>
      <Button onClick={() => setValue(null)}>Null</Button>
    </div>
  );
}

export function Searchable() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        data={["React", "Angular", "Svelte"]}
        placeholder="Select something"
        searchable
        nothingFoundMessage="Nothing found..."
      />
    </div>
  );
}

export function HiddenDropdown() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        data={["React", "Angular", "Svelte"]}
        placeholder="Select something"
        searchable
        nothingFoundMessage="Nothing found..."
      />
      <Select
        data={["React", "Angular", "Svelte"]}
        placeholder="No message"
        searchable
        mt="xl"
      />
      <Select data={[]} placeholder="Empty data" searchable mt="xl" />
    </div>
  );
}
