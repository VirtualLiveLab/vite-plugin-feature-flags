# @virtual-live-lab/vite-plugin-feature-flags

[![npm)](https://img.shields.io/npm/v/@virtual-live-lab/vite-feature-flags-plugin)](https://www.npmjs.com/package/@virtual-live-lab/vite-feature-flags-plugin)

A feature flag plugin for Vite.

## How to use

1. Install the plugin.

   ```bash
   pnpm add -D @virtual-live-lab/vite-plugin-feature-flags
   ```

2. Add this plugin to `vite.config.ts`.

   ```ts
   import { defineConfig } from "vite";
   import { featuresPlugin } from "vite-plugin-feature-flags";

   export default defineConfig({
     plugins: [
       featuresPlugin({
         // your feature flags
         hoge: true,
         fuga: false,
       }),
     ],
   });
   ```

3. Add type declaration for feature flags.

   ```ts
   declare module "@virtual-live-lab/vite-plugin-feature-flags/client" {
     interface ImportMetaFeatures {
       hoge: boolean;
       fuga: boolean;
     }
   }

   export {}; // Declaration merging is only available in modules.
   ```

4. Use feature flags in your code.

   ```ts
   if (import.meta.features.hoge) {
     console.log("hoge is enabled");
   }
   ```
