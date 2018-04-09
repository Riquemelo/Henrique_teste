<?php 
    include "config.php";
    $sql = "SELECT nm_nome_motorista FROM motorista WHERE ic_status_ativo_inativo_motorista = 1";
    $result = $con->query($sql);

    while($row = $result->fetch_assoc()){
        $table_data[]= array($row['nm_nome_motorista']);
    }

    echo json_encode($table_data);
    
?>