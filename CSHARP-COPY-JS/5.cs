using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        int sum = SimpleArraySum(new List<int> { 1, 2, 3, 4 });
        Console.WriteLine(sum);
    }

    static int SimpleArraySum(List<int> ar)
    {
        int sum = 0;

        foreach (int num in ar)
        {
            sum += num;
        }

        return sum;
    }
}
