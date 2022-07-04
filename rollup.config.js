// @ts-check

import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import { defineConfig } from "rollup";

export default defineConfig([
  {
    input: "src/index.ts",
    external: (id) => !/^[./]/.test(id),
    output: [
      {
        file: "dist/index.cjs.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/index.esm.js",
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [esbuild()],
  },
  {
    input: "src/index.ts",
    external: (id) => !/^[./]/.test(id),
    output: {
      file: "dist/index.d.ts",
      format: "es",
    },
    plugins: [dts()],
  },
]);