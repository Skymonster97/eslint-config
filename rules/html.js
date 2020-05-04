"use strict";

const overrides = [
  {
    "files": ["*.html", "*.htm"],
    "rules": {
      "strict": "off",
      "eol-last": "off",
    },
  },
];

const settings = {
  "html/indent": "+2",
  "html/report-bad-indent": "error",
};

module.exports = {
  plugins: ["eslint-plugin-html"],
  overrides,
  settings,
};
