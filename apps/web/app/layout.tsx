import { RaikouProvider } from "@raikou/system";
import { createTheme } from "@raikou/global-store";
import "./styles/global.css";
// import { ContextMenuProvider } from "@raikou/contextmenu";
import config from "../unocss.config";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = createTheme(config);

  return (
    <html lang="en" dir="ltr">
      <body>
        <RaikouProvider theme={theme}>{children}</RaikouProvider>
      </body>
    </html>
  );
}
