using System;
using System.Collections.Generic;

class Program4
{
    static void Main(string[] args)
    {
        int difference = DiagonalDifference(new List<List<int>> {
            new List<int> { 11, 2, 4 },
            new List<int> { 4, 5, 6 },
            new List<int> { 10, 8, -12 }
        });
        Console.WriteLine(difference);
    }

    static int DiagonalDifference(List<List<int>> arr)
    {
        int primarySum = 0;
        int secondarySum = 0;

        for (int i = 0; i < arr.Count; i++)
        {
            primarySum += arr[i][i];
            secondarySum += arr[i][arr.Count - 1 - i];
            Console.WriteLine(arr[i][i]);
        }

        return Math.Abs(primarySum - secondarySum);
    }
}
