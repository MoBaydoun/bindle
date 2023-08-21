import baseConfig from "../prettier.config.mjs";

/**
 * @type {import('prettier').Config &
 *       import("@ianvs/prettier-plugin-sort-imports").PluginConfig}
 */
const config = {
  ...baseConfig,
  arrowParens: "always",
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  trailingComma: "es5",
  importOrder: ["<THIRD_PARTY_MODULES>", "", "^~/", "^[../]", "^[./]"],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "4.4.0",
};

export default config;
