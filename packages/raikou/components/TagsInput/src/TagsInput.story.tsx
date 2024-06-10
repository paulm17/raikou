import React, { useState } from "react";
import { TagsInput, TagsInputScroller } from "./TagsInput";
import { Box } from "../../Box/src";
import { Button } from "../../Button/src";

export default { title: "TagsInput" };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <TagsInput defaultValue={["React", "Angular"]} placeholder="Enter tags" />
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40 }}>
      <TagsInput
        disabled
        label="disabled"
        defaultValue={["React", "Angular"]}
        placeholder="Enter tags"
      />
      <fieldset disabled>
        <TagsInput
          label="disabled fieldset"
          defaultValue={["React", "Angular"]}
          placeholder="Enter tags"
        />
      </fieldset>
    </div>
  );
}

export function Clearable() {
  return (
    <div style={{ padding: 40 }}>
      <TagsInput
        placeholder="Clearable"
        data={["React", "Angular", "Svelte"]}
        defaultValue={["React"]}
        clearable
      />

      <TagsInput
        placeholder="Disabled"
        data={["React", "Angular", "Svelte"]}
        defaultValue={["React"]}
        clearable
        disabled
        mt="md"
      />

      <TagsInput
        placeholder="Read only"
        data={["React", "Angular", "Svelte"]}
        defaultValue={["React"]}
        clearable
        readOnly
        mt="md"
      />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <TagsInput
        defaultValue={["React", "Angular"]}
        placeholder="Enter tags"
        unstyled
      />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState<string[]>(["React"]);
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TagsInput
        value={value}
        onChange={setValue}
        label="Test"
        placeholder="Test autocomplete"
        data={["React", "Angular", "Svelte"]}
      />
      <Button onClick={() => setValue(["angular"])}>Angular</Button>
      <Button onClick={() => setValue([])}>Empty</Button>
    </div>
  );
}

export function MaxTags() {
  return (
    <div style={{ padding: 40 }}>
      <TagsInput
        defaultValue={["React", "Angular"]}
        placeholder="Enter tags"
        maxTags={3}
        data={["First", "Second", "Third"]}
      />
    </div>
  );
}

export function SplitChars() {
  return (
    <div style={{ padding: 40 }}>
      <TagsInput
        defaultValue={["React", "Angular"]}
        placeholder="Enter tags"
        splitChars={[" ", ","]}
      />
    </div>
  );
}

export function AllowDuplicates() {
  return (
    <div style={{ padding: 40 }}>
      <TagsInput
        defaultValue={["React", "Angular"]}
        placeholder="Enter tags"
        allowDuplicates
      />
    </div>
  );
}

export function WithData() {
  return (
    <div style={{ padding: 40 }}>
      <TagsInput
        defaultValue={["React", "Angular"]}
        placeholder="Enter tags"
        data={["test-1", "test-2"]}
      />
    </div>
  );
}

export function ScrollArea() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <Box className="w-[400px]">
      <TagsInput
        data={[
          "React",
          "React Native",
          "Angular",
          "SolidJS",
          "Svelte",
          "Vue",
          "Flutter",
          "HTMX",
          "Mocha",
          "Jquery",
          "RequireJS",
          "Qwix",
          "NextJS",
          "Ember.Js",
          "Backbone.js",
          "Meteor",
          "Mithril",
        ]}
        value={value}
        onChange={setValue}
        tagsContainer={(children) => (
          <>
            {value.length > 0 && (
              <TagsInputScroller tags={value} maxHeight={100}>
                {children}
              </TagsInputScroller>
            )}
          </>
        )}
        placeholder="Enter tags"
        variant="filled"
        data-test="orange"
        classNames={{
          inputField: "block",
          pill: "mr-[4px] mb-[4px]",
        }}
      />
    </Box>
  );
}
