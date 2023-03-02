// This is a JavaScript file

function teste(){
  alert("Olá Mundo");
}


function calcularconsumo(){

var km, gas, consumo

 km = document.getElementById('km').value
 gas = document.getElementById('consumo').value

 consumo = km / gas
 
let frase = `O Consumo de Gasolina é de: ${consumo}KM/L`;
 //alert(consumo);
document.querySelector('h2').innerHTML= frase;
}



