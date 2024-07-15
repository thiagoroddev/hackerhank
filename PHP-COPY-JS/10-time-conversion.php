<?php

function timeConversionDois($s) {
    // Extração manual do determinante AM/PM
    $determinante = substr($s, 8, 2);

    // Extração manual da hora
    $hourStr = substr($s, 0, 2);

    $hour = (int)$hourStr; // Conversão manual para número inteiro

    if ($determinante === "PM") {
        if ($hour !== 12) {
            $hour += 12; // Converte para formato de 24 horas, exceto 12 PM que já é 12
        }
    } elseif ($determinante === "AM" && $hour === 12) {
        $hour = 0; // Converte 12 AM (meia-noite) para 00
    }

    // Conversão manual da hora para string com zero padding se necessário
    $hourString = $hour < 10 ? "0" . $hour : "" . $hour;

    // Construção manual da string resultante
    $result = $hourString . substr($s, 2, 6);

    return $result;
}

// Exemplo de uso:
echo timeConversionDois("01:01:10PM") . "\n"; // Saída esperada: 13:01:10

?>
