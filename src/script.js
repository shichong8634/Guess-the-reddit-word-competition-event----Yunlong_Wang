const selectBox = document.getElementById("selectBox");

selectBox.onchange = function () {
    const url = this.value;
    if(url){
        window.location.href = url;
    }
}

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
