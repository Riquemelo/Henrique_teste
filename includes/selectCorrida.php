<?php
    include 'config.php';
    
    $table = 'corrida';

    $primaryKey = 'cd_id_corrida';

    $columns = array(
        array( 'db' => 'nm_nome_motorista', 'dt' => 'nm_nome_motorista' ),
        array( 'db' => 'nm_nome_passageiro', 'dt' => 'nm_nome_passageiro' ),
        array( 'db' => 'vl_valor_corrida',   'dt' => 'vl_valor_corrida' )
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
?>