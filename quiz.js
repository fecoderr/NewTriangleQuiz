const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output");

const correctAnswers = ["one right angle","right angled","no","Equilateral triangle"];

function calculateScore(){
let score = 0;
let index=0;
const formResults = new FormData(quizForm);
console.log(formResults); 
}

submitAnswerBtn.addEventListener("click", calculateScore);



