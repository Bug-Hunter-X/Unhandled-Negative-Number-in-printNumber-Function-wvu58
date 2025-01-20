# TypeScript Bug: Handling Negative Numbers in printNumber Function

This repository demonstrates a common TypeScript bug involving the improper handling of negative numbers. The `printNumber` function is designed to print a number to the console, but it throws an error if a negative number is provided.  The goal is to improve the function's error handling and provide a more graceful solution. 

## Bug Description:

The `printNumber` function throws an `Error` if a negative number is passed as an argument. While the error message is informative, a better approach would be to handle the negative number without throwing an error.  For instance, it could either clamp the number to 0, or return a default value such as 0.  This would make the function more robust and less prone to unexpected exceptions.

## Solution:

The solution provided modifies the `printNumber` function to handle negative numbers gracefully, preventing the error.  Alternative approaches could involve using `Math.max` to ensure the number is never negative or returning a default value.