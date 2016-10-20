<?php
  require('connection.php');
  $db= new ConnectionDB();

  /* Enviamos la instrucción SQL que permite ingresar 
  los datos a la BD en la tabla contactos */
  $result= $db->query("select * from contacto c inner join cargo a on (c.cod_cargo=a.codigo);");
  // Recorremos la consulta y usamos echo para que el .get de JQuery extraiga valores
  for($i=0; $i<count($result);$i++) {
    $iter= $db->recorrer($result);
    header('Content-Type: application/json');   
    echo json_encode(array('exito'=>true, 'rut'=>$iter['rut'],'nombre'=>$iter['nombre'], 'email'=>$iter['email'],'telefono'=>$iter['telefono'],'cargo'=>$iter['descripcion']));  
  }    
  // }else{
  //   die("Ocurrio UN problema al ejecutar la consulta de insercion en BBDD error [ ".$db->error." ]");
  // }

?>