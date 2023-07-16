import { Bootstrap, ColorSchemeScript } from "@raikou/system";
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
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Bootstrap theme={fullConfig.theme.custom as any}>
          <body>{children}</body>
        </Bootstrap>
      </body>
    </html>
  );
}
