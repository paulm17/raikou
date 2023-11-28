import React, { useState } from "react";
import { getHotkeyHandler, useHotkeys } from "@raikou/hooks";
import { notifications } from "@raikou/notifications";
import { RaikouDemo } from "@raikou/ds";
import { TextInput } from "@raikou/client";

const code = `
import { useState } from 'react';
import { getHotkeyHandler } from '@raikou/hooks';
import { notifications } from '@raikou/notifications';
import { TextInput } from '@raikou/core';

function Demo() {
  const [value, setValue] = useState("I've just used a hotkey to send a message");
  const handleSubmit = () => notifications.show({ title: 'Your message', message: value });
  const handleSave = () => notifications.show({ title: 'You saved', color: 'teal', message: value });

  return (
    <TextInput
      placeholder="Your message"
      label="Press ⌘+Enter or Ctrl+Enter when input has focus to send message"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onKeyDown={getHotkeyHandler([
        ['mod+Enter', handleSubmit],
        ['mod+S', handleSave],
      ])}
    />
  );
}
`;

function Demo() {
  useHotkeys([
    [
      "alt+mod+shift+X",
      () => {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      },
    ],
  ]);

  const [value, setValue] = useState(
    "I've just used a hotkey to send a message",
  );
  const handleSubmit = () =>
    notifications.show({ title: "Your message", message: value });
  const handleSave = () =>
    notifications.show({ title: "You saved", color: "teal", message: value });

  return (
    <TextInput
      placeholder="Your message"
      label="Press ⌘+Enter or Ctrl+Enter when input has focus to send message"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onKeyDown={getHotkeyHandler([
        ["mod+Enter", handleSubmit],
        ["mod+S", handleSave],
      ])}
    />
  );
}

export const useHotkeysDemo: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
