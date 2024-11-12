import path from "node:path";
import dts from "vite-plugin-dts";

import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "esnext",

    lib: {
      entry: {
        main: path.resolve(__dirname, "./main.ts"), //
        "sub-sub-module": "sub-sub-module/index.ts",
      },
      formats: ["es", "cjs"],
    },
  },
  plugins: [dts({})],
});
