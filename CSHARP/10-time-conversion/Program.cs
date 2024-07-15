using System;


// Sem métodos
class Programa10
{
    static string TimeConversion(string s)
    {
        // Obtém "AM" ou "PM"
        string determinante = s.Substring(s.Length - 2);

        // Extrai a hora como número inteiro
        int hour = int.Parse(s.Substring(0, 2));

        if (determinante == "PM" && hour != 12)
        {
            // Converte para formato de 24 horas, exceto 12 PM que já é 12
            hour += 12;
        }
        else if (determinante == "AM" && hour == 12)
        {
            // Caso especial para 12 AM (meia-noite)
            hour = 0;
        }

        // Atualiza a hora na string e remove "AM" ou "PM"
        string result = hour.ToString("D2") + s.Substring(2, 6);

        return result;
    }

    static void Main()
    {
        Console.WriteLine(TimeConversion("07:05:45PM")); // Output: "19:05:45"
        Console.WriteLine(TimeConversion("12:00:00AM")); // Output: "00:00:00"
    }
}

