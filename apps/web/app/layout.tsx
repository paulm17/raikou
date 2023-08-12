import { RaikouProvider } from "@raikou/system";
import "../global.css";
import { setState, createTheme } from "@raikou/global-store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = createTheme({
    primaryColor: "green",
    components: {
      Button: {
        vars: `
          if (props.size === "xxl") {
            return {
              root: {
                "--button-height": rem(60),
                "--button-padding-x": rem(30),
                "--button-fz": rem(30),
              },
            };
          }

          if (props.size === "xxs") {
            return {
              root: {
                "--button-height": rem(24),
                "--button-padding-x": rem(10),
                "--button-fz": rem(10),
              },
            };
          }

          return { root: {} };  
        `,
      },
    },
  });

  setState(theme);

  return (
    <html lang="en" dir="ltr" data-raikou-theme="default">
      <body>
        <RaikouProvider theme={theme} defaultColorScheme="light">
          <body>{children}</body>
        </RaikouProvider>
      </body>
    </html>
  );
}
