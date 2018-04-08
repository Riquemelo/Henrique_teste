<?php
    
    include "crud_Motorista"

    $nomeMotorista = $_POST['Nome'];
    $dataNascimento = $_POST['Nascimento'];
    $cpf = $_POST['Cpf'];
    $modeloCarro = $_POST['ModeloCarro'];
    $sexo = $_POST['Sexo'];
    $status = $_POST['Status'];

    insertMotorista($nomeMotorista, $data_Nascimento, $cpf, $modeloCarro, $sexo, $status);

?>