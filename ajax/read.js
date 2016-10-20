$(document).ready(function () {
  $.get('../server/read.php', function (data) {
      console.log(data);
    });
});