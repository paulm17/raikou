<!-- PROJECT LOGO -->

<a name="readme-top"></a> <br />

<div align="center">
  <a href="https://github.com/paulm17/raikou">
    <img src="./images/logo.png" alt="Logo">
  </a>
  <h3 align="center">RAIKOU</h3>
  <p align="center">
    Raikou is a mantine fork which replaces css modules to adopt a unocss first-use approach.
  </p>
  <p align="center">
    <i>Push the envelope, watch it bend.</i>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

Mantine 6 with CSS-in-JS allowed for styles to be adjacent to the component it
was styling. However with Mantine 7 styling has switched to CSS Modules. Many in
the industry see CSS Modules as a step backwards and I (the fork author) share
this sentiment. Therefore forking the project to integrate unocss was the
obvious choice.

The project was conceived with these 4 long-term goals:

1. Facilitate css-in-js for all components.
2. To ensure that there were no clashes between the bootstrapped CSS of the
   component and when using the Styles API via the emotion plugin.
3. Once the pigment-css team move from WYW-in-JS to React compiler. To move from
   the emotion plugin generating runtime styles to the build process.

## Project Caveats

1.  NextJS, Qwik and any other non-vite javascript frameworks are not supported.
    There are no intentions of supporting anything other than Vite javascript
    frameworks.
2.  There may be design decisions implemented that will diverge from Mantine.

    - Mantine and Raikou employ different approaches to manage the theme. While
      Mantine uses context and can be a runtime process for overrides. Raikou
      utilizes the pigment-css theme.

    - <a href="https://github.com/pacocoursey/next-themes">Next Themes</a> is
      used in favour of the native mantine implementation.

    - Raikou uses
      <a href="https://github.com/paulm17/stylefusion">Stylefusion</a> which is
      a fork of <a href="https://github.com/mui/pigment-css">pigment-css</a>.
      Stylefusion negates the need for postcss and includes all the same
      functionality of postcss-mantine-preset.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Why not integrate pigment-css with mantine in the App?

Integrating Pigment-css with mantine at the app layer raises the complexity of
the stack, also other issues of specificity are present.

### CSS Modules is the wrong choice

Less headaches not dealing with postcss from a developer UX point of view.

<img src="./images/css.modules.png" style="width:500px" alt="Complaint">

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Mirrored Mantine release

Latest release = 7.15.0

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation to a vite application

1. Install the required packages.

- yarn

```sh
yarn add @raikou/core @raikou/emotion @raikou/system
yarn add -D @stylefusion/vite-plugin
```

Note: Raikou uses yarn workspaces as there are various issues with pnpm.

2. Change the vite.config.js to:

```js
import { extendTheme, pigment } from '@stylefusion/vite-plugin';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { getPigmentCSSTheme } from '@raikou/system';

const { cssTheme, rawTheme } = getPigmentCSSTheme();

const theme = extendTheme({
  cssVarPrefix: 'raikou',
  getSelector: (colorScheme) =>
    colorScheme ? `[data-raikou-color-scheme='${colorScheme}']` : ':root',
  ...cssTheme,
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pigment({
      atomic: false,
      theme,
      rawTheme,
    }),
    TanStackRouterVite({}),
    react(),
  ],
});
```

Pro-tip: When atomic is set to true, the build process will atomicify the final
css payload.

3. Add the Providers and stylesheets for the application:

```js
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { emotionTransform, RaikouEmotionProvider } from '@raikou/emotion';
import { RaikouProvider } from '@raikou/system';

import '@raikou/system/styles.css';
import '@stylefusion/react/styles.css';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <RaikouProvider stylesTransform={emotionTransform}>
        <RaikouEmotionProvider>
          <Outlet />
        </RaikouEmotionProvider>
      </RaikouProvider>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Cloning the repo

1. Run the following command

```sh
git clone https://github.com/paulm17/raikou
```

2. Install all the package prerequisites

```sh
yarn
```

3. To run the vite website

```sh
yarn run dev
```

4. To run storybook

```sh
yarn run storybook
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

### Raikou Components

- [x] Extend loader component to support more loaders from
      [react-spinners-kit](https://dmitrymorozoff.github.io/react-spinners-kit/),
      [react-spinners](https://github.com/davidhu2000/react-spinners).
- [x] Include the original button spinner for mantine 6.
- [x] Extend Button to support the button spinner from mantine 6.
- [x] Copy the button loader from
      [nextui](https://nextui.org/docs/components/button#loading).
- [x] Add ripple effect to the action icon and button components from
      [nextui](https://github.com/nextui-org/nextui/tree/canary/packages/components/ripple).
- [x] Add hero patterns from [heropatterns](https://heropatterns.com/).

### Framer Motion

- [ ] Add [aceternity](https://ui.aceternity.com/)
- [ ] Add [magicui](https://magicui.design/)
- [ ] Add [motion-primitives](https://github.com/ibelick/motion-primitives)
- [ ] Add [animata](https://github.com/codse/animata)

### New Components

- [x] Add [mantine-datatable](https://github.com/icflorescu/mantine-datatable)
- [x] Add
      [mantine-contextmenu](https://github.com/icflorescu/mantine-contextmenu)

### Storybook

- [x] Implement Storybook 8 with Vite and Stylefusion.

### Testing

- [ ] Ensure Mantine tests pass with Raikou.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

At this time, no contributions are sought. Thank you.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Paul M - no social - no email

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Vitaly and the Mantine community.](https://mantine.dev/)<br>
- [Ionut-Cristian Florescu for Mantine DataTable and Mantine ContextMenu.](https://github.com/icflorescu)
- [Junior Garcia for Ripple Effect - NextUI](https://github.com/nextui-org/nextui/tree/canary/packages/components/ripple)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

<p align="right">(<a href="#readme-top">back to top</a>)</p>
