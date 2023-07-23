import {
  testTransform
} from "../chunk-YPTN3TIL.mjs";
import "../chunk-STEKIEGP.mjs";
import "../chunk-DN5TLACA.mjs";
import "../chunk-GWZ4I5WZ.mjs";
import "../chunk-TLYAXJ7N.mjs";

// src/tests/mixin-light-dark.test.ts
var baseInput = `
.demo {
  @mixin light {
    color: red;
  }

  @mixin dark {
    color: blue;
  }
}
`;
describe("mixin-light-dark", () => {
  it("transforms light and dark mixins correctly", async () => {
    const res = await testTransform(baseInput);
    expect(res.css).toMatchSnapshot();
  });
});
