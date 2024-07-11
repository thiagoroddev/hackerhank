using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        long sum = AVeryBigSum(new List<long> { 10000000012323, 10000000022232, 1000000003, 1000000004, 1000000005 });
        Console.WriteLine(sum);
    }

    static long AVeryBigSum(List<long> ar)
    {
        long sum = 0;

        foreach (long num in ar)
        {
            sum += num;
        }

        return sum;
    }
}
