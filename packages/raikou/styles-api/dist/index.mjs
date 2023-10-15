var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/data/Accordion.styles-api.ts
var AccordionStylesApi = {
  selectors: {
    root: "Root element",
    item: "`Accordion.Item` root element",
    control: "`Accordion.Control` root element",
    chevron: "`Accordion.Control` chevron container element",
    label: "`Accordion.Control` label",
    icon: "`Accordion.Control` icon",
    itemTitle: "`Accordion.Control` title (h2-h6) tag",
    panel: "`Accordion.Panel` root element",
    content: "Wrapper element of `Accordion.Panel` `children`"
  },
  vars: {
    root: {
      "--accordion-chevron-size": "Controls chevron container element `width` and `min-width`",
      "--accordion-radius": "Controls `border-radius` in various elements, depending on variant",
      "--accordion-transition-duration": "Controls all animations `transition-duration`"
    }
  },
  modifiers: [
    {
      modifier: "data-active",
      selector: ["item", "control"],
      condition: "Item is active (opened)"
    },
    {
      modifier: "data-chevron-position",
      selector: "control",
      value: "Value of `chevronPosition` prop on `Accordion`"
    }
  ]
};

// src/data/ActionIcon.styles-api.ts
var ActionIconStylesApi = {
  selectors: {
    root: "Root element",
    loader: "`Loader` component, rendered inside root element when `loading` prop is set"
  },
  vars: {
    root: {
      "--ai-bg": "Controls `background`",
      "--ai-hover": "Controls `background` when hovered",
      "--ai-bd": "Controls `border`",
      "--ai-color": "Controls icon `color`",
      "--ai-radius": "Controls `border-radius`",
      "--ai-size": "Controls `width`, `height`, `min-width` and `min-height` styles"
    }
  },
  modifiers: [
    {
      modifier: "data-disabled",
      selector: "root",
      condition: "`disabled` prop is set"
    },
    {
      modifier: "data-loading",
      selector: "root",
      condition: "`loading` prop is set"
    }
  ]
};
var ActionIconGroupStylesApi = {
  selectors: {
    group: "Root element"
  },
  vars: {
    group: {
      "--ai-border-width": "Controls `border-width` of child ActionIcon components that are placed beside one another"
    }
  },
  modifiers: [
    {
      modifier: "data-orientation",
      selector: "group",
      value: "Value of `orientation` prop"
    }
  ]
};

// src/data/Affix.styles-api.ts
var AffixStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {
    root: {
      "--affix-z-index": "Controls `z-index` property",
      "--affix-top": "Controls `top` property",
      "--affix-bottom": "Controls `bottom` property",
      "--affix-left": "Controls `left` property",
      "--affix-right": "Controls `right` property"
    }
  }
};

// src/data/Alert.styles-api.ts
var AlertStylesApi = {
  selectors: {
    root: "Root element",
    wrapper: "Wrapper around `body` and `icon`",
    body: "Body element, contains `title` and `message`",
    title: "Title element, contains `label` and `icon`",
    label: "Title label",
    message: "Alert message",
    icon: "Icon element",
    closeButton: "Close button"
  },
  vars: {
    root: {
      "--alert-bd": "Controls `border`",
      "--alert-bg": "Controls `background`",
      "--alert-color": "Controls `color`",
      "--alert-radius": "Controls `border-radius`"
    }
  },
  modifiers: [
    {
      modifier: "data-with-close-button",
      selector: "title",
      condition: "`withCloseButton` prop is set"
    }
  ]
};

// src/data/Text.styles-api.ts
var TextStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {
    root: {
      "--text-fz": "Controls `font-size` property",
      "--text-lh": "Controls `line-height` property",
      "--text-gradient": "Text fill gradient",
      "--text-line-clamp": "Number of lines that should be visible"
    }
  },
  modifiers: [
    {
      modifier: "data-truncate",
      selector: "root",
      value: "Value of `truncate` prop",
      condition: "`truncate` prop is set"
    },
    {
      modifier: "data-line-clamp",
      selector: "root",
      condition: "`lineClamp` prop is a number"
    },
    {
      modifier: "data-inline",
      selector: "root",
      condition: "`inline` prop is set"
    },
    {
      modifier: "data-inherit",
      selector: "root",
      condition: "`inherit` prop is set"
    }
  ]
};

// src/data/Anchor.styles-api.ts
var AnchorStylesApi = __spreadProps(__spreadValues({}, TextStylesApi), {
  modifiers: [
    ...TextStylesApi.modifiers,
    {
      modifier: "data-underline",
      selector: "root",
      value: "Value of `underline` prop"
    }
  ]
});

// src/data/AppShell.styles-api.ts
var AppShellStylesApi = {
  selectors: {
    root: "Root element (`AppShell` component)",
    navbar: "`AppShell.Navbar` root element",
    header: "`AppShell.Header` root element",
    main: "`AppShell.Main` root element",
    aside: "`AppShell.Aside` root element",
    footer: "`AppShell.Footer` root element",
    section: "`AppShell.Section` root element"
  },
  vars: {
    root: {
      "--app-shell-transition-duration": "Controls transition duration of all children",
      "--app-shell-transition-timing-function": "Controls transition timing function of all children"
    }
  },
  modifiers: [
    {
      modifier: "data-resizing",
      selector: "root",
      condition: "User is resizing the window"
    },
    {
      modifier: "data-layout",
      selector: "root",
      value: "Value of the `layout` prop"
    },
    {
      modifier: "data-disabled",
      selector: "root",
      condition: "`disabled` prop is set"
    },
    {
      modifier: "data-with-border",
      selector: ["navbar", "header", "aside", "footer"],
      condition: "`withBorder` prop is set either on the `AppShell` or on the associated component"
    },
    {
      modifier: "data-grow",
      selector: "section",
      condition: "`grow` prop is set on the `AppShell.Section`"
    }
  ]
};

// src/data/AspectRatio.styles-api.ts
var AspectRatioStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {
    root: {
      "--ar-ratio": "Aspect ratio"
    }
  }
};

// src/data/Input.styles-api.ts
var InputStylesApi = {
  selectors: {
    wrapper: "Root element of the Input",
    input: "Input element",
    section: "Left and right sections"
  },
  vars: {
    wrapper: {
      "--input-fz": "`font-size` of the input element",
      "--input-height": "`height` or `min-height` of the input element (depends on `multiline` prop)",
      "--input-left-section-width": "`width` of the left section",
      "--input-right-section-width": "`width` of the right section",
      "--input-margin-bottom": "`margin-bottom` of the input element, usually controlled by `Input.Wrapper`",
      "--input-margin-top": "`margin-top` of the input element, usually controlled by `Input.Wrapper`",
      "--input-padding-y": "`padding-top` and `padding-bottom` of the input element",
      "--input-radius": "`border-radius` of the input element",
      "--input-left-section-pointer-events": "Controls `pointer-events` of the left section",
      "--input-right-section-pointer-events": "Controls `pointer-events` of the right section"
    }
  },
  modifiers: [
    {
      modifier: "data-error",
      selector: ["wrapper", "input"],
      condition: "`error` prop is set"
    },
    {
      modifier: "data-disabled",
      selector: "input",
      condition: "`disabled` prop is set"
    },
    {
      modifier: "data-with-right-section",
      selector: "wrapper",
      condition: "`rightSection` prop is set"
    },
    {
      modifier: "data-with-left-section",
      selector: "wrapper",
      condition: "`leftSection` prop is set"
    },
    {
      modifier: "data-multiline",
      selector: "wrapper",
      condition: "`multiline` prop is set"
    },
    {
      modifier: "data-pointer",
      selector: "wrapper",
      condition: "`pointer` prop is set"
    },
    {
      modifier: "data-position",
      selector: "section",
      value: "Section position: left or right"
    }
  ]
};
var InputWrapperStylesApi = {
  selectors: {
    root: "Root element",
    label: "Label element",
    required: "Required asterisk element, rendered inside label",
    description: "Description element",
    error: "Error element"
  },
  vars: {
    label: {
      "--input-label-size": "Controls label `font-size`",
      "--input-asterisk-color": "Controls label asterisk text `color`"
    },
    error: {
      "--input-error-size": "Controls error `font-size`"
    },
    description: {
      "--input-description-size": "Controls description `font-size`"
    }
  }
};

// src/data/Combobox.styles-api.ts
var ComboboxStylesApi = {
  selectors: {
    options: "`Combobox.Options` component",
    dropdown: "`Combobox.Dropdown` component",
    option: "`Combobox.Option` component",
    search: "`Combobox.Search` input",
    empty: "`Combobox.Empty` component",
    header: "`Combobox.Header` component",
    footer: "`Combobox.Footer` component",
    group: "`Combobox.Group` component",
    groupLabel: "Label of `Combobox.Group` component"
  },
  vars: {
    dropdown: {
      "--combobox-option-fz": "Controls option `font-size`",
      "--combobox-option-padding": "Controls option `padding`",
      "--combobox-padding": "Controls dropdown `padding`"
    },
    options: {
      "--combobox-option-fz": "Controls option `font-size`",
      "--combobox-option-padding": "Controls option `padding`"
    }
  },
  modifiers: [
    {
      modifier: "data-combobox-selected",
      selector: "option",
      condition: "Option is selected"
    },
    {
      modifier: "data-combobox-active",
      selector: "option",
      condition: "`active` prop is set"
    },
    {
      modifier: "data-combobox-disabled",
      selector: "option",
      condition: "`disabled` prop is set"
    },
    {
      modifier: "data-hidden",
      selector: "dropdown",
      condition: "`hidden` prop is set"
    }
  ]
};
var ComboboxLikeSelectors = {
  dropdown: "Dropdown root element",
  options: "Options wrapper",
  option: "Option",
  empty: "Nothing found message",
  group: "Options group wrapper",
  groupLabel: "Options group label"
};

// src/data/Autocomplete.styles-api.ts
var AutocompleteStylesApi = {
  selectors: __spreadValues(__spreadValues(__spreadValues({}, InputStylesApi.selectors), InputWrapperStylesApi.selectors), ComboboxLikeSelectors),
  vars: {}
};

// src/data/Avatar.styles-api.ts
var AvatarStylesApi = {
  selectors: {
    root: "Root element",
    image: "`img` element",
    placeholder: "Avatar placeholder, displayed when the image cannot be loaded"
  },
  vars: {
    root: {
      "--avatar-bd": "Controls placeholder `border`",
      "--avatar-bg": "Controls placeholder `background`",
      "--avatar-color": "Controls placeholder text `color`",
      "--avatar-size": "Controls `width`, `min-width` and `height`",
      "--avatar-radius": "Controls `border-radius`"
    }
  }
};
var AvatarGroupStylesApi = {
  selectors: {
    group: "Root element"
  },
  vars: {
    group: {
      "--ag-spacing": "Controls negative spacing between avatars"
    }
  }
};

// src/data/BackgroundImage.styles-api.ts
var BackgroundImageStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {
    root: {
      "--bi-radius": "Controls `border-radius`"
    }
  }
};

// src/data/Badge.styles-api.ts
var BadgeStylesApi = {
  // @ts-ignore
  selectors: {
    root: "Root element",
    section: "Left and right sections",
    label: "Badge children"
  },
  vars: {
    root: {
      "--badge-bd": "Controls `border`",
      "--badge-bg": "Controls `background`",
      "--badge-color": "Controls text `color`",
      "--badge-dot-color": 'Controls dot `color`, only applicable when `variant="dot"`',
      "--badge-fz": "Controls `font-size`",
      "--badge-height": "Controls `height`",
      "--badge-padding-x": "Controls horizontal `padding`",
      "--badge-radius": "Controls `border-radius`"
    }
  },
  modifiers: [
    {
      modifier: "data-block",
      selector: "root",
      condition: "`fullWidth` prop is set"
    },
    {
      modifier: "data-position",
      selector: "section",
      value: "Section position: left or right"
    }
  ]
};

// src/data/Blockquote.styles-api.ts
var BlockquoteStylesApi = {
  selectors: {
    root: "Root element",
    icon: "Icon element",
    cite: "Cite element"
  },
  vars: {
    root: {
      "--bq-bd": "Controls `border`",
      "--bq-bg-dark": "Controls `background-color` in dark color scheme",
      "--bq-bg-light": "Controls `background-color` in light color scheme",
      "--bq-icon-size": "Controls `width` and `height` of the icon",
      "--bq-radius": "Controls `border-radius`"
    }
  }
};

// src/data/Breadcrumbs.styles-api.ts
var BreadcrumbsStylesApi = {
  selectors: {
    root: "Root element",
    separator: "Separator between children",
    breadcrumb: "Breadcrumb item"
  },
  vars: {
    root: {
      "--bc-separator-margin": "Control left and right `margin` of separator"
    }
  }
};

// src/data/Burger.styles-api.ts
var BurgerStylesApi = {
  selectors: {
    root: "Root element (button)",
    burger: "Inner element that contains burger lines"
  },
  vars: {
    root: {
      "--burger-color": "Controls background-color of lines",
      "--burger-size": "Controls width and height of the button",
      "--burger-transition-duration": "Controls transition-duration of lines",
      "--burger-transition-timing-function": "Controls transition-timing-function of lines"
    }
  },
  modifiers: [
    {
      modifier: "data-opened",
      selector: "burger",
      condition: "opened prop is set"
    }
  ]
};

// src/data/Button.styles-api.ts
var ButtonStylesApi = {
  selectors: {
    root: "Root element",
    loader: "Loader component, displayed only when `loading` prop is set",
    inner: "Contains all other elements, child of the `root` element",
    section: "Left and right sections of the button",
    label: "Button children"
  },
  vars: {
    root: {
      "--button-bg": "Controls `background`",
      "--button-bd": "Control `border`",
      "--button-hover": "Controls `background` when hovered",
      "--button-color": "Control text `color`",
      "--button-radius": "Controls `border-radius`",
      "--button-height": "Controls `height` of the button",
      "--button-padding-x": "Controls horizontal `padding` of the button",
      "--button-fz": "Controls `font-size` of the button",
      "--button-justify": "Controls `justify-content` of `inner` element"
    }
  },
  modifiers: [
    {
      modifier: "data-disabled",
      selector: "root",
      condition: "`disabled` prop is set"
    },
    {
      modifier: "data-loading",
      selector: ["root", "label"],
      condition: "`loading` prop is set"
    },
    {
      modifier: "data-block",
      selector: "root",
      condition: "`fullWidth` prop is set"
    },
    {
      modifier: "data-with-left-section",
      selector: "root",
      condition: "`leftSection` is set"
    },
    {
      modifier: "data-with-right-section",
      selector: "root",
      condition: "`rightSection` is set"
    },
    {
      modifier: "data-position",
      selector: "section",
      value: "Section position: left or right"
    }
  ]
};
var ButtonGroupStylesApi = {
  selectors: {
    group: "Root element"
  },
  vars: {
    group: {
      "--button-border-width": "`border-width` of child `Button` components"
    }
  },
  modifiers: [
    {
      modifier: "data-orientation",
      selector: "group",
      value: "Value of `orientation` prop"
    }
  ]
};

// src/data/Card.styles-api.ts
var CardStylesApi = {
  selectors: {
    root: "Root element",
    section: "`Card.Section` root element"
  },
  vars: {
    root: {
      "--card-padding": "Controls `padding` of the card, also used to control `Card.Section` spacing"
    }
  },
  modifiers: [
    {
      modifier: "data-first-section",
      selector: "section",
      condition: "`Card.Section` is the child of the `Card`"
    },
    {
      modifier: "data-last-section",
      selector: "section",
      condition: "`Card.Section` is the last child of the `Card`"
    },
    {
      modifier: "data-with-border",
      selector: "root",
      condition: "`withBorder` prop is set on `Card` component"
    },
    {
      modifier: "data-with-border",
      selector: "section",
      condition: "`withBorder` prop is set on `Card.Section` component"
    },
    {
      modifier: "data-inherit-padding",
      selector: "section",
      condition: "`inheritPadding` prop is set on `Card.Section` component"
    }
  ]
};

// src/data/Carousel.styles-api.ts
var CarouselStylesApi = {
  selectors: {
    root: "Root element",
    slide: "`Carousel.Slide` root element",
    container: "Slides container",
    viewport: "Main element, contains slides container and all controls",
    controls: "Next/previous controls container",
    control: "Next/previous control",
    indicators: "Indicators container",
    indicator: "Indicator button"
  },
  vars: {
    root: {
      "--carousel-control-size": "Controls `width` and `height` of the next/previous buttons",
      "--carousel-controls-offset": "Controls offsets of the next/previous buttons",
      "--carousel-height": "Controls height of the carousel"
    }
  },
  modifiers: [
    {
      modifier: "data-orientation",
      selector: "root",
      value: "Value of `orientation` prop"
    },
    {
      modifier: "data-include-gap-in-size",
      selector: "root",
      condition: "`includeGapInSize` prop is set"
    },
    {
      modifier: "data-inactive",
      selector: "control",
      condition: "No previous/next slides are available"
    },
    {
      modifier: "data-active",
      selector: "indicator",
      condition: "Associated slide is active"
    }
  ]
};

// src/data/Center.styles-api.ts
var CenterStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {}
};

// src/data/Checkbox.styles-api.ts
var CheckboxStylesApi = {
  selectors: {
    root: "Root element",
    input: 'Input element (`input[type="checkbox"]`)',
    icon: "Checkbox icon, used to display checkmark and indeterminate state icon",
    inner: "Wrapper for `icon` and `input`",
    body: "Input body, contains all other elements",
    labelWrapper: "Contains `label`, `description` and `error`",
    label: "Label element",
    description: "Description displayed below the label",
    error: "Error message displayed below the label"
  },
  vars: {
    root: {
      "--checkbox-color": "Controls checked checkbox `background-color`",
      "--checkbox-radius": "Controls checkbox `border-radius`",
      "--checkbox-size": "Controls checkbox `width` and `height`"
    }
  },
  modifiers: [
    {
      modifier: "data-error",
      selector: "input",
      condition: "`error` prop is set"
    },
    {
      modifier: "data-indeterminate",
      selector: "input",
      condition: "`indeterminate` prop is set"
    },
    {
      modifier: "data-label-position",
      selector: "inner",
      value: "Value of `labelPosition` prop"
    }
  ]
};
var CheckboxGroupStylesApi = {
  selectors: __spreadValues({}, InputWrapperStylesApi.selectors),
  vars: {}
};

// src/data/Chip.styles-api.ts
var ChipStylesApi = {
  selectors: {
    root: "Root element",
    checkIcon: "Check icon, visible when checked prop is true",
    iconWrapper: "Wraps `checkIcon` for alignment",
    input: "Input element, hidden by default",
    label: "Input label, used as a chip body"
  },
  vars: {
    root: {
      "--chip-fz": "Controls `font-size`",
      "--chip-size": "Controls `height`",
      "--chip-icon-size": "Controls width and height of the icon",
      "--chip-padding": "Controls horizontal padding when chip is not checked",
      "--chip-checked-padding": "Controls horizontal padding when chip is checked",
      "--chip-radius": "Controls `border-radius`",
      "--chip-bg": "Controls `background-color` when chip is checked",
      "--chip-hover": "Controls `background-color` when chip is checked and hovered",
      "--chip-color": "Controls `color` when chip is checked",
      "--chip-bd": "Controls border when chip is checked",
      "--chip-spacing": "Controls spacing between check icon and label"
    }
  },
  modifiers: [
    {
      modifier: "data-checked",
      selector: "label",
      condition: "Chip is checked"
    },
    {
      modifier: "data-disabled",
      selector: "label",
      condition: "`disabled` prop is set"
    }
  ]
};

// src/data/CloseButton.styles-api.ts
var CloseButtonStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {
    root: {
      "--cb-icon-size": "Controls `width` of the `X` icon",
      "--cb-radius": "Controls `border-radius` of the button",
      "--cb-size": "Controls `width` and `height` of the button"
    }
  }
};

// src/data/Code.styles-api.ts
var CodeStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {
    root: {
      "--code-bg": "Controls `background-color`"
    }
  },
  modifiers: [
    {
      modifier: "data-block",
      selector: "root",
      condition: "`block` prop is set"
    }
  ]
};

// src/data/CodeHighlight.styles-api.ts
var CodeHighlightTabsStylesApi = {
  selectors: {
    root: "Root element",
    pre: "Pre element, contains code element",
    codeWrapper: "Wrapper around code element, used for expand/collapse logic",
    code: "Code element, contains highlighted code",
    header: "Header element, contains copy button and files names",
    controls: "Controls container, contains control buttons (copy/collapse, etc.)",
    control: "Control button, copy/collapse, etc.",
    files: "Files names list",
    file: "File name",
    fileIcon: "File icon",
    showCodeButton: "Button that reveals full code when it is collapsed"
  },
  vars: {}
};
var InlineCodeHighlightStylesApi = {
  selectors: {
    code: "Root element"
  },
  vars: {}
};
var CodeHighlightStylesApi = {
  selectors: {
    root: "Root element",
    pre: "Pre element, contains code element",
    code: "Code element",
    copy: "Copy button"
  },
  vars: {}
};

// src/data/ColorPicker.styles-api.ts
var ColorPickerStylesApi = {
  selectors: {
    wrapper: "Root element",
    preview: "Color preview, displayed only when `format` supports alpha channel",
    body: "Contains alpha/hue sliders and color preview",
    slider: "Alpha and hue sliders root",
    sliderOverlay: "Element used to display various overlays over hue and alpha sliders",
    saturation: "Saturation picker",
    saturationOverlay: "Element used to display various overlays over saturation picker",
    sliders: "Contains alpha and hue sliders",
    thumb: "Thumb of all sliders",
    swatch: "Color swatch",
    swatches: "Color swatches list"
  },
  vars: {
    wrapper: {
      "--cp-body-spacing": "Controls spacing between sliders and saturation",
      "--cp-preview-size": "Controls size of the preview swatch",
      "--cp-width": "Controls `width` of the root element",
      "--cp-swatch-size": "Controls swatch `width` and `height`",
      "--cp-thumb-size": "Controls thumb `width` and `height` in all sliders and saturation picker",
      "--cp-saturation-height": "Controls `height` of the saturation picker"
    }
  }
};

// src/data/ColorInput.styles-api.ts
var ColorInputStylesApi = {
  selectors: __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, InputStylesApi.selectors), InputWrapperStylesApi.selectors), ColorPickerStylesApi.selectors), {
    dropdown: "Popover dropdown",
    colorPreview: "Color swatch preview in input left section",
    eyeDropperButton: "Eye dropper button",
    eyeDropperIcon: "Default eye dropper icon"
  }),
  vars: {
    colorPreview: {
      "--ci-preview-size": "Controls `width` and `height` of color preview"
    },
    eyeDropperIcon: {
      "--ci-eye-dropper-icon-size": "Controls width and height of the eye dropper icon"
    }
  }
};

// src/data/ColorSwatch.styles-api.ts
var ColorSwatchStylesApi = {
  selectors: {
    root: "Root element",
    alphaOverlay: "Overlay with checkerboard pattern",
    shadowOverlay: "Overlay with inner box-shadow",
    colorOverlay: "Overlay with given color background",
    childrenOverlay: "Overlay with `children` inside"
  },
  vars: {
    root: {
      "--cs-radius": "Controls `border-radius` of all overlays and `root` element",
      "--cs-size": "Controls `width`, `height`, `min-width` and `min-height` of the `root` element"
    }
  }
};

// src/data/Container.styles-api.ts
var ContainerStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {
    root: {
      "--container-size": "Controls container `max-width`"
    }
  }
};

// src/data/InputBase.styles-api.ts
var InputBaseStylesApi = {
  selectors: __spreadValues(__spreadValues({}, InputStylesApi.selectors), InputWrapperStylesApi.selectors),
  vars: {}
};

// src/data/Dates.styles-api.ts
var MonthStylesApi = {
  selectors: {
    monthThead: "thead element of month table",
    monthRow: "tr element of month table",
    monthTbody: "tbody element of month table",
    monthCell: "td element of month table",
    month: "Month table element",
    weekdaysRow: "Weekdays tr element",
    weekday: "Weekday th element",
    day: "Month day control"
  },
  vars: {},
  modifiers: [
    {
      modifier: "data-with-spacing",
      selector: "monthCell",
      condition: "`withCellSpacing` prop is set"
    },
    {
      modifier: "data-today",
      selector: "day",
      condition: "Date is the same as new Date()"
    },
    {
      modifier: "data-hidden",
      selector: "day",
      condition: "Day is outside of current month and `hideOutsideDates` is set"
    },
    {
      modifier: "data-disabled",
      selector: "day",
      condition: "Day disabled by one of the props (`excludeDate`, `getDayProps`, etc.)"
    },
    { modifier: "data-weekend", selector: "day", condition: "Day is weekend" },
    {
      modifier: "data-outside",
      selector: "day",
      condition: "Day is outside of the current month"
    },
    {
      modifier: "data-selected",
      selector: "day",
      condition: "Day is selected"
    },
    {
      modifier: "data-in-range",
      selector: "day",
      condition: "Day is in range selection"
    },
    {
      modifier: "data-first-in-range",
      selector: "day",
      condition: "Day is first in range selection"
    },
    {
      modifier: "data-last-in-range",
      selector: "day",
      condition: "Day is last in range selection"
    }
  ]
};
var CalendarHeaderStylesApi = {
  selectors: {
    calendarHeader: "Calendar header root element",
    calendarHeaderControl: "Previous/next calendar header controls",
    calendarHeaderControlIcon: "Icon of previous/next calendar header controls",
    calendarHeaderLevel: "Level control (changes levels when clicked, month -> year -> decade)"
  },
  vars: {
    calendarHeader: {
      "--dch-control-size": "Controls size of the previous/next and level controls",
      "--dch-fz": "Controls font-size of the previous/next and level controls"
    }
  },
  modifiers: [
    {
      modifier: "data-direction",
      selector: "calendarHeaderControl",
      value: '`"previous"` or `"next"` depending on the control type'
    },
    {
      modifier: "data-disabled",
      selector: "calendarHeaderControl",
      condition: "Control is disabled for any reason"
    }
  ]
};
var DecadeLevelGroupStylesApi = {
  selectors: __spreadProps(__spreadValues({}, CalendarHeaderStylesApi.selectors), {
    levelsGroup: "Group of decades levels",
    yearsList: "Years list table element",
    yearsListRow: "Years list row element",
    yearsListCell: "Years list cell element",
    yearsListControl: "Button used to pick months and years"
  }),
  vars: {}
};
var YearLevelGroupStylesApi = {
  selectors: __spreadProps(__spreadValues({}, CalendarHeaderStylesApi.selectors), {
    levelsGroup: "Group of decades levels",
    monthsList: "Years list table element",
    monthsListRow: "Years list row element",
    monthsListCell: "Years list cell element",
    monthsListControl: "Button used to pick months and years"
  }),
  vars: {}
};
var MonthLevelGroupStylesApi = {
  selectors: __spreadValues(__spreadProps(__spreadValues({}, CalendarHeaderStylesApi.selectors), {
    levelsGroup: "Group of decades levels"
  }), MonthStylesApi.selectors),
  vars: {}
};
var CalendarStylesApi = {
  selectors: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, CalendarHeaderStylesApi.selectors), DecadeLevelGroupStylesApi.selectors), YearLevelGroupStylesApi.selectors), MonthLevelGroupStylesApi.selectors),
  vars: {},
  modifiers: [
    ...CalendarHeaderStylesApi.modifiers,
    ...MonthStylesApi.modifiers
  ]
};
var YearPickerStylesApi = {
  selectors: __spreadValues(__spreadValues({}, CalendarHeaderStylesApi.selectors), DecadeLevelGroupStylesApi.selectors),
  vars: {},
  modifiers: CalendarHeaderStylesApi.modifiers
};
var MonthPickerStylesApi = {
  selectors: __spreadValues(__spreadValues(__spreadValues({}, CalendarHeaderStylesApi.selectors), DecadeLevelGroupStylesApi.selectors), YearLevelGroupStylesApi.selectors),
  vars: {},
  modifiers: CalendarHeaderStylesApi.modifiers
};
var DatePickerStylesApi = {
  selectors: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, CalendarHeaderStylesApi.selectors), DecadeLevelGroupStylesApi.selectors), YearLevelGroupStylesApi.selectors), MonthLevelGroupStylesApi.selectors),
  vars: {},
  modifiers: [
    ...CalendarHeaderStylesApi.modifiers,
    ...MonthStylesApi.modifiers
  ]
};
var YearPickerInputStylesApi = {
  selectors: __spreadValues(__spreadValues({}, InputBaseStylesApi.selectors), YearPickerStylesApi.selectors),
  vars: {},
  modifiers: YearPickerStylesApi.modifiers
};
var MonthPickerInputStylesApi = {
  selectors: __spreadValues(__spreadValues({}, InputBaseStylesApi.selectors), MonthPickerStylesApi.selectors),
  vars: {},
  modifiers: MonthPickerStylesApi.modifiers
};
var DatePickerInputStylesApi = {
  selectors: __spreadValues(__spreadValues({}, InputBaseStylesApi.selectors), DatePickerStylesApi.selectors),
  vars: {},
  modifiers: DatePickerStylesApi.modifiers
};
var DateInputStylesApi = {
  selectors: __spreadValues(__spreadValues({}, InputBaseStylesApi.selectors), DatePickerStylesApi.selectors),
  vars: {},
  modifiers: DatePickerStylesApi.modifiers
};
var DateTimePickerStylesApi = {
  selectors: __spreadProps(__spreadValues(__spreadValues({}, InputBaseStylesApi.selectors), DatePickerStylesApi.selectors), {
    timeWrapper: "Wrapper around time input and submit button",
    timeInput: "TimeInput",
    submitButton: "Submit button"
  }),
  vars: {},
  modifiers: DatePickerStylesApi.modifiers
};
var TimeInputStylesApi = InputBaseStylesApi;

// src/data/Dialog.styles-api.ts
var DialogStylesApi = {
  selectors: {
    root: "Root element",
    closeButton: "Close button"
  },
  vars: {
    root: {
      "--dialog-size": "Controls `width` of the dialog"
    }
  }
};

// src/data/Divider.styles-api.ts
var DividerStylesApi = {
  selectors: {
    root: "Root element",
    label: "Label element"
  },
  vars: {
    root: {
      "--divider-border-style": "Controls `border-style`",
      "--divider-color": "Controls `border-color`",
      "--divider-size": "Controls `border-width`"
    }
  },
  modifiers: [
    {
      modifier: "data-with-label",
      selector: "root",
      condition: "`label` prop is truthy"
    },
    {
      modifier: "data-orientation",
      selector: "root",
      value: "Value of `orientation` prop"
    },
    {
      modifier: "data-position",
      selector: "label",
      value: "Value of `labelPosition` prop"
    }
  ]
};

// src/data/Drawer.styles-api.ts
var DrawerStylesApi = {
  selectors: {
    root: "Root element",
    inner: "Element used to center modal, has fixed position, takes entire screen",
    content: "`Drawer.Content` root element",
    header: "Contains title and close button",
    overlay: "Overlay displayed under the `Drawer.Content`",
    title: "Drawer title (h2 tag), displayed in the header",
    body: "Drawer body, displayed after header",
    close: "Close button"
  },
  vars: {
    root: {
      "--drawer-size": "Controls `width` of `Drawer.Content`",
      "--drawer-flex": "Controls `flex` property of `Drawer.Content`",
      "--drawer-align": "Controls `align-items` property of `Drawer.Content`",
      "--drawer-justify": "Controls `justify-content` property of `Drawer.Content`",
      "--drawer-height": "Controls `height` property of `Drawer.Content`"
    }
  }
};

// src/data/Dropzone.styles-api.ts
var DropzoneStylesApi = {
  // @ts-ignore
  selectors: {
    root: "Dropzone root element",
    inner: "Dropzone inner element (wraps children)"
  },
  vars: {
    root: {
      "--dropzone-accept-bg": "Controls `background-color` when file is accepted",
      "--dropzone-reject-bg": "Controls `background-color` when file is rejected",
      "--dropzone-accept-color": "Controls `color` when file is accepted",
      "--dropzone-reject-color": "Controls `color` when file is rejected",
      "--dropzone-radius": "Controls `border-radius`"
    }
  },
  modifiers: [
    {
      modifier: "data-accept",
      selector: "root",
      condition: "Files that are dragged over the dropzone are accepted"
    },
    {
      modifier: "data-reject",
      selector: "root",
      condition: "Files that are dragged over the dropzone are rejected"
    },
    { modifier: "data-idle", selector: "root", condition: "Dropzone is idle" },
    {
      modifier: "data-loading",
      selector: "root",
      condition: "`loading` prop is set"
    },
    {
      modifier: "data-activate-on-click",
      selector: "root",
      condition: "`activateOnClick` prop is `true`"
    }
  ]
};
var DropzoneFullScreenStylesApi = {
  selectors: __spreadValues({
    // @ts-ignore
    fullScreen: "Dropzone.Fullscreen root element"
  }, DropzoneStylesApi.selectors),
  vars: {}
};

// src/data/Fieldset.styles-api.ts
var FieldsetStylesApi = {
  selectors: {
    root: "Root element",
    legend: "Legend element"
  },
  vars: {
    root: {
      "--fieldset-radius": "Controls `border-radius`"
    }
  }
};

// src/data/FileInput.styles-api.ts
var FileInputStylesApi = {
  selectors: __spreadValues(__spreadValues({}, InputStylesApi.selectors), InputWrapperStylesApi.selectors),
  vars: {}
};

// src/data/Flex.styles-api.ts
var FlexStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {}
};

// src/data/Grid.styles-api.ts
var GridStylesApi = {
  selectors: {
    root: "Root element",
    inner: "Columns wrapper",
    col: "`Grid.Col` root element"
  },
  vars: {
    root: {
      "--grid-align": "Controls `align-items` property",
      "--grid-justify": "Controls `justify-content` property"
    }
  }
};

// src/data/Group.styles-api.ts
var GroupStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {
    root: {
      "--group-align": "Controls `align-items` property",
      "--group-justify": "Controls `justify-content` property",
      "--group-gap": "Controls `gap` property",
      "--group-wrap": "Controls `flex-wrap` property",
      "--group-child-width": "Controls `max-width` of child elements, applied when grow prop is set and `preventGrowOverflow` is `true`"
    }
  },
  modifiers: [
    {
      modifier: "data-grow",
      selector: "root",
      condition: "`grow` prop is set"
    }
  ]
};

// src/data/Highlight.styles-api.ts
var HighlightStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {}
};

// src/data/Popover.styles-api.ts
var PopoverStylesApi = {
  selectors: {
    dropdown: "Dropdown element",
    arrow: "Dropdown arrow"
  },
  vars: {
    dropdown: {
      "--popover-radius": "Controls dropdown border-radius",
      "--popover-shadow": "Controls dropdown box-shadow"
    }
  },
  modifiers: [
    {
      modifier: "data-position",
      selector: "dropdown",
      value: "Value of floating ui dropdown position"
    }
  ]
};

// src/data/HoverCard.styles-api.ts
var HoverCardStylesApi = PopoverStylesApi;

// src/data/Image.styles-api.ts
var ImageStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {
    root: {
      "--image-object-fit": "Controls `object-fit` property",
      "--image-radius": "Controls `border-radius` property"
    }
  },
  modifiers: [
    {
      modifier: "data-fallback",
      selector: "root",
      condition: "Image failed to load"
    }
  ]
};

// src/data/Indicator.styles-api.ts
var IndicatorStylesApi = {
  selectors: {
    root: "Root element",
    indicator: "Indicator element"
  },
  vars: {
    root: {
      "--indicator-bottom": "Controls `bottom` style",
      "--indicator-left": "Controls `left` style",
      "--indicator-right": "Controls `right` style",
      "--indicator-top": "Controls `top` style",
      "--indicator-radius": "Controls `border-radius`",
      "--indicator-size": "Controls `min-width` and `height`",
      "--indicator-translate-x": "Controls `translateX` style, used for positioning",
      "--indicator-translate-y": "Controls `translateY` style, used for positioning",
      "--indicator-z-index": "Controls `z-index` style",
      "--indicator-color": "Controls `background-color`"
    }
  },
  modifiers: [
    {
      modifier: "data-inline",
      selector: "root",
      condition: "`inline` prop is set"
    },
    {
      modifier: "data-with-label",
      selector: "indicator",
      condition: "`label` prop is set"
    },
    {
      modifier: "data-with-border",
      selector: "indicator",
      condition: "`withBorder` prop is set"
    },
    {
      modifier: "data-processing",
      selector: "indicator",
      condition: "`processing` prop is set"
    }
  ]
};

// src/data/JsonInput.styles-api.ts
var JsonInputStylesApi = {
  selectors: __spreadValues(__spreadValues({}, InputStylesApi.selectors), InputWrapperStylesApi.selectors),
  vars: {}
};

// src/data/Kbd.styles-api.ts
var KbdStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {
    root: {
      "--kbd-fz": "Controls `font-size`",
      "--kbd-padding": "Controls `padding`"
    }
  }
};

// src/data/List.styles-api.ts
var ListStylesApi = {
  selectors: {
    root: "Root element",
    item: "ListItem root element",
    itemIcon: "ListItem icon",
    itemLabel: "ListItem content",
    itemWrapper: "ListItem wrapper element, container, icon and content"
  },
  vars: {
    root: {
      "--list-fz": "Controls `font-size`",
      "--list-lh": "Controls `line-height`",
      "--list-spacing": "Controls spacing between items"
    }
  },
  modifiers: [
    {
      modifier: "data-with-padding",
      selector: "root",
      condition: "`withPadding` prop is set"
    },
    {
      modifier: "data-centered",
      selector: "item",
      condition: "`center` prop is set on List component"
    },
    {
      modifier: "data-with-icon",
      selector: "item",
      condition: "`icon` prop is set on ListItem component"
    }
  ]
};

// src/data/Loader.styles-api.ts
var LoaderStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {
    root: {
      "--loader-size": "Controls loader size (usually `width` and `height`, in some cases only `width`)",
      "--loader-color": "Control loader color"
    }
  }
};

// src/data/LoadingOverlay.styles-api.ts
var LoadingOverlayStylesApi = {
  selectors: {
    root: "Root element",
    overlay: "`Overlay` component",
    loader: "`Loader` component"
  },
  vars: {
    root: {
      "--lo-z-index": "Controls `z-index` of the overlay and loader"
    }
  }
};

// src/data/Mark.styles-api.ts
var MarkStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {
    root: {
      "--mark-bg-dark": "Controls `background-color` in dark color scheme",
      "--mark-bg-light": "Controls `background-color` for light color scheme"
    }
  }
};

// src/data/Menu.styles-api.ts
var MenuStylesApi = {
  selectors: __spreadProps(__spreadValues({}, PopoverStylesApi.selectors), {
    divider: "`Menu.Divider` root element",
    label: "`Menu.Label` root element",
    item: "`Menu.Item` root element",
    itemLabel: "Label of `Menu.Item`",
    itemSection: "Left and right sections of `Menu.Item`"
  }),
  vars: {},
  modifiers: [
    {
      modifier: "data-disabled",
      selector: "item",
      condition: "`disabled` prop is set on `Menu.Item`"
    },
    {
      modifier: "data-hovered",
      selector: "item",
      condition: "`Menu.Item` is hovered or selected with keyboard"
    }
  ]
};

// src/data/Modal.styles-api.ts
var ModalStylesApi = {
  selectors: {
    root: "Root element",
    inner: "Element used to center modal, has fixed position, takes entire screen",
    content: "`Modal.Content` root element",
    header: "Contains title and close button",
    overlay: "Overlay displayed under the `Modal.Content`",
    title: "Modal title (h2 tag), displayed in the header",
    body: "Modal body, displayed after header",
    close: "Close button"
  },
  vars: {
    root: {
      "--modal-radius": "Controls `border-radius` of `Modal.Content`",
      "--modal-size": "Controls `width` of `Modal.Content`",
      "--modal-x-offset": "Controls left and right `padding` of the inner element used to position `Modal.Content`",
      "--modal-y-offset": "Controls top and bottom `padding` of the inner element used to position `Modal.Content`"
    }
  },
  modifiers: [
    {
      modifier: "data-full-screen",
      selector: "root",
      condition: "`fullScreen` prop is set"
    },
    {
      modifier: "data-centered",
      selector: "root",
      condition: "`centered` prop is set"
    }
  ]
};

// src/data/MultiSelect.styles-api.ts
var MultiSelectStylesApi = {
  selectors: __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, InputStylesApi.selectors), InputWrapperStylesApi.selectors), ComboboxLikeSelectors), {
    pill: "Value pill",
    inputField: "Input field",
    pillsList: "List of pills, also contains input field"
  }),
  vars: {}
};

// src/data/NativeSelect.styles-api.ts
var NativeSelectStylesApi = {
  selectors: __spreadValues(__spreadValues({}, InputWrapperStylesApi.selectors), InputStylesApi.selectors),
  vars: {}
};

// src/data/NavLink.styles-api.ts
var NavLinkStylesApi = {
  selectors: {
    root: "Root element",
    body: "Contains label and description",
    section: "Left and right sections",
    label: "NavLink label",
    description: "Dimmed description displayed below the label",
    children: "Wrapper around nested links",
    chevron: "Default chevron icon"
  },
  vars: {
    root: {
      "--nl-bg": "Controls link `background-color`",
      "--nl-color": "Controls link `color`",
      "--nl-hover": "Controls link `background-color` when hovered"
    },
    children: {
      "--nl-offset": "Controls nested links offset"
    }
  },
  modifiers: [
    {
      modifier: "data-active",
      selector: "root",
      condition: "`active` prop is set"
    }
  ]
};

// src/data/Notification.styles-api.ts
var NotificationStylesApi = {
  selectors: {
    root: "Root element",
    loader: "Loader component, displayed only when `loading` prop is set",
    icon: "Icon component, displayed only when `icon` prop is set",
    body: "Notification body, contains all other elements",
    title: "Title element, displayed only when `title` prop is set",
    description: "Description displayed below the title",
    closeButton: "Close button element"
  },
  vars: {
    root: {
      "--notification-radius": "Controls `border-radius`",
      "--notification-color": "Controls icon color or notification line color"
    }
  },
  modifiers: [
    {
      modifier: "data-with-icon",
      selector: "root",
      condition: "`icon` prop is set"
    },
    {
      modifier: "data-with-border",
      selector: "root",
      condition: "`withBorder` prop is set"
    },
    {
      modifier: "data-with-title",
      selector: "description",
      condition: "`title` prop is set"
    }
  ]
};

// src/data/NumberInput.styles-api.ts
var NumberInputStylesApi = {
  selectors: __spreadProps(__spreadValues(__spreadValues({}, InputStylesApi.selectors), InputWrapperStylesApi.selectors), {
    controls: "Increment and decrement buttons wrapper",
    control: "Increment and decrement buttons"
  }),
  vars: {
    controls: {
      "--ni-chevron-size": "Controls `width` and `height` of the default chevron icon"
    }
  },
  modifiers: [
    {
      modifier: "data-direction",
      selector: "control",
      value: "`up` or `down` depending on the control"
    }
  ]
};

// src/data/Notifications.styles-api.ts
var NotificationsStylesApi = {
  selectors: {
    root: "Notifications container, contains all notifications",
    notification: "Single notification"
  },
  vars: {
    root: {
      "--notifications-container-width": "Controls notifications container `max-width`",
      "--notifications-left": "Controls notifications container `left`",
      "--notifications-right": "Controls notifications container `right`",
      "--notifications-top": "Controls notifications container `top`",
      "--notifications-transform": "Controls notifications container `transform`",
      "--notifications-z-index": "Controls notifications container `z-index`"
    }
  }
};

// src/data/Overlay.styles-api.ts
var OverlayStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {
    root: {
      "--overlay-bg": "Controls `background-color`",
      "--overlay-filter": "Controls `backdrop-filter`",
      "--overlay-radius": "Controls `border-radius`",
      "--overlay-z-index": "Controls `z-index`"
    }
  },
  modifiers: [
    {
      modifier: "data-center",
      selector: "root",
      condition: "`center` prop is set"
    },
    {
      modifier: "data-fixed",
      selector: "root",
      condition: "`fixed` prop is set"
    }
  ]
};

// src/data/Pagination.styles-api.ts
var PaginationStylesApi = {
  selectors: {
    root: "Root element",
    control: "Control element: items, next/previous, first/last buttons",
    dots: "Dots icon wrapper"
  },
  vars: {
    root: {
      "--pagination-active-bg": "Active control `background-color`",
      "--pagination-control-fz": "Controls control `font-size`",
      "--pagination-control-radius": "Controls control `border-radius`",
      "--pagination-control-size": "Controls control `min-width` and `height`"
    }
  },
  modifiers: [
    {
      modifier: "data-active",
      selector: "control",
      condition: "Control is active"
    },
    {
      modifier: "data-disabled",
      selector: "control",
      condition: "Control is disabled"
    }
  ]
};

// src/data/Paper.styles-api.ts
var PaperStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {
    root: {
      "--paper-radius": "Controls `border-radius`",
      "--paper-shadow": "Controls `box-shadow`"
    }
  },
  modifiers: [
    {
      modifier: "data-with-border",
      selector: "root",
      condition: "`withBorderProp` is set"
    }
  ]
};

// src/data/PasswordInput.styles-api.ts
var PasswordInputStylesApi = {
  selectors: __spreadProps(__spreadValues(__spreadValues({}, InputStylesApi.selectors), InputWrapperStylesApi.selectors), {
    innerInput: "Actual input element",
    visibilityToggle: "Visibility toggle button"
  }),
  vars: {
    root: {
      "--psi-button-size": "Controls visibility toggle button `width` and `height`",
      "--psi-icon-size": "Controls visibility toggle icon `width` and `height`"
    }
  }
};

// src/data/Pill.styles-api.ts
var PillStylesApi = {
  selectors: {
    root: "Root element",
    label: "Pill label (children)",
    remove: "Remove button"
  },
  vars: {
    root: {
      "--pill-height": "Controls `height` of the pill",
      "--pill-fz": "Controls `font-size`",
      "--pill-radius": "Controls `border-radius`"
    }
  },
  modifiers: [
    {
      modifier: "data-with-remove",
      selector: "root",
      condition: "`withRemoveButton` prop is set"
    },
    {
      modifier: "data-disabled",
      selector: "root",
      condition: "`disabled` prop is set"
    }
  ]
};
var PillGroupStylesApi = {
  selectors: {
    group: "Root element"
  },
  vars: {
    group: {
      "--pg-gap": "Controls `gap` between pills"
    }
  }
};

// src/data/PillsInput.styles-api.ts
var PillsInputStylesApi = {
  selectors: __spreadValues(__spreadValues({}, InputStylesApi.selectors), InputWrapperStylesApi.selectors),
  vars: {}
};
var PillsInputFieldStylesApi = {
  selectors: {
    field: "Root element"
  },
  vars: {},
  modifiers: [
    { modifier: "data-type", selector: "field", value: "Value of `type` prop" },
    {
      modifier: "data-disabled",
      selector: "field",
      condition: "`disabled` prop is set"
    }
  ]
};

// src/data/PinInput.styles-api.ts
var PinInputStylesApi = {
  selectors: {
    root: "Root element",
    pinInput: "Input item wrapper",
    input: "Input element"
  },
  vars: {
    root: {
      "--pin-input-size": "Controls input `width` and `height`"
    }
  },
  modifiers: []
};

// src/data/Progress.styles-api.ts
var ProgressStylesApi = {
  selectors: {
    root: "Root element",
    section: "`Progress.Section` root element",
    label: "`Progress.Label` root element"
  },
  vars: {
    root: {
      "--progress-radius": "Controls `border-radius` of track and sections",
      "--progress-size": "Controls height of progress bar"
    }
  },
  modifiers: [
    {
      modifier: "data-striped",
      selector: "section",
      condition: "`striped` or `animated` props are set"
    },
    {
      modifier: "data-animated",
      selector: "section",
      condition: "`animated` prop is set"
    }
  ]
};

// src/data/Radio.styles-api.ts
var RadioStylesApi = {
  selectors: {
    root: "Root element",
    radio: 'Input element (`input[type="radio"]`)',
    icon: "Radio icon, used to display checked icon",
    inner: "Wrapper for `icon` and `input`",
    body: "Input body, contains all other elements",
    labelWrapper: "Contains `label`, `description` and `error`",
    label: "Label element",
    description: "Description displayed below the label",
    error: "Error message displayed below the label"
  },
  vars: {
    root: {
      "--radio-color": "Controls checked radio `background-color`",
      "--radio-radius": "Controls radio `border-radius`",
      "--radio-size": "Controls radio `width` and `height`"
    }
  },
  modifiers: [
    {
      modifier: "data-error",
      selector: "radio",
      condition: "`error` prop is set"
    },
    {
      modifier: "data-label-position",
      selector: "inner",
      value: "Value of `labelPosition` prop"
    }
  ]
};
var RadioGroupStylesApi = {
  selectors: __spreadValues({}, InputWrapperStylesApi.selectors),
  vars: {}
};

// src/data/Rating.styles-api.ts
var RatingStylesApi = {
  selectors: {
    root: "Root element",
    starSymbol: "Default star icon",
    input: "Item input, hidden by default",
    label: "Item label, used to display star icon",
    symbolBody: "Wrapper around star icon for centering",
    symbolGroup: "Group of symbols, used to display fractions"
  },
  vars: {
    root: {
      "--rating-color": "Controls filled star icon color",
      "--rating-size": "Controls star icon width and height"
    }
  },
  modifiers: [
    {
      modifier: "data-read-only",
      selector: "label",
      condition: "`readOnly` prop is set"
    },
    {
      modifier: "data-active",
      selector: "input",
      condition: "Input value is the same as component value"
    },
    {
      modifier: "data-filled",
      selector: "starSymbol",
      condition: "Associated input value is less or equal to the component value"
    }
  ]
};

// src/data/RichTextEditor.styles-api.ts
var RichTextEditorStylesApi = {
  selectors: {
    root: "Root element",
    toolbar: "Toolbar element",
    content: "Content area",
    typographyStylesProvider: "TypographyStylesProvider component, wraps content",
    control: "RichTextEditor.Control root element, used as a base for all controls",
    controlsGroup: "RichTextEditor.ControlsGroup component root",
    linkEditor: "Link editor root element",
    linkEditorSave: "Link editor save button",
    linkEditorInput: "Link editor url input",
    linkEditorExternalControl: "Link editor external button",
    linkEditorDropdown: "Link editor popover dropdown element"
  },
  vars: {},
  modifiers: [
    {
      modifier: "data-active",
      selector: "control",
      condition: "Control is active"
    }
  ]
};

// src/data/RingProgress.styles-api.ts
var RingProgressStylesApi = {
  selectors: {
    root: "Root element",
    svg: "svg element",
    curve: "circle element",
    label: "Label element"
  },
  vars: {
    root: {
      "--rp-label-offset": "Label offset on the left and right sides of the ring",
      "--rp-size": "Controls `height` and `width` of svg and root elements"
    }
  }
};

// src/data/ScrollArea.styles-api.ts
var ScrollAreaStylesApi = {
  // @ts-ignore
  selectors: {
    root: "Root element",
    viewport: "",
    scrollbar: "",
    thumb: "",
    corner: ""
  },
  vars: {
    root: {
      "--scrollarea-scrollbar-size": "Scrollbar size"
    }
  },
  modifiers: [
    {
      modifier: "data-hidden",
      selector: ["scrollbar", "corner"],
      condition: 'type="never"'
    },
    {
      modifier: "data-hovered",
      selector: "corner",
      condition: "One of the scrollbars is hovered"
    },
    {
      modifier: "data-orientation",
      selector: "scrollbar",
      value: '"horizontal" or "vertical" depending on scrollbar position'
    }
  ]
};

// src/data/SegmentedControl.styles-api.ts
var SegmentedControlStylesApi = {
  selectors: {
    root: "Root element",
    control: "Wrapper element for input and label",
    input: 'Input element (`input[type="radio"]`), hidden by default',
    label: "Label element associated with input",
    indicator: "Floating indicator that moves between items"
  },
  vars: {
    root: {
      "--sc-color": "Control `background-color` of `indicator`",
      "--sc-font-size": "Controls `font-size` of labels",
      "--sc-padding": "Controls `padding` of control",
      "--sc-radius": "Controls `border-radius` of `indicator` and `root` elements",
      "--sc-shadow": "Controls `box-shadow` of indicator",
      "--sc-transition-duration": "Controls `transition-duration` of various elements that have animations",
      "--sc-transition-timing-function": "Controls `transition-timing-function` of various elements that have animations"
    }
  },
  modifiers: [
    {
      modifier: "data-full-width",
      selector: "root",
      condition: "`fullWidth` prop is set"
    },
    {
      modifier: "data-orientation",
      selector: "control",
      value: "Value of `orientation` prop"
    },
    {
      modifier: "data-active",
      selector: ["label", "control"],
      condition: "Associated input is checked"
    },
    {
      modifier: "data-disabled",
      selector: "label",
      condition: "Associated input is disabled"
    }
  ]
};

// src/data/Select.styles-api.ts
var SelectStylesApi = {
  selectors: __spreadValues(__spreadValues(__spreadValues({}, InputStylesApi.selectors), InputWrapperStylesApi.selectors), ComboboxLikeSelectors),
  vars: {}
};

// src/data/SimpleGrid.styles-api.ts
var SimpleGridStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {}
};

// src/data/Skeleton.styles-api.ts
var SkeletonStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {
    root: {
      "--skeleton-height": "Controls skeleton `height`",
      "--skeleton-width": "Controls skeleton `width`",
      "--skeleton-radius": "Controls skeleton `border-radius`"
    }
  },
  modifiers: [
    {
      modifier: "data-visible",
      selector: "root",
      condition: "`visible` prop is set"
    },
    {
      modifier: "data-animate",
      selector: "root",
      condition: "`animate` prop is set"
    }
  ]
};

// src/data/Slider.styles-api.ts
var SliderStylesApi = {
  selectors: {
    root: "Root element",
    label: "Thumb label",
    thumb: "Thumb element",
    trackContainer: "Wraps track element",
    track: "Slider track",
    bar: "Track filled part",
    markWrapper: "Contains `mark` and `markLabel` elements",
    mark: "Mark displayed on track",
    markLabel: "Label of the associated mark, displayed below track"
  },
  vars: {
    root: {
      "--slider-size": "Controls track `height`",
      "--slider-color": "Controls filled track, thumb and marks `background`",
      "--slider-thumb-size": "Controls thumb `width` and `height`",
      "--slider-radius": "Controls `border-radius` of track and thumb"
    }
  },
  modifiers: [
    {
      modifier: "data-disabled",
      selector: ["trackContainer", "track", "bar", "thumb", "mark"],
      condition: "`disabled` prop is set"
    },
    {
      modifier: "data-inverted",
      selector: ["track", "bar"],
      condition: "`inverted` prop is set"
    },
    {
      modifier: "data-dragging",
      selector: "thumb",
      condition: "slider is being dragged"
    },
    {
      modifier: "data-filled",
      selector: "mark",
      condition: "mark position is less or equal slider value"
    }
  ]
};

// src/data/Spoiler.styles-api.ts
var SpoilerStylesApi = {
  selectors: {
    root: "Root element",
    content: "Wraps content to set max-height and transition",
    control: "Show/hide content control"
  },
  vars: {
    root: {
      "--spoiler-transition-duration": "Controls transition duration"
    }
  },
  modifiers: [
    {
      modifier: "data-has-spoiler",
      selector: "root",
      condition: "Whether the control button is shown or not"
    }
  ]
};

// src/data/Spotlight.styles-api.ts
var SpotlightStylesApi = {
  selectors: __spreadProps(__spreadValues({}, ModalStylesApi.selectors), {
    search: "Search input (`Spotlight.Search`)",
    actionsList: "Actions list (`Spotlight.ActionsList`)",
    empty: "Empty state (`Spotlight.Empty`)",
    footer: "Footer (`Spotlight.Footer`)",
    action: "Action (`Spotlight.Action`)",
    actionBody: "Body of the action, contains label and description",
    actionLabel: "`Spotlight.Action` label",
    actionDescription: "`Spotlight.Action` description",
    actionSection: "`Spotlight.Action` left and right sections",
    actionsGroup: "`Spotlight.ActionsGroup` root element"
  }),
  vars: {},
  modifiers: [
    {
      modifier: "data-selected",
      selector: "action",
      condition: "Action is selected with up/down keys"
    },
    {
      modifier: "data-position",
      selector: "actionSection",
      value: "Section position: left or right"
    },
    {
      modifier: "data-dimmed",
      selector: "actionSection",
      condition: "`dimmedSections` prop is set on `Spotlight.Action` component"
    }
  ]
};

// src/data/Stack.styles-api.ts
var StackStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {
    root: {
      "--stack-align": "Controls `align-items` property",
      "--stack-justify": "Controls `justify-content` property",
      "--stack-gap": "Controls `gap` property"
    }
  }
};

// src/data/Stepper.styles-api.ts
var StepperStylesApi = {
  selectors: {
    root: "Root element",
    steps: "Steps controls wrapper",
    separator: "Separator line between step controls",
    verticalSeparator: "Vertical separator line between step controls",
    content: "Current step content wrapper",
    stepWrapper: "Wrapper for the step icon and separator",
    step: "Step control button",
    stepIcon: "Step icon wrapper",
    stepCompletedIcon: "Completed step icon, rendered within stepIcon",
    stepBody: "Contains stepLabel and stepDescription",
    stepLabel: "Step label",
    stepDescription: "Step description",
    stepLoader: "Step loader"
  },
  vars: {
    root: {
      "--stepper-color": "Controls color of the active step and separator",
      "--stepper-icon-size": "Controls `width` and `height` of the icons",
      "--stepper-content-padding": "Controls `padding-top` of the content",
      "--stepper-radius": "Controls `border-radius` of the step icon",
      "--stepper-fz": "Controls `font-size` of various elements",
      "--stepper-spacing": "Controls various spacings"
    }
  },
  modifiers: [
    {
      modifier: "data-progress",
      selector: "stepIcon",
      condition: "Step is current"
    },
    {
      modifier: "data-completed",
      selector: "stepIcon",
      condition: "Step is completed"
    }
  ]
};

// src/data/Switch.styles-api.ts
var SwitchStylesApi = {
  selectors: {
    root: "Root element",
    track: "Switch track, contains `thumb` and `trackLabel`",
    trackLabel: "Label displayed inside `track`",
    thumb: "Thumb displayed inside `track`",
    input: 'Input element (`input[type="checkbox"]`), hidden by default',
    body: "Input body, contains all other elements",
    labelWrapper: "Contains `label`, `description` and `error`",
    label: "Label element",
    description: "Description displayed below the label",
    error: "Error message displayed below the label"
  },
  vars: {
    root: {
      "--switch-radius": "Controls `border-radius` of `track` and `thumb`",
      "--switch-height": "Controls height of `track`",
      "--switch-width": "Controls min-width of `track`",
      "--switch-thumb-size": "Controls width and height of `thumb`",
      "--switch-label-font-size": "Controls `font-size` of `trackLabel`",
      "--switch-track-label-padding": "Controls `trackLabel` offset",
      "--switch-color": "Controls track `background-color` when input is checked"
    }
  },
  modifiers: [
    {
      modifier: "data-error",
      selector: "track",
      condition: "`error` prop is set"
    },
    {
      modifier: "data-label-position",
      selector: ["track", "root"],
      value: "value of `labelPosition` prop"
    },
    {
      modifier: "data-disabled",
      selector: "label",
      condition: "`disabled` prop is set"
    }
  ]
};
var SwitchGroupStylesApi = {
  selectors: __spreadValues({}, InputWrapperStylesApi.selectors),
  vars: {}
};

// src/data/Tabs.styles-api.ts
var TabsStylesApi = {
  selectors: {
    root: "Root element (`Tabs` component)",
    list: "List of tabs (`Tabs.List` component)",
    panel: "Panel with tab content (`Tabs.Panel` component)",
    tab: "Tab button (`Tabs.Tab` component)",
    tabLabel: "Label of `Tabs.Tab`",
    tabSection: "Left and right sections of `Tabs.Tab`"
  },
  vars: {
    root: {
      "--tabs-color": "Controls colors of `Tabs.Tab`, only applicable when variant is `pills` or `default`",
      "--tabs-radius": "Controls `Tabs.Tab` `border-radius`"
    }
  },
  modifiers: [
    {
      modifier: "data-orientation",
      selector: ["root", "tab", "list", "panel"],
      value: "Value of `orientation` prop"
    },
    {
      modifier: "data-placement",
      selector: ["root", "tab", "list"],
      value: "Value of placement prop",
      condition: 'Value of `orientation` prop is "vertical" on `Tabs` component'
    },
    {
      modifier: "data-inverted",
      selector: ["tab", "list"],
      condition: "`inverted` prop is set on `Tabs` component"
    },
    {
      modifier: "data-grow",
      selector: ["list"],
      condition: "`grow` prop is set on `Tabs.List` component"
    },
    {
      modifier: "data-position",
      selector: ["tabSection"],
      value: "Position of the section, left or right"
    }
  ]
};

// src/data/TagsInput.styles-api.ts
var TagsInputStylesApi = {
  selectors: __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, InputStylesApi.selectors), InputWrapperStylesApi.selectors), ComboboxLikeSelectors), {
    pill: "Value pill",
    inputField: "Input field",
    pillsList: "List of pills, also contains input field"
  }),
  vars: {}
};

// src/data/Table.styles-api.ts
var TableStylesApi = {
  selectors: {
    table: "Root `table` element (`Table` component)",
    thead: "`thead` element (`Table.Thead` component)",
    tbody: "`tbody` element (`Table.Tbody` component)",
    tfoot: "`tfoot` element (`Table.Tfoot` component)",
    tr: "`tr` element (`Table.Tr` component)",
    th: "`th` element (`Table.Th` component)",
    td: "`td` element (`Table.Td` component)",
    caption: "`caption` element (`Table.Caption` component)"
  },
  vars: {
    table: {
      "--table-border-color": "Controls `border-color` of all elements inside table",
      "--table-layout": "Controls `table-layout` of the table element, auto by default",
      "--table-caption-side": "Controls caption-side of the table element, `bottom` by default",
      "--table-horizontal-spacing": "Controls p`adding-left` and p`adding-right` of `Table.Th` and `Table.Td` elements",
      "--table-vertical-spacing": "Controls `padding-top` and `padding-bottom `of `Table.Td` and `Table.Th` elements",
      "--table-striped-color": "Controls `background-color` of even/odd `Table.Tr` elements",
      "--table-highlight-on-hover-color": "Controls `background-color` of `Table.Tr` elements when hovered"
    }
  },
  modifiers: [
    {
      modifier: "data-with-table-border",
      selector: "table",
      condition: "`withTableBorder` prop is set on `Table` component"
    },
    {
      modifier: "data-with-column-border",
      selector: ["th", "td"],
      condition: "`withColumnsBorder` prop is set on `Table` component"
    },
    {
      modifier: "data-with-row-border",
      selector: "tr",
      condition: "`withRowsBorder` prop is set on `Table` component"
    },
    {
      modifier: "data-striped",
      selector: "tr",
      value: "odd | even",
      condition: "`striped` prop is set on `Table` component"
    },
    {
      modifier: "data-hover",
      selector: "tr",
      condition: "`highlightOnHover` prop is set on `Table` component"
    },
    {
      modifier: "data-size",
      selector: "tr",
      value: "value of `captionSize` prop on `Table` component"
    }
  ]
};

// src/data/Textarea.styles-api.ts
var TextareaStylesApi = {
  selectors: __spreadValues(__spreadValues({}, InputStylesApi.selectors), InputWrapperStylesApi.selectors),
  vars: {}
};

// src/data/TextInput.styles-api.ts
var TextInputStylesApi = {
  selectors: __spreadValues(__spreadValues({}, InputStylesApi.selectors), InputWrapperStylesApi.selectors),
  vars: {}
};

// src/data/ThemeIcon.styles-api.ts
var ThemeIconStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {
    root: {
      "--ti-bg": "Controls `background`",
      "--ti-bd": "Controls `border`",
      "--ti-color": "Controls icon `color`",
      "--ti-radius": "Controls `border-radius`",
      "--ti-size": "Controls `width`, `height`, `min-width` and `min-height` styles"
    }
  }
};

// src/data/Timeline.styles-api.ts
var TimelineStylesApi = {
  selectors: {
    root: "Root element",
    item: "Item root element",
    itemBody: "Item body, wraps title and content",
    itemTitle: "Item title, controlled by title prop",
    itemContent: "Item content, controlled by children prop",
    itemBullet: "Item bullet"
  },
  vars: {
    root: {
      "--tl-bullet-size": "Controls bullet `width` and `height`",
      "--tl-color": "Controls active bullet and line colors",
      "--tl-line-width": "Controls width of the line between bullets",
      "--tl-radius": "Controls bullet `border-radius`"
    }
  },
  modifiers: [
    {
      modifier: "data-active",
      selector: ["item", "itemBullet"],
      condition: "Item index is =< Timeline active prop"
    },
    {
      modifier: "data-line-active",
      selector: ["item"],
      condition: "Item index is < Timeline active prop"
    }
  ]
};

// src/data/Title.styles-api.ts
var TitleStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {
    root: {
      "--title-fw": "Title `font-weight`, by default value from `theme.headings`",
      "--title-fz": "Title `font-size`, by default value from `theme.headings`",
      "--title-lh": "Title `line-heigh`t, by default value from `theme.headings`"
    }
  },
  modifiers: [
    {
      modifier: "data-order",
      selector: "root",
      value: "Value of the `order` prop"
    }
  ]
};

// src/data/Tooltip.styles-api.ts
var TooltipStylesApi = {
  selectors: {
    tooltip: "Root element",
    arrow: "Tooltip arrow, rendered inside tooltip"
  },
  vars: {
    tooltip: {
      "--tooltip-bg": "Tooltip `background-color`",
      "--tooltip-radius": "Tooltip `border-radius`"
    }
  },
  modifiers: [
    {
      modifier: "data-multiline",
      selector: "tooltip",
      condition: "`multiline` prop is set"
    }
  ]
};

// src/data/TypographyStylesProvider.styles-api.ts
var TypographyStylesProviderStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {}
};

// src/data/UnstyledButton.styles-api.ts
var UnstyledButtonStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {}
};
export {
  AccordionStylesApi,
  ActionIconGroupStylesApi,
  ActionIconStylesApi,
  AffixStylesApi,
  AlertStylesApi,
  AnchorStylesApi,
  AppShellStylesApi,
  AspectRatioStylesApi,
  AutocompleteStylesApi,
  AvatarGroupStylesApi,
  AvatarStylesApi,
  BackgroundImageStylesApi,
  BadgeStylesApi,
  BlockquoteStylesApi,
  BreadcrumbsStylesApi,
  BurgerStylesApi,
  ButtonGroupStylesApi,
  ButtonStylesApi,
  CalendarHeaderStylesApi,
  CalendarStylesApi,
  CardStylesApi,
  CarouselStylesApi,
  CenterStylesApi,
  CheckboxGroupStylesApi,
  CheckboxStylesApi,
  ChipStylesApi,
  CloseButtonStylesApi,
  CodeHighlightStylesApi,
  CodeHighlightTabsStylesApi,
  CodeStylesApi,
  ColorInputStylesApi,
  ColorPickerStylesApi,
  ColorSwatchStylesApi,
  ComboboxLikeSelectors,
  ComboboxStylesApi,
  ContainerStylesApi,
  DateInputStylesApi,
  DatePickerInputStylesApi,
  DatePickerStylesApi,
  DateTimePickerStylesApi,
  DecadeLevelGroupStylesApi,
  DialogStylesApi,
  DividerStylesApi,
  DrawerStylesApi,
  DropzoneFullScreenStylesApi,
  DropzoneStylesApi,
  FieldsetStylesApi,
  FileInputStylesApi,
  FlexStylesApi,
  GridStylesApi,
  GroupStylesApi,
  HighlightStylesApi,
  HoverCardStylesApi,
  ImageStylesApi,
  IndicatorStylesApi,
  InlineCodeHighlightStylesApi,
  InputBaseStylesApi,
  InputStylesApi,
  InputWrapperStylesApi,
  JsonInputStylesApi,
  KbdStylesApi,
  ListStylesApi,
  LoaderStylesApi,
  LoadingOverlayStylesApi,
  MarkStylesApi,
  MenuStylesApi,
  ModalStylesApi,
  MonthLevelGroupStylesApi,
  MonthPickerInputStylesApi,
  MonthPickerStylesApi,
  MonthStylesApi,
  MultiSelectStylesApi,
  NativeSelectStylesApi,
  NavLinkStylesApi,
  NotificationStylesApi,
  NotificationsStylesApi,
  NumberInputStylesApi,
  OverlayStylesApi,
  PaginationStylesApi,
  PaperStylesApi,
  PasswordInputStylesApi,
  PillGroupStylesApi,
  PillStylesApi,
  PillsInputFieldStylesApi,
  PillsInputStylesApi,
  PinInputStylesApi,
  PopoverStylesApi,
  ProgressStylesApi,
  RadioGroupStylesApi,
  RadioStylesApi,
  RatingStylesApi,
  RichTextEditorStylesApi,
  RingProgressStylesApi,
  ScrollAreaStylesApi,
  SegmentedControlStylesApi,
  SelectStylesApi,
  SimpleGridStylesApi,
  SkeletonStylesApi,
  SliderStylesApi,
  SpoilerStylesApi,
  SpotlightStylesApi,
  StackStylesApi,
  StepperStylesApi,
  SwitchGroupStylesApi,
  SwitchStylesApi,
  TableStylesApi,
  TabsStylesApi,
  TagsInputStylesApi,
  TextInputStylesApi,
  TextStylesApi,
  TextareaStylesApi,
  ThemeIconStylesApi,
  TimeInputStylesApi,
  TimelineStylesApi,
  TitleStylesApi,
  TooltipStylesApi,
  TypographyStylesProviderStylesApi,
  UnstyledButtonStylesApi,
  YearLevelGroupStylesApi,
  YearPickerInputStylesApi,
  YearPickerStylesApi
};
