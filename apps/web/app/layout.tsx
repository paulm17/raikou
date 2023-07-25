import { RaikouProvider, ColorSchemeScript } from "@raikou/system";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";
import "../global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fullConfig = resolveConfig(tailwindConfig);

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <RaikouProvider theme={fullConfig.theme.custom as any}>
          <body>{children}</body>
        </RaikouProvider>
      </body>
    </html>
  );
}
