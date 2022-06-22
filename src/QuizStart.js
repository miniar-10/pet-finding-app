import React, { useState } from 'react';
import './QuizStart.css'
import { BrowserRouter, Routes , Link,Route } from 'react-router-dom';
import Question from './Question';
import Quiz from './Quiz';
import './Pets.css'


const QuizStart = ({item ,img }) => {
  console.log(img)
  const[startQuiz,setStartQuiz] =useState(false);
  return(
    <div className="quiz-card">
      {
      !startQuiz &&
        
        <div className="quiz-card">

          <h1>Considering {item.name} for adoption?</h1>
          <p>You have to fill a quiz in order to know how you and {item.name} match each other </p>
          <button className="card-btn" onClick={()=>{setStartQuiz(true);}} >Start the quiz</button>
      </div>
    
      }
          {
            startQuiz &&
            <Quiz
            pet={item}
            image={img}
            />
          }
    </div>
  );
}

export default QuizStart; 