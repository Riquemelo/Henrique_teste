<?php
    include 'config.php';
    
    $table = 'motorista';

    $primaryKey = 'cd_id_motorista';

    $columns = array(
        array( 'db' => 'cd_id_motorista', 'dt' => 'cd_id_motorista' ),
        array( 'db' => 'nm_nome_motorista', 'dt' => 'nm_nome_motorista' ),
        array( 'db' => 'cd_data_nascimento_motorista',  'dt' => 'cd_data_nascimento_motorista' ),
        array( 'db' => 'cd_cpf_motorista',   'dt' => 'cd_cpf_motorista' ),
        array( 'db' => 'nm_modelo_carro_motorista',   'dt' => 'nm_modelo_carro_motorista' ),
        array( 'db' => 'ic_sexo_masculino_feminino_motorista',   'dt' => 'ic_sexo_masculino_feminino_motorista' ),
        array( 'db' => 'ic_status_ativo_inativo_motorista',     'dt' => 'ic_status_ativo_inativo_motorista' ));
    
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

?>