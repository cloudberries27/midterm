import React from 'react';

import Question from './Question.js';
import Result from './Result.js';

function Quiz(questions){
  this.questions = questions;//with the question object
  this.questionIndex = 0;//and a question index
}
Quiz.prototype.getQuestionIndex = function () {
  return this.questions[this.questionIndex]//returns the current question
}
Quiz.prototype.isEnded = function() {
  return this.questions.length === this.questionIndex;//checks if finished
}
Quiz.prototype.increment = function() {
  this.questionIndex++;//increments current index
}


export default function displayQuestion(){
  var quiz = new Quiz(Question.getQuestions);
  if (quiz.isEnded()){
    return <Result/>;
  } else{
    var formHTML = '<h2>' + quiz.getQuestionIndex().text + '</h2>';
    var choices = quiz.getQuestionIndex().choices;
		for (var i = 0; i < choices.length; i++) {
      formHTML += '<div><input type="radio" name="option" value="' +
            i + '" class="options"><label for="option' +
            i + '">' + choices[i] +
            "</label></div><br/>";
    }
    quiz.increment();
    return formHTML;
  }
}
