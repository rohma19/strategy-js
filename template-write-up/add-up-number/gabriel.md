# Strategy

The strategy employed here is a straightforward iterative approach to calculate
the sum of all numbers from 1 to a given number (`num`). The user has utilized a
`for` loop to iterate through each number from 1 to `num`, adding each number
to the `sum` variable.

1. **Initialization**: Initialize the `sum` variable to 0, which will store the
   cumulative sum.
2. **Iteration**: Use a `for` loop starting from 1 up to `num`. At each
   iteration, increment the loop variable `i` and add it to the `sum`.
3. **Sum Calculation**: Update the `sum` variable by adding the current
   value of `i` in each iteration.
4. **Return**: Once the loop completes, return the final value of `sum`.

This strategy ensures that each number from 1 to `num` is added to the `sum`,
resulting in the total sum of all numbers up to `num`.

# Implementation

The user has implemented this strategy by using a `for` loop with an iteration
variable `i`. Inside the loop, they add the value of `i` to the `sum` variable.
The loop runs from 1 up to `num`, ensuring that all numbers from 1 to `num` are
included in the sum. Finally, they return the calculated sum.

This implementation efficiently calculates the sum without any unnecessary
complexity, providing a clear and concise solution to the problem.

# Possible Refactors

- Instead of using a `for` loop, the `reduce()` method could be utilized on an
  array of numbers from 1 to `num`.
- An alternative mathematical formula for calculating the sum of an arithmetic
  series could be employed, reducing the computational complexity.

# References

- [MDN Web Docs: Array.prototype.reduce()]
  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [Wikipedia: Arithmetic progression](https://en.wikipedia.org/wiki/Arithmetic_progression)
