<?php
    $password = "password123";
    $hash = password_hash($password, "argon2id" );/* encripta la contraseña */
    $input = "password123";
    if(password_verify($input, $hash)/* verifica la contraseña con el hash hecho*/){
        echo "true";
    }else{
        echo "false";
    }
?>
