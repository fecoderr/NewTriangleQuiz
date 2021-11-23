var clickHereBtn = document.querySelector("#click-here");
var funQuizAns = document.querySelector("#funQuiz-ans");

function clickHandler(){
    funQuizAns.innerText = "Well Isosceles Triangles 🤣"

}

clickHereBtn.addEventListener("click", clickHandler);