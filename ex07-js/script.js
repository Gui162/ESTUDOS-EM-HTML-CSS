document.addEventListener("DOMContentLoaded", function() {
  const campo1 = document.querySelector("#campo1");
  const campo2 = document.querySelector("#campo2");
  const seletor = document.querySelector("#operacao");
  const botao = document.querySelector("#igual");
  const resposta = document.querySelector("#resposta");
  
  botao.addEventListener("click", calcular);
  seletor.addEventListener("change", calcular); // Corrigido "chance" para "change"
  campo1.addEventListener("input", calcular); // Corrigido "keydown" para "input"

  function calcular() {
    if (campo1.value === "" || campo2.value === "") {
      resposta.classList.add("problema");
      resposta.textContent = "Campo vazio";
      setTimeout(() => {
        resposta.classList.remove("problema");
        resposta.textContent = "";
      }, 3000);
      return;
    }

    const valor1 = parseInt(campo1.value);
    const valor2 = parseInt(campo2.value);
    const operacao = seletor.value;
    
    if (operacao === "somar")
      resposta.textContent = valor1 + valor2;
    else if (operacao === "subtrair")
      resposta.textContent = valor1 - valor2;
    else if (operacao === "multiplicar")
      resposta.textContent = valor1 * valor2;
    else if (operacao === "dividir")
      resposta.textContent = valor1 / valor2;
  }
});
