"use strict";

const overrides = [
  {
    "files": ["**/*.md", "**/*.markdown"],
    "rules": {
      "indent": ["error", 2],
    },
  },
];

module.exports = {
  plugins: ["eslint-plugin-markdown"],
  overrides,
};
