<?php

$data = json_decode(file_get_contents('php://input'), true);

$jsonFile = 'data.json';
$currentData = json_decode(file_get_contents($jsonFile), true);
$currentData[] = $data['text'];

file_put_contents($jsonFile, json_encode($currentData));

