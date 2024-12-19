import React from 'react';
import { useQuizFunctions } from '@/features/_quiz_';
import EndPage from '@/components/Questions/EndPage';
import QuestionPage from '@/components/Questions/QuestionPage';
// eslint-disable-next-line
const Quiz = ({ data }: any) => {
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
