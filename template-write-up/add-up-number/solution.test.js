'use strict';

const { addUp } = require('./addUp');

describe('addUp function', () => {
  it('should return 0 when num is 0', () => {
    expect(addUp(0)).toBe(0);
  });

  it('should return the correct sum when num is greater than 0', () => {
    expect(addUp(1)).toBe(1);
    expect(addUp(2)).toBe(3); // 1 + 2 = 3
    expect(addUp(3)).toBe(6); // 1 + 2 + 3 = 6
    expect(addUp(4)).toBe(10); // 1 + 2 + 3 + 4 = 10
    // Add more test cases as needed
  });

  it('should return the correct sum when num is less than 0', () => {
    // Additional test cases for handling negative numbers, if desired
  });
});
