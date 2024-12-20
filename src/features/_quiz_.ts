import { useState } from 'react';
import { Question } from '@/interfaces';
import useTgApp from "@/features/_tg_methods_";
import {putPoint} from "@/features/_queries_/_rest_api_";
import {useRouter} from "next/router";

export const useQuizFunctions = ({ initialQuestions }: any) => {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHintOpen, setIsHintOpen] = useState(false);
  const router = useRouter()
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
  const { userId } = useTgApp();

  const gameOver = (section_slug: any, point: any, course_slug: any) => {
    console.log(section_slug, point, userId,course_slug);
    putPoint(section_slug, point, userId)
    router.replace(`/courses/${course_slug}/${section_slug}`,  undefined, {scroll: false})

  }

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
    gameOver
  };
};
