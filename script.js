let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let resultado = document.querySelector("#resultado");

let btSoma = document.querySelector("#soma");
btSoma.addEventListener("click", function() {
    somar(Number(valor1.value), Number(valor2.value))
});

function somar(a, b) {
    let soma = a + b;
    resultado.innerHTML = soma;
}

let btsubtracao = document.querySelector("#subtracao");
btsubtracao.addEventListener("click", function() {
    subtrair(Number(valor1.value), Number(valor2.value))
});

function subtrair(a, b) {
    let subtracao = a - b;
    resultado.innerHTML = subtracao;
}

let btdivisao = document.querySelector("#divisao");
btdivisao.addEventListener("click", function() {
    subtrair(Number(valor1.value), Number(valor2.value))
});

function dividir(a, b) {
    let divisao = a / b;
    resultado.innerHTML = divisao;
}

let btmultiplicacao = document.querySelector("#multiplicacao");
btmultiplicacao.addEventListener("click", function() {
    multiplicar(Number(valor1.value), Number(valor2.value))
});

function multiplicar(a, b) {
    let multiplicacao = a * b;
    resultado.innerHTML = multiplicacao;
}

let selectedIdioma = document.querySelector("#idioma");
selectedIdioma.addEventListener("change", function() {
    if(this.value == "br") {
        btSoma.value = "Soma";
        btdivisao.value = "Divisão";
        btsubtracao.value = "Subtração";
        btmultiplicacao.value = "Multiplicação";
    }
    else if (this.value == "en") {
        btSoma.value = "Sum";
        btdivisao.value = "Division";
        btsubtracao.value = "Subtract";
        btmultiplicacao.value = "Multiply";
    }
    else if (this.value == "es") {
        btSoma.value = "suma";
        btdivisao.value = "divisíon";
        btsubtracao.value = "sustraer";
        btmultiplicacao.value = "multiplicar";
    }
})