using System;

class Program7
{
    static void Main(string[] args)
    {
        Staircase(6);
    }

    static void Staircase(int n)
    {
        // Loop through each level of the staircase
        for (int i = 1; i <= n; i++)
        {
            // Create a string for the current line
            string line = "";

            // Add spaces to the string until the required number is reached
            for (int j = 0; j < n - i; j++)
            {
                line += " ";
            }

            // Add the correct number of "#" to the string
            for (int k = 0; k < i; k++)
            {
                line += "#";
            }

            // Print the current line
            Console.WriteLine(line);
        }
    }
}
