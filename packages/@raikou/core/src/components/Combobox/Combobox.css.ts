import { css } from "@stylefusion/react";

/* Variables must be both on dropdown and options to support usage of Combobox.Options without Combobox.Dropdown */
const DropdownOptions = {
  "--combobox-option-padding-xs": "4px 8px",
  "--combobox-option-padding-sm": "6px 10px",
  "--combobox-option-padding-md": "8px 12px",
  "--combobox-option-padding-lg": "10px 16px",
  "--combobox-option-padding-xl": "14px 20px",
  "--combobox-option-padding": "var(--combobox-option-padding-sm)",
};

export const ComboboxDropdownOptionsStyle = css({
  ...DropdownOptions,
});

export const ComboboxDropdownOptionStyle = css(({ theme }) => ({
  padding: "var(--combobox-option-padding)",
  fontSize: "var(--combobox-option-fz, var(--raikou-font-size-sm))",
  borderRadius: "var(--raikou-radius-default)",
  backgroundColor: "transparent",
  color: "inherit",
  cursor: "pointer",
  wordBreak: "break-word",

  "&:_where([data-combobox-selected])": {
    backgroundColor: "var(--raikou-primary-color-filled)",
    color: "var(--raikou-color-white)",
  },

  "&:_where([data-combobox-disabled])": {
    cursor: "not-allowed",
    opacity: 0.35,
  },

  ...theme.applyMixin("hover", {
    "&:_where(:not([data-combobox-selected], [data-combobox-disabled])):hover":
      {
        ...theme.applyStyles("light", {
          backgroundColor: theme.colors.gray[0],
        }),
        ...theme.applyStyles("dark", {
          backgroundColor: theme.colors.dark[7],
        }),
      },
  }),
}));

export const ComboboxDropdownSearchStyle = css(({ theme }) => ({
  marginInline: "calc(var(--combobox-padding) * -1)",
  marginTop: "calc(var(--combobox-padding) * -1)",
  width: "calc(100% + var(--combobox-padding) * 2)",
  borderTopWidth: 0,
  borderInlineWidth: 0,
  borderEndStartRadius: 0,
  borderEndEndRadius: 0,
  marginBottom: "var(--combobox-padding)",
  position: "relative",

  "&, &:focus": {
    ...theme.applyStyles("light", {
      borderColor: theme.colors.gray[2],
    }),
    ...theme.applyStyles("dark", {
      borderColor: theme.colors.dark[4],
    }),
  },

  ...theme.applyStyles("light", {
    backgroundColor: theme.colors.white,
  }),

  ...theme.applyStyles("dark", {
    backgroundColor: theme.colors.dark[7],
  }),
}));

export const ComboboxDropdownStyle = css({
  "--combobox-padding": "4px",
  "&&": {
    padding: "var(--combobox-padding)",
  },

  "&:has([data-raikou-scrollbar])": {
    paddingInlineEnd: "0",

    [`.${ComboboxDropdownSearchStyle}`]: {
      maxWidth: "calc(100% + var(--combobox-padding))",
    },
  },

  "&[data-hidden]": {
    display: "none",
  },

  ...DropdownOptions,
});

export const ComboboxDropdownEmptyStyle = css({
  fontSize: "var(--combobox-option-fz, var(--raikou-font-size-sm))",
  textAlign: "center",
  padding: "var(--combobox-option-padding)",
  color: "var(--raikou-color-dimmed)",
});

export const ComboboxDropdownFooterStyle = css(({ theme }) => ({
  "&&": {
    borderTopWidth: "1px",
    marginTop: "var(--combobox-padding)",
    marginBottom: "calc(var(--combobox-padding) * -1)",
  },

  fontSize: "var(--combobox-option-fz, var(--raikou-font-size-sm))",
  border: "0 solid transparent",
  marginInline: "calc(var(--combobox-padding) * -1)",
  padding: "var(--combobox-option-padding)",

  ...theme.applyStyles("light", {
    borderColor: theme.colors.gray[2],
  }),

  ...theme.applyStyles("dark", {
    borderColor: theme.colors.dark[4],
  }),
}));

export const ComboboxDropdownHeaderStyle = css(({ theme }) => ({
  "&&": {
    borderBottomWidth: "1px",
    marginBottom: "var(--combobox-padding)",
    marginTop: "calc(var(--combobox-padding) * -1)",
  },

  fontSize: "var(--combobox-option-fz, var(--raikou-font-size-sm))",
  border: "0 solid transparent",
  marginInline: "calc(var(--combobox-padding) * -1)",
  padding: "var(--combobox-option-padding)",

  ...theme.applyStyles("light", {
    borderColor: theme.colors.gray[2],
  }),

  ...theme.applyStyles("dark", {
    borderColor: theme.colors.dark[4],
  }),
}));

export const ComboboxDropdownGroupStyle = css({
  "&:has(.groupLabel:only-child)": {
    display: "none",
  },
});

export const ComboboxDropdownGroupLabelStyle = css(({ theme }) => ({
  color: "var(--raikou-color-dimmed)",
  fontSize:
    "calc(var(--combobox-option-fz, var(--raikou-font-size-sm)) * 0.85)",
  padding: "var(--combobox-option-padding)",
  fontWeight: "500",
  position: "relative",
  display: "flex",
  alignItems: "center",

  "&:after": {
    content: "''",
    flex: 1,
    insetInline: 0,
    height: "1px",
    marginInlineStart: "var(--raikou-spacing-xs)",

    ...theme.applyStyles("light", {
      backgroundColor: theme.colors.gray[2],
    }),

    ...theme.applyStyles("dark", {
      backgroundColor: theme.colors.dark[4],
    }),

    "&:only-child": {
      display: "none",
    },
  },
}));

// /* ------- Combobox.Chevron ------- */
export const ComboboxDropdownChevronStyle = css(({ theme }) => ({
  "--combobox-chevron-size-xs": "14px",
  "--combobox-chevron-size-sm": "18px",
  "--combobox-chevron-size-md": "20px",
  "--combobox-chevron-size-lg": "24px",
  "--combobox-chevron-size-xl": "28px",
  "--combobox-chevron-size": "var(--combobox-chevron-size-sm)",

  width: "var(--combobox-chevron-size)",
  height: "var(--combobox-chevron-size)",

  ...theme.applyStyles("light", {
    color: theme.colors.gray[6],
  }),

  ...theme.applyStyles("dark", {
    color: theme.colors.dark[3],
  }),

  "&:_where([data-error])": {
    color: "var(--raikou-color-error)",
  },
}));

/* ------- OptionsDropdown ------- */
export const ComboboxOptionsDropdownOptionStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "8px",

  "&:_where([data-reverse])": {
    justifyContent: "space-between",
  },
});

export const ComboboxDropdownOptionsDropdownCheckIconStyle = css({
  opacity: 0.4,
  width: "0.8em",
  minWidth: "0.8em",
  height: "0.8em",

  ":_where([data-combobox-selected]) &": {
    opacity: 1,
  },
});
