var input=  document.getElementById(numero);
input.addEventListener('input',function(){
  if (this.value.length > (8 || 9)) 
     alert("Ingrese correctamente el dni"); 
  })