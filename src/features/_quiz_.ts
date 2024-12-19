import { useState } from 'react';
import { Question } from '@/interfaces';

export const useQuizFunctions = ({ initialQuestions }: any) => {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHintOpen, setIsHintOpen] = useState(false);

  const addQuestionToEnd = (question: Question) => {
    setQuestions((prev) => [...prev, question]);
  };

  const nextQuestion = () => {
    setIsHintOpen(false);
    setCurrentIndex((prev) => prev + 1);
  };

  const giveAnswers = (isCorrect: any) => {
    console.log(isCorrect);
    setIsHintOpen(true);
    if (!isCorrect) {
      addQuestionToEnd(questions[currentIndex]);
    }
  };

  const currentQuestion = questions[currentIndex];
  console.log(currentQuestion);
  const isFinished = currentIndex >= questions.length;
  // const isFinished = true;

  return {
    currentQuestion,
    isHintOpen,
    giveAnswers,
    isFinished,
    currentIndex,
    nextQuestion,
  };
};
