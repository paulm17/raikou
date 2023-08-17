import chroma from 'chroma-js';

declare function generateColorsMap(color: string): {
    baseColorIndex: number;
    colors: chroma.Color[];
};
type RaikouColorsTuple = readonly [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    ...string[]
];
declare function generateColors(color: string): RaikouColorsTuple;

export { generateColors, generateColorsMap };
