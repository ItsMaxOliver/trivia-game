var Game = {
    correctCount : 0,
    //keeps count of correctly answered questions
    wrongCount : 0,
    //keeps count of incorrectly answered questions
    unansweredCount : 0,
    //keeps count of unanswered questions
    timerBetweenQuestions : 5,
    //seconds allowed for each question result to be displayed
    playClicked : false,
    //used to keep track of wether or not the player has begun the game
    playAgainClicked : false,
    //used to keep track of wether or not the player wants to play again
    answerClicked : false,
    //used to keep track of wether or not the player has clicked an answer
    q1 : {
        question : "Torn",
        answer : "Ednaswap",
        incorrect : ["Natalie Imbruglia", "Hands Like Houses", "Cassadee Pope"]
    },
    q2 : {
        question : "I Love Rock N Roll",
        answer : "Arrows",
        incorrect : ["Joan Jett & The Blackhearts", "Britney Spears", "Tiny Tim"]
    },
    q3 : {
        question : "Girls Just Wanna Have Fun",
        answer : "Robert Hazard",
        incorrect : ["Cyndi Lauper", "Miley Cyrus", "Greg Laswell"]
    },
    q4 : {
        question : "Respect",
        answer : "Otis Redding",
        incorrect : ["Aretha Franklin", "Diana Ross", "Louisa Johnson"]
    },
    q5 : {
        question : "I Want Candy",
        answer : "The Strangeloves",
        incorrect : ["Bow Wow Wow", "Aaron Carter", "Cherubs"]
    }
}

var totalCount = Game.correctCount + Game.wrongCount + Game.unansweredCount;
//keeps track of number of questions that have cycled through

var clockRunning = false;
//used to reset and start clock

var countingUp = false;
//used to start and reset BetweenQuestions

var countDown = {
    time : 10,
    
    reset : function() {
        countDown.betweenQuestions();
        countDown.time = 10;
        $("#display-timer").text(countDown.time);
        clockRunning = false;
    },
    start : function() {
        if(!clockRunning) {
            interval = setInterval(countDown.count, 1000);
            clockRunning = true;
        }
    },
    betweenQuestions : function() {
        clearInterval(interval);
        if(countingUp) {
        intervalTwo = setInterval(function (){
            var y = 0;
            y++;
            if( y<=5 ){
                $("#game").hide();
                $("#")
            }
        }, 1000);
        }
    },
    count : function() {
        countDown.time--;
        var x = countDown.time;
        $("#display-timer").text(x);
        console.log(x);
        if(countDown.time === 0) {
            countDown.reset();
        }
    },
};
//seconds allowed for each question to be displayed

window.onload = function() {
    $("#game").hide();
    $("#answered-correct").hide();
    $("#answered-wrong").hide();
    $("#total-results").hide();
}

$("#play").on("click", function(){
    $("#instructions").hide();
    //hides #instructions
    $("#game").show();
    //displays #game
    $("#question").text(Game.q1.question);
    //displays q1
    $("#answers").append(Game.q1.answer);
    $("#answers").append(" ");
    $("#answers").append(Game.q1.incorrect[0]);
    $("#answers").append(" ");
    $("#answers").append(Game.q1.incorrect[1]);
    $("#answers").append(" ");
    $("#answers").append(Game.q1.incorrect[2]);
    //displays q1.answerChoices
    countDown.reset();
    countDown.start();
    //start countdown
});

