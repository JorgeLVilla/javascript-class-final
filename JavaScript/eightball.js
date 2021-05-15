//Function to create the random number
function generateRandom(max_number) {
    return Math.round(Math.random()*max_number);
}

const button = document.querySelector("button");
let answer = document.querySelector("#answer");

// Listening for the click
button.addEventListener("click", function(){

    let randomNumber = generateRandom(5);
    
    let answerText = "";
    if (randomNumber == 0){
        answerText = "Don’t count on it.";
    }
    else if (randomNumber == 1){
        answerText = "Forget about it.";
    }
    else if (randomNumber == 2){
        answerText = "Don't even ask me that."
    }
    else if (randomNumber == 3){
        answerText = "You may rely on it.... sike!";
    }
    else if (randomNumber == 4){
        answerText = "As I see it, yes.";
    }
    else {
        answerText = "Leave it alone.";
    }
    answer.innerHTML = answerText;
});