function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}
Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
}
Quiz.prototype.guess = function(answer) {
  if(this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
  }
  this.questionIndex++;
}
Quiz.prototype.isEnded = function() {
  return this.questionIndex === this.questions.length;
}
function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}
Question.prototype.isCorrectAnswer = function(choice) {
  return this.answer === choice;
}
function populate() {
  if(quiz.isEnded()) {
      showScores();
  }
  else {
      // show question
      var element = document.getElementById("question");
      element.innerHTML = quiz.getQuestionIndex().text;
      // show options
      var choices = quiz.getQuestionIndex().choices;
      for(var i = 0; i < choices.length; i++) {
          var element = document.getElementById("choice" + i);
          element.innerHTML = choices[i];
          guess("btn" + i, choices[i]);
      }
      showProgress();
  }
};
function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
      quiz.guess(guess);
      populate();
  }
};
function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Pregunta " + currentQuestionNumber + " de " + quiz.questions.length;
};
function showScores() {
  var gameOverHTML = "<h1>Resultado</h1>";
  gameOverHTML += "<h2 id='score'> Has acertado " + quiz.score + " de 6</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
};
// crea las preguntas
var questions = [
  new Question("¿Cuántas zonas horarias hay en Rusia?", ["1000", "13","12", "11"], "11"),
  new Question("¿Qué país tiene más islas en el mundo?", ["Suecia", "Nueva Zelanda", "Melilla", "Francia"], "Suecia"),
  new Question("¿Cuál es el nombre en argot de la ciudad de Nueva York, utilizado por los locales?", ["Gotham", "Big Apple","Algorta", "The City"], "Gotham"),
  new Question("¿Cuándo se inauguró el metro de Londres?", ["1992", "1863", "1856", "1968"], "1863"),
  new Question("¿Cuándo se fundó Netflix?", ["2001", "2009", "1997", "2015"], "1997"),
  new Question("¿Cuál de los siguientes imperios no tenía lengua escrita?", ["Inca", "Azteca", "Egipcio", "Romano"], "Inca")
];
// crea el quiz
var quiz = new Quiz(questions);
// display quiz
populate();



/*
const PREGUNTAS = [{
  pregunta: "¿Cuántas zonas horarias hay en Rusia?",
  r1: 1000,
  r2: 13,
  r3: 12,
  r4: 11,
  corr: 11
},
{pregunta: "¿Qué país tiene más islas en el mundo?", 
r1: "Suecia",
r2: "Nueva Zelanda",
r3: "Melilla",
r4: "Francia",
corr: "Suecia"
},
{pregunta: "¿Cuál es el nombre en argot de la ciudad de Nueva York, utilizado por los locales?", 
r1: "Gotham",
r2: "Big Apple",
r3: "Algorta",
r4: "The City",
corr: "Gotham"
},
{pregunta: "¿Cuándo se inauguró el metro de Londres?", 
r1: "1992",
r2: "1863",
r3: "1856",
r4: "1968",
corr: "1863"
},
{pregunta: "¿Cuándo se fundó Netflix?", 
r1: "2001",
r2: "2009 Apple",
r3: "1997",
r4: "2015",
corr: "1997"
},
{pregunta: "¿Cuál de los siguientes imperios no tenía lengua escrita?", 
r1: "Inca",
r2: "Azteca",
r3: "Egipcio",
r4: "Romano",
corr: "Inca"
}];

const SPREGUNTA = document.getElementById('pregunta');
const SRESP1 = document.getElementById('resp1');
const SRESP2 = document.getElementById('resp2');
const SRESP3 = document.getElementById('resp3');
const SRESP4 = document.getElementById('resp4');
const SBOTON = document.getElementsByName('rusia');

var contador = 2;
switch (contador) {
  case 0:
    SPREGUNTA.innerHTML = PREGUNTAS[contador].pregunta;
    SRESP1.innerHTML = PREGUNTAS[contador].r1;
    SRESP2.innerHTML = PREGUNTAS[contador].r2;
    SRESP3.innerHTML = PREGUNTAS[contador].r3;
    SRESP4.innerHTML = PREGUNTAS[contador].r4;
    contador++;
    break;
  case 1:
    SPREGUNTA.innerHTML = PREGUNTAS[contador].pregunta;
    SRESP1.innerHTML = PREGUNTAS[contador].r1;
    SRESP2.innerHTML = PREGUNTAS[contador].r2;
    SRESP3.innerHTML = PREGUNTAS[contador].r3;
    SRESP4.innerHTML = PREGUNTAS[contador].r4;
    contador++;
    break;
  case 2:
    SPREGUNTA.innerHTML = PREGUNTAS[contador].pregunta;
    SRESP1.innerHTML = PREGUNTAS[contador].r1;
    SRESP2.innerHTML = PREGUNTAS[contador].r2;
    SRESP3.innerHTML = PREGUNTAS[contador].r3;
    SRESP4.innerHTML = PREGUNTAS[contador].r4;
    contador++;
    break;
  case 3:
    SPREGUNTA.innerHTML = PREGUNTAS[contador].pregunta;
    SRESP1.innerHTML = PREGUNTAS[contador].r1;
    SRESP2.innerHTML = PREGUNTAS[contador].r2;
    SRESP3.innerHTML = PREGUNTAS[contador].r3;
    SRESP4.innerHTML = PREGUNTAS[contador].r4;
    contador++;
    break;
  case 4:
    SPREGUNTA.innerHTML = PREGUNTAS[contador].pregunta;
    SRESP1.innerHTML = PREGUNTAS[contador].r1;
    SRESP2.innerHTML = PREGUNTAS[contador].r2;
    SRESP3.innerHTML = PREGUNTAS[contador].r3;
    SRESP4.innerHTML = PREGUNTAS[contador].r4;
    contador++;
    break;
  case 5:
    SPREGUNTA.innerHTML = PREGUNTAS[contador].pregunta;
    SRESP1.innerHTML = PREGUNTAS[contador].r1;
    SRESP2.innerHTML = PREGUNTAS[contador].r2;
    SRESP3.innerHTML = PREGUNTAS[contador].r3;
    SRESP4.innerHTML = PREGUNTAS[contador].r4;
    contador++;
    break;

  default:
    alert("unexpected error!!")
    break;
} 
*/

/*
function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}
Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
}
Quiz.prototype.guess = function(answer) {
  if(this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
  }
  this.questionIndex++;
}
Quiz.prototype.isEnded = function() {
  return this.questionIndex === this.questions.length;
}
function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}
Question.prototype.isCorrectAnswer = function(choice) {
  return this.answer === choice;
}
function populate() {
  if(quiz.isEnded()) {
      showScores();
  }
  else {
      // show question
      var element = document.getElementById("question");
      element.innerHTML = quiz.getQuestionIndex().text;
      // show options
      var choices = quiz.getQuestionIndex().choices;
      for(var i = 0; i < choices.length; i++) {
          var element = document.getElementById("choice" + i);
          element.innerHTML = choices[i];
          guess("btn" + i, choices[i]);
      }
      showProgress();
  }
};
function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
      quiz.guess(guess);
      populate();
  }
};
function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Pregunta " + currentQuestionNumber + " de " + quiz.questions.length;
};
function showScores() {
  var gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> Tu resultado: " + quiz.score + " de 6</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
};
// ccrea las preguntas
var questions = [
  new Question("¿Cuántas zonas horarias hay en Rusia?", ["1000", "13","12", "11"], "11"),
  new Question("¿Qué país tiene más islas en el mundo?", ["Suecia", "Nueva Zelanda", "Melilla", "Francia"], "Suecia"),
  new Question("¿Cuál es el nombre en argot de la ciudad de Nueva York, utilizado por los locales?", ["Gotham", "Big Apple","Algorta", "The City"], "Gotham"),
  new Question("¿Cuándo se inauguró el metro de Londres?", ["1992", "1863", "1856", "1968"], "1863"),
  new Question("¿Cuándo se fundó Netflix?", ["2001", "2009", "1997", "2015"], "1997"),
  new Question("¿Cuál de los siguientes imperios no tenía lengua escrita? Inca, azteca, egipcio, romano?", ["Inca", "Azteca", "Egipcio", "Romano"], "Inca")
];
// crea el quiz
var quiz = new Quiz(questions);
// display quiz
populate();

*/









/*const sBtResultados = document.getElementById('finalResult');
sBtResultados.addEventListener("click", getResults);

function getResults() {

    //respuestas correctas
    var amountCorrect = 0;
  
  // LOOP para hacer check de las preguntas
    for(var i = 1; i <= 5; i++) {
      var radiosName = document.getElementsByName('answer'+i);
  
  //LOOP para comprobar las respuestas dentro de cada radio
      for(var j = 0; j < radiosName.length; j++) {
        var radiosValue = radiosName[j];
        if(radiosValue.value == "correct" && radiosValue.checked) {
          amountCorrect++;
          radiosValue.style.color = "green";
        }
      }
    }
  document.getElementById('results').innerHTML =
  "Respuestas correctas " + amountCorrect;
  
  }*/






  ///**** DECLARACIÓN DE VARIABLES (constantes) para luego trabjar con ellas.
/*const sEncabezadoPpal = document.getElementById('encabezadoPpal');
const sPresentacion = document.getElementById('presentacion');
const sTextoPres = document.getElementById('textoPres');
const sNormas = document.getElementById('normas');
const sTextoNorm = document.getElementById('textoNorm');
const sListaNormas = document.getElementById('listaNormas');
const sImgNormas = document.getElementById('imgNormas');
const sBotones = document.getElementById('botones');
const sBtn1 = document.getElementById('btn1');
const sBtn2 = document.getElementById('btn2');
const sFooterPpal = document.getElementById('footerPpal');*/