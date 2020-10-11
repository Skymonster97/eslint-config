"use strict";

const { join } = require("path");
const { generatePaths } = require("./src/util.js");

const optional = generatePaths(name => join(__dirname, `rules/esm/${name}.js`));

module.exports = {
  "parserOptions": {
    "sourceType": "module",
  },
  "extends": [
    "./index.js",
    ...optional,
  ].map(require.resolve),
};
