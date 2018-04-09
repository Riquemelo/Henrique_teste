<?php 
    include "config.php";
    $sql = "SELECT nm_nome_passageiro FROM passageiro";
    $result = $con->query($sql);

    while($row = $result->fetch_assoc()){
        $table_data[]= array($row['nm_nome_passageiro']);
    }

    echo json_encode($table_data);
    
?>