(function(){
  function Question(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for(var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  }

  Question.prototype.checkAnswer = function(ans, callback) {
      var sc;

      if (ans === this.correct) {
        console.log('That is correct!');
        sc = callback(true);
      } else {
        console.log('Wrong answer...');
        sc = callback(false);
      }
      this.displayScore(sc);
  }

  Question.prototype.displayScore = function(sc) {
    console.log('Your current score is: ' + sc);
    console.log('-------------------------');
  }

  var q1 = new Question('Is Javascript the coolest language?', ['Yes', 'No'], 0);
  var q2 = new Question('Is this the second question?', ['Yes', 'No'], 0);
  var q3 = new Question('What is the capital of US?', ['Chicago', 'New York', 'DC', 'Los Angeles'], 2);

  var questions = [q1, q2, q3];

  function score() {
    var sc = 0;
    return function(correct) {
      if(correct){
        sc++;
      }
      return sc;
    }
  }

  var keepScore = score();

  function nextQuestion() {

    var n = Math.floor(Math.random()* questions.length);

    questions[n].displayQuestion();

    var answer = prompt('Your answer:');

    if (answer !== 'exit') {
      questions[n].checkAnswer(parseInt(answer), keepScore);
      nextQuestion();
    }

  }

  nextQuestion();

})();
