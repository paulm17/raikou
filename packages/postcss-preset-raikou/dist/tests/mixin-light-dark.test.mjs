import {
  testTransform
} from "../chunk-Y4PDLQ66.mjs";
import "../chunk-ID5F3VD6.mjs";
import "../chunk-DN5TLACA.mjs";
import "../chunk-LYL6R3KZ.mjs";
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
