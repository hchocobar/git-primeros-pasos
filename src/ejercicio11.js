window.onload = function() {
  var info = document.getElementById("miparrafo");
  // vemos valores en console.log
  console.log({info});
  console.log('esto quiero saber: ' + info.innerHTML);

  // Numero de enlaces de la pagina
  var enlaces = document.getElementsByTagName("a");
  info.innerHTML = info.innerHTML + "<br/>Numero de enlaces = " + enlaces.length;
  // vemos valores en console.log
  console.log({enlaces});
  console.log(enlaces.length);

  // Direccion del penultimo enlace
  var mensaje = "El penultimo enlace apunta a: " + enlaces[enlaces.length-2].href;
  info.innerHTML = info.innerHTML + "<br/>" + mensaje;

  // // Numero de enlaces: Es necesario comprobar los enlaces
  // //    http://prueba   y    http://prueba/
  // // por las diferencias entre navegadores
  var contador = 0;
  for(var i = 0; i < enlaces.length; i++) {
    if(enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/") {
      contador++;
    }
  }
  info.innerHTML = info.innerHTML + "<br/>" + contador + " enlaces apuntan a http://prueba"

  // Numero de enlaces del tercer párrafo
  var parrafos = document.getElementsByTagName("p");
  enlaces3erP = parrafos[3].getElementsByTagName("a");
  info.innerHTML = info.innerHTML + "<br/>" + "Numero de enlaces del tercer párrafo = " + enlaces3erP.length;
  // // vemos valores en console.log
  console.log({parrafos});
  console.log({enlaces3erP});
  console.log(enlaces3erP.length);
}
