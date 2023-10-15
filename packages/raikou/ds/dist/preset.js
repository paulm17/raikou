"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/ConfiguratorDemo/controls/ConfiguratorColor.control.plugin.ts
var require_ConfiguratorColor_control_plugin = __commonJS({
  "src/ConfiguratorDemo/controls/ConfiguratorColor.control.plugin.ts"(exports2, module2) {
    "use strict";
    var import_system = require("@raikou/system");
    module2.exports = function({ addComponents }) {
      addComponents({
        ".configColor-swatch": {
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--raikou-color-white)",
          flex: `1 0 calc(15% - ${(0, import_system.rem)("4px")})`
        },
        ".configColor-check": {
          width: (0, import_system.rem)("12px"),
          height: (0, import_system.rem)("12px")
        },
        ".configColor-colorControl": {
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: `1 0 calc(15% - ${(0, import_system.rem)("4px")})`,
          height: (0, import_system.rem)("28px"),
          borderRadius: `var(--raikou-radius-sm)`,
          border: `${(0, import_system.rem)("1px")} solid var(--_control-border-color)`,
          '[data-raikou-color-scheme="light"] &': {
            "--_control-border-color": "var(--raikou-color-gray-5)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_control-border-color": "var(--raikou-color-dark-3)"
          }
        }
      });
    };
  }
});

// src/ConfiguratorDemo/ConfiguratorDemo.plugin.ts
var require_ConfiguratorDemo_plugin = __commonJS({
  "src/ConfiguratorDemo/ConfiguratorDemo.plugin.ts"(exports2, module2) {
    "use strict";
    var import_system = require("@raikou/system");
    module2.exports = function({ addComponents }) {
      addComponents({
        ".configDemo-controls": {
          padding: `calc(var(--raikou-spacing-md) - ${(0, import_system.rem)("4px")})`
          /* max-width: rem(250px); */
        }
      });
    };
  }
});

// src/DemoArea/DemoArea.plugin.ts
var require_DemoArea_plugin = __commonJS({
  "src/DemoArea/DemoArea.plugin.ts"(exports2, module2) {
    "use strict";
    var import_system = require("@raikou/system");
    module2.exports = function({ addComponents }) {
      addComponents({
        ".demoArea-demo": {
          padding: "var(--_demo-spacing, 0rem)",
          flex: "1",
          borderTopLeftRadius: `calc(var(--raikou-radius-md) - ${(0, import_system.rem)("1px")})`,
          borderTopRightRadius: `calc(var(--raikou-radius-md) - ${(0, import_system.rem)("1px")})`,
          "&[data-with-padding]": {
            "--_demo-spacing": "var(--raikou-spacing-md)"
          },
          "&[data-dimmed]": {
            '[data-raikou-color-scheme="light"] &': {
              backgroundColor: "#f8f9fa"
            },
            '[data-raikou-color-scheme="dark"] &': {
              backgroundColor: "#141517"
            }
          },
          "&[data-centered]": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          "&[data-striped]": {
            borderTopLeftRadius: `calc(var(--raikou-radius-md) - rem(1px))`,
            background: `repeating-linear-gradient(
            45deg,
            transparent 0,
            transparent rem(10px),
            var(--stripe-color) rem(10px),
            var(--stripe-color) 12px
          ),
          repeating-linear-gradient(
            135deg,
            transparent 0,
            transparent rem(10px),
            var(--stripe-color) rem(10px),
            var(--stripe-color) rem(12px)
          )`,
            '[dir="rtl"] &': {
              borderTopRightRadius: `calc(var(--raikou-radius-md) - ${(0, import_system.rem)("1px")})`,
              borderTopLeftRadius: "0"
            },
            '[data-raikou-color-scheme="light"] &': {
              "--stripe-color": "rgba(0, 0, 0, 0.03)"
            },
            '[data-raikou-color-scheme="dark"] &': {
              "--stripe-color": "rgba(255, 255, 255, 0.03)"
            }
          }
        },
        ".demoArea-demoInner": {
          flex: "var(--demo-flex)",
          maxWidth: "var(--demo-max-width, 100%)",
          minHeight: "var(--demo-min-height, unset)",
          marginLeft: "var(--demo-margin-y, unset)",
          marginRight: "var(--demo-margin-y, unset)"
        }
      });
    };
  }
});

// src/DemoCode/DemoCode.plugin.ts
var require_DemoCode_plugin = __commonJS({
  "src/DemoCode/DemoCode.plugin.ts"(exports2, module2) {
    "use strict";
    var import_system = require("@raikou/system");
    module2.exports = function({ addComponents }) {
      addComponents({
        ".demoCode-code": {
          borderBottomRightRadius: "var(--raikou-radius-md)",
          borderBottomLeftRadius: "var(--raikou-radius-md)",
          overflow: "hidden",
          borderTop: `${(0, import_system.rem)("1px")} solid var(--_demo-border)`
        }
      });
    };
  }
});

// src/DemoColumns/DemoColumns.plugin.ts
var require_DemoColumns_plugin = __commonJS({
  "src/DemoColumns/DemoColumns.plugin.ts"(exports2, module2) {
    "use strict";
    var import_system = require("@raikou/system");
    module2.exports = function({ addComponents }) {
      addComponents({
        ".demoColumns-columns": {
          display: "flex",
          "@media (max-width: 55em)": {
            flexDirection: "column"
          }
        },
        ".demoColumns-controls": {
          flex: `0 0 ${(0, import_system.rem)("250px")}`,
          borderLeft: `${(0, import_system.rem)("1px")} solid var(--_demo-border)`,
          padding: (0, import_system.rem)("4px"),
          paddingBottom: "var(--raikou-spacing-xs)",
          "@mixin rtl": {
            borderLeft: "none",
            borderRight: `${(0, import_system.rem)("1px")} solid var(--_demo-border)`
          },
          "@media (max-width: 55em)": {
            flex: "unset",
            borderLeft: "none",
            borderRight: "none !important",
            borderTop: `${(0, import_system.rem)("1px")} solid var(--_demo-border)`
          }
        },
        ".demoColumns-header": {
          paddingTop: `calc(var(--raikou-spacing-md) - ${(0, import_system.rem)("4px")})`,
          marginLeft: (0, import_system.rem)(-"4px"),
          marginRight: (0, import_system.rem)(-"4px"),
          borderBottom: `${(0, import_system.rem)("1px")} solid var(--_demo-border)`,
          paddingLeft: "var(--raikou-spacing-md)",
          paddingRight: "var(--raikou-spacing-md)",
          paddingBottom: "var(--raikou-spacing-xs)",
          marginBottom: "var(--raikou-spacing-xs)"
        }
      });
    };
  }
});

// src/DemoRoot/DemoRoot.plugin.ts
var require_DemoRoot_plugin = __commonJS({
  "src/DemoRoot/DemoRoot.plugin.ts"(exports2, module2) {
    "use strict";
    var import_system = require("@raikou/system");
    module2.exports = function({ addComponents }) {
      addComponents({
        ".demoRoot-root": {
          border: `${(0, import_system.rem)("1px")} solid var(--_demo-border)`,
          borderRadius: "var(--raikou-radius-md)",
          '[data-raikou-color-scheme="light"] &': {
            "--_demo-border": "#e9ecef"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_demo-border": "#373a40"
          }
        }
      });
    };
  }
});

// src/StylesApiDemo/StylesApiDemo.plugin.ts
var require_StylesApiDemo_plugin = __commonJS({
  "src/StylesApiDemo/StylesApiDemo.plugin.ts"(exports2, module2) {
    "use strict";
    var import_system = require("@raikou/system");
    module2.exports = function({ addComponents }) {
      addComponents({
        ".stylesApiDemo-selector": {
          display: "block",
          width: "100%",
          fontSize: "var(--raikou-font-size-sm)",
          padding: `${(0, import_system.rem)("6px")} var(--raikou-spacing-sm)`,
          borderRadius: "var(--raikou-radius-sm)",
          cursor: "help",
          "@media (hover: hover)": {
            "&:hover": {
              '[data-raikou-color-scheme="light"] &': {
                backgroundColor: "#f8f9fa"
              },
              '[data-raikou-color-scheme="dark"] &': {
                backgroundColor: "#25262b"
              }
            }
          },
          "@media (hover: none)": {
            "&:active": {
              '[data-raikou-color-scheme="light"] &': {
                backgroundColor: "#f8f9fa"
              },
              '[data-raikou-color-scheme="dark"] &': {
                backgroundColor: "#25262b"
              }
            }
          }
        }
      });
    };
  }
});

// src/preset.ts
module.exports = {
  plugins: [
    require_ConfiguratorColor_control_plugin(),
    require_ConfiguratorDemo_plugin(),
    require_DemoArea_plugin(),
    require_DemoCode_plugin(),
    require_DemoColumns_plugin(),
    require_DemoRoot_plugin(),
    require_StylesApiDemo_plugin()
  ]
};
