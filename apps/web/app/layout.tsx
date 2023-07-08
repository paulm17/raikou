import { Bootstrap } from "@raikou/core";
import "../global.css";
import ThemeProvider from "./themeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <ThemeProvider>
          <Bootstrap>
            <body>{children}</body>
          </Bootstrap>
        </ThemeProvider>
      </body>
    </html>
  );
}
