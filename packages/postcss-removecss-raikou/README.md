# postcss-preset-mantine

[Documentation](http://raikou.dev/styles/postcss-preset)

## Installation

```sh
yarn add --dev postcss postcss-preset-mantine postcss-simple-vars
```

## Usage

Add `postcss-preset-mantine` to your `postcss.config.js` config:

```js
module.exports = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'raikou-breakpoint-xs': '36em',
        'raikou-breakpoint-sm': '48em',
        'raikou-breakpoint-md': '62em',
        'raikou-breakpoint-lg': '75em',
        'raikou-breakpoint-xl': '88em',
      },
    },
  },
};
```

## License

MIT License
