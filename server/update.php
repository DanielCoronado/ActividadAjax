<?php
	require('connection.php');
	$db new ConnectionDB();

	$rut = $db -> escape_string($_POST['rut']);
	$nombre = $db -> escape_string($_POST['nombre']);
	$email = $db -> escape_string($_POST['email']);
	$telefono = $db -> escape_string($_POST['telefono']);
	$cargo = $db -> escape_string($_POST['cargo']);

	if($db->query("UPDATE contacto SET nombre='$nombre', email='$mail', telefono='$telefono', cod_cargo='$cargo' WHERE rut = '$rut';")){
	    header('Content-Type: application/json');
	    echo json_encode(array('completado'=>true, 'rut'=>$rut,'nombre'=>$nombre, 'email'=>$mail,'telefono'=>$telefono,'cargo'=>$cargo));
  	}else{
    	die("Ocurrio UN problema al ejecutar la consulta de ACTUALIZACIÓN en BBDD error [ ".$db->error." ]");
  	}
?>