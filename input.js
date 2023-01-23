const btn = document.querySelector("#send");
btn.addEventListener("click", function(e){
    e.preventDefault();
    const name = document.querySelector("#name");
    const valor = name.value;
    console.log(valor)
});


const valor = document.getElementById("textinput").value;
function enviar(valor, saudacao){

    const saudacao = "Ola" + valor
    return saudacao
    
}
container_text_input = document.getElementById("text_input")
container_text_input.innerHTML =`
<p>Voce digitou: ${saudacao}</p>

<input id="textinput" name="textinput" value="" type="number">
<button onclick="enviar()">Confirmar</button>


`