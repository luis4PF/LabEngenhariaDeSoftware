var el = document.getElementById("btVerificar");
el.addEventListener("click", isPalindromo, false);

function isPalindromo() {
    let texto = document.getElementById('txtbox').value;
    let textoSemEspaco = texto.replace(" ", "").toLowerCase();
    let textInvertido = inverter(textoSemEspaco);

    if(textoSemEspaco == textInvertido)
        alert(texto + "É UM PALÍNDROMO")
    else
        alert(texto + "NÃO É UM PALÍNDROMO")        
}   

function inverter(str) {
    var new
}