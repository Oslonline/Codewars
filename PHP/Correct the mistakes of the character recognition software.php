<?php

function correct($string)
{
    $correct = str_replace(['5', '0', '1'], ['S', 'O', 'I'], $string);
    return $correct;
}