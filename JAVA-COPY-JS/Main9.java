import java.util.Collections;
import java.util.List;

public class Main9 {
    public static int birthdayCakeCandles(List<Integer> candles) {
        // Encontrar a altura máxima das velas
        int maiorNumero = Collections.max(candles);

        // Contar quantas velas têm a altura máxima
        int quantidadeMaiorNumero = 0;
        for (int candle : candles) {
            if (candle == maiorNumero) {
                quantidadeMaiorNumero++;
            }
        }

        return quantidadeMaiorNumero;

    }
}
