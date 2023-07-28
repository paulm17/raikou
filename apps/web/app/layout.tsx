import { RaikouProvider } from "@raikou/system";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";
import "../global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fullConfig = resolveConfig(tailwindConfig);
  const themes = [
    "acid",
    "aqua",
    "autumn",
    "black",
    "bumblebee",
    "business",
    "coffee",
    "corporate",
    "cmyk",
    "cupcake",
    "cyberpunk",
    "dark",
    "dracula",
    "emerald",
    "fantasy",
    "forest",
    "garden",
    "halloween",
    "lemonade",
    "light",
    "lofi",
    "luxury",
    "mantine",
    "night",
    "pastel",
    "retro",
    "synthwave",
    "valentine",
    "winter",
    "wireframe",
  ];

  return (
    <html lang="en">
      <body>
        <RaikouProvider
          theme={(fullConfig.theme as any).custom}
          defaultColorScheme="dark"
          themeNames={themes}
        >
          <body>{children}</body>
        </RaikouProvider>
      </body>
    </html>
  );
}
