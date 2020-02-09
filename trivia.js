var card = $("#quiz-area")

var questions = [
    {
        question:"Which sports cars utilize horizontally opposed 6 cylinder engines?",
        answers: ["Porsche", "Honda", "Ford", "Suzuki"],
        correctAnswer: "Porsche"
    },
    {
        question:"What was the first car to break a 240mph top speed?",
        answers: ["Porsche 959", "Bugatti EB110", "Ferrari F40", "McLaren F1"],
        correctAnswer: "Mclaren F1"
    },
    {
        question: "What famous tech executive was responsible for the homologation of the Porsche 959 to the United States?",
        answers: ["Larry Ellison", "Bill Gates", "Steve Jobs", "Larry Paige"],
        correctAnswer: "Bill Gates"
    
    }
]

var timer;

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function(){
        game.counter -- 
        $("#counter-number").html(game.counter)
        if(game.counter === 0){
            console.log("Time's Up")
            game.done()
        }
    },
    start: function(){
        timer = setInterval(game.countdown, 1000)
        $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>")
        $("#start").remove()
        
        for (var i = 0; i < questions.length; i ++){
            card.append("<h2>" + questions[i].question + "</h2>")
            for (var l = 0; l < questions[i].answers.length; l ++){
                card.append("<input type='radio' name='question-" + i +
                "' value='" + questions[i].answers[l] + "''>" + questions[i].answers[l]);
            }
        }
        card.append("<button id = 'done'> done </button>")
    },
    done: function(){
        var inputs = card.children("input:checked")
        for (var i = 0; i < inputs.length; i ++){
            if($(inputs[i]).val() === questions[i].correctAnswer){
                game.correct++
            }
            else {
                game.incorrect ++
            }
        }
        this.result()
    },
    result: function(){
        clearInterval(timer)
        $("#sub-wrapper h2").remove()
        card.html("<h2> All Done </h2>")
        card.append("<h3> Correct Answers: " + this.correct + "</h3>")

        card.append("<h3> Incorrect Answers: " + this.incorrect + "</h3>")
    }
}

$(document).on("click", "#start", function(){
    game.start()
})
$(document).on("click", "#done", function(){
    game.done()
})