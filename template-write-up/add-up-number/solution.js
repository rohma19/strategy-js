'use strict';

/**
 * Calculate the sum of all numbers from 1 to a given number.
 *
 * @param {number} num - The number up to which to calculate the sum.
 * @returns {number} The sum of all numbers from 1 to the given number.
 */
function addUp(num) {
  return num === 0 ? num : num + addUp(num - 1);
}
