"use strict";

const rules = {
  "node/callback-return": "off", // eslint dupe
  "node/exports-style": ["error", "module.exports", {
    "allowBatchAssign": false,
  }],
  "node/file-extension-in-import": "off", // import dupe (import/extensions)
  "node/global-require": "off", // eslint dupe
  "node/handle-callback-err": "off", // eslint dupe
  "node/no-callback-literal": "off",
  "node/no-deprecated-api": "error",
  "node/no-exports-assign": "error",
  "node/no-extraneous-import": "off", // import alt (import/no-extraneous-dependencies)
  "node/no-extraneous-require": "off", // import alt (import/no-extraneous-dependencies)
  "node/no-missing-import": "off", // import alt (import/no-unresolved)
  "node/no-missing-require": "off", // import alt (import/no-unresolved)
  "node/no-mixed-requires": "off", // eslint dupe
  "node/no-new-require": "off", // eslint dupe
  "node/no-path-concat": "error", // eslint alt
  /* */"no-path-concat": "off",
  "node/no-process-env": "off", // eslint dupe
  "node/no-process-exit": "off", // eslint dupe
  "node/no-restricted-import": "off", // eslint alt
  "node/no-restricted-require": "off", // eslint alt
  "node/no-sync": "off", // eslint dupe
  "node/no-unpublished-bin": "off",
  "node/no-unpublished-import": "off",
  "node/no-unpublished-require": "off",
  "node/no-unsupported-features/es-builtins": "off",
  "node/no-unsupported-features/es-syntax": "off",
  "node/no-unsupported-features/node-builtins": "off",
  "node/prefer-global/buffer": "off",
  "node/prefer-global/console": "off",
  "node/prefer-global/process": "off",
  "node/prefer-global/text-decoder": "off",
  "node/prefer-global/text-encoder": "off",
  "node/prefer-global/url-search-params": "off",
  "node/prefer-global/url": "off",
  "node/prefer-promises/dns": "error",
  "node/prefer-promises/fs": "error",
  "node/process-exit-as-throw": "off",
  "node/shebang": "off",
};

module.exports = {
  plugins: ["eslint-plugin-node"],
  env: { "node": true },
  rules,
};
