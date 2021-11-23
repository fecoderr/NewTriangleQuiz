var sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn"); 
const outputEl = document.querySelector("#output");


function calculateArea(){

    const product = sides[0].value * sides[1].value; 
    const area = product /2;
    outputEl.innerText = " The area of triangle is " + area;  
}

areaBtn.addEventListener("click", calculateArea);