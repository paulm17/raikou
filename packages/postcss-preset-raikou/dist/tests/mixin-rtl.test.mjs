import {
  testTransform
} from "../chunk-YPTN3TIL.mjs";
import "../chunk-STEKIEGP.mjs";
import "../chunk-DN5TLACA.mjs";
import "../chunk-GWZ4I5WZ.mjs";
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
