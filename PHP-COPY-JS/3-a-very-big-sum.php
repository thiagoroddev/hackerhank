<?php

function aVeryBigSum($ar) {
    $soma = array_reduce($ar, function($acumulador, $valorAtual) {
        return $acumulador + $valorAtual;
    }, 0);
    
    return $soma;
}

// Exemplo de uso:
$numbers = [10000000012323, 10000000022232, 1000000003, 1000000004, 1000000005];
echo aVeryBigSum($numbers); // Saída esperada: 20000000036867

?>
