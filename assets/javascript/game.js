var Game = {
    correctCount : 0,
    //keeps count of correctly answered questions
    wrongCount : 0,
    //keeps count of incorrectly answered questions
    unansweredCount : 0,
    //keeps count of unanswered questions
    playClicked : false,
    //used to keep track of wether or not the player has begun the game
    playAgainClicked : false,
    //used to keep track of wether or not the player wants to play again
    answerClicked : false
    //used to keep track of wether or not the player has clicked an answer
}
var songs = [
    q1 = {
        question : "Torn",
        answer : "Ednaswap",
        incorrect : ["Natalie Imbruglia", "Hands Like Houses", "Cassadee Pope"]
    },
    q2 = {
        question : "I Love Rock N Roll",
        answer : "Arrows",
        incorrect : ["Joan Jett & The Blackhearts", "Britney Spears", "Tiny Tim"]
    },
    q3 = {
        question : "Girls Just Wanna Have Fun",
        answer : "Robert Hazard",
        incorrect : ["Cyndi Lauper", "Miley Cyrus", "Greg Laswell"]
    },
    q4 = {
        question : "Respect",
        answer : "Otis Redding",
        incorrect : ["Aretha Franklin", "Diana Ross", "Louisa Johnson"]
    },
    q5 = {
        question : "I Want Candy",
        answer : "The Strangeloves",
        incorrect : ["Bow Wow Wow", "Aaron Carter", "Cherubs"]
    }
]

var totalCount = Game.correctCount + Game.wrongCount + Game.unansweredCount;
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
            clockRunning = true;
        }
    },
    stop : function() {
        clearInterval(interval);
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
});

//function showQuestion() {
//                for (var i = 0; i < songs.lenth; i++) {
//                        $("#question").text(songs[i].question);
//                        //displays q1
//                        $("#answers").append(songs[i].answer);
//                        $("#answers").append(" ");
//                        $("#answers").append(songs[i].incorrect[0]);
//                        $("#answers").append(" ");
//                        $("#answers").append(songs[i].incorrect[1]);
//                        $("#answers").append(" ");
//                        $("#answers").append(songs[i].incorrect[2]);
//                        //displays q1.answerChoices
//                }
//            };