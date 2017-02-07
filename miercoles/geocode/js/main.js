$(document).ready(function(){

  var imagenes = ['img/im1.jpg','img/im2.jpg','img/im3.jpg','img/im4.jpg','img/im5.jpg'];

  $(".img-fondo").css('background-image','url('+imagenes[Math.floor(Math.random()*5)]+')');

  $("#mandar").click(function(){
    var direccion=  $("#dir").val();





  var link = 'https://maps.googleapis.com/maps/api/geocode/json?address='+direccion+'&key=AIzaSyC-vaZ5s4UxRMIMFAZOe0cPvmufSMR9ciA';

$.ajax({
    dataType: "json",
    url: link,
    success: recibirDatos
});

function recibirDatos(json){
  var informacion = json;
  var codigoPostal = informacion.results[0].address_components[6].long_name;

  $("#respuesta").append('<div class="card-panel col m6 offset-m3 grey lighten-2 center"><h6>Tu código postal es: '+codigoPostal+'</h6></div>')
}

});
});
