<?php
function distance(string $strandA, string $strandB) : int
{
    $len_a = strlen($strandA);
    $len_b = strlen($strandB);

    if ($len_a !== $len_b) {
        throw new InvalidArgumentException('DNA strands must be of equal length.', 1);
    }

    $distance = 0;

    $array_a = str_split($strandA);
    $array_b = str_split($strandB);

    for ($i=0; $i < $len_a; $i++) { 
        if ($array_a[$i] !== $array_b[$i]) {
            $distance++;
        }
    }


    return $distance;
    
}

echo distance('A', 'A');
