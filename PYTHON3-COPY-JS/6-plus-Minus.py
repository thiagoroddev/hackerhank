"""
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000
Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers
Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

Input Format

The first line contains an integer, , the size of the array.
The second line contains  space-separated integers that describe .

Constraints



Output Format

Print the following  lines, each to  decimals:

proportion of positive values
proportion of negative values
proportion of zeros
Sample Input

STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
Sample Output

0.500000
0.333333
0.166667
Explanation

There are  positive numbers,  negative numbers, and  zero in the array.
The proportions of occurrence are positive: , negative:  and zeros: .

"""

# Como eu fiz

def plusMinus(arr):
    positive = 0
    negative = 0
    zero = 0
    total = len(arr)

    for element in arr:
        if element > 0:
            positive += 1
        elif element < 0:
            negative += 1
        else:
            zero += 1

    positive_ratio = positive / total
    negative_ratio = negative / total
    zero_ratio = zero / total

    print("{:.6f}\n{:.6f}\n{:.6f}".format(positive_ratio, negative_ratio, zero_ratio))

plusMinus([-4, 3, -9, 0, 4, 1])



# Como o chatGPT fez:

"""
def plus_minus(arr):
    positive_count = 0
    negative_count = 0
    zero_count = 0
    n = len(arr)

    # Count positive, negative, and zero elements
    for i in range(n):
        if arr[i] > 0:
            positive_count += 1
        elif arr[i] < 0:
            negative_count += 1
        else:
            zero_count += 1

    # Calculate proportions and print with 6 decimal places
    positive_ratio = positive_count / n
    negative_ratio = negative_count / n
    zero_ratio = zero_count / n

    print("{:.6f}".format(positive_ratio))
    print("{:.6f}".format(negative_ratio))
    print("{:.6f}".format(zero_ratio))

# Example usage:
arr = [-4, 3, -9, 0, 4, 1]
plus_minus(arr)
""" 