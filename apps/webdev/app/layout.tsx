import { RaikouProvider } from "@raikou/system";
import "./global.css";
// import { ContextMenuProvider } from "@raikou/contextmenu";
import config from "../unocss.config";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <RaikouProvider theme={config.raikouTheme}>
          <Providers theme={config.raikouTheme}>{children}</Providers>
        </RaikouProvider>
      </body>
    </html>
  );
}
