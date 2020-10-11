"use strict";

const pluginsNames = require("./plugins.js");

const generatePaths = path => {
  return pluginsNames
    .filter(name => {
      try {
        require(`eslint-plugin-${name}`);
        return true;
      } catch {
        return false;
      }
    })
    .map(path);
};

const resolveParser = () => {
  let parser;

  try {
    require("babel-eslint");
    parser = "babel-eslint";
  } catch {
    parser = "esprima";
  }

  return parser;
};

module.exports = {
  generatePaths,
  resolveParser,
};
