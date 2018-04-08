<?php
    
    include "config.php" ;

    $idMotorista = $_POST['idMotorista'];
    $statusMotorista = $_POST['statusMotorista'];

    if($statusMotorista === "0"){
        $sql = "UPDATE motorista SET ic_status_ativo_inativo_motorista=1 WHERE cd_id_motorista=$idMotorista";
    }else{
        $sql = "UPDATE motorista SET ic_status_ativo_inativo_motorista=0 WHERE cd_id_motorista=$idMotorista";
    }

    $con->query($sql);

?>