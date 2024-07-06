// Selecionando os elementos HTML e armazenandos-os em variáveis
let form = document.querySelector("#calculadora");
let inputPeso = document.querySelector("#peso");
let inputAltura = document.querySelector("#altura");
let resultado = document.querySelector("#resultado");

// Adicionando eventos de foco nos inputs para ocultar o resultados prévios e limpar campos
inputPeso.addEventListener("focus", function() {
    inputPeso.value = "";
    resultado.classList.add("hide");
});

inputAltura.addEventListener("focus", function() {
    inputAltura.value = "";
    resultado.classList.add("hide");
});

// Adicionando evento de submit no formulário para calcular o IMC e exibir o resultado
form.addEventListener("submit", function(event) {
    //previne a página de ser recarregada
    event.preventDefault(); 

    //limpando estilos de resultados anteriores
    resultado.classList.remove("warning","success","danger");

    //tratando valores com vírgula
    let peso = inputPeso.value.replace("," , ".")
    let altura = inputAltura.value.replace("," , ".")

    //Chamando função de calcular IMC
    calcularIMC(peso, altura);

    //exibindo div com resultado
    resultado.classList.remove("hide");
});

// Função para calcular IMC
function calcularIMC(peso, altura) {
    //calculando e arredondando IMC
    let imc = (peso / (altura * altura)).toFixed(1);

    //comparando valores e exibindo resultados
    if(imc < 18.5) {
        resultado.classList.add("warning");
        resultado.innerHTML = `<p>Seu IMC é ${imc} e você está ABAIXO do peso!</p>`;
        console.log("IMC: Abaixo do peso");
        
    } else if(imc >= 18.5 && imc <= 24.9) {
        resultado.classList.add("success");
        resultado.innerHTML = `<p>Seu IMC é ${imc} e você está com o peso NORMAL!</p>`;
        console.log("IMC: Peso normal");

    } else if(imc >= 25 && imc <= 29.9) {
        resultado.classList.add("warning");
        resultado.innerHTML = `<p>Seu IMC é ${imc} e você está com SOBREPESO!</p>`;
        console.log("IMC: Sobrepeso");

    } else if(imc >= 30){
        resultado.classList.add("danger");
        resultado.innerHTML = `<p>Seu IMC é ${imc} e você está com OBESIDADE!</p>`;
        console.log("IMC: Obesidade");

    } else {
        resultado.classList.add("danger");
        resultado.innerHTML = `<p>Verifique se os valores preenchidos são válidos!</p>`;
        console.log("IMC: Erro!");
    }
}

//TESTES:
console.log("Teste 1:");
console.log("Peso: 12kg, Altura: 1.63m") ;
calcularIMC(12, 1.63);
console.log("-------------------------");

console.log("Teste 2:");
console.log("Peso: 70kg, Altura: 1.71m");
calcularIMC(70, 1.71);
console.log("-------------------------");

console.log("Teste 3:");
console.log("Peso: 129kg, Altura: 1.80m");
calcularIMC(129, 1.80);
console.log("-------------------------");

console.log("Teste 4:");
console.log("Peso: 0kg, Altura: 0m");
calcularIMC(0, 0);
console.log("-------------------------");

//ocultando resultado dos testes
resultado.classList.add("hide");
