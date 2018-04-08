<?php

    include "config.php" ;

function insertMotorista(){
    $stmt = $con->prepare("INSERT INTO motorista VALUES(?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $cpf, $nomeMotorista, $dataNascimento, $modeloCarro, $sexo, $status);
    $stmt->execute();
}


?>