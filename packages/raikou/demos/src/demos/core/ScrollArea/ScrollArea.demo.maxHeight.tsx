import React from "react";
import { useCounter } from "@raikou/hooks";
import { RaikouDemo } from "@raikou/ds";
import { Button, Group } from "@raikou/server";
import { ScrollArea } from "@raikou/client";

const lorem =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis reiciendis voluptate eaque itaque quos. Natus iure tenetur libero, reprehenderit ad, sequi, in aliquam eos necessitatibus expedita delectus veniam culpa!";

const code = `
import { useCounter } from '@raikou/hooks';
import { ScrollArea, Button, Group } from '@raikou/core';

const lorem =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis reiciendis voluptate eaque itaque quos. Natus iure tenetur libero, reprehenderit ad, sequi, in aliquam eos necessitatibus expedita delectus veniam culpa!';

function Demo() {
  const [count, handlers] = useCounter(3, { min: 0, max: 10 });
  const content = Array(count)
    .fill(0)
    .map((_, index) => <p key={index}>{lorem}</p>);

  return (
    <>
      <ScrollArea.Autosize mah={300} maw={400} mx="auto">
        {content}
      </ScrollArea.Autosize>

      <Group justify="center" mt="md">
        <Button variant="outline" color="red" onClick={handlers.decrement}>
          Remove paragraph
        </Button>
        <Button variant="outline" onClick={handlers.increment}>
          Add paragraph
        </Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const [count, handlers] = useCounter(3, { min: 0, max: 10 });
  const content = Array(count)
    .fill(0)
    .map((_, index) => <p key={index}>{lorem}</p>);

  return (
    <>
      <ScrollArea.Autosize mah={300} maw={400} mx="auto">
        {content}
      </ScrollArea.Autosize>

      <Group justify="center" mt="md">
        <Button variant="outline" color="red" onClick={handlers.decrement}>
          Remove paragraph
        </Button>
        <Button variant="outline" onClick={handlers.increment}>
          Add paragraph
        </Button>
      </Group>
    </>
  );
}

export const maxHeight: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
