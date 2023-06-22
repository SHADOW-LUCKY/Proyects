<?php

$url = $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
$name = $_SERVER['SCRIPT_NAME'];
$port = $_SERVER['SERVER_PORT'];
$protocol = $_SERVER['SERVER_PROTOCOL'];


echo $url;
echo "<br>";
echo "<br>";
echo $name;
echo "<br>";
echo "<br>";
echo $port;
echo "<br>";
echo "<br>";
echo $protocol;


?>