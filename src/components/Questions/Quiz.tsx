import React from 'react';
import { useQuizFunctions } from '@/features/_quiz_';
import EndPage from '@/components/Questions/EndPage';
import QuestionPage from '@/components/Questions/QuestionPage';
import StartPage from '@/components/Questions/StartPage';

const Quiz = ({ data }) => {
  const QuizFunc = useQuizFunctions({ initialQuestions: data });
  return (
    <>
      {QuizFunc.isFinished ? (
        <EndPage QuizFunc={QuizFunc} />
      ) : (
        <QuestionPage data={QuizFunc.currentQuestion} QuizFunc={QuizFunc} />
      )}
    </>
  );
};

export default Quiz;
