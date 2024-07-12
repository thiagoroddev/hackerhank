"""
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

"""

def miniMaxSum(arr):
    # Step 1: Calculate the sum of all elements
    sum_total = sum(arr)
    
    # Step 2: Find the minimum and maximum elements
    min_value = arr[0]
    max_value = arr[0]
    for num in arr[1:]:
        if num < min_value:
            min_value = num
        if num > max_value:
            max_value = num
    
    # Step 3: Calculate minimum and maximum sums by excluding min and max respectively
    min_sum = sum_total - max_value
    max_sum = sum_total - min_value
    
    # Step 4: Print the minimum and maximum sums
    print(min_sum, max_sum)

# Example usage:
miniMaxSum([1, 2, 3, 4, 5])  # Output: 10 14
