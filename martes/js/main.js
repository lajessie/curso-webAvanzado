/*if(jQuery){
  alert("Si tenemos jQuery");
}
*/
/* $ es de jquery*/

/*FUNCION DE $

$(".circulo").click(function(){
  alert("soy el circulo");
});

$("#cuadrado").click(function(){
  alert("soy un cuadrado");
});*/

/*$("div").click(function(){
  alert("soy un div");
})
$("p").click(function(){
  alert("soy el texto");
})*/

/*en js poniamos igual para sustituir texto porque innerHTML era un atributo y en jquery, .html es un método*/

/*$(".circulo").click(function(){

  $("p").html("texto remplazado");
})*/


/*attr es un atributo */


/*$(".circulo").click(function(){
$("iframe").attr("src","http://www.jornada.unam.mx/ultimas");
    $(".circulo").click(function(){
    $("iframe").attr("src","http://www.bbc.com/news");

    });
});*/


/*
$("button").click(function(){
  $(".circulo").addClass(".circulo2");
  });
.hide para ocultar
$("button").click(function(){
  $(".circulo").fadeOut();
  });*/

  $(".circulo").click(function(){

    $(this).animate({
      width:"300px",
      height:"300px"
    },4000)
  })






















  /**/
