const inputs=document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triagnle-btn");
const outputEl=document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles=angle1+angle2+angle3;
    return sumOfAngles;

}


function isTriangle(){

    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    
    if(sumOfAngles===180){
        
        outputEl.innerText = "Yay!! That makes a triangle";
    }
        
    else{
        outputEl.innerText = "Sorry!!! Try some other angles"; 
       
    }
    
    
    
}

isTriangleBtn.addEventListener("click", isTriangle);
