<?php
$cantidad = $_POST['cantidad'];
$form ='<form action="punto7.php" method="post">
<label>nombre</label>
<input type="text" name="nombre">
<label>precio</label>
<input type="number" name="precio">
<label>cantidad</label>
<input type="number" name="quantity">
<input type="submit" value="send">
</form>';
$quantity = $_POST['quantity'];
$nombre = $_POST['nombre'];
$precio = $_POST['precio'];
$facturaPrecio = 0;
$nombres =[]; 
$precios =[]; 
$cantidades =[]; 
for ($i=0; $i < $cantidad; $i++) { 
    echo $form;
    $facturaPrecio += $precio * $quantity;
    array_push($nombres,$nombre);
    array_push($cantidades,$cantidad);
    array_push($precios,$precio);
}
for ($i=0; $i < count($nombres); $i++) { 
    echo "nombre: " . $nombres[$i]." "."cantidad: " . $cantidades[$i]." "."precio: " . $precios[$i]."<br>";
}
echo "$facturaPrecio";
?>