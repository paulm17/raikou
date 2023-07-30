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

  return (
    <html lang="en">
      <body>
        <RaikouProvider
          theme={(fullConfig.theme as any).custom}
          defaultColorScheme="dark"
        >
          <body>{children}</body>
        </RaikouProvider>
      </body>
    </html>
  );
}
