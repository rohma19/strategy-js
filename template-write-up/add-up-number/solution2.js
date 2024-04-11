'use strict';

/**
 * Calculate the sum of all numbers from 1 to a given number.
 *
 * @param {number} num -  specifies that the function expects a number as its argument.
 * @returns {number} indicates that the function will return a number.
 */

function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
