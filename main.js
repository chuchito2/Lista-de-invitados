var nombres_invitados = [];

function buscar()
{
   var s= document.getElementById("buscar_nombre").value;
   var found = 0;
   var j;
   for(j=0; j<nombres_invitados.length; j++)
   {
      if(s==nombres_invitados[j]){
         found=found+1;
      }
   }
   document.getElementById("p2").innerHTML="name found "+found+" time/s";
   console.log("found name "+found+" time/s");
}
nombre_alumno_array=[];

function enviar()
{
var invitado = document.getElementById("nombre").value;
nombres_invitados.push(invitado);
var longitud = nombres_invitados.length;
document.getElementById("mostrar_nombres").innerHTML = nombres_invitados.toString();
}

function mostrar()
{
    var invitado = nombres_invitados.join("<br>");
    document.getElementById("p1").innerHTML = invitado.toString();
    document.getElementById("ordenar").style.display = "block";
}

function ordenar()
{
nombres_invitados.sort();
var invitado = nombres_invitados.join("<br>");
document.getElementById("div_ordenado").innerHTML=invitado.toString();
}
