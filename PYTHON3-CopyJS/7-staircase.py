"""
Staircase detail

This is a staircase of size :

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Function Description

Complete the staircase function in the editor below.

staircase has the following parameter(s):

int n: an integer
Print

Print a staircase as described above.

Input Format

A single integer, , denoting the size of the staircase.

Constraints

 .

Output Format

Print a staircase of size  using # symbols and spaces.

Note: The last line must have  spaces in it.

Sample Input

6
Sample Output

     #
    ##
   ###
  ####
 #####
######
Explanation

The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n=6
"""

def staircase(n):
    # Loop for each level of the staircase
    for i in range(1, n + 1):
        # Create an empty string to store the characters of the current line
        line = ""

        # Add spaces to the string until reaching the required number
        for j in range(n - i):
            line += " "

        # Add the correct number of "#" to the string
        for k in range(i):
            line += "#"

        # Print the current line
        print(line)

# Example usage
staircase(6)
