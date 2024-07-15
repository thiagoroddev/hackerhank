<?php

function staircase($n) {
    // Loop por cada nível da escada
    for ($i = 1; $i <= $n; $i++) {
        // Crie uma string vazia para armazenar os caracteres da linha atual
        $line = "";

        // Adicione espaços à string até alcançar o número necessário
        for ($j = 0; $j < $n - $i; $j++) {
            $line .= " ";
        }

        // Adicione o número correto de "#" à string
        for ($k = 0; $k < $i; $k++) {
            $line .= "#";
        }

        // Imprima a linha atual
        echo $line . "\n";
    }
}

// Exemplo de uso
staircase(6);

?>
