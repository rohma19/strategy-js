# Strategy

The user implemented a recursive strategy to solve the problem. They're using a
base case where if `num` is 0, they return 0, otherwise, they return `num` plus
the result of calling `addUp` recursively with `num - 1`.
This strategy effectively adds up all numbers from 1 to `num`.

## Implementation

The solution uses recursion, a powerful technique in JavaScript, where a
function calls itself with a modified argument until it reaches a base case.
In this case, the base case is when `num` is 0. The function then adds up the
numbers in reverse order until it reaches 0, effectively summing up all the
numbers from 1 to `num`.

## Possible Refactors

- The function could be refactored to handle negative numbers gracefully if desired.
- The ternary operator `num === 0 ? num : num + addUp(num - 1)` could be
  rewritten using an `if` statement for clarity, although the ternary operator
  is concise and widely used in JavaScript.

## References

No external references were used for this simple recursive solution.
