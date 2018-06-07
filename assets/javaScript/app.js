//timer

    //need clear interval

    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = 0;

                if (timer == 0) {
                    $("#second-page").hide()
                    $(".timesUp").show()
                   
                }
            }
            //timer speed
        }, 1000);
    }

    function start() {
        thirtySeconds = 60 * 1,
            display = document.querySelector('#time');
        startTimer(thirtySeconds, display);
    };
    var thirtySeconds;

    $(document).ready(function () {

        function initialScreen() {
            startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
            $(".mainArea").html(startScreen);

        }

        initialScreen();

        //Hide button and go to next screen.
        window.onload = $("#second-page").hide()
        window.onload = $("#score").hide()
        window.onload= $(".timesUp").hide()
        $("#start-button").click(function () {
            $("#start-button").click(start())
            $(".first-page").hide(function () {
                $("#second-page").show()



            })
        })



        //finish button

        $("#finish-button").click(function () {

            var question1 = document.quiz.question1.value;
            var question2 = document.quiz.question2.value;
            var question3 = document.quiz.question3.value;
            var question4 = document.quiz.question4.value;
            var question5 = document.quiz.question5.value;
            var question6 = document.quiz.question6.value;
            var question7 = document.quiz.question7.value;
            var question8 = document.quiz.question8.value;

            var correct = 0;
            var wrong = 0;

            //correct guess
            if (question1 == "ice") {
                correct++;
                console.log(correct)
            }
            if (question2 == "spain") {
                correct++;
                console.log(correct)
            }

            if (question3 == "50") {
                correct++;
                console.log(correct)
            }

            if (question4 == "morgan") {
                correct++;
                console.log(correct)
            }

            if (question5 == "molasses") {
                correct++;
                console.log(correct)
            }

            if (question6 == "copper") {
                correct++;
                console.log(correct)
            }

            if (question7 == "japan") {
                correct++;
                console.log(correct)
            }

            if (question8 == "salmon") {
                correct++;
                console.log(correct)
            }

            // wrong guesses 

            if (question1 !== "ice") {
                wrong++;

            }

            if (question2 !== "spain") {
                wrong++;

            }

            if (question3 !== "50") {
                wrong++;

            }

            if (question4 !== "morgan") {
                wrong++;

            }

            if (question5 !== "molasses") {
                wrong++;

            }

            if (question6 !== "copper") {
                wrong++;

            }

            if (question7 !== "japan") {
                wrong++;

            }

            if (question8 !== "salmon") {
                wrong++;

            }

        

            console.log("clicked")

            //finish button
            $("#finish-button").append(function () {
                $("#corrects").text(correct);
                $("#wrongs").text(wrong);
                $("#second-page").hide()
                $(".timesUp").hide()
                $("#score").show()
            })


   

            


        })

    })
