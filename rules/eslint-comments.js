"use strict";

const rules = {
  "eslint-comments/disable-enable-pair": "warn",
  "eslint-comments/no-aggregating-enable": "warn",
  "eslint-comments/no-duplicate-disable": "warn",
  "eslint-comments/no-restricted-disable": "off",
  "eslint-comments/no-unlimited-disable": "off",
  "eslint-comments/no-unused-disable": "warn",
  "eslint-comments/no-unused-enable": "warn",
  "eslint-comments/no-use": "off",
};

module.exports = {
  plugins: ["eslint-plugin-eslint-comments"],
  rules,
};
