"use strict";

const { join } = require("path");
const { generatePaths } = require("./src/util.js");
const pluginsNames = require("./src/plugins.js");

const optional = generatePaths(
  pluginsNames.ESM,
  name => join(__dirname, `rules/esm/${name}.js`),
  "eslint-plugin-",
);

module.exports = {
  "parserOptions": {
    "sourceType": "module",
  },
  "extends": [
    "./index.js",
    ...optional,
  ].map(require.resolve),
};
