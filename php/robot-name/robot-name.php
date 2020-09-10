<?php

$names_taken = [];

class Robot {

    private $name;

    function __construct() {
        $this->createAndSaveName();
    }

    function getName() {
        return $this->name;
    }

    function reset() {
        $this->createAndSaveName();
    }

    private function createAndSaveName() {
        $tempName = "";
        do {
            $tempName = $this->generateName();
        } while (nameAlreadyTaken($tempName));

        $this->name = $tempName;
        saveName($this->name);
    }


    private function generateName() {
        $alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $max = strlen($alphabet) - 1;
        $min = 0;
        $name = substr($alphabet, rand($min, $max), 1) . 
                substr($alphabet, rand($min, $max), 1) .
                rand(0, 9) .
                rand(0, 9) .
                rand(0, 9);

        return $name;
    }

}

function saveName($name) {
    $GLOBALS['names_taken'][] = $name;
 }
 
 function nameAlreadyTaken($name) {
     return isset($GLOBALS['names_taken']) ? in_array($name, $GLOBALS['names_taken']) : false;
 }
 