import { rem } from "@raikou/core";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dial-root": {
      "--dial-size-xs": rem("16px"),
      "--dial-size-sm": rem("18px"),
      "--dial-size-md": rem("20px"),
      "--dial-size-lg": rem("26px"),
      "--dial-size-xl": rem("32px"),

      position: "relative",
      display: "inline-block",
      width: "var(--dial-size, var(--dial-size-md))",
      height: "var(--dial-size, var(--dial-size-md))",
      transform: `scale(var(--dial-scale))`,
    },
    ".dial-inner": {
      position: "absolute",
      left: "5px",
      top: "5px",
      display: "flex",
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "9999px",
      border: "2px solid #383a3c",
    },
    ".dial-handle": {
      position: "relative",
      display: "block",
      top: "calc(-25% - 0px)",
      width: "3px",
      height: "calc(50% + 2px)",
      background: "#006dd2",
      transformOrigin: "bottom",
      transform: `rotate(var(--dial-angle))`,
      cursor: "pointer",

      "&:after": {
        content: '""',
        position: "absolute",
        display: "block",
        top: "-1px",
        left: "-1px",
        width: "5px",
        height: "5px",
        background: "#818589",
        borderRadius: "0.375rem",
        cursor: "pointer",
      },
    },
  });
};
