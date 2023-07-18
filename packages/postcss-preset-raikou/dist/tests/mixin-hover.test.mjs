import {
  testTransform
} from "../chunk-Y4PDLQ66.mjs";
import "../chunk-ID5F3VD6.mjs";
import "../chunk-DN5TLACA.mjs";
import "../chunk-LYL6R3KZ.mjs";
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
