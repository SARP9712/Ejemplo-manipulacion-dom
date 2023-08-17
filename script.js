const h1 = document.querySelector('h1');
const form = document.querySelector('#form'); 
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const input3 = document.querySelector('#calculo3');
const input4 = document.querySelector('#calculo4');
const input5= document.querySelector('#calculo5');
const input6 = document.querySelector('#calculo6');
const btn = document.querySelector('#btnCalcular');
const des= document.querySelector('#Descuadre');
const zZ = document.querySelector('#cierre');
const pResult = document.querySelector('#result');


btn.addEventListener('click', sumarInputValues)

function sumarInputValues(event) {
 
  event.preventDefault();


  const sumaInputs = parseFloat(input1.value)  + parseFloat(input3.value) + parseFloat(input4.value) + parseFloat(input5.value) - parseFloat(input2.value);
  const descuadre=  sumaInputs.toFixed(2) - parseFloat(input6.value) ;

  
  

  pResult.innerText = "Resultado: " + sumaInputs;
  des.innerText = "Descuadre: " + descuadre.toFixed(2)
  zZ.innerHTML = "Cierre Z : "  + input6.value;



}