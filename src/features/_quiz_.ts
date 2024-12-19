import { useState } from 'react';

export const useQuizFunctions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isHintOpen, setIsHintOpen] = useState(false)

  const nextQuestion = () => {
    setIsHintOpen(false)
    setSelectedAnswer(null);
    setCurrentQuestion(currentQuestion + 1);
    // if (isCorrect) {
    //   setScore(score + 1);
    // }
  };

  const giveAnswers = (isCorrect) => {
    if (selectedAnswer) {
      setIsHintOpen(true)
    }
  }

  const endGame = () => {
    if (score >= 4) {
      //localStorage.setItem(currentRoom, true);
    }
    setCurrentQuestion(0);
    setScore(0);
  };

  return {
    variables: {
      currentQuestion,
      score,
      selectedAnswer,
      isHintOpen
    },
    fun: {
      nextQuestion,
      endGame,
      setSelectedAnswer,
      setIsHintOpen
    },
  };
};
