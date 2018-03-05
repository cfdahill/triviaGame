//objects are the questions and answer, true means correct:
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
        ["Faceless Manipulator", false],
        ["Faceless Shambler", false],
        ["Faceless Summoner", false]
    ]
}
var question3 = {
    ask: 'What was the name of the first expansion?',
    answers: [
        ["The Grand Tournament", false],
        ["Whispers of the Old Gods", false],
        ["Journey to Un'Goro", false],
        ["Goblins vs Gnomes", true]
    ]
}
var question4 = {
    ask: 'What adventure introduced Sir Finley Mrrgglton?',
    answers: [
        ["Blackrock Mountain", false],
        ["One Night in Karazhan", false],
        ["Curse of Naxxramas", false],
        ["League of Explorers", true]
    ]
}
var question5 = {
    ask: 'What minion has the highest attack value?',
    answers: [
        ["The Darkness", false],
        ["The Ancient One", true],
        ["Deathwing", false],
        ["Icehowl", false]
    ]
}


var questionArr = [question0, question1, question2, question3, question4, question5];
var correctAnswer;
var userAnswer;
var score = 0;
var z = 0;
var time = 14;
var intervalID;


function endRound() {
    $("#answer").hide();
    $("button").show();
    z++;
    clearInterval(intervalID)
    time=14;
    $("#timer").html("Time remaining: 15");
}

//runGame will make the question and answers visible and determine which answer is correct
function runGame() {
    if (z < questionArr.length) {
        $("#question").html(questionArr[z].ask);
        for (i = 0; i < questionArr[z].answers.length; i++) {
            var short = questionArr[z].answers
            if (short[i][1] === true) {
                correctAnswer = short[i][0];
            }
            $("#answer" + i).html(short[i][0]);
        }
        $(".ansButton").css({"border": "double", "background-color": "rgb(207, 58, 36)"});
    } else {
        $("#game").hide();
        $("#correct").show().html("You got " + score + " out of " + questionArr.length + " correct.");
    }
}

//countDown makes the timer countdown by 1 second intervals 
function countDown() {
    intervalID = setInterval(timer, 1000)     
}

//timer displays the time remaining, removes a second at each interval, and will stop the timer if the timer reaches 0
function timer() {
$("#timer").html("Time remaining: " + time);
time--;
if(time < 0) {
    $("#correct").show().html("Time's up. <br>  The correct answer is: <br>" + correctAnswer);
    endRound();
}
}

$(document).ready(function () {
    //the following will move onto the next question
    $("button").click(function () {
        $("#timer").html("Time remaining: " + 15);
        $("button").hide();
        $("button").text("Continue");
        $("#correct").hide();
        $("#answer").show();
        runGame();
        countDown();
    });

    //the following makes all answers clickable and then has two different paths based on if the user picks the right/wrong answer
    $(".ansButton").click(function () {
        userAnswer = $(this).text();
        console.log(userAnswer);
        if (userAnswer === correctAnswer) {
            $("#correct").show().html("<br>Correct! <br> " + correctAnswer);
            score++;
            endRound();
        } else {
            $("#correct").show().html("Incorrect. <br>  The correct answer is: <br>" + correctAnswer);
            endRound();
        }
    });
});


/* Trivia game pseudocode:
-Make objects with question and 4 possible answers and if it is correct or not
-Pick one question
-Use $ to place array properties into the right parts of the html
-Get this to be clickable and to confirm correct picks/indicate wrong picks
-Create a continue button after confirmation
-Make new question appear by setting objects into an array and calling each individual one through a for loop
-after the last question, the screen     should show the total number right

-Once the trivia game is working without a timer add a timer component
-Timer should restart when hitting the start/continue button
-Timer should stop once an answer is picked
-If timer reaches 0 it should trigger the incorrect answer and stop
*/