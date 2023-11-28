import * as demos from "./index";
import { renderDemo } from "../../../render-demo";

export default { title: "Loader" };

export const DemoConfigurator = {
  name: "⭐ Demo: configurator",
  render: renderDemo(demos.configurator),
};

export const DemoSize = {
  name: "⭐ Demo: size",
  render: renderDemo(demos.size),
};
