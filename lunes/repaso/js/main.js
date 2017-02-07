/*alert("Tambien funciona aquí");
document.write("podemos mostrar algo");
console.log("Aqui abajo tambien se ve");
document.getElementById("texto").innerHTML="Este es el segundo texto";
*/

/*VARIABLES
var x,y,z;
x= 5;
y= 6.3;
z= x + y;
document.write(z);
*/


/*FUNCIONES
function tuNombreCompleto(nombre,apellido){
  var nombreCompleto = nombre + " " + apellido;
  //document.write(nombreCompleto);
return nombreCompleto;
}

var alumno= tuNombreCompleto("Jessica","Alatorre");

alert(alumno);
*/

/*crear objetos
var miPrimerObjeto ={nombre:"Isela", apellido:"García"};
//accediendo a un atributo
alert(miPrimerObjeto.nombre);
*/

/*
var persona = "Jorge";
var otraPersona = persona;

persona= "Amanda";

document.write(persona);
document.write(otraPersona);
*/

//-------------------
/*
var persona ={nombre:"Jorge"}; //objeto persona, nombre atributo


var otraPersona2 = persona;


persona.nombre="Amanda";
document.write(persona.nombre);
document.write(otraPersona2.nombre);
*/
/*
var fruta={
  nombre:"mango",
  color:"amarillo",
  dulce: 8,

  queDulceSoy:function(){
    alert("Soy muuuy dulce");
  }
}
//forma en la que accedemos a los métodos
  fruta.queDulceSoy();//imprime metodo
  alert(fruta.dulce);//imprime atributo
*/

/*alert("Retardo");
document.getElementById("primero").innerHTML +="Jessica Alatrre Flores"
//innerHTML es un atributo que guarda todo lo contenido en la etiqueta que hace que podamos sobrescribir*/

/*document.getElementById("botonClick").onclick=function(){
  document.getElementById("aparecetexto").innerHTML="este es un texto fantasma";
  document.getElementById("aparecetexto").style.cssText="color:blue; background-color: red;"
}*/

/*var nombre ="primero";
document.getElementById("priboton").onclick=function(){
  document.getElementById(nombre).innerHTML="Sí resultó";
}*/

document.getElementById("priboton").onclick=function(){
  var valor= document.getElementById("miinput").value;
  document.getElementById("vacio").innerHTML=valor;
}
