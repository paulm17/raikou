import React from "react";
import { RaikouDemo } from "@raikou/ds";
import {
  BackgroundImage,
  BackgroundImageProps,
  Center,
  Text,
  Box,
} from "@raikou/server";

function Wrapper(props: BackgroundImageProps) {
  return (
    <Box maw={300} mx="auto">
      <BackgroundImage
        {...props}
        src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
      >
        <Center p="md">
          <Text c="white">
            BackgroundImage component can be used to add any content on image.
            It is useful for hero headers and other similar sections
          </Text>
        </Center>
      </BackgroundImage>
    </Box>
  );
}

const code = `
import { BackgroundImage, Center, Text, Box } from '@raikou/core';


function Demo() {
  return (
    <Box maw={300} mx="auto">
      <BackgroundImage
        src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        {{props}}
      >
        <Center p="md">
          <Text c="white">
            BackgroundImage component can be used to add any content on image. It is useful for hero
            headers and other similar sections
          </Text>
        </Center>
      </BackgroundImage>
    </Box>
  );
}
`;

export const usage: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [
    { prop: "radius", type: "size", initialValue: "sm", libraryValue: null },
  ],
};
