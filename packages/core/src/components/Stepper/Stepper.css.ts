import { css } from "@stylefusion/react";

export const StepperRootStyle = css({
  "--stepper-icon-size-xs": "34px",
  "--stepper-icon-size-sm": "36px",
  "--stepper-icon-size-md": "42px",
  "--stepper-icon-size-lg": "48px",
  "--stepper-icon-size-xl": "52px",

  "--stepper-icon-size": "var(--stepper-icon-size-md)",
  "--stepper-color": "var(--raikou-primary-color-filled)",
  "--stepper-content-padding": "var(--raikou-spacing-md)",
  "--stepper-spacing": "var(--raikou-spacing-md)",
  "--stepper-radius": "1000px",
  "--stepper-fz": "var(--raikou-font-size-md)",
});

export const StepperStepsStyle = css({
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "center",

  "&:_where([data-wrap])": {
    flexWrap: "wrap",
    gap: "var(--raikou-spacing-md) 0",
  },

  "&:_where([data-orientation='vertical'])": {
    flexDirection: "column",

    "&:_where([data-icon-position='left'])": {
      alignItems: "flex-start",
    },

    "&:_where([data-icon-position='right'])": {
      alignItems: "flex-end",
    },
  },

  "&:_where([data-orientation='horizontal'])": {
    flexDirection: "row",
  },
  
});

export const StepperSeparatorStyle = css(({ theme }: any) => ({
  "--separator-offset": "calc(var(--stepper-icon-size) / 2 - rem(1px))",

  transition: "background-color 150ms ease",
  flex: "1",

  ...theme.applyStyles('light', {
    backgroundColor: theme.colors.gray[2],
  }),

  ...theme.applyStyles('dark', {
    backgroundColor: theme.colors.dark[2],
  }),

  "&:_where([data-active])": {
    backgroundColor: "var(--stepper-color)",
  },

  "&:_where([data-orientation='horizontal'])": {
    height: "2px",
    marginInline: "var(--raikou-spacing-md)",
  },

  "&:_where([data-orientation='vertical'])": {
    width: "2px",
    marginTop: "calc(var(--raikou-spacing-xs) / 2)",
    marginBottom: "calc(var(--raikou-spacing-xs) - rem(2px))",

    "&:_where([data-icon-position='left'])": {
      marginInlineStart: "var(--separator-offset)",
    },

    "&:_where([data-icon-position='right'])": {
      marginInlineEnd: "var(--separator-offset)",
    },
  },
}));

export const StepperContentStyle = css({
  paddingTop: "var(--stepper-content-padding)",
});

export const StepperStepStyle = css({
  "--step-color": "var(--stepper-color)",
  
  display: "flex",
  cursor: "default",

  "&:_where([data-allow-click])": {
    cursor: "pointer",
  },

  "&:_where([data-icon-position='left'])": {
    flexDirection: "row",
  },

  "&:_where([data-icon-position='right'])": {
    flexDirection: "row-reverse",
  },

  "[data-variant='horizontal']": {
    alignItems: "center",
  },

  "[data-variant='vertical']": {
    "--separator-spacing": "calc(var(--raikou-spacing-xs) / 2)",
    
    justifyContent: "flex-start",
    minHeight: "calc(var(--stepper-icon-size) + var(--raikou-spacing-xl) + var(--separator-spacing))",
    marginTop: "var(--separator-spacing)",
    overflow: "hidden",

    "&:_where(:first-of-type)": {
      marginTop: "0",
    },
    
    "&:_where(:last-of-type) .verticalSeparator": {
      display: "none",
    },
  },
});

export const StepperStepWrapperStyle = css({
  position: "relative",
});

export const StepperVerticalSeparatorStyle = css(({ theme }: any) => ({
  top: "calc(var(--stepper-icon-size) + var(--separator-spacing))",
  insetInlineStart: "calc(var(--stepper-icon-size) / 2)",
  height: "100vh",
  position: "absolute",
  borderInlineStart: "2px solid",

  ...theme.applyStyles('light', {
    borderColor: theme.colors.gray[1],
  }),

  ...theme.applyStyles('dark', {
    borderColor: theme.colors.dark[5],
  }),

  "&:_where([data-active])": {
    borderColor: "var(--step-color)",
  },
}));

export const StepperStepIconStyle = css(({ theme }: any) => ({
  height: "var(--stepper-icon-size)",
  width: "var(--stepper-icon-size)",
  minHeight: "var(--stepper-icon-size)",
  minWidth: "var(--stepper-icon-size)",
  borderRadius: "var(--stepper-radius)",
  fontSize: "var(--stepper-fz)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  fontWeight: "bold",
  transition: "background-color 150ms ease, border-color 150ms ease",
  border: "2px solid",

  ...theme.applyStyles('light', {
    backgroundColor: theme.colors.gray[1],
    borderColor: theme.colors.gray[1],
    color: theme.colors.gray[7],
  }),

  ...theme.applyStyles('dark', {
    backgroundColor: theme.colors.dark[5],
    borderColor: theme.colors.dark[5],
    color: theme.colors.dark[1],
  }),

  "&:_where([data-progress])": {
    borderColor: "var(--step-color)",
  },

  "&:_where([data-completed])": {
    color: "var(--stepper-icon-color, var(--raikou-color-white))",
    backgroundColor: "var(--step-color)",
    borderColor: "var(--step-color)",
  },
}));

export const StepperStepCompletedIconStyle = css({
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--stepper-icon-color, var(--raikou-color-white))",
});

export const StepperStepBodyStyle = css(({ theme }: any) => ({
  display: "flex",
  flexDirection: "column",

  "&:_where([data-icon-position='left'])": {
    marginInlineStart: "var(--raikou-spacing-sm)",
  },

  "&:_where([data-icon-position='right'])": {
    textAlign: "right",
    marginInlineEnd: "var(--raikou-spacing-sm)",

    ...theme.applyMixin("where-rtl", {
      textAlign: "left",
    })
  },
}));

export const StepperStepLabelStyle = css({
  fontWeight: "500",
  fontSize: "var(--stepper-fz)",
  lineHeight: "1",
});

export const StepperStepDescriptionStyle = css({
  marginTop: "calc(var(--stepper-spacing) / 3)",
  marginBottom: "calc(var(--stepper-spacing) / 3)",
  fontSize: "calc(var(--stepper-fz) - rem(2px))",
  lineHeight: "1",
  color: "var(--raikou-color-dimmed)",
});