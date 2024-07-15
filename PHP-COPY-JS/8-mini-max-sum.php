<?php

function miniMaxSum($arr) {
    // Passo 1: Calcular a soma de todos os elementos
    $sum = array_sum($arr);

    // Passo 2: Encontrar os elementos mínimo e máximo
    $min = $arr[0];
    $max = $arr[0];
    foreach ($arr as $value) {
        if ($value < $min) {
            $min = $value;
        }
        if ($value > $max) {
            $max = $value;
        }
    }

    // Passo 3: Calcular as somas mínima e máxima excluindo min e max, respectivamente
    $minSum = $sum - $max;
    $maxSum = $sum - $min;

    // Passo 4: Imprimir as somas mínima e máxima
    echo $minSum . " " . $maxSum . "\n";
}

// Exemplo de uso:
miniMaxSum([1, 2, 3, 4, 5]); // Saída esperada: 10 14

?>
