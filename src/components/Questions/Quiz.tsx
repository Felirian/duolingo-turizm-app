import React from 'react';
import {useQuizFunctions} from "@/features/_quiz_";
import EndPage from "@/components/Questions/EndPage";
import QuestionPage from "@/components/Questions/QuestionPage";
import StartPage from "@/components/Questions/StartPage";

const Quiz = ({data}) => {
  const QuizFunc = useQuizFunctions();

  return (
    <>
      {QuizFunc.variables.currentQuestion === -1 ? (
        <StartPage/>
      ) : QuizFunc.variables.currentQuestion >= data.length ? (
        <EndPage/>
      ) : (
        <QuestionPage data={data[QuizFunc.variables.currentQuestion]} QuizFunc={QuizFunc}/>
      )
      }
    </>
  );
};

export default Quiz;