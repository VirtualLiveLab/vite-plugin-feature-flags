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
