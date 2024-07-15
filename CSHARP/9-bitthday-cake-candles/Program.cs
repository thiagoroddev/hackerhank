using System;
using System.Collections.Generic;
using System.Linq;

public class Program9

{
    public static int BirthdayCakeCandles(List<int> candles)
    {
        // Encontrar a altura máxima das velas
        int maiorNumero = candles.Max();

        // Contar quantas velas têm a altura máxima
        int quantidadeMaiorNumero = candles.Count(c => c == maiorNumero);

        return quantidadeMaiorNumero;
    }

    public static void Main()
    {
        List<int> candles = new List<int> { 4, 4, 1, 3 };
        Console.WriteLine(BirthdayCakeCandles(candles)); // Saída: 2
    }
}
