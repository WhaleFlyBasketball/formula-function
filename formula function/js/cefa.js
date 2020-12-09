let calcBtn = document.getElementById("btn");

let cefaInp1 = document.getElementById("celcius");
let cefaOut1 = document.getElementById("output")

calcBtn.addEventListener("click", calculateTotal);

function calculateTotal(){
    let c = +cefaInp1.value;

    cefaOut1.innerHTML = surfaceArea(c);
}

function surfaceArea(celcius){
    return celcius * 9 / 5 + 32;
}