import { RaikouProvider, DirectionProvider } from "@raikou/system";
import "../global.css";
import { setState, createTheme } from "@raikou/global-store";
import { generateColors } from "@raikou/colors-generator";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = createTheme({
    primaryColor: "theme",
    colors: {
      theme: generateColors("#5474B4"),
    },
  });

  setState(theme);

  return (
    <html lang="en" dir="ltr">
      <body>
        <DirectionProvider>
          <RaikouProvider theme={theme}>
            <body>{children}</body>
          </RaikouProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
