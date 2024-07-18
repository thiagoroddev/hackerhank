<?php

function gradingStudents($grades)
{
    // Remove the first element
    array_shift($grades);

    // Loop through the remaining grades
    for ($i = 0; $i < count($grades); $i++) {
        $grade = $grades[$i];
        if ($grade >= 38) {
            $diferencaPorCinco = 5 - ($grade % 5);
            if ($diferencaPorCinco < 3) {
                $grades[$i] = $grade + $diferencaPorCinco;
            }
        }
    }

    print_r($grades);
    return $grades;
}

// Example usage
gradingStudents([4, 73, 67, 38, 33]);
