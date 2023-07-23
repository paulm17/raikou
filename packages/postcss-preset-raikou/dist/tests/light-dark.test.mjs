import {
  testTransform
} from "../chunk-YPTN3TIL.mjs";
import "../chunk-STEKIEGP.mjs";
import "../chunk-DN5TLACA.mjs";
import "../chunk-GWZ4I5WZ.mjs";
import "../chunk-TLYAXJ7N.mjs";

// src/tests/light-dark.test.ts
var baseInput = `
.button {
  background: light-dark(var(--raikou-color-red-5), var(--raikou-color-blue-9));
}
`;
var mediaInput = `
@media screen and (min-width: 400px) {
  .button {
    background: light-dark(var(--raikou-color-green-5), var(--raikou-color-yellow-9));
  }
}
`;
var lightDarkInsideClassNameInput = `
.button-light-dark {
  color: red;
}

.button-light-dark:hover {
  color: light-dark(var(--raikou-color-red-5), var(--raikou-color-blue-9));
}
`;
var lightDarkInsideFunctionInput = `
.button {
  color: highlight-dark(red);
}
`;
var commasInput = `
.button {
  color: light-dark(rgba(0, 0, 0, 0.2), rgba(142 142 142 / 0.2));
}
`;
describe("light-dark", () => {
  it("works with base input", async () => {
    const res = await testTransform(baseInput);
    expect(res.css).toMatchSnapshot();
  });
  it("works inside media query", async () => {
    const res = await testTransform(mediaInput);
    expect(res.css).toMatchSnapshot();
  });
  it("works when light-dark is inside the class name", async () => {
    const res = await testTransform(lightDarkInsideClassNameInput);
    expect(res.css).toMatchSnapshot();
  });
  it("does not process the function when name does not match exactly", async () => {
    const res = await testTransform(lightDarkInsideFunctionInput);
    expect(res.css).toMatchSnapshot();
  });
  it("works when there are commas in the value", async () => {
    const res = await testTransform(commasInput);
    expect(res.css).toMatchSnapshot();
  });
});
