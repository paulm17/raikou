/*
 * @desc formats a floating number to only have 2 max decimal points
 * @since 1.0.0
 */
const toFixed = (num: number) => {
  return parseFloat(num.toFixed(2));
};

/*
 * @desc clamps a number between two other numbers
 * @since 1.0.0
 */
const minMax = (min: number, max: number, value: number) => {
  return Math.max(min, Math.min(value, max));
};

/*
 * @desc removes trailing commas from a string
 * @since 1.0.0
 */
const trimComma = (str: string) => {
  let st = str.trim();
  if (st.slice(-1) === ",") {
    return st.slice(0, -1);
  }
  return st;
};

/*
 * @desc converts percentage-based positions to pixels and vice versa
 * @since 1.0.0
 */
const convertPositionUnit = (value: number, px: boolean = true) => {
  if (!px) {
    return (value / 100) * 100;
  }
  return 100 * (value * 0.01);
};

/*
 * @desc normalize sorting between browsers to account for differences when identical values exist to ensure that
 *       consecutive colors with identical stop values maintain their respective order (which matters for CSS gradients)
 *       https://jsfiddle.net/r7gmxf92/
 * @since 1.0.0
 */
const sortCompareAlt = (() => {
  return [
    { index: 0, val: 0 },
    { index: 1, val: 0 },
    //@ts-ignore
  ].sort((a: number, b: number) => a.val >= b.val)[0].index;
})();

const sortCompare = (a: number, b: number) => {
  return !sortCompareAlt ? (a >= b ? 1 : -1) : a > b ? 1 : -1;
};

export { minMax, toFixed, trimComma, sortCompare, convertPositionUnit };
