import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const plugins = [nodeResolve()];
const minifyPlugins = [
  terser({
    compress: true,
    mangle: {
      reserved: [],
      properties: {
        regex: /^_/,
      },
    },
  }),
];

export default [
  {
    input: "src/html.js",
    output: {
      file: "dist/dependable-htm.esm.js",
      format: "esm",
    },
    plugins,
  },
  {
    input: "src/html.js",
    output: {
      file: "dist/dependable-htm.esm.min.js",
      format: "esm",
    },
    plugins: plugins.concat(minifyPlugins),
  },
];
