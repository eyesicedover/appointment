$(document).ready(function(){
  $("form#appointmentForm").submit(function(event) {
    event.preventDefault();
    window.location.href="success.html";

  });

});
