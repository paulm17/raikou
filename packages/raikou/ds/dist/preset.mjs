import {
  __commonJS
} from "./chunk-PPXV74HS.mjs";

// src/ConfiguratorDemo/controls/ConfiguratorColor.control.plugin.ts
import { rem } from "@raikou/system";
var require_ConfiguratorColor_control_plugin = __commonJS({
  "src/ConfiguratorDemo/controls/ConfiguratorColor.control.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents }) {
      addComponents({
        ".configColor-swatch": {
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--raikou-color-white)",
          flex: `1 0 calc(15% - ${rem("4px")})`
        },
        ".configColor-check": {
          width: rem("12px"),
          height: rem("12px")
        },
        ".configColor-colorControl": {
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: `1 0 calc(15% - ${rem("4px")})`,
          height: rem("28px"),
          borderRadius: `var(--raikou-radius-sm)`,
          border: `${rem("1px")} solid var(--_control-border-color)`,
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
import { rem as rem2 } from "@raikou/system";
var require_ConfiguratorDemo_plugin = __commonJS({
  "src/ConfiguratorDemo/ConfiguratorDemo.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents }) {
      addComponents({
        ".configDemo-controls": {
          padding: `calc(var(--raikou-spacing-md) - ${rem2("4px")})`
          /* max-width: rem(250px); */
        }
      });
    };
  }
});

// src/DemoArea/DemoArea.plugin.ts
import { rem as rem3 } from "@raikou/system";
var require_DemoArea_plugin = __commonJS({
  "src/DemoArea/DemoArea.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents }) {
      addComponents({
        ".demoArea-demo": {
          padding: "var(--_demo-spacing, 0rem)",
          flex: "1",
          borderTopLeftRadius: `calc(var(--raikou-radius-md) - ${rem3("1px")})`,
          borderTopRightRadius: `calc(var(--raikou-radius-md) - ${rem3("1px")})`,
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
              borderTopRightRadius: `calc(var(--raikou-radius-md) - ${rem3("1px")})`,
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
import { rem as rem4 } from "@raikou/system";
var require_DemoCode_plugin = __commonJS({
  "src/DemoCode/DemoCode.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents }) {
      addComponents({
        ".demoCode-code": {
          borderBottomRightRadius: "var(--raikou-radius-md)",
          borderBottomLeftRadius: "var(--raikou-radius-md)",
          overflow: "hidden",
          borderTop: `${rem4("1px")} solid var(--_demo-border)`
        }
      });
    };
  }
});

// src/DemoColumns/DemoColumns.plugin.ts
import { rem as rem5 } from "@raikou/system";
var require_DemoColumns_plugin = __commonJS({
  "src/DemoColumns/DemoColumns.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents }) {
      addComponents({
        ".demoColumns-columns": {
          display: "flex",
          "@media (max-width: 55em)": {
            flexDirection: "column"
          }
        },
        ".demoColumns-controls": {
          flex: `0 0 ${rem5("250px")}`,
          borderLeft: `${rem5("1px")} solid var(--_demo-border)`,
          padding: rem5("4px"),
          paddingBottom: "var(--raikou-spacing-xs)",
          "@mixin rtl": {
            borderLeft: "none",
            borderRight: `${rem5("1px")} solid var(--_demo-border)`
          },
          "@media (max-width: 55em)": {
            flex: "unset",
            borderLeft: "none",
            borderRight: "none !important",
            borderTop: `${rem5("1px")} solid var(--_demo-border)`
          }
        },
        ".demoColumns-header": {
          paddingTop: `calc(var(--raikou-spacing-md) - ${rem5("4px")})`,
          marginLeft: rem5(-"4px"),
          marginRight: rem5(-"4px"),
          borderBottom: `${rem5("1px")} solid var(--_demo-border)`,
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
import { rem as rem6 } from "@raikou/system";
var require_DemoRoot_plugin = __commonJS({
  "src/DemoRoot/DemoRoot.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents }) {
      addComponents({
        ".demoRoot-root": {
          border: `${rem6("1px")} solid var(--_demo-border)`,
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
import { rem as rem7 } from "@raikou/system";
var require_StylesApiDemo_plugin = __commonJS({
  "src/StylesApiDemo/StylesApiDemo.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents }) {
      addComponents({
        ".stylesApiDemo-selector": {
          display: "block",
          width: "100%",
          fontSize: "var(--raikou-font-size-sm)",
          padding: `${rem7("6px")} var(--raikou-spacing-sm)`,
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
var require_preset = __commonJS({
  "src/preset.ts"(exports, module) {
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
  }
});
export default require_preset();
