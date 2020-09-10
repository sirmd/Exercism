<?php

function toRna($dna) {
    $translate_to_dna = [
        "G" => "C", 
        "C" => "G", 
        "T" => "A", 
        "A" => "U"
    ];

    $dna_array = str_split($dna);
    $translation = [];
    foreach ($dna_array as $char) {
        $translation[] = $translate_to_dna[$char];
    }

    return join("", $translation);
}