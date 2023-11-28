import React, { useState, useCallback } from "react";
import { Button } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import { useEventListener } from "@raikou/hooks";

const code = `
import { useState, useCallback } from 'react';
import { Button } from '@raikou/core';
import { useEventListener } from '@raikou/hooks';

function Demo() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const ref = useEventListener('click', increment);
  return <Button ref={ref}>Button clicks: {count}</Button>;
}
`;

function Demo() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const ref = useEventListener("click", increment);
  return <Button ref={ref}>Button clicks: {count}</Button>;
}

export const useEventListenerDemo: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true,
};
