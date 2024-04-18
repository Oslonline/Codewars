<?php

function finalGrade($exam, $projects)
{
    if ($exam > 90 || $projects > 10) {
        return 100;
    } elseif ($exam > 75 && $projects >= 5) {
        return 90;
    } elseif ($exam > 50 && $projects >= 2) {
        return 75;
    } else {
        return 0;
    }
}