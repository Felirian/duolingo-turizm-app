import { useState } from 'react';

export const useQuizFunctions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);


  const nextQuestion = (isCorrect) => {
    setAnswered(false);
    setSelectedAnswer(null);
    setCurrentQuestion(currentQuestion + 1);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const startOver = () => {
    if (score >= 4) {
      //localStorage.setItem(currentRoom, true);
    }
    //navigate('/museum');
    setCurrentQuestion(-1);
    setScore(0);
    console.log('fff');
  };

  return {
    variables: {
      currentQuestion,
      score,
      answered,
      selectedAnswer,
    },
    fun: {
      nextQuestion,
      startOver,
      setAnswered,
      setSelectedAnswer,
    },
  };
};
