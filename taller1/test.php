<?php
$arr = [7,3,6,9,2];
$nam = ["M","M","M","N","M"];
$max = max($arr);
$key  = array_keys($arr,$max);
$keyN =$key[0];
echo $nam[$keyN]
?>