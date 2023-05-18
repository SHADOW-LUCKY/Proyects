<?php
$edad1=$_POST['edad1'];
$edad2=$_POST['edad2'];
$edad3=$_POST['edad3'];
$max=max(array($edad1,$edad2,$edad3));
echo "la mayor edad es de $max"
?>