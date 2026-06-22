const words = [
    {
        word: "KARMA",
        hint: "Reddit reputation score"
    },
    {
        word: "MEME",
        hint: "Funny content shared online"
    },
    {
        word: "UPVOTE",
        hint: "Positive reaction on Reddit"
    },
    {
        word: "MOD",
        hint: "Short for moderator"
    },
    {
        word: "COMMENT",
        hint: "Reply under a post"
    }
];

let currentWord;
let answer;

function generateWord(){

    currentWord =
        words[Math.floor(Math.random() * words.length)];

    answer = currentWord.word;

    console.log("New Word:", answer);

    document.getElementById("hint").innerHTML =
        "Hint: " + currentWord.hint;
}

generateWord();


let attempts = 0;

let score = 0;

function checkGuess() {
    if(attempts >= 6){
        return;
    }

    let guess =
        document.getElementById("guessInput")
            .value
            .toUpperCase();

    attempts++;

    document.getElementById("attempts")
        .innerHTML =
        "Attempts: " + attempts + "/6";

    if (guess === answer) {

        score += 1;

        document.getElementById("score")
            .innerHTML =
            "Score: " + score;

        document.getElementById("result")
            .innerHTML =
            "💓🤗🤗🤗💓 Correct!";

        setTimeout(function(){

            console.log("Next Question");

            attempts = 0;

            document.getElementById("attempts")
                .innerHTML = "Attempts: 0/6";

            generateWord();

            document.getElementById("result")
                .innerHTML = "";

            document.getElementById("guessInput")
                .value = ""

        }, 1500);
    }

    else if (attempts >= 6) {

        document.getElementById("result")
            .innerHTML =
            "💔🙄🙄🙄💔 Game Over! The answer was: " + answer;

    }

    else {

        let feedback = "";

        for(let i = 0; i < guess.length; i++){

            if(i < answer.length){

                if(guess[i] === answer[i]){
                    feedback += guess[i] + "🟩";

                }

                else if(answer.includes(guess[i])){
                    feedback += guess[i] + "🟨";

                }

                else{
                    feedback += guess[i] + "⬜";
                }
            }
        }

        document.getElementById("result")
            .innerHTML = feedback;
    }

}

function restartGame(){

    attempts = 0;

    generateWord();

    document.getElementById("attempts")
        .innerHTML = "Attempts: 0/6";

    document.getElementById("result")
        .innerHTML = "";

    document.getElementById("guessInput")
        .disabled = false;

    document.getElementById("submitBtn")
        .disabled = false;

    document.getElementById("guessInput")
        .value = "";
}
