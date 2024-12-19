import React from 'react';
import {useQuizFunctions} from "@/features/_quiz_";
import EndPage from "@/components/Questions/EndPage";
import QuestionPage from "@/components/Questions/QuestionPage";

const Quiz = ({data}) => {
  const QuizFunc = useQuizFunctions({initialQuestions: data});
  return (
    <>
      {QuizFunc.isFinished ? (
        <EndPage />
      ) : (
        <QuestionPage data={QuizFunc.currentQuestion} QuizFunc={QuizFunc}/>
      )}
    </>
  );
};

export default Quiz;