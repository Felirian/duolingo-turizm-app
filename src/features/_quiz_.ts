import { useState } from 'react';
import { Question } from '@/interfaces';
import useTgApp from "@/features/_tg_methods_";
import {putPoint} from "@/features/_queries_/_rest_api_";
import {useRouter} from "next/router";

export const useQuizFunctions = ({ initialQuestions }: any) => {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHintOpen, setIsHintOpen] = useState(false);
  const [ProgressCounter, setProgressCounter] = useState(1);
  const [progress, setProgress] = useState(0);
  const router = useRouter()
  const addQuestionToEnd = (question: Question) => {
    setQuestions((prev) => [...prev, question]);
  };

  const nextQuestion = () => {
    setIsHintOpen(false);
    setCurrentIndex((prev) => prev + 1);
  };

  const giveAnswers = (isCorrect: any ) => {
    setIsHintOpen(true);
    if (!isCorrect) {
      addQuestionToEnd(questions[currentIndex]);
    }
  };
  const { userId } = useTgApp();

  const gameOver = (section_slug: any, point: any, course_slug: any) => {
    putPoint(section_slug, point, userId)
    router.push(`/courses/${course_slug}/${section_slug}`)

  }

  const countProgress = (isCorrect: any) => {
    if (isCorrect) {
      setProgressCounter((prev) => prev + 1);
      setProgress(Math.round((ProgressCounter / initialQuestions.length)*100))
    } 
  };

  const leaveLevel = (section_slug: any, course_slug: any) => {
    router.push(`/courses/${course_slug}/${section_slug}`)
  }

  const currentQuestion = questions[currentIndex];
  const isFinished = currentIndex >= questions.length;
  // const isFinished = true;

  return {
    currentQuestion,
    isHintOpen,
    giveAnswers,
    isFinished,
    currentIndex,
    nextQuestion,
    gameOver,
    countProgress,
    progress,
    leaveLevel
  };
};
