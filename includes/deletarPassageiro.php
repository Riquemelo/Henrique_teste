<?php 

    include "config.php";

    $idPassageiro = (int)$_POST['idPassageiro'];

    $sql = "DELETE FROM passageiro WHERE cd_id_passageiro=$idPassageiro"; 
    $con->query($sql);

?>