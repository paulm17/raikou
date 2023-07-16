import React from "react";
import { tests } from "@raikou/tests";
import { Collapse, CollapseProps } from "./Collapse";

const defaultProps: CollapseProps = {
  in: true,
  children: <div style={{ height: "20vh" }} />,
};

describe("@raikou/core/Collapse", () => {
  tests.itSupportsSystemProps({
    component: Collapse,
    props: defaultProps,
    children: true,
    styleProps: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/Collapse",
  });
});
