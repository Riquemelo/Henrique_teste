<?php 

    include "config.php";

    $idMotorista = (int)$_POST['idMotorista'];

    $sql = "DELETE FROM motorista WHERE cd_id_motorista=$idMotorista"; 
    $con->query($sql);

?>