import { defineConfig } from "tsdown";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["./src/index.ts"],
  format: "esm",
  minify: "dce-only",
  nodeProtocol: true,
  outDir: "dist",
  publint: true,
});
