import React from "react";
import { Image } from "../../core";
import { ContextMenuProvider, useContextMenu } from "./";

export default { title: "ContextMenu" };

function Menu() {
  const { showContextMenu } = useContextMenu();
  const contextMenu = showContextMenu([
    {
      key: "copy",
      onClick: () => {},
    },
    {
      key: "download",
      onClick: () => {},
    },
  ]);

  return (
    <div
      style={{ position: "relative", padding: 40, width: 400, height: 400 }}
      onContextMenu={contextMenu}
    >
      <div style={{ position: "relative", zIndex: 1, cursor: "context-menu" }}>
        <Image
          src="https://images.unsplash.com/photo-1485550409059-9afb054cada4?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={`Picture`}
        />
      </div>
    </div>
  );
}

export function Usage() {
  return (
    <ContextMenuProvider>
      <Menu />
    </ContextMenuProvider>
  );
}
