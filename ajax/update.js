$(document).on('show.bs.modal','#editar', function (e) {
		var $modal = $(this),
    rut = e.relatedTarget.id.replace("edit_","");
		var dataArray = [];

		$('#fila_'+rut+' td').each(function(){
			dataArray.push($(this).text());
		});

		var select;

		if (dataArray[4]=="Jefe de Proyecto") {
      select=0;
    } else if (dataArray[4]=="Analista") {
      select=1;
    } else {
      select=2;
    }

    $('#form-actualizar').html(
      '<div class="form-group"><input id="updatebutton" required type="text" class="form-control" placeholder="Ingrese el RUT" value="'+rut+'" name="rut" readonly></div>'+
      '<div class="form-group"><input required type="text" class="form-control" value="'+dataArray[1]+'" placeholder="Ingrese Nombre con Apellido" name="nombre"></div>'+
      '<div class="form-group"><input required type="email" class="form-control" value="'+dataArray[2]+'" placeholder="Ingrese Correo Electrónico" name="email"></div>'+
      '<div class="form-group"><input required type="text" class="form-control" value="'+dataArray[3]+'" placeholder="Ingrese Telefono Móvil" name="telefono"></div>'+
      '<div class="form-group">'+
        '<select id="selectlist" required name="cargo" class="form-control btn btn-default">'+
          '<option value="12">Jefe de Proyecto</option>'+
          '<option value="23">Analista</option>'+
          '<option value="32">Desarrollador</option>'+
        '</select>'+
      '</div>'+
      '<div class="form-group">'+
        '<input type="submit" class="btn btn-success btn-lg" value="Editar">'+
      '</div>');

    document.getElementById("selectlist").selectedIndex = select;
});
  
$('#form-actualizar').submit(function(event){
    event.preventDefault();
    $.post('../../instructivo_2_guiaAjax/server/update.php',
        $('#form-actualizar').serialize(),
            function(dato){
            $("#editar").modal('hide');
                if(dato.completado){
                    var variable="";
                    if(dato.cargo == 12) variable="Jefe Proyecto";
                    if(dato.cargo == 23) variable="Analista";
                    if(dato.cargo == 32) variable="Desarrollador";
		
                    $('#fila_'+dato.rut).html(
                         
                        '<td>'+dato.rut+'</td>'+
                        '<td>'+dato.nombre+'</td>'+
                        '<td>'+dato.email+'</td>'+
                        '<td>'+dato.telefono+'</td>'+
                        '<td>'+variable+'</td>'+
                        '<td>'+
                          '<button id=\'edit_'+dato.rut+'\' type="button" class="btn btn-info" data-toggle="modal" href="#editar" data-target="#editar">Editar</button> - '+
                          '<a id=\'delete_'+dato.rut+'\' class="btn btn-danger"  data-toggle="modal" href="#eliminar" data-target="#eliminar">Eliminar</a>'+
                        '</td>'
                    ); 
                } else {
                    alert('Error al recibir la respuesta del Servidor');
                }
            });
});