import type { Plugin } from "vite";

/**
 * A Vite plugin to implement feature flags.
 * During development, it embeds import.meta.features into the source code,
 * and during build time, it replaces import.meta.features.hoge with `define`,
 * utilizing the dead code elimination mechanism to remove unpublished features from the code.
 *
 * This plugin ensures that if import.meta.features remains after the build (indicating a failure in replacement by `define`), an error is thrown,
 * so that unpublished information is not leaked.
 */
export function featuresPlugin(
  features: Record<keyof ImportMetaFeatures, boolean>,
): Plugin[] {
  return [
    {
      apply: "serve",
      name: "features-plugin-dev",
      transform: {
        filter: {
          code: "import.meta.features",
        },
        handler(code) {
          return `import.meta.features = ${JSON.stringify(features)};${code}`;
        },
        order: "post",
      },
    },
    {
      apply: "build",
      config() {
        return {
          define: Object.fromEntries(
            Object.entries(features).map(([key, value]) => [
              `import.meta.features.${key}`,
              JSON.stringify(value),
            ]),
          ),
        };
      },
      name: "features-plugin-build",
      transform: {
        filter: {
          code: "import.meta.features",
        },
        handler(_code, id) {
          throw new Error(`import.meta.features is not optimized away: ${id}`);
        },
        order: "post",
      },
    },
  ];
}
