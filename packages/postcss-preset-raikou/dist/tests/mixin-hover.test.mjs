import {
  testTransform
} from "../chunk-YPTN3TIL.mjs";
import "../chunk-STEKIEGP.mjs";
import "../chunk-DN5TLACA.mjs";
import "../chunk-GWZ4I5WZ.mjs";
import "../chunk-TLYAXJ7N.mjs";

// src/tests/mixin-hover.test.ts
var baseInput = `
.demo {
  @mixin hover {
    color: orange;
  }
}
`;
describe("mixin-hover", () => {
  it("transforms hover mixin correctly", async () => {
    const res = await testTransform(baseInput);
    expect(res.css).toMatchSnapshot();
  });
});
