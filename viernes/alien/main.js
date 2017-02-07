$("#pregunta").click(function(){
    var tiro = Math.floor(Math.random()*5);
    if (tiro==0){
      $("#respuesta").html("si");
    }
    else if (tiro==1){
      $("#respuesta").html("no");
    }
    else if (tiro==2){
      $("#respuesta").html("probablemente");
    }
    else if (tiro==3){
      $("#respuesta").html("no se");
    }
    else {
      $("#respuesta").html("pregunta de nuevo");
    }
  })
