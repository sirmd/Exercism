<?php

class Robot {

    const DIRECTION_NORTH = 0;
    const DIRECTION_EAST = 1;
    const DIRECTION_SOUTH = 2;
    const DIRECTION_WEST = 3;
    const ACCEPTED_INSTRUCTIONS = ['A', 'L', 'R'];

    public $position;
    public $direction;

    function __construct($coords, $facing) {
        $this->position = $coords;
        $this->direction = $facing;
    }

    function turnLeft() {
        $new_direction = $this->direction - 1;
        $new_direction < 0 ? 
            $this->direction = $this::DIRECTION_WEST : 
            $this->direction = $new_direction;
        return $this;
    }

    function turnRight() {
        $new_direction = $this->direction + 1;
        $new_direction > 3 ? 
            $this->direction = $this::DIRECTION_NORTH : 
            $this->direction = $new_direction;
        return $this;
    }

    function advance() {
        switch ($this->direction) {
            case $this::DIRECTION_EAST:
                $this->position[0]++;
                break;
            case $this::DIRECTION_WEST:
                $this->position[0]--;
                break;
            case $this::DIRECTION_NORTH:
                $this->position[1]++;
                break;
            case $this::DIRECTION_SOUTH:
                $this->position[1]--;
                break;            
            default:
                break;
        }
        return $this;
    }

    function instructions($str_instructions) {

        
        $array_instructions = str_split($str_instructions);
        $check_valid_instructions = array_diff($array_instructions, $this::ACCEPTED_INSTRUCTIONS);

        if (sizeof($check_valid_instructions) > 0) {
            throw new InvalidArgumentException("Invalid instructions were informed");
        }

        foreach ($array_instructions as $instruction) {
            switch ($instruction) {
                case 'L':
                    $this->turnLeft();
                    break;
                case 'R':
                    $this->turnRight();
                    break;
                case 'A':
                    $this->advance();
                    break;                
                default:
                    break;
            }
        }
    }

}