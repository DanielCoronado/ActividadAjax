<?php
  require('connection.php');
  $db= new ConnectionDB();

  /* Enviamos la instrucción SQL que permite ingresar 
  los datos a la BD en la tabla contactos */
  $result= $db->query("select * from contacto c inner join cargo a on (c.cod_cargo=a.codigo);");
  $datos = array ();
  // Recorremos la consulta y usamos echo para que el .get de JQuery extraiga valores
  for($i=0; $i < $db->rows($result);$i++) {
    
    $iter= $db->recorrer($result);
    
    $datos[$i]['rut'] = $iter['rut'];
    $datos[$i]['nombre'] = $iter['nombre'];
    $datos[$i]['email'] = $iter['email'];
    $datos[$i]['telefono'] = $iter['telefono'];
    $datos[$i]['cargo'] = $iter['descripcion'];
    
  } 

  header('Content-Type: application/json');   
  echo json_encode (array ('exito' => true, 'datos' => $datos) );

?>