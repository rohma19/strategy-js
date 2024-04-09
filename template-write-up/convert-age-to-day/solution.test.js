// Import the function to be tested
const { calcAgeInDays } = require('./solution.js'); // Assuming the solution file is named 'solution.js'

describe('calcAgeInDays function', () => {
    it('should return the age in days when provided with an age in years', () => {
        expect(calcAgeInDays(1)).toEqual(365); // 1 year should equal 365 days
        expect(calcAgeInDays(2)).toEqual(730); // 2 years should equal 730 days
        expect(calcAgeInDays(10)).toEqual(3650); // 10 years should equal 3650 days
    });

    it('should handle edge cases', () => {
        expect(calcAgeInDays(0)).toEqual(0); // 0 years should equal 0 days
        expect(calcAgeInDays(-1)).toEqual(-365); // Negative age should be handled properly
        expect(calcAgeInDays(0.5)).toEqual(182.5); // Decimal ages should be handled properly (considered as half years)
    });
});
