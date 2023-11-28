import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { RichTextEditor } from "@raikou/tiptap";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

const code = `
import { RichTextEditor } from '@raikou/tiptap';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit, Placeholder.configure({ placeholder: 'This is placeholder' })],
    content: '',
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`;

function Demo() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({ placeholder: "This is placeholder" }),
    ],
    content: "",
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

export const placeholder: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
