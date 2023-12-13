import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { RichTextEditor, useRichTextEditorContext } from "@raikou/tiptap";
import { IconStar } from "@tabler/icons-react";
import { rem } from "@raikou/core";

const code = `
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor, useRichTextEditorContext } from '@raikou/tiptap';
import { IconStar } from '@tabler/icons-react';

function InsertStarControl() {
  const { editor } = useRichTextEditorContext();
  return (
    <RichTextEditor.Control
      onClick={() => editor?.commands.insertContent('⭐')}
      aria-label="Insert star emoji"
      title="Insert star emoji"
    >
      <IconStar style={{ width: rem(16), height: rem(16) }} />
    </RichTextEditor.Control>
  );
}

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Click control to insert star emoji</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <InsertStarControl />
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`;

function InsertStarControl() {
  const { editor } = useRichTextEditorContext();
  return (
    <RichTextEditor.Control
      onClick={() => editor?.commands.insertContent("⭐")}
      aria-label="Insert star emoji"
      title="Insert star emoji"
    >
      <IconStar style={{ width: rem(16), height: rem(16) }} />
    </RichTextEditor.Control>
  );
}

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Click control to insert star emoji</p>",
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <InsertStarControl />
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

export const customControl: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
