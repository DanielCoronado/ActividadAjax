$(document).on('show.bs.modal','#eliminar', function (e) {
		var $modal = $(this),
      rut = e.relatedTarget.id.replace("delete_","");
			
    $('#form-eliminar').html(
        '<div class="form-group">'+
            '<input required type="text" id="btn-eliminar" class="form-control" value="'+rut+'" name="rut" readonly>'+
        '</div>'+
        '<div class="form-group">'+
            '<input type="submit" class="btn btn-danger btn-lg" value="Eliminar Contacto">'+
        '</div>'
    );
  
}); 

$('#form-eliminar').submit(function(event){
    event.preventDefault();
    var rut = $('#btn-eliminar').val();
    $.post('../../instructivo_2_guiaAjax/server/delete.php',
      $('#form-eliminar').serialize(),
        function(dato){
          $("#eliminar").modal('hide');
      $('#fila_'+rut).html("");
    });
});