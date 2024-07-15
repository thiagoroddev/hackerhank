<?php

function birthdayCakeCandles($candles) {
    // Encontrar a altura máxima das velas
    $maiorNumero = max($candles);

    // Contar quantas velas têm a altura máxima
    $quantidadeMaiorNumero = array_reduce($candles, function($count, $candle) use ($maiorNumero) {
        return $count + ($candle === $maiorNumero ? 1 : 0);
    }, 0);

    return $quantidadeMaiorNumero;
}

// Exemplo de uso:
echo birthdayCakeCandles([3, 3, 1, 2]) . "\n"; // Saída esperada: 2

?>
