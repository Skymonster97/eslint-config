"use strict";

/* eslint-disable no-unused-vars, no-undef */

// eslint
console.log(1);

// array-func
[].concat(...[1, 2, 3])

// eslint-comments
/* eslint-disable-next-line */

// import
require("./file.js");

// jsdoc
/**
 * Mytestfunction
 * @example
 * test(1, 2, 3);
 *
 * @param {Number} a - test
 * @param {number} b test
 * @param {number} e - test
 * @param {number} c  - test
 * @returns {strung} - result
 */
function test(a, b, c) {
  return a + b - c;
}

// node
require("./nothing.js");

// promise
Promise.all(1, 2, 3);

// sonarjs
if (!(a === 2)) { /*  */ }

// unicorn
throw new Error();

/* eslint-enable no-unused-vars, no-undef */
