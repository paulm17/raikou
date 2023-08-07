import React, { useState, useRef } from "react";
import { NumberInput, NumberInputHandlers } from "./NumberInput";
import { Button } from "../../Button/src";

export default { title: "NumberInput" };

export function Usage() {
  const [value, setValue] = useState<number | string>(345);
  return (
    <div style={{ padding: 40 }}>
      <NumberInput
        value={value}
        label="Number input"
        placeholder="Number input"
        onChange={setValue}
      />
      {typeof value === "number"
        ? `${value} number`
        : `${value === "" ? "empty" : value} string`}
      <Button onClick={() => setValue(245.32)}>Set value to float</Button>
    </div>
  );
}

export function MinMax() {
  const [value, setValue] = useState<number | string>(15);
  return (
    <div style={{ padding: 40 }}>
      <NumberInput
        value={value}
        label="Number input"
        placeholder="Number input"
        onChange={setValue}
        min={0}
        max={100}
      />
      {typeof value === "number"
        ? `${value} number`
        : `${value === "" ? "empty" : value} string`}
      <Button onClick={() => setValue(245.32)}>Set value to float</Button>
    </div>
  );
}

export function NoDecimals() {
  const [value, setValue] = useState<number | string>(15);
  return (
    <div style={{ padding: 40 }}>
      <NumberInput
        value={value}
        label="Number input"
        placeholder="Number input"
        onChange={setValue}
        allowDecimal={false}
      />
      {typeof value === "number"
        ? `${value} number`
        : `${value === "" ? "empty" : value} string`}
      <Button onClick={() => setValue(245.32)}>Set value to float</Button>
    </div>
  );
}

export function Handlers() {
  const [value, setValue] = useState<number | string>(15);
  const handlersRef = useRef<NumberInputHandlers>(null);
  return (
    <div style={{ padding: 40 }}>
      <NumberInput
        value={value}
        label="Number input"
        placeholder="Number input"
        onChange={setValue}
        allowDecimal={false}
        handlersRef={handlersRef}
        min={10}
        max={20}
      />
      {typeof value === "number"
        ? `${value} number`
        : `${value === "" ? "empty" : value} string`}
      <Button onClick={() => handlersRef.current?.increment()}>
        Increment
      </Button>
      <Button onClick={() => handlersRef.current?.decrement()}>
        Decrement
      </Button>
    </div>
  );
}
