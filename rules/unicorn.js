"use strict";

const rules = {
  "unicorn/better-regex": "error",
  "unicorn/catch-error-name": ["error", {
    "ignore": [
      "^(error)$",
      "^(err)$",
      "^(e)$",
    ],
  }],
  "unicorn/consistent-function-scoping": "off",
  "unicorn/custom-error-definition": "error",
  "unicorn/error-message": "error",
  "unicorn/escape-case": "error",
  "unicorn/expiring-todo-comments": "off", // later
  "unicorn/explicit-length-check": ["error", {
    "non-zero": "greater-than",
  }],
  "unicorn/filename-case": "off",
  "unicorn/import-index": ["error", {
    "ignoreImports": true,
  }],
  "unicorn/import-style": "off",
  "unicorn/new-for-builtins": "error",
  /*     */"no-new-wrappers": "off",
  "unicorn/no-abusive-eslint-disable": "off",
  "unicorn/no-array-instanceof": "error",
  "unicorn/no-console-spaces": "error",
  "unicorn/no-fn-reference-in-iterator": "off",
  "unicorn/no-for-loop": "error",
  "unicorn/no-hex-escape": "error",
  "unicorn/no-keyword-prefix": "off",
  "unicorn/no-nested-ternary": "off", // eslint alt
  "unicorn/no-new-buffer": "off", // eslint alt
  "unicorn/no-null": "off",
  "unicorn/no-object-as-default-parameter": "error",
  "unicorn/no-process-exit": "off",
  "unicorn/no-reduce": "off",
  "unicorn/no-unreadable-array-destructuring": "error",
  "unicorn/no-unsafe-regex": "error",
  "unicorn/no-unused-properties": "off",
  "unicorn/no-useless-undefined": "off",
  "unicorn/no-zero-fractions": "error",
  "unicorn/number-literal-case": "error",
  "unicorn/prefer-add-event-listener": "off",
  "unicorn/prefer-array-find": "error",
  "unicorn/prefer-dataset": "off",
  "unicorn/prefer-event-key": "off",
  "unicorn/prefer-exponentiation-operator": "off", // Deprecated
  "unicorn/prefer-flat-map": "error", // array-func alt
  "unicorn/prefer-includes": "error",
  "unicorn/prefer-modern-dom-apis": "off",
  "unicorn/prefer-negative-index": "off",
  "unicorn/prefer-node-append": "off",
  "unicorn/prefer-node-remove": "off",
  "unicorn/prefer-number-properties": "error",
  "unicorn/prefer-optional-catch-binding": "error",
  "unicorn/prefer-query-selector": "off",
  "unicorn/prefer-reflect-apply": "error",
  "unicorn/prefer-replace-all": "error",
  "unicorn/prefer-set-has": "off",
  "unicorn/prefer-spread": "error",
  "unicorn/prefer-starts-ends-with": "error",
  "unicorn/prefer-string-slice": "error",
  "unicorn/prefer-text-content": "off",
  "unicorn/prefer-trim-start-end": "error",
  "unicorn/prefer-type-error": "off",
  "unicorn/prevent-abbreviations": "off",
  "unicorn/regex-shorthand": "off", // Replaced
  "unicorn/string-content": "off",
  "unicorn/throw-new-error": "error",
};

module.exports = {
  plugins: ["eslint-plugin-unicorn"],
  rules,
};
