'use strict';

const { moduleExists } = require('./src/util.js');

const plugins = [
  ["@babel/plugin-proposal-class-properties"],
];

module.exports = {
  plugins: plugins.filter(([name]) => moduleExists(name)),
};
