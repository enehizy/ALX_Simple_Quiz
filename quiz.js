function checkAnswer() {
    // Function body
    let feedback =document.getElementById("feedback");
    let correctAnswer ="4";
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    let userAnswer =selectedRadio.value;
  
    if(userAnswer === correctAnswer){
        feedback.textContent ="Correct! Well done.";
    }else{
        feedback.textContent ="That's incorrect. Try again!";
    }
}

let button = document.getElementById("submit-answer");
button.addEventListener("click",checkAnswer,true);