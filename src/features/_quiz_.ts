import {useState} from 'react';
import {Question} from "@/interfaces";

export const useQuizFunctions = ({initialQuestions}) => {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHintOpen, setIsHintOpen] = useState(false);


  const addQuestionToEnd = (question: Question) => {
    setQuestions((prev) => [...prev, question]);
  };

  const nextQuestion = () => {
    setIsHintOpen(false)
    setCurrentIndex((prev) => prev + 1);
  };

  const giveAnswers = (isCorrect) => {

    console.log(isCorrect);
    setIsHintOpen(true)
    if (!isCorrect) {
      addQuestionToEnd(questions[currentIndex])
    }
  }

  const currentQuestion = questions[currentIndex];
  const isFinished = currentIndex >= questions.length;

  return {
    currentQuestion,
    isHintOpen,
    giveAnswers,
    isFinished,
    currentIndex,
    nextQuestion,
  };
};
