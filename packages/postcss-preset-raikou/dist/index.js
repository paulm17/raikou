"use strict";
const nested = require('postcss-nested');
const mixins = require('postcss-mixins');
const remEm = require('./postcss-rem-em');
const lightDark = require('./postcss-light-dark');
const converters = require('./converters');
function colorSchemeMixin(colorScheme) {
    return {
        [`[data-raikou-color-scheme='${colorScheme}'] &`]: {
            '@mixin-content': {},
        },
    };
}
function rootColorSchemeMixin(colorScheme) {
    return {
        [`&[data-raikou-color-scheme='${colorScheme}']`]: {
            '@mixin-content': {},
        },
    };
}
const hoverMixin = {
    '@media (hover: hover)': {
        '&:hover': {
            '@mixin-content': {},
        },
    },
    '@media (hover: none)': {
        '&:active': {
            '@mixin-content': {},
        },
    },
};
const rtlMixin = {
    '[dir="rtl"] &': {
        '@mixin-content': {},
    },
};
const ltrMixin = {
    '[dir="ltr"] &': {
        '@mixin-content': {},
    },
};
const notRtlMixin = {
    ':root:not([dir="rtl"]) &': {
        '@mixin-content': {},
    },
};
const notLtrMixin = {
    ':root:not([dir="ltr"]) &': {
        '@mixin-content': {},
    },
};
const smallerThanMixin = (_mixin, breakpoint) => ({
    [`@media (max-width: ${converters.em(converters.px(breakpoint) - 0.1)})`]: {
        '@mixin-content': {},
    },
});
const largerThanMixin = (_mixin, breakpoint) => ({
    [`@media (min-width: ${converters.em(breakpoint)})`]: {
        '@mixin-content': {},
    },
});
module.exports = () => {
    return {
        postcssPlugin: 'postcss-preset-raikou',
        plugins: [
            lightDark(),
            nested(),
            remEm(),
            mixins({
                mixins: {
                    light: colorSchemeMixin('light'),
                    dark: colorSchemeMixin('dark'),
                    'light-root': rootColorSchemeMixin('light'),
                    'dark-root': rootColorSchemeMixin('dark'),
                    hover: hoverMixin,
                    rtl: rtlMixin,
                    ltr: ltrMixin,
                    'not-rtl': notRtlMixin,
                    'not-ltr': notLtrMixin,
                    'smaller-than': smallerThanMixin,
                    'larger-than': largerThanMixin,
                },
            }),
        ],
    };
};
module.exports.postcss = true;
