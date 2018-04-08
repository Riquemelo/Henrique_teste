<?php
    include 'config.php';
    
    $table = 'motorista';

    $primaryKey = 'cd_cpf_motorista';

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




    // $sql = ("SELECT * FROM motorista");
    // $result = $con->query($sql);
    

    // $lin = $result->fetch_assoc();
    // echo json_encode($lin);


    // $nomeMotorista = $lin["nm_nome_motorista"];
    // $dataNascimento = $lin["cd_data_nascimento_motorista"];
    // $cpf = $lin["cd_cpf_motorista"];
    // $modeloCarro = $lin["nm_modelo_carro_motorista"];
    // $sexo = $lin["ic_sexo_masculino_feminino_motorista"];
    // $status = $lin["ic_status_ativo_inativo_motorista"];

    // while($row = $result->fetch_assoc()) {
    //     echo $row["cd_cpf_motorista"];
    //     echo  "id: " . $row["cd_cpf_motorista"]. " - Name: " . $row["nm_nome_motorista"]. " Data Nasc: " . $row["cd_data_nascimento_motorista"]. "<br>";
    // }
?>