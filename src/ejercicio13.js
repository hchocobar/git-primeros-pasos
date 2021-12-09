function agregarElemento() {
  // agrega elemento con appendChild
  var elemento = document.createElement("li");
  var texto = document.createTextNode("Elemento agregado con appendChild");
  elemento.appendChild(texto);
  var listado = document.getElementById("lista");
  listado.appendChild(elemento);

  // otra forma: agrega en: innerHTML
  var otroElemento = "<li>Elemento agregado en innerHTML</li>";
  listado.innerHTML = listado.innerHTML + otroElemento;
}
