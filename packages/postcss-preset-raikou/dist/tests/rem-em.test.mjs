import {
  testTransform
} from "../chunk-YPTN3TIL.mjs";
import "../chunk-STEKIEGP.mjs";
import "../chunk-DN5TLACA.mjs";
import "../chunk-GWZ4I5WZ.mjs";
import "../chunk-TLYAXJ7N.mjs";

// src/tests/rem-em.test.ts
var baseInput = `
.demo {
  font-size: rem(16px);
  height: em(40px);
}
`;
var mediaInput = `
@media (min-width: em(320px)) {
  font-size: rem(32px);
}
@media (min-height: rem(240px)) {
  font-size: em(16px);
}
`;
var remEmInsideClassNameInput = `
.button-rem {
  color: red;
}
.button-em {
  color: red;
}
`;
var remEmInsideFunctionInput = `
.button1 {
  color: theorem(32px);
}
.button2 {
  color: poem(48px);
}
`;
describe("rem-em", () => {
  it("transforms base case correctly", async () => {
    const res = await testTransform(baseInput);
    expect(res.css).toMatchSnapshot();
  });
  it("works inside media query", async () => {
    const res = await testTransform(mediaInput);
    expect(res.css).toMatchSnapshot();
  });
  it("works when rem/em is inside the class name", async () => {
    const res = await testTransform(remEmInsideClassNameInput);
    expect(res.css).toMatchSnapshot();
  });
  it("does not process the function when name does not match exactly", async () => {
    const res = await testTransform(remEmInsideFunctionInput);
    expect(res.css).toMatchSnapshot();
  });
});
