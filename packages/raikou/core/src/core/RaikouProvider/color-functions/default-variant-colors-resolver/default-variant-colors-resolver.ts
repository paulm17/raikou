import { RaikouColor, RaikouTheme, RaikouGradient } from "../../theme.types";
import { parseThemeColor } from "../parse-theme-color/parse-theme-color";
// import { getGradient } from "../get-gradient/get-gradient";
import { darken } from "../darken/darken";
import { rgba } from "../rgba/rgba";
import { rem } from "../../../utils";

export interface VariantColorsResolverInput {
  color: RaikouColor | undefined;
  theme: RaikouTheme;
  variant: string;
  gradient?: RaikouGradient;
}

export interface VariantColorResolverResult {
  background: string;
  hover: string;
  color: string;
  border: string;
}

export type VariantColorsResolver = (
  input: VariantColorsResolverInput,
) => VariantColorResolverResult;

export const defaultVariantColorsResolver: VariantColorsResolver = ({
  color,
  theme,
  variant,
  gradient,
}) => {
  const parsed = parseThemeColor({ color, theme });

  if (variant === "filled") {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          background: `var(--raikou-color-${color}-filled)`,
          hover: `var(--raikou-color-${color}-filled-hover)`,
          color: "var(--raikou-color-white)",
          border: `${rem(1)} solid transparent`,
        };
      }

      return {
        background: `var(--raikou-color-${parsed.color}-${parsed.shade})`,
        hover: `var(--raikou-color-${parsed.color}-${
          parsed.shade === 9 ? 8 : parsed.shade + 1
        })`,
        color: "var(--raikou-color-white)",
        border: `${rem(1)} solid transparent`,
      };
    }

    return {
      background: color!,
      hover: darken(color!, 0.1),
      color: "var(--raikou-color-white)",
      border: `${rem(1)} solid transparent`,
    };
  }

  if (variant === "light") {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          background: `var(--raikou-color-${color}-light)`,
          hover: `var(--raikou-color-${color}-light-hover)`,
          color: `var(--raikou-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`,
        };
      }

      const parsedColor = theme.colors[parsed.color][parsed.shade];

      return {
        background: rgba(parsedColor, 0.1),
        hover: rgba(parsedColor, 0.12),
        color: `var(--raikou-color-${parsed.color}-${Math.min(
          parsed.shade,
          6,
        )})`,
        border: `${rem(1)} solid transparent`,
      };
    }

    return {
      background: rgba(color!, 0.1),
      hover: rgba(color!, 0.12),
      color: color!,
      border: `${rem(1)} solid transparent`,
    };
  }

  if (variant === "outline") {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          background: "transparent",
          hover: `var(--raikou-color-${color}-outline-hover)`,
          color: `var(--raikou-color-${color}-outline)`,
          border: `${rem(1)} solid var(--raikou-color-${color}-outline)`,
        };
      }

      return {
        background: "transparent",
        hover: rgba(theme.colors[parsed.color][parsed.shade], 0.05),
        color: `var(--raikou-color-${parsed.color}-${parsed.shade})`,
        border: `${rem(1)} solid var(--raikou-color-${parsed.color}-${
          parsed.shade
        })`,
      };
    }

    return {
      background: "transparent",
      hover: rgba(color!, 0.05),
      color: color!,
      border: `${rem(1)} solid ${color}`,
    };
  }

  if (variant === "subtle") {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          background: "transparent",
          hover: `var(--raikou-color-${color}-light-hover)`,
          color: `var(--raikou-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`,
        };
      }

      const parsedColor = theme.colors[parsed.color][parsed.shade];

      return {
        background: "transparent",
        hover: rgba(parsedColor, 0.12),
        color: `var(--raikou-color-${parsed.color}-${Math.min(
          parsed.shade,
          6,
        )})`,
        border: `${rem(1)} solid transparent`,
      };
    }

    return {
      background: "transparent",
      hover: rgba(color!, 0.12),
      color: color!,
      border: `${rem(1)} solid transparent`,
    };
  }

  if (variant === "transparent") {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          background: "transparent",
          hover: "transparent",
          color: `var(--raikou-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`,
        };
      }

      return {
        background: "transparent",
        hover: "transparent",
        color: `var(--raikou-color-${parsed.color}-${Math.min(
          parsed.shade,
          6,
        )})`,
        border: `${rem(1)} solid transparent`,
      };
    }

    return {
      background: "transparent",
      hover: "transparent",
      color: color!,
      border: `${rem(1)} solid transparent`,
    };
  }

  if (variant === "white") {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          background: "var(--raikou-color-white)",
          hover: darken(theme.white, 0.01),
          color: `var(--raikou-color-${color}-filled)`,
          border: `${rem(1)} solid transparent`,
        };
      }

      return {
        background: "var(--raikou-color-white)",
        hover: darken(theme.white, 0.01),
        color: `var(--raikou-color-${parsed.color}-${parsed.shade})`,
        border: `${rem(1)} solid transparent`,
      };
    }

    return {
      background: "var(--raikou-color-white)",
      hover: darken(theme.white, 0.01),
      color: color!,
      border: `${rem(1)} solid transparent`,
    };
  }

  if (variant === "gradient") {
    // return {
    //   background: getGradient(gradient, theme),
    //   hover: getGradient(gradient, theme),
    //   color: "var(--raikou-color-white)",
    //   border: "none",
    // };

    const gradient = `linear-gradient(var(--raikou-gradient-deg), var(--raikou-gradient-from) 0%, var(--raikou-gradient-to) 100%)`;

    return {
      background: gradient,
      hover: gradient,
      color: "var(--raikou-color-white)",
      border: "none",
    };
  }

  if (variant === "default") {
    return {
      background: "var(--raikou-color-default)",
      hover: "var(--raikou-color-default-hover)",
      color: "var(--raikou-color-default-color)",
      border: `${rem(1)} solid var(--raikou-color-default-border)`,
    };
  }

  return {} as VariantColorResolverResult;
};
