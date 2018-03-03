var Game = {
    correctCount : 0,
    //keeps count of correctly answered questions
    wrongCount : 0,
    //keeps count of incorrectly answered questions
    unansweredCount : 0,
    //keeps count of unanswered questions

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
};

var songs = [Game.q1, Game.q2, Game.q3, Game.q4, Game.q5];
    
var totalCount = 0;
//keeps track of number of questions that have cycled through

var timeBetweenQuestions = {
    time : 0, 
    
    reset : function(){
        timeBetweenQuestions.time = 0;
        countingUp = false;
    },
    start : function() {
        if (!countingUp){
            intervalTwo = setInterval(timeBetweenQuestions.count, 1000);
            countingUp = true;
            $("#question").hide();
            $("#answers").hide();
        }
        $("#answered-correct").show();
        $("#answered-wrong").show();
    },
    count : function() {
        timeBetweenQuestions.time++;
        
        if(timeBetweenQuestions.time === 5) {
            timeBetweenQuestions.stop();
        }
    },
    stop : function() {
        clearInterval(intervalTwo);
        $("#question").show();
        $("#answers").show();
        totalCount;
        countDown.reset();
        countDown.start();
    }
};
//used to keep track of time between questions

var countDown = {
    time : 10,
    
    reset : function() {
        countDown.time = 10;
        $("#timer-display").text(countDown.time);
        clockRunning = false;
    },
    start : function() {
        if(!clockRunning) {
            interval = setInterval(countDown.count, 1000);
            showQuestionAndAnswers();
            clockRunning = true;
        }
        $("#answered-correct").hide();
        $("#answered-wrong").hide();
    },
    stop : function() {
        clearInterval(interval);
        totalCount++;
        timeBetweenQuestions.reset();
        timeBetweenQuestions.start();
    },
    count : function() {
        countDown.time--;
        $("#timer-display").text(countDown.time);
        
        if(countDown.time === 0) {
            countDown.stop();
        }
    }
};
//seconds allowed for each question to be displayed

window.onload = function() {
    $("#game").hide();
    $("#answered-correct").hide();
    $("#answered-wrong").hide();
    $("#total-results").hide();
};

$("#play").on("click", function(){
    $("#instructions").hide();
    //hides #instructions
    $("#game").show();
    //displays #game
    
    countDown.reset();
    countDown.start();
    //start countdown
    showQuestionAndAnswers();
    //show question
    //show answers
    totalCount = 0;
    Game.correctCount = 0;
    Game.wrongCount = 0;
    Game.unansweredCount = 0;
    clearInterval(countDown.start.interval);
});

$("#play-again").on("click", function(){
    $("#instructions").show();
    //displays #instructions
    $("#game").hide();
    //hides #game
    $("#total-results").hide();
    //hides #total-results
    totalCount = 0;
    Game.correctCount = 0;
    Game.wrongCount = 0;
    Game.unansweredCount = 0;
});
//resets game

function showQuestionAndAnswers() {
    if (totalCount < songs.length) {
    $("#question").text(songs[totalCount].question);
    $("#answer-choice-1").text(songs[totalCount].incorrect[2]);
    $("#answer-choice-2").text(songs[totalCount].answer);
    $("#answer-choice-3").text(songs[totalCount].incorrect[0]);
    $("#answer-choice-4").text(songs[totalCount].incorrect[1]);
    }
    else {
        showResults();
    }
}
//shows question and answer choices

function showResults() {
    $("#game").hide();
    $("#total-results").show();
}
//shows when there are no more questions