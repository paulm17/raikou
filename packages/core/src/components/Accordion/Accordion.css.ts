import { css } from "@stylefusion/react";

export const AccordionRootStyle = css({
  "--accordion-radius": "var(--raikou-radius-default)",
});

export const AccordionPanelStyle = css({
  wordBreak: "break-word",
});

export const AccordionContentStyle = css({
  padding: "var(--raikou-spacing-md)",
  paddingTop: "calc(var(--raikou-spacing-xs) / 2)",
});

export const AccordionItemTitleStyle = css({
  margin: 0,
  padding: 0,
})

export const AccordionControlStyle = css(({ theme }: any) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "row-reverse",
  paddingInline: "var(--raikou-spacing-md)",
  opacity: 1,
  cursor: "pointer",
  backgroundColor: "transparent",

  "&:_where([data-chevron-position='left'])": {
    flexDirection: "row",
    paddingInlineStart: 0,
  },

  ...theme.applyStyles('light', {
    color: theme.colors.black,
  }),

  ...theme.applyStyles('dark', {
    color: theme.colors.dark[0],
  }),

  "&:_where(:disabled, [data-disabled])": {
    opacity: 0.4,
    cursor: "not-allowed",
  },

  [`& .${AccordionRootStyle} [data-variant="default"], & .${AccordionRootStyle} [data-variant="contained"]`]: {
    "&:_where(:disabled, [data-disabled])": {
      ...theme.applyMixin('hover', {
        "&:hover": {  
          color: theme.colors.gray[0],
        }
      }),
      ...theme.applyMixin('dark', {
        color: theme.colors.dark[6],
      })
    },    
  }
}));

export const AccordionLabelStyle = css({
  color: "inherit",
  fontWeight: 400,
  flex: 1,
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingTop: "var(--raikou-spacing-sm)",
  paddingBottom: "var(--raikou-spacing-sm)",
})

export const AccordionChevronStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform var(--accordion-transition-duration, 200ms) ease",
  width: "var(--accordion-chevron-size, rem(15px))",
  minWidth: "var(--accordion-chevron-size, rem(15px))",
  transform: "rotate(0deg)",

  "&:_where([data-rotate])": {
    transform: "rotate(180deg)",
  },

  "&:_where([data-position='left'])": {
    marginInlineEnd: "var(--raikou-spacing-md)",
    marginInlineStart: "var(--raikou-spacing-md)",
  },
});

export const AccordionIconStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginInlineEnd: "var(--raikou-spacing-sm)",

  "&:_where([data-chevron-position='left'])": {
    marginInlineEnd: 0,
    marginInlineStart: "var(--raikou-spacing-lg)",
  },
});

export const AccordionItemStyle = css(({ theme }: any) => ({
  ...theme.applyStyles('light', {
    "--item-border-color": theme.colors.gray[3],
    "--item-filled-color": theme.colors.gray[0],
  }),

  ...theme.applyStyles('dark', {
    "--item-border-color": theme.colors.dark[4],
    "--item-filled-color": theme.colors.dark[6],
  }),

  [`.${AccordionRootStyle}[data-variant="default"] &`]: {
    borderBottom: "1px solid var(--item-border-color)",
  },

  [`.${AccordionRootStyle}[data-variant="contained"] &`]: {
    border: "1px solid var(--item-border-color)",
    transition: "background-color 150ms ease",

    "&:_where([data-active])": {
      background: "var(--item-filled-color)",
    },

    "&:first-of-type": {
      borderStartStartRadius: "var(--accordion-radius)",
      borderStartEndRadius: "var(--accordion-radius)",

      "& > [data-accordion-control]": {
        borderStartStartRadius: "var(--accordion-radius)",
        borderStartEndRadius: "var(--accordion-radius)",
      },
    },
    
    "&:last-of-type": {
      borderEndStartRadius: "var(--accordion-radius)",
      borderEndEndRadius: "var(--accordion-radius)",

      "& > [data-accordion-control]": {
        borderEndStartRadius: "var(--accordion-radius)",
        borderEndEndRadius: "var(--accordion-radius)",
      },
    },

    "& + &": {
      borderTop: "0",
    },
  },
  
  [`.${AccordionRootStyle}[data-variant="filled"] &`]: {
    borderRadius: "var(--accordion-radius)",

    "&:_where([data-active])": {
      backgroundColor: "var(--item-filled-color)"
    },
  },
  
  [`.${AccordionRootStyle}[data-variant="separated"] &`]: {
    backgroundColor: "var(--item-filled-color)",
    borderRadius: "var(--accordion-radius)",
    border: "1px solid transparent",
    transition: "background-color 150ms ease",   
    marginTop: "var(--raikou-spacing-md)", 

    "&:_where([data-active])": {
      borderColor: "var(--item-border-color)",

      ...theme.applyStyles('light', {
        backgroundColor:  theme.colors.white,
      }),

      ...theme.applyStyles('dark', {
        backgroundColor:  theme.colors.dark[7],
      }),
    },
  },
}));
