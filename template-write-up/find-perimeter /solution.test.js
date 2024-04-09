// Import the function to be tested
const { findPerimeter } = require('./solution.js'); // Assuming the solution file is named 'solution.js'

describe('findPerimeter function', () => {
    it('should return the correct perimeter when provided with length and width', () => {
        // Test cases
        expect(findPerimeter(5, 3)).toEqual(16); // Perimeter of rectangle with length 5 and width 3 is 16
        expect(findPerimeter(10, 7)).toEqual(34); // Perimeter of rectangle with length 10 and width 7 is 34
        expect(findPerimeter(0, 0)).toEqual(0); // Perimeter of rectangle with zero length and width is 0
    });

    it('should handle edge cases', () => {
        // Test cases with negative values
        expect(findPerimeter(-5, 3)).toEqual(-4); // Negative values should be handled properly
        expect(findPerimeter(5, -3)).toEqual(-4); // Negative values should be handled properly
        // Test cases with decimal values
        expect(findPerimeter(3.5, 2.5)).toEqual(12); // Decimal values should be handled properly
    });
});
