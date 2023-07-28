"use client";
import { NativeSelect } from "@raikou/client";
import { useColorScheme } from "@raikou/system";
import { useState, useEffect } from "react";

function Selector() {
  const [value, setValue] = useState("");
  const { allThemes, colorScheme, setColorScheme } = useColorScheme();

  useEffect(() => {
    setValue(colorScheme);
  }, []);

  useEffect(() => {
    setColorScheme(value);
  }, [value]);

  return (
    <NativeSelect
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      data={allThemes}
    />
  );
}

export default Selector;
