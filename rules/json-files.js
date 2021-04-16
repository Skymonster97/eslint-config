"use strict";

const rules = {
  "json-files/no-branch-in-dependencies": "off",
  "json-files/require-engines": "off",
  "json-files/require-license": "off",
  "json-files/restrict-ranges": "off",
  "json-files/sort-package-json": "warn",
};

module.exports = {
  plugins: ["eslint-plugin-json-files"],
  rules,
};
