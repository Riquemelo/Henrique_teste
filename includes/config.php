<?php
    $host = "localhost";
	$user = "root";
	$password = "";
	$db = "suacorrida";

	$con = new mysqli($host, $user, $password, $db);

	
	/*
	//UPDATES
	function UpdateCompany($old_cnpj, $name, $cnpj, $password, $phone, $email) {
		$con = getConnection();
		$query = "UPDATE company SET cd_cnpj = ?, nm_company = ?, cd_password = ?, cd_phone = ?, nm_email = ? WHERE cd_cnpj = ?";
		$stmt = mysqli_prepare($con, $query);
		mysqli_bind_param($stmt, "ssssss", $cnpj, $name, $password, $phone, $email, $old_cnpj);
		mysqli_execute($stmt);
	}*/
?>