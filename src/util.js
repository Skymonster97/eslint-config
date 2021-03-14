"use strict";

const pluginsNames = require("./plugins.js");

const moduleExists = arg => {
  try {
    require(arg);
    return true;
  } catch {
    return false;
  }
};

const generatePaths = path => {
  return pluginsNames
    .filter(name => moduleExists(`eslint-plugin-${name}`))
    .map(path)
    .filter(moduleExists);
};

const resolveParser = () => {
  let parser = "@babel/eslint-parser";

  if (!moduleExists(parser)) {
    parser = "esprima";
  }

  return parser;
};

module.exports = {
  generatePaths,
  resolveParser,
};
