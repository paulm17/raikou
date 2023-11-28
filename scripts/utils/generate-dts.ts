import execa from "execa";
import fg from "fast-glob";
import path from "path";
import fs from "fs-extra";

export default async function generateDts(packagePath: string) {
  await execa(
    "pnpm",
    [
      "tsc",
      "--project",
      "tsconfig.build.json",
      "--outDir",
      `${packagePath}/lib`,
    ],
    {
      cwd: `${packagePath}`,
    },
  );

  const files = await fg(["lib/**/*.js"], { cwd: packagePath });

  // Duplicate the type definitions for ESM
  await fs.copy(
    path.join(packagePath, "lib/index.d.ts"),
    path.join(packagePath, "lib/index.d.mts"),
  );

  return Promise.all(
    files.map((file) => fs.remove(path.join(packagePath, file))),
  );
}
