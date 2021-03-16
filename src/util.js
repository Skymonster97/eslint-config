"use strict";

const moduleExists = id => {
  try {
    require(id);
    return true;
  } catch {
    return false;
  }
};

const generatePaths = (plugins, supplier, prefix) => {
  return plugins
    .filter(name => moduleExists(`${prefix ?? ""}${name}`))
    .map(supplier);
};

const resolveParser = (fallback, prefered = []) => {
  return prefered.find(moduleExists) ?? fallback;
};

module.exports = {
  moduleExists,
  generatePaths,
  resolveParser,
};
