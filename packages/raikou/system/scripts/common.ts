export function returnHome(path: string) {
  let directories = path.split("/");
  let resultPath = "";

  directories.some((dir, i) => {
    resultPath = directories.slice(0, i + 1).join("/");
    return dir === "raikou";
  });

  return resultPath;
}
