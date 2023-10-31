import { useState } from "react";
import QUESTIONS from "../questions.js";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const shuffledAnswers = QUESTIONS[activeQuestionIndex].answers;
  shuffledAnswers.sort(()=>  Math.random() - 0.5);

    //Add quiz is complete logic

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prev) => {
      return [...prev, selectedAnswer];
    });
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((ans) => {
            return (
              <li key={ans} className="answer">
                <button onClick={() => handleSelectAnswer(ans)}>
                  {ans}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
