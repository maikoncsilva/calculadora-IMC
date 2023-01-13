const calcular = document.querySelector("#butao-resultado");

function imc (){

    const peso = document.querySelector(".caixadePeso").value;
    const altura = document.querySelector(".caixadeAltura").value;
    const resultado = document.querySelector(".caixadeResultado");

    let IMC = peso / (altura*altura);

    if (peso == "" && altura == "" ){

        alert ("resultado incompleto");

        
    }

    else{

        resultado.textContent = IMC.toFixed(2);


    }

    

}



calcular.addEventListener ("click", imc);




