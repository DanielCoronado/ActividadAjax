$(document).ready(function () {
  $.get('../../instructivo_2_guiaAjax/server/read.php', function (data) { //linea cambiada '../server/read.php'
      if (data.completado) {
        for (var i = 0; i < data.datos.length; i++) {
        	$('#tabla-registro').append(
        		'<tr id="fila_'+data.datos[i]['rut']+'">'+
        			'<td>'+data.datos[i]['rut']+'</td>'+
        			'<td>'+data.datos[i]['nombre']+'</td>'+
        			'<td>'+data.datos[i]['email']+'</td>'+
        			'<td>'+data.datos[i]['telefono']+'</td>'+
        			'<td>'+data.datos[i]['cargo']+'</td>'+
        			'<td> <button id=\'edit_'+data.datos[i]['rut']+'\' type="button" class="btn btn-info" data-toggle="modal" href="#editar" data-target="#editar">Editar</button> - <a  id=\'delete_'+data.datos[i]['rut']+'\' class="btn btn-danger"  data-toggle="modal" href="#eliminar" data-target="#eliminar">Eliminar</a></td>'+
        		'</tr>'
        	);
          console.log (data.datos[i]);
        }
      }
    });
});