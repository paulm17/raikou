import React from "react";
import { Anchor } from "../../Anchor/src";
import { Breadcrumbs } from "./Breadcrumbs";

export default { title: "Breadcrumbs" };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Breadcrumbs>
        <Anchor>Link 1</Anchor>
        <Anchor>Link 2</Anchor>
        <Anchor>Link 3</Anchor>
      </Breadcrumbs>
    </div>
  );
}
