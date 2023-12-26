// ../../../../configuration/tsup/tsup.config.ts
import { defineConfig } from "tsup";
import path from "path";
import fsPromises from "fs/promises";
import postcss from "postcss";
import postcssModules from "postcss-modules";
import postcssPresetRaikou from "postcss-preset-raikou";
import { generateScopedName } from "hash-css-selector";
var tsup_config_default = defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  loader: {
    ".css": "local-css"
  },
  dts: true,
  sourcemap: true,
  clean: true,
  esbuildPlugins: [
    {
      name: "css-module",
      setup(build) {
        build.onResolve(
          { filter: /\.module\.css$/, namespace: "file" },
          (args) => {
            return {
              path: `${args.path}#css-module`,
              namespace: "css-module",
              pluginData: {
                pathDir: path.join(args.resolveDir, args.path)
              }
            };
          }
        );
        build.onLoad(
          { filter: /#css-module$/, namespace: "css-module" },
          async (args) => {
            const { pluginData } = args;
            const source = await fsPromises.readFile(
              pluginData.pathDir,
              "utf8"
            );
            let cssModule = {};
            const result = await postcss([
              postcssPresetRaikou,
              postcssModules({
                generateScopedName: function(name, filename) {
                  const newSelector = generateScopedName(name, filename);
                  cssModule[name] = newSelector;
                  return newSelector;
                },
                getJSON: () => {
                },
                scopeBehaviour: "local"
              })
            ]).process(source, { from: pluginData.pathDir });
            return {
              pluginData: { css: result.css },
              contents: `import "${pluginData.pathDir}"; export default ${JSON.stringify(cssModule)}`
            };
          }
        );
        build.onResolve(
          { filter: /\.module\.css$/, namespace: "css-module" },
          (args) => ({
            path: path.join(args.resolveDir, args.path, "#css-module-data"),
            namespace: "css-module",
            pluginData: args.pluginData
          })
        );
        build.onLoad(
          { filter: /#css-module-data$/, namespace: "css-module" },
          (args) => ({
            contents: args.pluginData.css,
            loader: "css"
          })
        );
      }
    }
  ]
});
export {
  tsup_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vY29uZmlndXJhdGlvbi90c3VwL3RzdXAuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIi9Vc2Vycy9wYXVsL2RldmVsb3BtZW50L3NyYy9naXRodWIvcmFpa291L2NvbmZpZ3VyYXRpb24vdHN1cC90c3VwLmNvbmZpZy50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCIvVXNlcnMvcGF1bC9kZXZlbG9wbWVudC9zcmMvZ2l0aHViL3JhaWtvdS9jb25maWd1cmF0aW9uL3RzdXBcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL1VzZXJzL3BhdWwvZGV2ZWxvcG1lbnQvc3JjL2dpdGh1Yi9yYWlrb3UvY29uZmlndXJhdGlvbi90c3VwL3RzdXAuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInRzdXBcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgZnNQcm9taXNlcyBmcm9tIFwiZnMvcHJvbWlzZXNcIjtcbmltcG9ydCBwb3N0Y3NzIGZyb20gXCJwb3N0Y3NzXCI7XG5pbXBvcnQgcG9zdGNzc01vZHVsZXMgZnJvbSBcInBvc3Rjc3MtbW9kdWxlc1wiO1xuaW1wb3J0IHBvc3Rjc3NQcmVzZXRSYWlrb3UgZnJvbSBcInBvc3Rjc3MtcHJlc2V0LXJhaWtvdVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVTY29wZWROYW1lIH0gZnJvbSBcImhhc2gtY3NzLXNlbGVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGVudHJ5OiBbXCJzcmMvaW5kZXgudHNcIl0sXG4gIGZvcm1hdDogW1wiZXNtXCIsIFwiY2pzXCJdLFxuICBsb2FkZXI6IHtcbiAgICBcIi5jc3NcIjogXCJsb2NhbC1jc3NcIixcbiAgfSxcbiAgZHRzOiB0cnVlLFxuICBzb3VyY2VtYXA6IHRydWUsXG4gIGNsZWFuOiB0cnVlLFxuICBlc2J1aWxkUGx1Z2luczogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiY3NzLW1vZHVsZVwiLFxuICAgICAgc2V0dXAoYnVpbGQpOiB2b2lkIHtcbiAgICAgICAgYnVpbGQub25SZXNvbHZlKFxuICAgICAgICAgIHsgZmlsdGVyOiAvXFwubW9kdWxlXFwuY3NzJC8sIG5hbWVzcGFjZTogXCJmaWxlXCIgfSxcbiAgICAgICAgICAoYXJncykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgcGF0aDogYCR7YXJncy5wYXRofSNjc3MtbW9kdWxlYCxcbiAgICAgICAgICAgICAgbmFtZXNwYWNlOiBcImNzcy1tb2R1bGVcIixcbiAgICAgICAgICAgICAgcGx1Z2luRGF0YToge1xuICAgICAgICAgICAgICAgIHBhdGhEaXI6IHBhdGguam9pbihhcmdzLnJlc29sdmVEaXIsIGFyZ3MucGF0aCksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICAgIGJ1aWxkLm9uTG9hZChcbiAgICAgICAgICB7IGZpbHRlcjogLyNjc3MtbW9kdWxlJC8sIG5hbWVzcGFjZTogXCJjc3MtbW9kdWxlXCIgfSxcbiAgICAgICAgICBhc3luYyAoYXJncykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwbHVnaW5EYXRhIH0gPSBhcmdzIGFzIHtcbiAgICAgICAgICAgICAgcGx1Z2luRGF0YTogeyBwYXRoRGlyOiBzdHJpbmcgfTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGF3YWl0IGZzUHJvbWlzZXMucmVhZEZpbGUoXG4gICAgICAgICAgICAgIHBsdWdpbkRhdGEucGF0aERpcixcbiAgICAgICAgICAgICAgXCJ1dGY4XCIsXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBsZXQgY3NzTW9kdWxlOiBhbnkgPSB7fTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvc3Rjc3MoW1xuICAgICAgICAgICAgICBwb3N0Y3NzUHJlc2V0UmFpa291LFxuICAgICAgICAgICAgICBwb3N0Y3NzTW9kdWxlcyh7XG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVTY29wZWROYW1lOiBmdW5jdGlvbiAobmFtZSwgZmlsZW5hbWUpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NlbGVjdG9yID0gZ2VuZXJhdGVTY29wZWROYW1lKG5hbWUsIGZpbGVuYW1lKTtcbiAgICAgICAgICAgICAgICAgIGNzc01vZHVsZVtuYW1lXSA9IG5ld1NlbGVjdG9yO1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gbmV3U2VsZWN0b3I7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBnZXRKU09OOiAoKSA9PiB7fSxcbiAgICAgICAgICAgICAgICBzY29wZUJlaGF2aW91cjogXCJsb2NhbFwiLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pLnByb2Nlc3Moc291cmNlLCB7IGZyb206IHBsdWdpbkRhdGEucGF0aERpciB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgcGx1Z2luRGF0YTogeyBjc3M6IHJlc3VsdC5jc3MgfSxcbiAgICAgICAgICAgICAgY29udGVudHM6IGBpbXBvcnQgXCIke1xuICAgICAgICAgICAgICAgIHBsdWdpbkRhdGEucGF0aERpclxuICAgICAgICAgICAgICB9XCI7IGV4cG9ydCBkZWZhdWx0ICR7SlNPTi5zdHJpbmdpZnkoY3NzTW9kdWxlKX1gLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgICBidWlsZC5vblJlc29sdmUoXG4gICAgICAgICAgeyBmaWx0ZXI6IC9cXC5tb2R1bGVcXC5jc3MkLywgbmFtZXNwYWNlOiBcImNzcy1tb2R1bGVcIiB9LFxuICAgICAgICAgIChhcmdzKSA9PiAoe1xuICAgICAgICAgICAgcGF0aDogcGF0aC5qb2luKGFyZ3MucmVzb2x2ZURpciwgYXJncy5wYXRoLCBcIiNjc3MtbW9kdWxlLWRhdGFcIiksXG4gICAgICAgICAgICBuYW1lc3BhY2U6IFwiY3NzLW1vZHVsZVwiLFxuICAgICAgICAgICAgcGx1Z2luRGF0YTogYXJncy5wbHVnaW5EYXRhIGFzIHsgY3NzOiBzdHJpbmcgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgICAgYnVpbGQub25Mb2FkKFxuICAgICAgICAgIHsgZmlsdGVyOiAvI2Nzcy1tb2R1bGUtZGF0YSQvLCBuYW1lc3BhY2U6IFwiY3NzLW1vZHVsZVwiIH0sXG4gICAgICAgICAgKGFyZ3MpID0+ICh7XG4gICAgICAgICAgICBjb250ZW50czogKGFyZ3MucGx1Z2luRGF0YSBhcyB7IGNzczogc3RyaW5nIH0pLmNzcyxcbiAgICAgICAgICAgIGxvYWRlcjogXCJjc3NcIixcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrVSxTQUFTLG9CQUFvQjtBQUMvVixPQUFPLFVBQVU7QUFDakIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sb0JBQW9CO0FBQzNCLE9BQU8seUJBQXlCO0FBQ2hDLFNBQVMsMEJBQTBCO0FBRW5DLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU8sQ0FBQyxjQUFjO0FBQUEsRUFDdEIsUUFBUSxDQUFDLE9BQU8sS0FBSztBQUFBLEVBQ3JCLFFBQVE7QUFBQSxJQUNOLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxLQUFLO0FBQUEsRUFDTCxXQUFXO0FBQUEsRUFDWCxPQUFPO0FBQUEsRUFDUCxnQkFBZ0I7QUFBQSxJQUNkO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNLE9BQWE7QUFDakIsY0FBTTtBQUFBLFVBQ0osRUFBRSxRQUFRLGtCQUFrQixXQUFXLE9BQU87QUFBQSxVQUM5QyxDQUFDLFNBQVM7QUFDUixtQkFBTztBQUFBLGNBQ0wsTUFBTSxHQUFHLEtBQUssSUFBSTtBQUFBLGNBQ2xCLFdBQVc7QUFBQSxjQUNYLFlBQVk7QUFBQSxnQkFDVixTQUFTLEtBQUssS0FBSyxLQUFLLFlBQVksS0FBSyxJQUFJO0FBQUEsY0FDL0M7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFDQSxjQUFNO0FBQUEsVUFDSixFQUFFLFFBQVEsZ0JBQWdCLFdBQVcsYUFBYTtBQUFBLFVBQ2xELE9BQU8sU0FBUztBQUNkLGtCQUFNLEVBQUUsV0FBVyxJQUFJO0FBSXZCLGtCQUFNLFNBQVMsTUFBTSxXQUFXO0FBQUEsY0FDOUIsV0FBVztBQUFBLGNBQ1g7QUFBQSxZQUNGO0FBRUEsZ0JBQUksWUFBaUIsQ0FBQztBQUN0QixrQkFBTSxTQUFTLE1BQU0sUUFBUTtBQUFBLGNBQzNCO0FBQUEsY0FDQSxlQUFlO0FBQUEsZ0JBQ2Isb0JBQW9CLFNBQVUsTUFBTSxVQUFVO0FBQzVDLHdCQUFNLGNBQWMsbUJBQW1CLE1BQU0sUUFBUTtBQUNyRCw0QkFBVSxJQUFJLElBQUk7QUFFbEIseUJBQU87QUFBQSxnQkFDVDtBQUFBLGdCQUNBLFNBQVMsTUFBTTtBQUFBLGdCQUFDO0FBQUEsZ0JBQ2hCLGdCQUFnQjtBQUFBLGNBQ2xCLENBQUM7QUFBQSxZQUNILENBQUMsRUFBRSxRQUFRLFFBQVEsRUFBRSxNQUFNLFdBQVcsUUFBUSxDQUFDO0FBRS9DLG1CQUFPO0FBQUEsY0FDTCxZQUFZLEVBQUUsS0FBSyxPQUFPLElBQUk7QUFBQSxjQUM5QixVQUFVLFdBQ1IsV0FBVyxPQUNiLHFCQUFxQixLQUFLLFVBQVUsU0FBUyxDQUFDO0FBQUEsWUFDaEQ7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUNBLGNBQU07QUFBQSxVQUNKLEVBQUUsUUFBUSxrQkFBa0IsV0FBVyxhQUFhO0FBQUEsVUFDcEQsQ0FBQyxVQUFVO0FBQUEsWUFDVCxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksS0FBSyxNQUFNLGtCQUFrQjtBQUFBLFlBQzlELFdBQVc7QUFBQSxZQUNYLFlBQVksS0FBSztBQUFBLFVBQ25CO0FBQUEsUUFDRjtBQUNBLGNBQU07QUFBQSxVQUNKLEVBQUUsUUFBUSxxQkFBcUIsV0FBVyxhQUFhO0FBQUEsVUFDdkQsQ0FBQyxVQUFVO0FBQUEsWUFDVCxVQUFXLEtBQUssV0FBK0I7QUFBQSxZQUMvQyxRQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
