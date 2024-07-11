using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        List<int> result = CompareTriplets(new List<int> { 5, 4, 2 }, new List<int> { 6, 5, 5 });
        Console.WriteLine(string.Join(", ", result));
    }

    static List<int> CompareTriplets(List<int> a, List<int> b)
    {
        int pointsA = 0;
        int pointsB = 0;

        for (int i = 0; i < 3; i++)
        {
            if (a[i] > b[i])
            {
                pointsA++;
            }
            else if (a[i] < b[i])
            {
                pointsB++;
            }
        }

        List<int> result = new List<int> { pointsA, pointsB };
        return result;
    }
}
