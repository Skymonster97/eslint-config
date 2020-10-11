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
  let parser = "esprima";

  if (moduleExists("babel-eslint")) {
    parser = "babel-eslint";
  }

  return parser;
};

module.exports = {
  generatePaths,
  resolveParser,
};
