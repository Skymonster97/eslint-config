"use strict";

const overrides = [
  {
    "files": [
      "**.md",
      "**.markdown",
      "**.mmd",
      "**.mdwn",
      "**.mdown",
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
