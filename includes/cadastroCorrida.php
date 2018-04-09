<?php
    
    include "config.php" ;

    $nomeMotorista = $_POST['NomeMotorista'];
    $nomePassageiro = $_POST['NomePassageiro'];
    $valorCorrida = (double)$_POST['Valor'];

    $sql = "INSERT INTO corrida (nm_nome_motorista, nm_nome_passageiro, vl_valor_corrida) 
    VALUES('$nomeMotorista', '$nomePassageiro' , $valorCorrida)";
    $con->query($sql);

?>