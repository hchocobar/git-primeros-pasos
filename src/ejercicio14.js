function ocultaMuestra(id) {
  var parrafo = document.getElementById("contenidos_"+id);
  var enlace = document.getElementById("enlace_"+id);

  // La propiedad display determina si un elemento se visualiza o no.
  if(parrafo.style.display == "" || parrafo.style.display == "block") {
    parrafo.style.display = "none";
    enlace.innerHTML = 'Mostrar contenidos';
  }
  else {
    parrafo.style.display = "block";
    enlace.innerHTML = 'Ocultar contenidos';
  }

}
