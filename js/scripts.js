$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $(".clickable2").click(function () {
    $("#walrus-location-hidden").toggle();
    $("#walrus-location-showing").toggle();
  });
});