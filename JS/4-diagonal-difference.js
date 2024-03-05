/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

Function description

Complete the  function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers
Return

int: the absolute diagonal difference
Input Format

The first line contains a single integer, , the number of rows and columns in the square matrix .
Each of the next  lines describes a row, , and consists of  space-separated integers .

Constraints

Output Format

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

Sample Input

3
11 2 4
4 5 6
10 8 -12
Sample Output

15
Explanation

The primary diagonal is:

11
   5
     -12
Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:

     4
   5
10
Sum across the secondary diagonal: 4 + 5 + 10 = 19
Difference: |4 - 19| = 15

Note: |x| is the absolute value of 
*/


function diagonalDifference(arr) {
  let primarySum = 0;
  let secondarySum = 0;

  for (let i = 0; i < arr.length; i++) {
    primarySum += arr[i][i];
    secondarySum += arr[i][arr.length - 1 - i];
    console.log(arr[i][i])
  }

  return Math.abs(primarySum - secondarySum);
}


console.log(diagonalDifference([[11,2,4], [4,5,6],[10,8,-12]]))


/*
function diagonalDifference(arr) {
  const length = arr.length;

  // Calcular a soma dos elementos na diagonal principal
  const primarySum = arr.reduce((sum, row, index) => sum + row[index], 0);

  // Calcular a soma dos elementos na diagonal secundária
  const secondarySum = arr.reduce((sum, row, index) => sum + row[length - 1 - index], 0);

  // Retornar a diferença absoluta entre as somas das diagonais
  return Math.abs(primarySum - secondarySum);
}
*/

/*
const math = require('mathjs');

function diagonalDifference(arr) {
  const primarySum = math.sum(arr.map((row, i) => row[i]));
  const secondarySum = math.sum(arr.map((row, i) => row[arr.length - 1 - i]));

  return Math.abs(primarySum - secondarySum);
}
*/