<?php
    include 'config.php';
    
    $table = 'passageiro';

    $primaryKey = 'cd_id_passageiro';

    $columns = array(
        array( 'db' => 'cd_id_passageiro', 'dt' => 'cd_id_passageiro' ),
        array( 'db' => 'nm_nome_passageiro', 'dt' => 'nm_nome_passageiro' ),
        array( 'db' => 'cd_data_nascimento_passageiro',  'dt' => 'cd_data_nascimento_passageiro' ),
        array( 'db' => 'cd_cpf_passageiro',   'dt' => 'cd_cpf_passageiro' ),
        array( 'db' => 'ic_sexo_masculino_feminino_passageiro',   'dt' => 'ic_sexo_masculino_feminino_passageiro' ),
    );
    
    $sql_details = array(
        'user' => $user,
        'pass' => $password,
        'db'   => $db,
        'host' => $host
    );

    require( 'ssp.class.php' );

    echo json_encode(
        SSP::simple( $_POST, $sql_details, $table, $primaryKey, $columns )
    );

