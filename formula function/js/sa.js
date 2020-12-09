let calcBtn = document.getElementById("btn");

let saInp1 = document.getElementById("width");
let saInp2 = document.getElementById("length");
let saOut1 = document.getElementById("output")

calcBtn.addEventListener("click", calculateSA);

function calculateSA(){
    let w = +saInp1.value;
    let l = +saInp2.value;

    saOut1.innerHTML = surfaceArea(w, l);
}

function surfaceArea(width, length){
    return width * length;
}