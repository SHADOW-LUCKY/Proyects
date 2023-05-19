<?php
    $nombres = [];
    $notas = [];
    $gens = [];
    $nombre1 = $_POST['nombre1'];    
    $nombre2 = $_POST['nombre2'];
    $nombre3 = $_POST['nombre3'];
    $nota1 = $_POST['nota1'];
    $nota2 = $_POST['nota2'];
    $nota3 = $_POST['nota3'];
    $gen1 = $_POST['gen1'];
    $gen2 = $_POST['gen2'];
    $gen3 = $_POST['gen3'];
    array_push($nombres, $nombre1, $nombre2, $nombre3);
    array_push($notas, $nota1 , $nota2, $nota3);
    array_push($gens, $gen1, $gen2, $gen3);
    $max = max($notas);
    $min = min($notas);
    $mayorNota = array_search($max,$nombres);
    $menorNota = array_search($min,$nombres);
    $nomMaN= array_values($nombres)[$mayorNota];
    $nomMeN= array_values($nombres)[$menorNota];
    $muj=0;
    $hom=0;
    for ($i=0; $i < count($gens) ; $i++) { 
        if ($gens[$i]=='mujer' ){
            $muj += 1;
        }else{
            $hom += 1;
        }
    }
    echo "mayor nota $max nombre: $nomMaN <br>";
    echo "menor nota $min nombre: $nomMeN <br>";
    echo "numero mujeres: $muj,numero hombres: $hom";
    
?>