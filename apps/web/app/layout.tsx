import { RaikouProvider } from "@raikou/system";
import "../global.css";
import { setState, createTheme } from "@raikou/global-store";
import { generateColors } from "@raikou/colors-generator";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = createTheme({
    primaryColor: "primary",
    colors: {
      primary: generateColors("#F0185C"),
    },
  });

  setState(theme);

  return (
    <html lang="en" dir="ltr" data-raikou-theme="default">
      <body>
        <RaikouProvider theme={theme}>
          <body>{children}</body>
        </RaikouProvider>
      </body>
    </html>
  );
}
