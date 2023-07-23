import {
  testTransform
} from "../chunk-Y4PDLQ66.mjs";
import "../chunk-ID5F3VD6.mjs";
import "../chunk-DN5TLACA.mjs";
import "../chunk-LYL6R3KZ.mjs";
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
