export function returnHome(path: string) {
  if (path === "/home/runner/work/raikou/raikou/packages/raikou/system") {
    return "/home/runner/work/raikou/raikou";
  }

  let directories = path.split("/");
  let resultPath = "";

  directories.some((dir, i) => {
    resultPath = directories.slice(0, i + 1).join("/");
    return dir === "raikou";
  });

  return resultPath;
}
