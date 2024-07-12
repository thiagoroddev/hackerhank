/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example
The minimum sum is and the maximum sum is

. The function prints

16 24

Function Description

Complete the miniMaxSum function in the editor below.

miniMaxSum has the following parameter(s):

    arr: an array of 

    integers

Print

Print two space-separated integers on one line: the minimum sum and the maximum sum of
of

elements.

Input Format

A single line of five space-separated integers.

Constraints

Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input

1 2 3 4 5

Sample Output

10 14

Explanation

The numbers are
, , , , and

. Calculate the following sums using four of the five integers:

    Sum everything except 

, the sum is
.
Sum everything except
, the sum is
.
Sum everything except
, the sum is
.
Sum everything except
, the sum is
.
Sum everything except
, the sum is .

*/

function miniMaxSum(arr) {
  // Step 1: Calculate the sum of all elements
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  // Step 2: Find the minimum and maximum elements
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  // Step 3: Calculate minimum and maximum sums by excluding min and max respectively
  let minSum = sum - max;
  let maxSum = sum - min;

  // Step 4: Print the minimum and maximum sums
  console.log(minSum + " " + maxSum);
}

// Example usage:
miniMaxSum([1, 2, 3, 4, 5]); // Output: 10 14

// function miniMaxSum(arr) {
//   // Calculate the sum of all elements
//   const sum = arr.reduce((a, b) => a + b, 0);

//   // Find the minimum and maximum elements efficiently
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);

//   // Calculate minimum and maximum sums by excluding min and max respectively
//   const minSum = sum - max;
//   const maxSum = sum - min;

//   // Print the minimum and maximum sums
//   console.log(`${minSum} ${maxSum}`);
// }

// console.log(miniMaxSum([1, 2, 3, 4, 5]));
