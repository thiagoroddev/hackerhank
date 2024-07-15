<?php

function plusMinus($arr) {
    $positive = 0;
    $negative = 0;
    $zero = 0;
    $total = count($arr);

    foreach ($arr as $value) {
        if ($value > 0) {
            $positive++;
        } elseif ($value < 0) {
            $negative++;
        } else {
            $zero++;
        }
    }

    $positiveRatio = $positive / $total;
    $negativeRatio = $negative / $total;
    $zeroRatio = $zero / $total;

    // Formatação para seis casas decimais
    echo number_format($positiveRatio, 6) . "\n";
    echo number_format($negativeRatio, 6) . "\n";
    echo number_format($zeroRatio, 6) . "\n";
}

// Exemplo de uso:
plusMinus([-4, 3, -9, 0, 4, 1]);

?>
