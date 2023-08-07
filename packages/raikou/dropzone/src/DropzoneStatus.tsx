import React, { cloneElement } from "react";
import { upperFirst } from "@raikou/hooks";
import { isElement, useProps } from "@raikou/core";
import { DropzoneContextValue, useDropzoneContext } from "./Dropzone.context";

export interface DropzoneStatusProps {
  children: React.ReactNode;
}

type DropzoneStatusComponent = React.FC<DropzoneStatusProps>;

function createDropzoneStatus(status: keyof DropzoneContextValue) {
  const Component: DropzoneStatusComponent = (props) => {
    const { children, ...others } = useProps(
      `Dropzone${upperFirst(status)}`,
      {},
      props,
    );

    const ctx = useDropzoneContext();
    const _children = isElement(children) ? children : <span>{children}</span>;

    if (ctx[status]) {
      return cloneElement(_children as JSX.Element, others);
    }

    return null;
  };

  Component.displayName = `@raikou/dropzone/${upperFirst(status)}`;

  return Component;
}

export const DropzoneAccept = createDropzoneStatus("accept");
export const DropzoneReject = createDropzoneStatus("reject");
export const DropzoneIdle = createDropzoneStatus("idle");

export type DropzoneAcceptProps = DropzoneStatusProps;
export type DropzoneRejectProps = DropzoneStatusProps;
export type DropzoneIdleProps = DropzoneStatusProps;
