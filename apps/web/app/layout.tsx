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
    primaryColor: "theme",
    colors: {
      theme: generateColors("#5474B4"),
    },
  });

  const resolver = {
    light: {
      ".button-root": {
        "--raikou-button-disabled-bg": "#E17900",
      },
    },
    dark: {
      ".button-root": {
        "--raikou-button-disabled-bg": "#FC8C0C",
      },
    },
  };

  setState(theme);

  return (
    <html lang="en" dir="ltr">
      <body>
        <RaikouProvider
          theme={theme}
          cssVariablesResolver={`return ${JSON.stringify(resolver)}`}
        >
          <body>{children}</body>
        </RaikouProvider>
      </body>
    </html>
  );
}
