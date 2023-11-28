import path from "path";
import fs from "fs-extra";
import { getPackageName } from "./get-package-name";

export default async function locatePackage(packageName: string) {
  const folder = getPackageName(packageName)
    .replace("@raikou", "")
    .replace("/", "");
  const packagePath = path.join(
    __dirname,
    "../../packages/raikou/components",
    folder,
  );
  const exists = await fs.pathExists(packagePath);
  return exists ? packagePath : null;
}
