<?php
 $nombre= $_POST['nombre'];
 $precio = $_POST['precio'];
 $cantidad = $_POST['cantidad'];
 $total= $precio * $cantidad;
 echo "el total de pago por $nombre es: $total";
?>