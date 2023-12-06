/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 120,
  semi: true,
  doubleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,

  plugins: [require.resolve("prettier-plugin-astro"), require.resolve("@trivago/prettier-plugin-sort-imports")],

  overrides: [{ files: "*.astro", options: { parser: "astro" } }],
};
