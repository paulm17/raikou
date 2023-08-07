import { RaikouProvider, DirectionProvider } from "@raikou/system";
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
    <html lang="en" dir="ltr" data-raikou-theme="default">
      <body>
        <DirectionProvider>
          <RaikouProvider
            theme={(fullConfig.theme as any).custom}
            defaultColorScheme="light"
          >
            <body>{children}</body>
          </RaikouProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
