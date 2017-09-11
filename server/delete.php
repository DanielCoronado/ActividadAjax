<?php
  require('connection.php');
  $db = new ConnectionDB();

  $rut = $_POST['rut'];
  /*$nombre = $db->escape_string($_POST['nombre']);
  $mail = $db->escape_string($_POST['email']);
  $telefono = $db->escape_string($_POST['telefono']);
  $cargo = $db->escape_string($_POST['cargo']);*/

  if ($db->query("DELETE FROM contacto WHERE rut LIKE '$rut';")){
    echo json_encode(array('completado'=>true));
  } else {
    die("Ocurrio UN problema al ejecutar la consulta de ELIMINACIÓN en BBDD error [ ".$db->error." ]");
  }

?>