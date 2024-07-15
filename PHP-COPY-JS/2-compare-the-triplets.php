<?php

function compareTriplets($a, $b) {
    $pointsA = 0;
    $pointsB = 0;
    
    for ($i = 0; $i < 3; $i++) {
        if ($a[$i] > $b[$i]) {
            $pointsA++;
        } else if ($a[$i] < $b[$i]) {
            $pointsB++;
        }
    }
    
    $result = [$pointsA, $pointsB];
    return $result;
}

// Exemplo de uso:
$a = [5, 4, 2];
$b = [6, 5, 5];

$result = compareTriplets($a, $b);
echo implode(" ", $result); // Saída esperada: "0 2" (Bob recebe 2 pontos)

?>
