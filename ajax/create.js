$('#form-ingreso').submit(function(event){
  event.preventDefault();

  $.post('../../instructivo_2_guiaAjax/server/create.php',
    $('#form-ingreso').serialize(),
      function(dato){
        $("#agregar").modal('hide');
        if(dato.completado){
          console.log(dato);
          var variable="";
          if(dato.cargo == 12) variable="Jefe Proyecto";
          if(dato.cargo == 23) variable="Analista";
          if(dato.cargo == 32) variable="Desarrollador";


          $('#tabla-registro').after(
                          '<tr id="fila_'+dato.rut+'">'+
                            '<td>'+dato.rut+'</td>'+
                            '<td>'+dato.nombre+'</td>'+
                            '<td>'+dato.email+'</td>'+
                            '<td>'+dato.telefono+'</td>'+
                            '<td>'+variable+'</td>'+
                            '<td> <button value=\''+dato.rut+'\' type="button" class="btn btn-info" data-toggle="modal" href="#editar" data-target="#editar">Editar</button> - <a  id=\'delete_'+dato.rut+'\' class="btn btn-danger"  data-toggle="modal" href="#eliminar" data-target="#eliminar">Eliminar</a></td>'+
                          '</tr>'
                         ); 
        }else{
          alert('Error al recibir la respuesta del Servidor');
        }
    });
});
