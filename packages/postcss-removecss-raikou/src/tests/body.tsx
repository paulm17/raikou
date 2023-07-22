import React from 'react';
import { ActionIcon, Badge, ColorSwatch } from 'react';

/* eslint-disable no-console, no-control-regex*/
function Body() {
  return (
    <>
      <ActionIcon
        variant="filled"
        size="xl"
        color="blue"
        aria-label="Gradient action icon"
        apple
        pear
      >
        hello
      </ActionIcon>
      <div>this is a div</div>
      <Badge color="blue">hello</Badge>
      <ColorSwatch>hello</ColorSwatch>
      {/* <Divider color="red"></Divider> */}
      {/* <Table size={"xs"}>
        <Tbody>hello</Tbody>
      </Table>*/}
    </>
  );
}

export default Body;
