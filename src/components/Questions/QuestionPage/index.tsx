import React, { useState } from 'react';
import Type0 from '@/components/Questions/QuestionPage/Type0';
import Type1 from '@/components/Questions/QuestionPage/Type1';
import Type2 from '@/components/Questions/QuestionPage/Type2';
import { B2, H3 } from '@/styles/textTags';
import { CustomBtn } from '@/components/Shared/CustomBtn';
import styled from 'styled-components';
import Popup from '@/components/Questions/QuestionPage/Popup';
import {ProgressBur} from "@/components/Shared/ProgressBur";
import SvgSelector from '@/components/Shared/SvgSelector';
import { useRouter } from 'next/router';
// eslint-disable-next-line
const Index = ({ QuizFunc }: any) => {
  const router = useRouter();
  const point_id = router.query.point_id;
  const section_slug = router.query.section_id;
  const course_slug = router.query.courses_id;
  const [isCorrect, setIsCorrect] = useState(null);
  const [isSelected, setSelected] = useState(false)

  const handleContinueClick = () => {
    setSelected(false);
    QuizFunc.giveAnswers(isCorrect); 
    QuizFunc.countProgress(isCorrect);
  };

  const handleCloseClick = () => {

  }

  return (
    <QuestionPageWr>
      <Popup QuizFunc={QuizFunc} isCorrect={isCorrect} />
      <QuestionPageCon>
        <ProgressCon>
            <button onClick={() => QuizFunc.leaveLevel(section_slug, course_slug)}>
              <SvgSelector svg="close-btn" />
            </button>
            <ProgressBur percent={QuizFunc.progress} />
        </ProgressCon>
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
          <Type0 data={QuizFunc.currentQuestion.answer} setIsCorrect={setIsCorrect} setSelected={setSelected}/>
        ) : QuizFunc.currentQuestion.answer.type === 1 ? (
          <Type1 data={QuizFunc.currentQuestion.answer} setIsCorrect={setIsCorrect} setSelected={setSelected}/>
        ) : (
          QuizFunc.currentQuestion.answer.type === 2 && (
            <Type2 data={QuizFunc.currentQuestion.answer} setIsCorrect={setIsCorrect} setSelected={setSelected}/>
          )
        )}
      <ContinueBtnWrapper $disabled={!isSelected}>
          <CustomBtn onClick={handleContinueClick} disabled={!isSelected}>Продолжить</CustomBtn>
      </ContinueBtnWrapper>
    </QuestionPageWr>
  );
};

export default Index;

const QuestionPageWr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 10vw;

   ${B2} {
    min-height: 20vw;
   }
`;

const ProgressCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6vw;

  button {
    width: 9.14vw;
    height: 9.14vw;
  }

   > div {
    position: relative;
    width: 100%;
    left: 0;
    top: 0;
    box-shadow: 0px 0px 16.1px 0px rgba(222, 226, 213, 0.34);

     > div {
      background-color: #16D38E;;
     }
   }
`;

const QuestionPageCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6vw;
`;

const ContinueBtnWrapper = styled.div<{$disabled: boolean}>`
  position: absolute;
  bottom: 7.14vw;
  left: 50%;
  transform: translateX(-50%);
  //transform: translate(-50%, ${({$disabled}) => $disabled ? '400%' : '0'});
  transition: transform 0.5s ease;
`;
