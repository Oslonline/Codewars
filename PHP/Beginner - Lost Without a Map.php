<?php

function maps($x)
{
    return array_map(fn ($value) => $value * 2, $x);
}
