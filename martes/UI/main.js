$("#fecha").datepicker();

/*funcion que siempre está activa*/
/*.draggable hace las cosas arrastables*/
$(function(){
  $("#arrastre").draggable();
  $("#canasta").droppable({
    drop: function(event,ui){
      $(this).addClass("ui-state-highlight").find("p").html("Anotaste una canasta");
    }
  });
});
