//questions to be asked
var number = 45;
var intervalId;
var wins = 0;
var losses = 0;
var correct =0;
var incorrect =0;



  //  When the stop button gets clicked, run the stop function.
  $("#done").on("click", stop());

  //  When the resume button gets clicked, execute the run function.
  $("#start").on("click", run());

  
function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}


function stop() {

  clearInterval(intervalId);
  // # of correct/ incorrect answers are calculated and appended to "correct" or "incorrect" variable
}

//I would like to for loop through the following questions and have them appear in the "Questions" panel

var questionList = [
    {
      Q: 'Who makes the best vegan cheesesteak?',
      A: ['Pats & Genos', 'McDonalds', 'Raj', 'WizKid'],
      correctAnswer: 'WizKid'
    }, {
      Q: 'Where is the best place to dance?',
      A: ['In my living room', '700 Club', 'Raw Sushi', 'Anywhere'],
      correctAnswer: '700 Club'
    }

]

function decrement() {

  //  Decrease number by one.
  number--;

  //  Show the number in the #show-number tag.
  $("#display").html("<h3>" + number + "</h3>");

  //  Once number hits zero...
  if (number === 0) {

    //  ...run the stop function.
    stop();

    //  Alert the user that time is up.
    alert("Time's Up!");
  }
}


//if user answers all questions correctly, then wins++


//else losses++



