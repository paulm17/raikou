import React from "react";
import { useUncontrolled } from "@raikou/hooks";
import {
  Box,
  BoxProps,
  StylesApiProps,
  polymorphicFactory,
  useProps,
  useStyles,
  createVarsResolver,
  PolymorphicFactory,
  RaikouColor,
  RaikouSize,
  getSpacing,
} from "@raikou/core";
import { UnstyledButton } from "../../UnstyledButton/src";
import { AccordionChevron } from "../../Accordion/src";
import { Collapse } from "../../Collapse/src";

export type NavLinkStylesNames =
  | "root"
  | "section"
  | "body"
  | "label"
  | "description"
  | "chevron"
  | "children";
export type NavLinkVariant = "filled" | "light" | "subtle";
export type NavLinkCssVariables = {
  root: "--nl-color" | "--nl-bg" | "--nl-hover";
  children: "--nl-offset";
};

export interface NavLinkProps extends BoxProps, StylesApiProps<NavLinkFactory> {
  /** Link content */
  label?: React.ReactNode;

  /** Link description */
  description?: React.ReactNode;

  /** Section displayed on the left side of the label */
  leftSection?: React.ReactNode;

  /** Section displayed on the right side of the label */
  rightSection?: React.ReactNode;

  /** Determines whether the link should have active styles, `false` by default */
  active?: boolean;

  /** Key of `theme.colors` of any valid CSS color to control active styles, `theme.primaryColor` by default */
  color?: RaikouColor;

  /** If set, label and description will not wrap to the next line, `false` by default */
  noWrap?: boolean;

  /** Child `NavLink` components */
  children?: React.ReactNode;

  /** Controlled nested items collapse state */
  opened?: boolean;

  /** Uncontrolled nested items collapse initial state */
  defaultOpened?: boolean;

  /** Called when open state changes */
  onChange?(opened: boolean): void;

  /** If set, right section will not be rotated when collapse is opened, `false` by default */
  disableRightSectionRotation?: boolean;

  /** Key of `theme.spacing` or any valid CSS value to set collapsed links padding-left, `'lg'` by default */
  childrenOffset?: RaikouSize | (string & {}) | number;

  /** If set, disabled styles will be added to the root element, `false` by default */
  disabled?: boolean;

  /** Called when the link is clicked */
  onClick?(event: React.MouseEvent<HTMLAnchorElement>): void;
}

export type NavLinkFactory = PolymorphicFactory<{
  props: NavLinkProps;
  defaultRef: HTMLAnchorElement;
  defaultComponent: "a";
  stylesNames: NavLinkStylesNames;
  vars: NavLinkCssVariables;
  variant: NavLinkVariant;
}>;

const defaultProps: Partial<NavLinkProps> = {
  variant: "light",
  childrenOffset: "lg",
};

const varsResolver = createVarsResolver<NavLinkFactory>(
  (theme, { variant, color, childrenOffset }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      variant: variant!,
    });

    return {
      root: {
        "--nl-bg": colors.background,
        "--nl-hover": colors.hover,
        "--nl-color": colors.color,
      },

      children: {
        "--nl-offset": getSpacing(childrenOffset),
      },
    };
  },
);

export const NavLink = polymorphicFactory<NavLinkFactory>((_props, ref) => {
  const props = useProps("NavLink", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    opened,
    defaultOpened,
    onChange,
    children,
    onClick,
    active,
    disabled,
    leftSection,
    rightSection,
    label,
    description,
    disableRightSectionRotation,
    noWrap,
    childrenOffset,
    ...others
  } = props;

  const getStyles = useStyles<NavLinkFactory>({
    name: "NavLink",
    props,
    classes: {
      root: "navLink-root",
      section: "navLink-section",
      label: "navLink-label",
      body: "navLink-body",
      description: "navLink-description",
      children: "navLink-children",
      chevron: "navLink-chevron",
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const [_opened, setOpened] = useUncontrolled({
    value: opened,
    defaultValue: defaultOpened,
    finalValue: false,
    onChange,
  });

  const withChildren = !!children;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (withChildren) {
      event.preventDefault();
      onClick?.(event);
      setOpened(!_opened);
    } else {
      onClick?.(event);
    }
  };

  return (
    <>
      <UnstyledButton
        {...getStyles("root")}
        component="a"
        ref={ref}
        onClick={handleClick}
        unstyled={unstyled}
        mod={{ disabled, active, expanded: _opened }}
        {...others}
      >
        {leftSection && (
          <Box
            component="span"
            {...getStyles("section")}
            mod={{ position: "left" }}
          >
            {leftSection}
          </Box>
        )}
        <Box {...getStyles("body")} mod={{ "no-wrap": noWrap }}>
          <Box component="span" {...getStyles("label")}>
            {label}
          </Box>
          <Box component="span" mod={{ active }} {...getStyles("description")}>
            {description}
          </Box>
        </Box>
        {(withChildren || rightSection) && (
          <Box
            {...getStyles("section")}
            component="span"
            mod={{
              rotate: _opened && !disableRightSectionRotation,
              position: "right",
            }}
          >
            {withChildren
              ? rightSection || <AccordionChevron {...getStyles("chevron")} />
              : rightSection}
          </Box>
        )}
      </UnstyledButton>
      <Collapse in={_opened}>
        <div {...getStyles("children")}>{children}</div>
      </Collapse>
    </>
  );
});

NavLink.displayName = "@raikou/core/NavLink";
