import React from "react";
import { PasswordInput } from "./PasswordInput";

export default { title: "PasswordInput" };

export function Usage() {
  return (
    <div data-disabled>
      <PasswordInput placeholder="Your password" label="Your password" />
    </div>
  );
}
