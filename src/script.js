const selectBox = document.getElementById("selectBox");

selectBox.onchange = function () {
    const url = this.value;
    if(url){
        window.location.href = url;
    }
}

const words = [
    "KARMA",
    "MEME",
    "UPVOTE",
    "MOD",
    "COMMENT"
]

const answer = words[Math.floor(Math.random() * words.length)];

let attempts = 0;

function checkGuess() {
    let guess =
        document.getElementById("guessInput")
            .value
            .toUpperCase();

    attempts++;

    document.getElementById("attempts")
        .innerHTML =
        "Attempts: " + attempts + "/6";

    if (guess === answer) {

        document.getElementById("result")
            .innerHTML =
            "💓🤗🤗🤗💓 Correct!";

    }

    else if (attempts >= 6) {

        document.getElementById("result")
            .innerHTML =
            "💔🙄🙄🙄💔 Game Over! The answer was: " + answer;

    }

    else {

        document.getElementById("result")
            .innerHTML =
            "Wrong Guess!";
    }

}
