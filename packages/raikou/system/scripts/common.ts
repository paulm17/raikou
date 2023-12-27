export function returnHome(path: string) {
  console.log("hello path", path);

  if (path === "/home/runner/work/raikou/raikou") {
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
