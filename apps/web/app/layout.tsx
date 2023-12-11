import { RaikouProvider, DirectionProvider, RaikouTheme } from "@raikou/system";
import { setState, createTheme } from "@raikou/global-store";
// import { generateColors } from "@raikou/colors-generator";
import "./styles/global.css";
// import "./styles/uno.css";
// import { ContextMenuProvider } from "@raikou/contextmenu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = createTheme({
    primaryColor: "blue",
    // colors: {
    //   theme: generateColors("#5474B4"),
    // },
  });

  setState((state: RaikouTheme) => ({
    state: { ...state, ...theme },
  }));

  return (
    <html lang="en" dir="ltr">
      <body>
        <DirectionProvider>
          <RaikouProvider theme={theme}>{children}</RaikouProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
