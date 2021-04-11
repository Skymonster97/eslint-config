"use strict";

const overrides = [
  {
    "processor": "markdown/markdown",
    "files": [
      "**/*.md",
      "**/*.markdown",
      "**/*.mmd",
      "**/*.mdwn",
      "**/*.mdown",
    ],
    "rules": {
      "indent": ["error", 2],
    },
  },
];

module.exports = {
  plugins: ["eslint-plugin-markdown"],
  overrides,
};
