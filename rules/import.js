"use strict";

const rules = {
  "import/default": "error",
  "import/dynamic-import-chunkname": "off", // webpack
  "import/export": "error",
  "import/exports-last": "warn", // test
  "import/extensions": ["error", "always"], // test
  "import/first": "error",
  "import/group-exports": "off", // test
  "import/max-dependencies": "off",
  "import/named": "error",
  "import/namespace": ["error", {
    "allowComputed": true,
  }],
  "import/newline-after-import": "off", // eslint alt (padding-line-between-statements)
  "import/no-absolute-path": "error",
  "import/no-amd": "error",
  "import/no-anonymous-default-export": "off",
  "import/no-commonjs": "off",
  "import/no-cycle": "error",
  "import/no-default-export": "off",
  "import/no-deprecated": "error",
  "import/no-duplicates": "error", // test
  "import/no-dynamic-require": "off",
  "import/no-extraneous-dependencies": "error", // node alt (node/no-extraneous-import, node/no-extraneous-require)
  "import/no-internal-modules": "off",
  "import/no-mutable-exports": "error",
  "import/no-named-as-default-member": "error",
  "import/no-named-as-default": "error", // test
  "import/no-named-default": "warn", // test
  "import/no-named-export": "off",
  "import/no-namespace": "off",
  "import/no-nodejs-modules": "off",
  "import/no-relative-parent-imports": "off",
  "import/no-restricted-paths": "off",
  "import/no-self-import": "error",
  "import/no-unassigned-import": "off",
  "import/no-unresolved": ["error", { // node alt (node/no-missing-import, node/no-missing-require)
    "commonjs": true,
  }],
  "import/no-unused-modules": "warn",
  "import/no-useless-path-segments": ["error", {
    "commonjs": true,
  }],
  "import/no-webpack-loader-syntax": "error",
  "import/order": ["error", {
    "groups": [
      "builtin",
      "external",
      "internal",
    ],
  }],
  "import/prefer-default-export": "off",
  "import/unambiguous": "error",
};

module.exports = {
  plugins: ["eslint-plugin-import"],
  rules,
};
