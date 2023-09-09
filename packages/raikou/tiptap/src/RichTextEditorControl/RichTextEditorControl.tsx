import React, { forwardRef } from "react";
import {
  BoxProps,
  CompoundStylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
  rem,
} from "@raikou/core";
import { UnstyledButton } from "../../../components/UnstyledButton/src";
import { useRichTextEditorContext } from "../RichTextEditor.context";
import { RichTextEditorLabels } from "../labels";

export type RichTextEditorControlStylesNames = "control";

export interface RichTextEditorControlProps
  extends BoxProps,
    CompoundStylesApiProps<RichTextEditorControlFactory>,
    ElementProps<"button"> {
  /** Determines whether the control should have active state, false by default */
  active?: boolean;

  /** Determines whether the control can be interacted with, set `false` to make the control to act as a label */
  interactive?: boolean;
}

export type RichTextEditorControlFactory = Factory<{
  props: RichTextEditorControlProps;
  ref: HTMLButtonElement;
  stylesNames: RichTextEditorControlStylesNames;
  compound: true;
}>;

const defaultProps: Partial<RichTextEditorControlProps> = {
  interactive: true,
};

export const RichTextEditorControl = factory<RichTextEditorControlFactory>(
  (_props, ref) => {
    const props = useProps("RichTextEditorControl", defaultProps, _props);
    const {
      classNames,
      className,
      style,
      styles,
      vars,
      interactive,
      active,
      ...others
    } = props;
    const ctx = useRichTextEditorContext();

    return (
      <UnstyledButton
        {...others}
        {...ctx.getStyles("control", { className, style, classNames, styles })}
        data-rich-text-editor-control
        tabIndex={interactive ? 0 : -1}
        data-interactive={interactive || undefined}
        data-active={active || undefined}
        aria-pressed={(active && interactive) || undefined}
        aria-hidden={!interactive || undefined}
        ref={ref}
      />
    );
  },
);

RichTextEditorControl.displayName = "@raikou/tiptap/RichTextEditorControl";

export interface RichTextEditorControlBaseProps
  extends RichTextEditorControlProps {
  icon?: React.FC<{ style: React.CSSProperties }>;
}

export const RichTextEditorControlBase = forwardRef<
  HTMLButtonElement,
  RichTextEditorControlBaseProps
>(({ className, icon: Icon, ...others }: any, ref) => (
  <RichTextEditorControl ref={ref} {...others}>
    <Icon style={{ width: rem(16), height: rem(16) }} />
  </RichTextEditorControl>
));

RichTextEditorControlBase.displayName =
  "@raikou/tiptap/RichTextEditorControlBase";

export interface CreateControlProps {
  label: keyof RichTextEditorLabels;
  icon: React.FC<{ style: React.CSSProperties }>;
  isActive?: { name: string; attributes?: Record<string, any> | string };
  operation: { name: string; attributes?: Record<string, any> | string };
}

export function createControl({
  label,
  isActive,
  operation,
  icon,
}: CreateControlProps) {
  // eslint-disable-next-line
  return forwardRef<HTMLButtonElement, RichTextEditorControlBaseProps>(
    (props, ref) => {
      const { editor, labels } = useRichTextEditorContext();
      const _label = labels[label] as string;
      return (
        <RichTextEditorControlBase
          {...props}
          aria-label={_label}
          title={_label}
          active={
            isActive?.name
              ? editor?.isActive(isActive.name, isActive.attributes)
              : false
          }
          ref={ref}
          onClick={() =>
            (editor as any)
              ?.chain()
              .focus()
              [operation.name](operation.attributes)
              .run()
          }
          icon={props.icon || icon}
        />
      );
    },
  );
}
