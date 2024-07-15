<?php

function simpleArraySum($ar) {
    $sum = array_reduce($ar, function($soma, $elementoAtual) {
        return $soma + $elementoAtual;
    }, 0);
    
    return $sum;
}

// Exemplo de uso:
$numbers = [1, 2, 3, 4];
echo simpleArraySum($numbers); // Saída esperada: 10

?>
