using System;
using System.Collections.Generic;

class Program
{
    static List<int> GradingStudents(List<int> grades)
    {
        // Remove the first element
        grades.RemoveAt(0);

        // Loop through the remaining grades
        for (int i = 0; i < grades.Count; i++)
        {
            int grade = grades[i];
            if (grade >= 38)
            {
                int diferencaPorCinco = 5 - (grade % 5);
                if (diferencaPorCinco < 3)
                {
                    grades[i] = grade + diferencaPorCinco;
                }
            }
        }

        // Print the grades
        foreach (var grade in grades)
        {
            Console.WriteLine(grade);
        }

        return grades;
    }

    static void Main()
    {
        List<int> grades = new List<int> { 4, 73, 67, 38, 33 };
        GradingStudents(grades);
    }
}