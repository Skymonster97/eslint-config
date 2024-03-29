"use strict";

const rules = {
  "json/*": "off",
  "json/json": "off",
  //
  "json/undefined": "error",
  "json/enum-value-mismatch": "error",
  "json/unexpected-end-of-comment": "error",
  "json/unexpected-end-of-string": "error",
  "json/unexpected-end-of-number": "error",
  "json/invalid-unicode": "error",
  "json/invalid-escape-character": "error",
  "json/invalid-character": "error",
  "json/property-expected": "error",
  "json/comma-expected": "error",
  "json/colon-expected": "error",
  "json/value-expected": "error",
  "json/comma-or-close-backet-expected": "error",
  "json/comma-or-close-brace-expected": "error",
  "json/trailing-comma": "error",
  "json/duplicate-key": "error",
  "json/comment-not-permitted": "error",
  "json/schema-resolve-error": "error",
  "json/unknown": "error",
};

const overrides = [
  {
    "files": [
      "**/.tslint.json",
      "**/.tsconfig.json",
      "**/.eslintrc.json",
      ".vscode/**",
    ],
    "rules": {
      "json/json": ["error", "allowComments"],
    },
  },
  {
    "files": [
      "**/*.json",
    ],
    "rules": {
      "array-bracket-newline": "off",
      "comma-dangle": ["error", "never"],
      "eol-last": ["warn", "never"],
      "indent": ["warn", 2],
      "max-len": "off",
      "quotes": ["error", "double"],
      "quote-props": ["error", "always"],
      "semi": ["error", "never"],
    },
  },
];

const ignorePatterns = [
  "**/package-lock.json",
];

module.exports = {
  plugins: ["eslint-plugin-json"],
  ignorePatterns,
  overrides,
  rules,
};
