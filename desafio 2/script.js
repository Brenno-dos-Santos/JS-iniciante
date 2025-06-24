let input = document.getElementById("nome");
const botao = document.getElementById("enviar");
const lista = document.getElementById("nomes");
const itens = document.querySelectorAll("li");

botao.addEventListener("click", buscar);

function buscar() {
  for (let i = 0; i < itens.length; i++) {
    if (itens[i].textContent == input.value) {
      itens[i].style.fontWeight = "bold";
    }
  }
}