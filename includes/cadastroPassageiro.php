<?php
    
    include "config.php" ;

    $nomePassageiro = $_POST['Nome'];
    $dataNascimento = $_POST['Nascimento'];
    $cpf = $_POST['Cpf'];
    $sexo = (int)$_POST['Sexo'];
    
    $sql = "INSERT INTO passageiro (cd_cpf_passageiro, nm_nome_passageiro,cd_data_nascimento_passageiro, 
     ic_sexo_masculino_feminino_passageiro) 
    VALUES('$cpf', '$nomePassageiro', '$dataNascimento', $sexo)";

    $con->query($sql);

?>