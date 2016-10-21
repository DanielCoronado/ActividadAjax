$(document).ready(function () {
  $.get('../server/read.php', function (data) {
      if (data.exito) {
        for (var i = 0; i < data.datos.length; i++) {
          console.log (data.datos[i]);
        }
      }
    });
});