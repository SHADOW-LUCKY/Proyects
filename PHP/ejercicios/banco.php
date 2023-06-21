<?php
abstract class Banco{
    public $name = 'bancolombia';
    public function getNombre()
    {
        return $this->name;
    }
}
class Sucursal extends Banco{

}
$sucursal = new Sucursal();
echo $sucursal->getNombre();
?>