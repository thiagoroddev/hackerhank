using System;

class Program
{
    static void Main(string[] args)
    {
        PlusMinus(new int[] { -4, 3, -9, 0, 4, 1 });
    }

    static void PlusMinus(int[] arr)
    {
        int positive = 0;
        int negative = 0;
        int zero = 0;
        int total = arr.Length;

        foreach (int number in arr)
        {
            if (number > 0)
            {
                positive++;
            }
            else if (number < 0)
            {
                negative++;
            }
            else
            {
                zero++;
            }
        }

        double positiveRatio = (double)positive / total;
        double negativeRatio = (double)negative / total;
        double zeroRatio = (double)zero / total;

        Console.WriteLine(positiveRatio.ToString("F6"));
        Console.WriteLine(negativeRatio.ToString("F6"));
        Console.WriteLine(zeroRatio.ToString("F6"));
    }
}
