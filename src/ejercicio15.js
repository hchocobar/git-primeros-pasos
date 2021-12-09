/*
Eventos:
  document.onmousemove
  document.onkeypress
  document.onclick
  1.- Al mover el ratón en cualquier punto de la ventana del navegador, se muestre la posición del puntero respecto del navegador y respecto de la página.
  2.- Al pulsar cualquier tecla, el mensaje mostrado debe cambiar para indicar el nuevo evento y su información asociada.
  3.- Añadir la siguiente característica al script: cuando se pulsa un botón del ratón, el color de fondo del cuadro de mensaje debe ser amarillo (#FFFFCC) y cuando se pulsa una tecla, el color de fondo debe ser azul (#CCE6FF). Al volver a mover el ratón, el color de fondo vuelve a ser blanco.
*/
function informacion(elEvento) {
  var evento = elEvento || window.event;
  switch(evento.type) {
    case 'mousemove':
      document.getElementById('info').style.backgroundColor = '#FFFFFF';
      var ie = navigator.userAgent.toLowerCase().indexOf('msie') != -1;
      var coordenadaXrelativa, coordenadaYrelativa, coordenadaXabsoluta, coordenadaYabsoluta;
      if(ie) {
        if(document.documentElement && document.documentElement.scrollTop){
          coordenadaXabsoluta = evento.clientX + document.documentElement.scrollLeft;
          coordenadaYabsoluta = evento.clientY + document.documentElement.scrollTop;
        }
        else {
          coordenadaXabsoluta = evento.clientX + document.body.scrollLeft;
          coordenadaYabsoluta = evento.clientY + document.body.scrollTop;
        }
      }
      else {
        coordenadaXabsoluta = evento.pageX;
        coordenadaYabsoluta = evento.pageY;
      }
      coordenadaXrelativa = evento.clientX;
      coordenadaYrelativa = evento.clientY;
      var infoNavegador = 'Navegador [' + coordenadaXrelativa + ', ' + coordenadaYrelativa + ']';
      var infoPagina = 'Pagina [' + coordenadaXabsoluta + ', ' + coordenadaYabsoluta + ']';
      // muestraInformacion(['Ratón', 'Navegador [' + coordenadaXrelativa + ', ' + coordenadaYrelativa + ']', 'Pagina [' + coordenadaXabsoluta + ', ' + coordenadaYabsoluta + ']']);
      muestraInformacion(['Ratón', infoNavegador, infoPagina]);
      break;
    case 'keypress':
      document.getElementById('info').style.backgroundColor = '#CCE6FF';
      var caracter = evento.charCode || evento.keyCode;
      var letra = String.fromCharCode(caracter);
      var codigo = letra.charCodeAt(0);
      var infoCaracter = 'Carácter [' + letra + ']';
      var infoPagina = 'Código [' + codigo + ']';
      muestraInformacion(['Teclado', infoCaracter, infoPagina]);
      break;
    case 'click':
      document.getElementById('info').style.backgroundColor = '#FFFFCC';
      break;
  }
}

function muestraInformacion(mensaje) {
  document.getElementById("info").innerHTML = '<h1>' + mensaje[0] + '</h1>';
  for(var i = 1; i < mensaje.length; i++) {
    document.getElementById("info").innerHTML += '<p>' + mensaje[i] + '</p>';
  }
}

document.onmousemove = informacion;
document.onkeypress = informacion;
document.onclick = informacion;
