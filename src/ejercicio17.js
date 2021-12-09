/*
  Formularios - textarea
  Limitamos el número de caracteres que se pueden escribir en un elemento de tipo textarea.
  Además, le indicamos en todo momento al usuario el número de caracteres que aún puede escribir.
  También le  permitimos pulsar las teclas Backspace, Supr y las flechas horizontales cuando se haya llegado al máximo número de caracteres.
*/
function limita(elEvento, maximoCaracteres) {
  var elemento = document.getElementById("texto");

  // Obtener la tecla pulsada
  var evento = elEvento || window.event;
  var codigoCaracter = evento.charCode || evento.keyCode;
  // Permitir utilizar las teclas con flecha horizontal
  if(codigoCaracter == 37 || codigoCaracter == 39) {
    return true;
  }

  // Permitir borrar con la tecla Backspace y con la tecla Supr.
  if(codigoCaracter == 8 || codigoCaracter == 46) {
    return true;
  }
  else if(elemento.value.length >= maximoCaracteres ) {
    return false;
  }
  else {
    return true;
  }
}

function actualizaInfo(maximoCaracteres) {
  var elemento = document.getElementById("texto");
  var info = document.getElementById("info");

  if(elemento.value.length >= maximoCaracteres ) {
    info.innerHTML = "Máximo " + maximoCaracteres + " caracteres";
  }
  else {
    info.innerHTML = "Puedes escribir hasta " + (maximoCaracteres-elemento.value.length) + " caracteres adicionales";
  }
}
