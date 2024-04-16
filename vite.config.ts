/// <reference types="vitest" />
import { defineConfig } from "vite";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      include: ["lib/**/!(*.stories|*.test).{ts,tsx}"],
      copyDtsFiles: true,
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["chroma-js"],
      input: Object.fromEntries(
        glob
          .sync("lib/**/!(*.stories|*.test).{ts,tsx}")
          .map((file) => [
            relative("lib", file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: "[name][extname]",
        entryFileNames: "[name].js",
        preserveModules: true,
      },
    },
  },
  test: {},
});
