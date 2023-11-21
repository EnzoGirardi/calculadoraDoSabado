let linguaportuguesa = document.createElement("script");
linguaportuguesa.src = "./idiomas/portuguese.js";
document.head.appendChild(linguaportuguesa);

let linguaespanhola = document.createElement("script");
linguaespanhola.src = "./idiomas/espanol.js";
document.head.appendChild(linguaespanhola);

let linguainglesa = document.createElement("script");
linguainglesa.src = "./idiomas/ingles.js";
document.head.appendChild(linguainglesa);

let selectidioma = document.querySelector("#idioma");
selectidioma.addEventListener("change", function() {
    translate(this.value);

});

function translate(idiomas) {
    let traducao = 
    (idiomas = "br") ? portugues()
    : (idiomas = "es") ? espanol()
    : (idiomas = "en") ? ingles()
    :null;
    setlanguage(traducao)
}

function setlanguage(Novoidioma) {
    let btSoma = document.querySelector("btSoma");
    btSoma.value = Novoidioma.soma;
    let btsubtracao = document.querySelector("btsubtracao");
    btsubtracao.value = Novoidioma.subtracao;
    let btdivisao = document.querySelector("btdivisao");
    btdivisao.value = Novoidioma.divisao;
    let btmultiplicacao = document.querySelector("btmultiplicacao");
    btmultiplicacao.value = Novoidioma.multiplicacao;
}