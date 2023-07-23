import {
  testTransform
} from "../chunk-YPTN3TIL.mjs";
import "../chunk-STEKIEGP.mjs";
import "../chunk-DN5TLACA.mjs";
import "../chunk-GWZ4I5WZ.mjs";
import "../chunk-TLYAXJ7N.mjs";

// src/tests/nested.test.ts
var baseInput = `
.a {
    .b {
        color: black;
    }
}
`;
describe("nested", () => {
  it("it transforms nested rules correctly", async () => {
    const res = await testTransform(baseInput);
    expect(res.css).toMatchSnapshot();
  });
});
