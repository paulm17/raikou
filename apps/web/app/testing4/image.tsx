import { useStore } from "./store";

function Image({ src }: any) {
  if (typeof window === "undefined") {
    var request = require("request").defaults({ encoding: null });

    request.get(src, function (error: any, response: any) {
      if (response === undefined) {
        useStore.getState().error = true;
      } else if (response.statusCode !== 200) {
        useStore.getState().error = true;
      }
    });
  }

  return <>{useStore.getState().error ? "fail" : <img src={src} />}</>;
}

export { Image };
