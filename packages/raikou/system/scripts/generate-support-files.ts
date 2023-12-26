const fs = require("fs");
import { componentNames } from "./component-names";
import { cssModules } from "./css-modules";

function check() {
  const workingDir = process.cwd();
  const folderPath = `${workingDir}/dist`;

  // check whether system folder has dist folder
  if (fs.existsSync(folderPath)) {
    console.log("Building support files...");

    componentNames();
    cssModules();
  } else {
    console.log("System has no dist folder, skipping...");
  }
}

check();
