//objects are the questions and answer:
var question0 = {
    ask: 'Which of the following is not a minion type?',
    answers: [
        ["Elementals", false],
        ["Mechs", false],
        ["Demons", false],
        ["Poisonous", true]
    ]
}
var question1 = {
    ask: 'Which class has the most weapons?',
    answers: [
        ["Rogue", false],
        ["Warrior", true],
        ["Paladin", false],
        ["Hunter", false]
    ]
}
var question2 = {
    ask: 'Which card is known as "4-mana, 7/7?"',
    answers: [
        ["Flamewreathed Faceless", true],
        ['Faceless Manipulator', false],
        ["Faceless Shambler", false],
        ["Faceless Summoner", false]
    ]
}

var questionArr = [question0, question1, question2];
var timer = false;
var correctAnswer;
var userAnswer;
var z = -1;

function runGame() {
    console.log("z before answering =" + z);
    $("#question").html(questionArr[z].ask);
    for (i = 0; i < questionArr[z].answers.length; i++) {
        var short = questionArr[z].answers
        if (short[i][1] === true) {
            correctAnswer = short[i][0];
        }
        $("#answer" + i).html(short[i][0]);
        //The way the code is currently written it is going through the following .click function once on the first question, twice on the 2nd question, 3x on the 3rd question.  Cannot figure out why.  Set it up so it won't really matter except for the score however, need to figure out how to fix this.  Pretty sure it is tied to the forloop and the array position.
    }
}

$(document).ready(function () {
    $("button").click(function () {
        $("button").hide();
        $("button").text("Continue");
        $("#correct").hide();
        $("#answer").show();
        z++;
        //console.log(questionArr[z]);
        runGame()

    });
    $(".ansButton").click(function () {
        userAnswer = $(this).text();
        console.log(userAnswer);
        if (userAnswer === correctAnswer) {
            $("#answer").hide();
            $("#correct").show().html("Correct! <br> " + correctAnswer);
            $("button").show();
            console.log("z=" + z);
            userAnswer = "";
        } else {
            $("#answer").hide();
            $("#correct").show().html("Incorrect. <br>  The correct answer is: <br>" + correctAnswer);
            $("button").show();
            console.log("z=" + z);
        }
    });
});


function countDown() {
    if (!clockRunning) {
        intervalID = setInterval(timer, 1000)
    }
}

/* Trivia game pseudocode:
-Make objects with question and 4 possible answers and if it is correct or not
-Pick one question
-Use $ to place array properties into the right parts of the html
-Get this to be clickable and to confirm correct picks/indicate wrong picks
-Create a continue button after confirmation
-Make new question appear by setting objects into an array and calling each individual one through a for loop

-Once the trivia game is working without a timer add a timer component
-Timer should restart when hitting the start/continue button
-Timer should stop once an answer is picked
-If timer reaches 0 it should trigger the incorrect answer
*/