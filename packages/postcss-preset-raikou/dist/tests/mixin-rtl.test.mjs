import {
  testTransform
} from "../chunk-Y4PDLQ66.mjs";
import "../chunk-ID5F3VD6.mjs";
import "../chunk-DN5TLACA.mjs";
import "../chunk-LYL6R3KZ.mjs";
import "../chunk-TLYAXJ7N.mjs";

// src/tests/mixin-rtl.test.ts
var baseInput = `
.demo {
  @mixin rtl {
    margin-right: 1rem;
  }

  @mixin not-rtl {
    margin-left: 1rem;
  }
}
`;
describe("mixin-rtl", () => {
  it("transforms rtl mixins correctly", async () => {
    const res = await testTransform(baseInput);
    expect(res.css).toMatchSnapshot();
  });
});
