import React from "react";
import { tests } from "@raikou/tests";
import { Alert, AlertProps, AlertStylesNames } from "./Alert";

const defaultProps: AlertProps = {
  withCloseButton: true,
  icon: "test-icon",
  closeButtonLabel: "test-close",
  title: "test-title",
  children: "test-children",
};

describe("@raikou/core/Alert", () => {
  tests.axe([
    <Alert>Alert message</Alert>,
    <Alert title="Alert title">Alert message</Alert>,
    <Alert withCloseButton closeButtonLabel="test-close">
      Alert message
    </Alert>,
  ]);

  tests.itSupportsSystemProps<AlertProps, AlertStylesNames>({
    component: Alert,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/Alert",
    stylesApiSelectors: [
      "root",
      "body",
      "label",
      "title",
      "icon",
      "wrapper",
      "message",
      "closeButton",
    ],
  });
});
