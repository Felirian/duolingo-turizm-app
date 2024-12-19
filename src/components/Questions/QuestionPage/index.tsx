import React, {useState} from 'react';
import Type0 from "@/components/Questions/QuestionPage/Type0";
import Type1 from "@/components/Questions/QuestionPage/Type1";
import Type2 from "@/components/Questions/QuestionPage/Type2";
import {B2, H3} from "@/styles/textTags";
import {CustomBtn} from "@/components/Shared/CustomBtn";
import styled from "styled-components";
import Popup from "@/components/Questions/QuestionPage/Popup";

const Index = ({data, QuizFunc}) => {

  return (
    <>
      <Popup QuizFunc={QuizFunc}/>
      <H3>{data.text}</H3>
      <B2>{data.hint}</B2>
    <QuestionPageWr>
      <QuestionPageCon>
        {data.answer.type === 0 ? (
          data.answer.true_type0.length === 1 ? (
            <H3>Один вариант ответа</H3>
          ) : (
            <H3>Несколько вариантов ответа</H3>
          )
        ) : data.answer.type === 1 ? (
          <H3>Правда или ложь?</H3>
        ) : data.answer.type === 2 ? (
          <H3>Расположите в правильном порядке</H3>
        ) : null}

      {data.answer.type === 0 ? (
        <Type0 data={data.answer}/>
      ) : data.answer.type === 1 ? (
        <Type1 data={data.answer}/>
      ) : data.answer.type === 2 && (
        <Type2 data={data.answer}/>
      )}
      <CustomBtn onClick={() => QuizFunc.fun.setIsHintOpen(true)}>Продолжить</CustomBtn>
    </>
        <B2>{data.text}</B2>
      </QuestionPageCon>
      <QuestionPageCon>
        {data.answer.type === 0 ? (
          <Type0 data={data.answer} />
        ) : data.answer.type === 1 ? (
          <Type1 data={data.answer} />
        ) : data.answer.type === 2 ? (
          <Type2 data={data.answer} />
        ) : null}

        {data.answer.type !== 1 && <CustomBtn onClick={handleClickHintOpen}>Продолжить</CustomBtn>}
      </QuestionPageCon>
    </QuestionPageWr>
  );
};


export default Index;

const QuestionPageWr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const QuestionPageCon = styled.div`
  display: flex;
  flex-direction: column;
`;
