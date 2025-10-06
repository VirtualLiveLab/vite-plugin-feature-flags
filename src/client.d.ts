/**
 * An interface representing feature flags for conditional code inclusion.
 * This interface should be compatible with `Record<string, boolean>`.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ImportMetaFeatures {}

interface ImportMeta {
  /**
   * A object containing feature flags for conditional code inclusion.
   *
   * > [!NOTE]
   * > This is replaced at build time by the `featuresPlugin` Vite plugin.
   * > Do not access the property indirectly (e.g., `import.meta.features[key]`), or the compilation will fail.
   */
  features: ImportMetaFeatures;
}
