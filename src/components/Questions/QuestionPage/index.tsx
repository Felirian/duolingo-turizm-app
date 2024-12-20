import React, { useState } from 'react';
import Type0 from '@/components/Questions/QuestionPage/Type0';
import Type1 from '@/components/Questions/QuestionPage/Type1';
import Type2 from '@/components/Questions/QuestionPage/Type2';
import { B2, H3 } from '@/styles/textTags';
import { CustomBtn } from '@/components/Shared/CustomBtn';
import styled from 'styled-components';
import Popup from '@/components/Questions/QuestionPage/Popup';
// eslint-disable-next-line
const Index = ({ QuizFunc }: any) => {
  const [isCorrect, setIsCorrect] = useState(null);

  return (
    <QuestionPageWr>
      <Popup QuizFunc={QuizFunc} isCorrect={isCorrect} />
      <QuestionPageCon>
        {QuizFunc.currentQuestion.answer.type === 0 ? (
          QuizFunc.currentQuestion.answer.true_type0.length === 1 ? (
            <H3>Один вариант ответа</H3>
          ) : (
            <H3>Несколько вариантов ответа</H3>
          )
        ) : QuizFunc.currentQuestion.answer.type === 1 ? (
          <H3>Правда или ложь?</H3>
        ) : QuizFunc.currentQuestion.answer.type === 2 ? (
          <H3>Расположите в правильном порядке</H3>
        ) : null}
        <B2>{QuizFunc.currentQuestion.text}</B2>
      </QuestionPageCon>

        {QuizFunc.currentQuestion.answer.type === 0 ? (
          <Type0 data={QuizFunc.currentQuestion.answer} setIsCorrect={setIsCorrect} />
        ) : QuizFunc.currentQuestion.answer.type === 1 ? (
          <Type1 data={QuizFunc.currentQuestion.answer} setIsCorrect={setIsCorrect} />
        ) : (
          QuizFunc.currentQuestion.answer.type === 2 && (
            <Type2 data={QuizFunc.currentQuestion.answer} setIsCorrect={setIsCorrect}/>
          )
        )}

      <CustomBtn onClick={() => QuizFunc.giveAnswers(isCorrect)}>Продолжить</CustomBtn>
    </QuestionPageWr>
  );
};

export default Index;

const QuestionPageWr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 6vw;
`;

const QuestionPageCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vw;
`;
