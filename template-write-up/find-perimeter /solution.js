'use strict';

/**
 * Calculate the perimeter of a rectangle.
 *
 * @param {number} length - The length of one side of the rectangle.
 * @param {number} width - The length of the other side of the rectangle.
 * @returns {number} Perimeter of the rectangle.
 */

function findPerimeter(length, width) {
	const perimeter = 2 * (length + width);
	return perimeter;
}
