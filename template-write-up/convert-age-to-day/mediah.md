# [Mediah](https://edabit.com/challenge/bL7hSc6Zh4zZJzGmw)

```js
function calcAgeInDays(age) {
    return age * 365;
};
```

## Strategy

The user's strategy involves calculating the age in days based on the given age
in years.
They utilize a simple arithmetic operation: multiplying the age by 365 to
convert years into days.
This strategy is straightforward and requires no complex algorithms or iterations.

## Implementation

The user implemented the solution using a single function named `calcAgeInDays`.
This function takes an `age` parameter, representing the age in years,
and returns the corresponding age in days by multiplying it with 365.
The implementation is concise and utilizes basic arithmetic operations.

## Possible Refactors

- **Leap Year Consideration**: Although the current implementation assumes 365
  days in a year, it doesn't consider leap years. A possible refactor could be
  to account for leap years, which have 366 days.
- **Parameter Validation**: Adding parameter validation to ensure the `age`
  parameter is a non-negative number could enhance the robustness of the function.
- **Decomposition**: Breaking down the function into smaller, more reusable
 parts could improve readability and maintainability, especially if additional
   calculations are needed in the future.

## References

No external references were provided for this solution.
