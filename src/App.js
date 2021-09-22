import { queryByText } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import FinalScore from './FinalScore'
export default function App() {
  const [Apiquestion, setApiquestion] = useState([]);
  const [isloading, setisloading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [mydata, setmydata] = useState('');

  useEffect(async () => {
    await axios.get("http://localhost:3001/questions").then((res) => {
      setApiquestion(res.data);
      setisloading(true);
    });
  }, []);


  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

  const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Apiquestion.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {isloading&&!showScore? (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{Apiquestion.length}
            </div>
            <div className="question-text">
              {Apiquestion[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {Apiquestion[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          
          </div>
  
        </>
      ) : 
      <FinalScore showscore={showScore} data={Apiquestion} finalscore={score}/>
      }
	   
    </div>

  );
}
