
document.getElementById("inicia").onclick=function(){

function colorRandom(){
  var posibilidades="0123456789ABCDEF";
  var color="#";
  for (var i = 0; i < 6; i++) {
    color +=posibilidades[Math.floor(Math.random()*15)];
    }
    return color;
  }

function alturaRandom(){
  var resultado =Math.floor(Math.random()*400);
  return resultado;
}
function largoRandom(){
  var resultado =Math.floor(Math.random()*95);
  return resultado;
}

  var randomColor = colorRandom();
  var altura = alturaRandom();
  var largo = largoRandom();
document.getElementById("objetivo").style.cssText="background-color:"+randomColor+";top:"+altura+"px;left:"+largo+"%;";
}

document.getElementById("objetivo").onclick=function(){
  alert("hola");
}
