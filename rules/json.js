"use strict";

const rules = {
  "json/json": "error",
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
