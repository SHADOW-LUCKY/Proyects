<?php
class Jugador {
    private static $goles = 5;
    public static function info(){
        return self::$goles;
    }
}
echo Jugador::info();
?>