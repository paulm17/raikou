import React from "react";
import { Button } from "../../components/Button/src";
import { Group } from "../../components/Group/src";
import { NavigationProgress } from "./NavigationProgress";
import { nprogress } from "./nprogress.store";

export default { title: "NavigationProgress" };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <NavigationProgress />
      <Group>
        <Button onClick={nprogress.start}>Start</Button>
        <Button onClick={nprogress.stop}>Stop</Button>
        <Button onClick={() => nprogress.set(95)}>Set 95</Button>
        <Button onClick={nprogress.increment}>Increment</Button>
        <Button onClick={nprogress.decrement}>Decrement</Button>
        <Button onClick={nprogress.complete}>Complete</Button>
      </Group>
    </div>
  );
}
