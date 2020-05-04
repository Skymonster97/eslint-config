"use strict";

const rules = {
  "import/default": "off", // ESM
  "import/dynamic-import-chunkname": "off", // ESM
  "import/export": "off", // ESM
  "import/exports-last": "off", // ESM
  "import/extensions": "off", // ESM
  "import/first": "off", // ESM
  "import/group-exports": "error",
  "import/max-dependencies": "off",
  "import/named": "off", // ESM
  "import/namespace": "off", // ESM
  "import/newline-after-import": "off",
  "import/no-absolute-path": "error",
  "import/no-amd": "error",
  "import/no-anonymous-default-export": "off", // ESM
  "import/no-commonjs": "off",
  "import/no-cycle": "off", // ESM
  "import/no-default-export": "off", // ESM
  "import/no-deprecated": "error",
  "import/no-duplicates": "off", // ESM
  "import/no-dynamic-require": "off",
  "import/no-extraneous-dependencies": "off", // node alt
  "import/no-internal-modules": "off",
  "import/no-mutable-exports": "off", // ESM
  "import/no-named-as-default-member": "off", // ESM
  "import/no-named-as-default": "off", // ESM
  "import/no-named-default": "off", // ESM
  "import/no-named-export": "off", // ESM
  "import/no-namespace": "off", // ESM
  "import/no-nodejs-modules": "off", // ESM
  "import/no-relative-parent-imports": "off", // ESM
  "import/no-restricted-paths": "off", // ESM
  "import/no-self-import": "error",
  "import/no-unassigned-import": "off",
  "import/no-unresolved": "off", // node alt
  "import/no-unused-modules": "off", // ESM
  "import/no-useless-path-segments": ["error", {
    "commonjs": true,
  }],
  "import/no-webpack-loader-syntax": "off",
  "import/order": ["error", {
    "groups": [
      "builtin",
      "external",
      "internal",
    ],
  }],
  "import/prefer-default-export": "off", // ESM
  "import/unambiguous": "off", // ESM
};

module.exports = {
  plugins: ["eslint-plugin-import"],
  rules,
};
