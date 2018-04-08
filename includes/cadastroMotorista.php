<?php
    
    include "config.php" ;

    $nomeMotorista = $_POST['Nome'];
    $dataNascimento = $_POST['Nascimento'];
    $cpf = $_POST['Cpf'];
    $modeloCarro = $_POST['ModeloCarro'];
    $sexo = (int)$_POST['Sexo'];
    $status = (int)$_POST['Status'];

    $sql = "INSERT INTO motorista (cd_cpf_motorista, nm_nome_motorista,cd_data_nascimento_motorista, 
    nm_modelo_carro_motorista, ic_sexo_masculino_feminino_motorista,ic_status_ativo_inativo_motorista) 
    VALUES('$cpf', '$nomeMotorista', '$dataNascimento', '$modeloCarro', $sexo, $status)";
    $con->query($sql);

?>