import React, { useEffect, useState } from 'react';
import axios from 'axios';

let questionList = [
  [
    "Which movie would you watch on rewind for the entire day?",
    [],
    'https://swapi.co/api/films/'
  ],[
    "Who would be your co pilot in your adventures?",
    [],
    'https://swapi.co/api/people/'
  ],[
    "Which spaceship would you to battle with?",
    [],
    'https://swapi.co/api/starships/'
  ]
];

const [question, setQuestion] = useState([]);

useEffect(()=>{
  for (var i= 0; i<questionList.length;i++){
    axios.get(questionList[i][2]).then(function(response){
      for (var j = 0; j < response.data.results.length; j++) {
        questionList[i].choices.push(response.data.results[j].title);
      }
    });
  }
  setQuestion(questionList);
}, []);

function Questions(){
  return question;
}

export default Questions;
