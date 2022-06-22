import React,{useEffect, useState} from 'react';
import quizData from './quiz.json';
import Question from './Question';
import QuizResult from './QuizResult';
import './Pets.css'


export default function Quiz(pet){
    console.log(pet.pet.name)
    const[currentQuestion,setCurrentQuestion]=useState(0);
   // let score =0;
   // console.log(pet.pet.species)
   const [score, setScore] = React.useState(5);


   return(
    <div>
   {
    currentQuestion<quizData.data.length &&
    <div>

    <Question
    question={quizData.data[currentQuestion]}
    currentQuestion={currentQuestion}
    setCurrentQuestion={setCurrentQuestion}
    score={score}
    setScore={setScore}

    pet={pet}
    />
   
    </div>
    }
    {
    currentQuestion===quizData.data.length &&
    <QuizResult
    score={score}
    name={pet.pet.name}
    nb_questions={quizData.data.length}
    image={pet.image}
    />
    }
    </div>
   

   );
}
