function retornaIMC() {
    console.log("hiu")

    //Entrada de dados
    let nome = document.getElementById("nome").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let results = document.getElementById("results");

    //processamento de dados
    let imc = (parseFloat(peso) / Math.pow(parseFloat(altura), 2)) * 100;


    //saida de dados
    console.log("Seu imc é:" + imc  + ", nome:  " + nome);
    
    let text = "Você tem " + imc + " de IMC"
    results.innerHTML = text;
}