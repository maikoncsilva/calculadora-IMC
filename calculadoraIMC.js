const calcular = document.querySelector("#butao-resultado");

function imc (){

    const peso = document.querySelector(".caixadePeso").value;
    const altura = document.querySelector(".caixadeAltura").value;
    const resultado = document.querySelector(".caixadeResultado");

    let IMC = peso / (altura*altura);

    if (peso ==! "" && altura ==! ""){

        alert ("dados incompleto");
    }
    
    resultado.textContent = IMC.toFixed(2);

    if (IMC < 18.5){

        alert("abaixo do peso");
    }

    else if ( IMC < 25){

        alert("peso normal ");
    }
    else if (IMC < 30){
        alert(" pouco a cima do peso ideal ");
    }
        else if (IMC < 35){
        alert(" nivel obesidade 1 ");
    }
        else if (IMC < 40){
        alert(" nivel de obsidade 2 ");
    }
    else {
        alert("obesidade 3 cuidado");
    }

    



    

}


calcular.addEventListener ("click", imc);




