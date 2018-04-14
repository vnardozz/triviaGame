$(document).ready(function () {
    var answerCorrect = 0
    var answerWrong = 0
    var triviaObj = [{
            newQuestion: "what kind of car does dominic Torretto build in his garage at his HOME?",
            answers: ["supra", "skyline", "challenger", "charger"],
            correctAnswer: "charger"
        },

        {
            newQuestion: "what was Brian's REAL job?",
            answers: ["mechanic", "fireman", "street racer", "cop"],
            correctAnswer: "cop"
        },

        {
            newQuestion: "what is Dominic's sisters name?",
            answers: ["letty", "mia", "jesse", "Chelsea"],
            correctAnswer: "mia"
        },

        {
            newQuestion: "what city did brian and Dom pull their biggest cash heist?",
            answers: ["Rio", "L.A.", "Miami", "Dubai"],
            correctAnswer: "Rio"
        },

        {
            newQuestion: "Who came in to Rio to arrest The Crew?",
            answers: ["Dobbs", "Hobbs", "deckland", "Vince"],
            correctAnswer: "Hobbs"
        },

        {
            newQuestion: "Where did Brian and tej meet?",
            answers: ["barstow", "miami", "jail", "Tokyo"],
            correctAnswer: "miami"
        },

        {
            newQuestion: "Everybody knows only Romans homboy's call him thi nickname, Who is it?",
            answers: ["Dom", "whiteboy", "Rome", "bullet"],
            correctAnswer: "Rome"
        },

        {
            newQuestion: "in Rio, which of our crew was the techie that hacked into the safe?",
            answers: ["Han", "sean", "dom", "tej"],
            correctAnswer: "tej"
        },

        {
            newQuestion: "one of our orginal crew members han, goes to Tokyo for this kind of driving action",
            answers: ["drag racing", "drifting", "boat racing", "fighting"],
            correctAnswer: "drifting"
        },

        {
            newQuestion: "if you ask any racer, any REAL racer, they will tell you that...?",
            answers: ["winning is winning", "Never snitch", "never lift"],
            correctAnswer: "winning is winning"
        },

        {
            newQuestion: "although we loves our rides and the thrill of the race, the most important thing to us is our...",
            answers: ["new shoes", "sponsors", "family", "shops"],
            correctAnswer: "family"
        },
    ]




    function loadQuestions() {

        $("#question").empty()
        $("#answer").empty()
        $("#question").append(triviaObj[QuestionsIndex].newQuestion)

        for (var i = 0; i < triviaObj[QuestionsIndex].answers.length; i++) {
            var newAnswer = $("<span>")
            newAnswer.text(triviaObj[QuestionsIndex].answers[i])
            newAnswer.attr("data", triviaObj[QuestionsIndex].answers[i])
            newAnswer.addClass("each-question")

            $("#answer").append(newAnswer)


        }
    }

    var number = 10;
    var intervalId;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
if ( counter<11) {
        number--;

        //  will show timer in my display div as an h2 tag
        $("#display").html("<h2>" + number + "</h2>");


        //  Once number hits zero...
        if (number === 0) {

            //  empty out html in div..
            $("#display").empty()

            //  Alert the user that time is up and reset the timer to 5 sec
            //alert("Time Up!");
            counter++
            number = 10;
            QuestionsIndex++
            loadQuestions()
        }
    }
    }












    var QuestionsIndex = 0;



    //this is to start the game

    $(document).on("click", "#start", function () {
        $("#page-title").empty()
        $("#direction").empty()
        loadQuestions()
        run();

    })








    // this is questions event 
    var counter = 0;

    $(document).on("click", ".each-question", function () {

        var data = $(this).attr("data")
        if (counter < 11) {
            if (data == triviaObj[QuestionsIndex].correctAnswer) {
                loadQuestions()
                counter++
                console.log(counter)
                alert("Right!")
                answerCorrect++
                number = 10
            }
            if (data !== triviaObj[QuestionsIndex].correctAnswer) {
                loadQuestions()

                counter++
                answerWrong++
                number = 10;
            }

        }
        if (counter >= 11) {
            
            $("#question").html("Answered correct: " + answerCorrect);

            $("#answer").html("Answered wrong: " + answerWrong)
            console.log(answerCorrect)
            counter = 21
           var end = $("<button>")
           end.attr("id", "end")
           end.addClass("btn-danger")
           end.text("retry?")
            $("#start").append(end);
            
            
            $("#end").on("click", function() {
                window.location.reload(true)
            } )
           

        } else {


            //console.log("you answered" + answerWrong + " wrong questions")
            QuestionsIndex++
            loadQuestions()
        }
    })

});